import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Swal from 'sweetalert2';


const RegisterForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const registerSchema = z.object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
    username: z.string().min(3, { message: 'Username must be at least 3 characters' }),
    email: z.string().email({ message: 'Enter a valid email address' }),
    password: z.string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must include a special character' }),
    confirmPassword: z.string(),
    address: z.string().min(5, { message: 'Address is required' }),
    phone: z.string()
      .min(10, { message: 'Enter a valid phone number' })
      .regex(/^\d+$/, { message: 'Phone number should contain only digits' }),
    dob: z.string().min(1, { message: 'Date of birth is required' }),
    gender: z.string().min(1, { message: 'Gender is required' }),
    country: z.string().min(1, { message: 'Country is required' }),
    terms: z.boolean().refine(value => value === true, { message: 'You must accept the terms' }),
  }).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.username,
      email: data.email,
      password: data.password,
      address: data.address,
      phoneNumber: data.phone,
      dateOfBirth: data.dob,
      gender: data.gender,
      country: data.country,
    };
    console.log(userData)

    try {
      const response = await axios.post('https://blackstonecapitalbackend.onrender.com/api/register', userData);
      setLoading(false);
      console.log(response);
      
    //   if (response.data.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Registration successful!',
          icon: 'success',
          confirmButtonText: 'Login',
        }).then(() => {
          navigate('/');
        });
    //   }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || 'Registration failed',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  };

  return (
    <div className='Registerform'>
      <aside>
        <img src="https://blackstonecapital.vercel.app/used/logo.png" alt="Logo" />
      </aside>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formHead">
          <h3>Create Account</h3>
          <div className="redirection">
            <span>Already a user? </span>
            <h4 onClick={() => navigate('/')}>Login</h4>
          </div>
        </div>

        <div className="twoSec">
          <section>
            <label>First Name</label>
            <input type="text" {...register('firstName')} />
            {errors.firstName && <span style={{color:'red'}}>{errors.firstName.message}</span>}
          </section>

          <section>
            <label>Last Name</label>
            <input type="text" {...register('lastName')} />
            {errors.lastName && <span style={{color:'red'}}>{errors.lastName.message}</span>}
          </section>
        </div>

        <section>
          <label>Username</label>
          <input type="text" {...register('username')} />
          {errors.username && <span style={{color:'red'}}>{errors.username.message}</span>}
        </section>

        <section>
          <label>Email Address</label>
          <input type="email" {...register('email')} />
          {errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}
        </section>

        <div className="twoSec">
          <section>
            <label>Password</label>
            <input type="password" {...register('password')} />
            {errors.password && <span style={{color:'red'}}>{errors.password.message}</span>}
          </section>

          <section>
            <label>Confirm Password</label>
            <input type="password" {...register('confirmPassword')} />
            {errors.confirmPassword && <span style={{color:'red'}}>{errors.confirmPassword.message}</span>}
          </section>
        </div>

        <section>
          <label>Residential Address</label>
          <input type="text" {...register('address')} />
          {errors.address && <span style={{color:'red'}}>{errors.address.message}</span>}
        </section>

        <section>
          <label>Phone Number</label>
          <input type="text" {...register('phone')} />
          {errors.phone && <span style={{color:'red'}}>{errors.phone.message}</span>}
        </section>

        <section>
          <label>Date of Birth</label>
          <input type="date" {...register('dob')} />
          {errors.dob && <span style={{color:'red'}}>{errors.dob.message}</span>}
        </section>

        <section>
          <label>Gender</label>
          <input type="text" {...register('gender')} />
          {errors.gender && <span style={{color:'red'}}>{errors.gender.message}</span>}
        </section>

        <section>
          <label>Country</label>
          <input type="text" {...register('country')} />
          {errors.country && <span style={{color:'red'}}>{errors.country.message}</span>}
        </section>

        <div className="term">
          <input type="checkbox" {...register('terms')} /> I accept the <span> terms</span> and <span> privacy policy </span>
          {errors.terms && <span style={{color:'red'}}>{errors.terms.message}</span>}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
