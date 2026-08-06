'use client'
import React from 'react';
import {Check} from "@gravity-ui/icons";
import {Button, FieldError, Form, Input, Label, Separator, TextField} from "@heroui/react";
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { authClient } from '@/app/lib/auth-client';

const SignUp = () => {

    const handleSignUp = async(e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            name: user.name, // required
            email: user.email, // required
            password: user.email, // required
            image: user.image,
        });

        console.log(data, error)
    }

    return (
        <div className="bg-[#F7F7F2]">
            <div className='flex flex-col items-center justify-center gap-6 py-10 md:py-15 container mx-auto px-4'>
                        <div className='space-y-4 text-center'>
                            <h1 className='text-2xl md:text-4xl font-bold text-gray-800'>Join SportNest</h1>
                            <p className='text-gray-500 text-sm'>Sign up today and start exploring premium sports facilities near you.</p>
                        </div>
        
                        <div>
                            <Form onSubmit={handleSignUp} className="flex flex-col gap-4 border shadow-sm hover:shadow-2xl p-6 bg-white">
                                <TextField isRequired name='name' type='text'>
                                    <Label>Full Name</Label>
                                    <Input aria-label="Name" placeholder="Enter your name" />
                                </TextField>
                                <TextField name='image' type='text'>
                                    <Label>Image Url</Label>
                                    <Input aria-label="Name" placeholder="Image Url" />
                                </TextField>
                                <TextField
                                    isRequired
                                    name="email"
                                    type="email"
                                    validate={(value) => {
                                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                        return "Please enter a valid email address";
                                    }
                                    return null;
                                    }}
                                >
                                    <Label>Email</Label>
                                    <Input placeholder="john@example.com" />
                                    <FieldError />
                                </TextField>
                                <TextField
                                    isRequired
                                    minLength={4}
                                    name="password"
                                    type="password"
                                    validate={(value) => {
                                    if (value.length < 4) {
                                        return "Password must be at least 4 characters";
                                    }
                                    return null;
                                    }}
                                >
                                    <Label>Password</Label>
                                    <Input placeholder="Enter your password" />
                                    <FieldError />
                                </TextField>
                                <TextField
                                    isRequired
                                    minLength={4}
                                    name="password"
                                    type="password"
                                    validate={(value) => {
                                    if (value.length < 4) {
                                        return "Password must be at least 4 characters";
                                    }
                                    return null;
                                    }}
                                >
                                    <Label>Confirm Password</Label>
                                    <Input placeholder="Confirm your password" />
                                    <FieldError />
                                </TextField>
                                <div className="flex gap-2">
                                    <Button type="submit" className="w-full bg-[#22C55E] rounded-md">
                                    <Check />
                                    Create Account
                                    </Button>
                                </div>
        
                                <div className='grid grid-cols-3 gap-4 justify-center items-center '>
                                    <Separator className="my-4" />
                                    <h2>Or Sign up with</h2>
                                    <Separator className="my-4" />
                                </div>
        
                                <div className="flex gap-2">
                                    <Button type="submit" className="w-full rounded-md" variant="outline">
                                    <FcGoogle />
                                    Sign up with Google
                                    </Button>
                                </div>
                                <div className='flex items-center justify-center gap-2'>
                                    <h2>Already have an account?</h2>
                                    <Link href={"/login"} className='text-blue-950'>Sign In</Link>
                                </div>
                            </Form>
                        </div>
            </div>
        </div>
    );
};

export default SignUp;