'use client';

import React, { useState } from 'react';
import FormField from '../FormField';
import Button from '@/components/Button';
import GoogleAuthButton from '../GoogleAuthButton';
import { supabase } from '@/utils/supabase/client';
import { AuthError } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordAgain: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<AuthError | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
                emailRedirectTo: 'http://localhost:3000/login'
            }
        });
        setLoading(false);

        if (error) {
            setError(error)
        } else {
            router.push('/confirm');
        }
    };

    return (
        <form className="flex flex-col gap-8" onSubmit={handleSignUp}>
            {error && (
                <p className='text-red-400'>{error.message}</p>
            )}
            <div className="inputs flex flex-col gap-6">
                <FormField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="Password Again"
                    name="passwordAgain"
                    type="password"
                    value={formData.passwordAgain}
                    onChange={handleChange}
                    required
                />
            </div>

            <Button type='submit' className="w-full" disabled={loading}>Sign Up</Button>

            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>

            <GoogleAuthButton />
        </form>
    );
}
