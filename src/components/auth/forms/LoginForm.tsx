'use client';

import React, { useState } from 'react'
import FormField from '../FormField';
import Button from '../../Button';
import GoogleAuthButton from '../GoogleAuthButton';
import { createClient } from '@/utils/supabase/client';
import { AuthError } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

const supabase = createClient();

export default function LoginForm() {

  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error, data } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password
    });

    if (error) setError(error);
    setLoading(false);

    if (data.user?.role === "authenticated") {
      router.push('/dashboard');
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className='flex flex-col gap-8' onSubmit={handleLogin}>
      {error && (
        <p className='text-red-400'>{error.message}</p>
      )}
      <div className="inputs flex flex-col gap-6">
        <FormField label='Email Address' type='email' name='email' onChange={handleChange} value={formData.email} required />
        <FormField label='Password' name='password' value={formData.password} type='password' onChange={handleChange} required />
      </div>

      <Button type='submit' className='w-full' disabled={loading}>Sign In</Button>

      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-white text-gray-500">
          Or continue with
        </span>
      </div>

      <GoogleAuthButton />
    </form>
  )
}
