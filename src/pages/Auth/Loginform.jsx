import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Swal from 'sweetalert2';

const Loginform = () => {
  const Nav = useNavigate();
  const [loading, setLoading] = useState(false);

  const LoginSchema = z.object({
    email: z.string().email({ message: 'Enter a valid email address' }),
   password: z.string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must include a special character' }),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);

    const userData ={
      password: data.password,
      email: data.email
    }

    try {
      const response = await axios.post('https://blackstonecapitalbackend.onrender.com/api/login', userData);

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
          <label>Email</label>
          <input type="text" {...register('email')} />
          {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
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
