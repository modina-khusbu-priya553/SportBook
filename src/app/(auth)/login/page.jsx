'use client'
import React from 'react';
import {Button, FieldError, Form, Input, Label, Separator, TextField} from "@heroui/react";
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import {Check} from "@gravity-ui/icons";

const Login = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center gap-6'>
                <div className='text-center'>
                    <h1 className='text-5xl'>Login to SportNest</h1>
                </div>

                <div>
                    <Form className="flex w-96 flex-col gap-4 border shadow-sm p-6">
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

                        <div className="flex gap-2">
                            <Button type="submit" className="w-full rounded-md">
                            <Check />
                            Sign in
                            </Button>
                        </div>

                        <div className='grid grid-cols-3 gap-1 justify-center items-center '>
                            <Separator className="my-4" />
                            <h2>Or Continue with</h2>
                            <Separator className="my-4" />
                        </div>

                        <div className="flex gap-2">
                            <Button type="submit" className="w-full rounded-md" variant="outline">
                            <FcGoogle />
                            Sign up with Google
                            </Button>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <h2>Do not have an account?</h2>
                            <Link href={"/signUp"}>Sign Up</Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;