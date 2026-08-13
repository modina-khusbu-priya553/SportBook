'use client'
import React, { useState } from 'react';
import {Button, Description, FieldError, Form, Input, InputGroup, Label, Separator, TextField} from "@heroui/react";
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import {Check, Eye, EyeSlash} from "@gravity-ui/icons";
import { authClient } from '@/app/lib/auth-client';
import { redirect } from 'next/navigation';

const Login = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const handleLogin = async(e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log(user)
        const { data, error } = await authClient.signIn.email({
            email: user.email, // required
            password: user.password, // required
            rememberMe: true,
        })
        console.log(data, error)

        if(data){
            redirect('/');
        }
        if(error){
            alert(error.message)
        }
    };

    const handleGoogleLogin = async() =>{
            const data = await authClient.signIn.social({
            provider: "google",
            
        });
    
        };
    return (
        <div  className="bg-[#F7F7F2]">
            <div className='flex flex-col items-center justify-center gap-6 container mx-auto py-10 md:py-15 px-4'>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-4xl text-gray-800'>Login to SportNest</h1>
                </div>

                <div>
                    <Form onSubmit={handleLogin} className="flex w-96 flex-col gap-4 border shadow-sm p-6 bg-white">
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
                                     minLength={6}
                                     name="password"
                                     validate={(value) => {
                                       if (value.length < 6) {
                                         return "Password must be at least 6 characters";
                                       }
                                       if (!/[A-Z]/.test(value)) {
                                         return "Password must contain at least one uppercase letter";
                                       }
                                       if (!/[a-z]/.test(value)) {
                                         return "Password must contain at least lowercase letter";
                                       }
                                       return null;
                                     }}
                                   >
                                     <Label>Password</Label>
                                     <InputGroup>
                                       <InputGroup.Input
                                         type={isPasswordVisible ? "text" : "password"}
                                         placeholder="Enter your password"
                                       />
                                       <InputGroup.Suffix className="pe-0">
                                         <Button
                                           isIconOnly
                                           aria-label={
                                             isPasswordVisible ? "Hide password" : "Show password"
                                           }
                                           size="sm"
                                           variant="ghost"
                                           type="button"
                                           onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                                         >
                                           {isPasswordVisible ? (
                                             <Eye className="size-4" />
                                           ) : (
                                             <EyeSlash className="size-4" />
                                           )}
                                         </Button>
                                       </InputGroup.Suffix>
                                     </InputGroup>
                                     <Description>
                                       Must be at least 6 characters with 1 uppercase and 1 lowercase
                                       letter
                                     </Description>
                                     <FieldError />
                                   </TextField>

                        <div className="flex gap-2">
                            <Button type="submit" className="w-full bg-blue-950 rounded-md">
                            <Check />
                            Sign in
                            </Button>
                        </div>

                        <div className='grid grid-cols-3 gap-0.5 justify-center items-center '>
                            <Separator className="my-4" />
                            <h2 className='text-sm'>Or Continue with</h2>
                            <Separator className="my-4" />
                        </div>

                        <div className="flex gap-2">
                            <Button onClick={handleGoogleLogin} type="button" className="w-full rounded-md" variant="outline">
                            <FcGoogle />
                            Sign up with Google
                            </Button>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <h2>Do not have an account?</h2>
                            <Link className='text-[#22C55E]' href={"/signUp"}>Sign Up</Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;