import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../Global/Slice';

const Loginform = () => {
  const Nav = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const LoginSchema = z.object({
    accountNumber: z.string().min(10, { message: 'Enter a valid account number' }),
    password: z.string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must include a special character' }),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await axios.post('https://blackstonecapital-bank-end.vercel.app/api/login', data);
      console.log(response)
      dispatch(loginSuccess(response.data));

      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Redirecting to Dashboard...',
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => {
        Nav('/dashboard');
      }, 2000);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.response?.data?.message || 'Invalid credentials!',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='formCOn'>
      <aside><img src="https://blackstonecapital-nu.vercel.app/used/logo.png" alt="Logo" /></aside>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formHead">
          <h3>Login</h3>
          <div className="redirection">
            <span>New User?</span>
            <h4 onClick={() => Nav('/Register')}>Create account</h4>
          </div>
        </div>

        <section>
          <label>Account Number</label>
          <input type="text" {...register('accountNumber')} />
          {errors.accountNumber && <span style={{ color: 'red' }}>{errors.accountNumber.message}</span>}
        </section>

        <section>
          <label>Password</label>
          <input type="password" {...register('password')} />
          {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
        </section>

        <span style={{ color: '#2e81ef', cursor: 'pointer' }}>Forgot password?</span>

        <button className='formBtn' type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Loginform;
