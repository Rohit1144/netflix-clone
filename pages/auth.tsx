import Input from "@/components/Input";
import { useCallback, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";



const Auth = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const[password, setPassword] = useState('');
    const [variant, setVariant] = useState('login');
    
    const router = useRouter();

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'Register' : 'login')
    }, [])

    const login = useCallback( async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/'
            });

            router.push('/profiles')

        } catch (error) {
            console.log(error)
        }
    }, [email, password, router]);


    const register = useCallback( async () => {
        try {
            await axios.post('/api/register', [email, name, password])

            login()
        } catch (error) {
            console.log(error)
        }
    }, [email, name, password, login])

    
    return (
    <div className = "relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className = "bg-black h-full w-full lg:bg-opacity-50">
            <nav className = "px-12 py-5">
                <img src="/images/logo.png" className = "h-12" alt="avatar"></img>
            </nav>
            <div className = "flex justify-center">
                <div className = "bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                    <h2 className = "text-white text-4xl mb-8 font-semibold">
                        {variant === 'login' ? 'Sign in' : 'Register'}
                    </h2>
                    <div className = "flex flex-col gap-4">
                        {variant === 'Register' && (
                            <Input
                            label = "Username"
                            id="name"
                            value={name}
                            onChange= {(ev: any) => {setName(ev.target.value)}}
                        />
                        )}
                        
                        <Input
                            label = "Email"
                            id="email"
                            type="email"
                            value={email}
                            onChange= {(ev: any) => {setEmail(ev.target.value)}}
                        />
                        <Input
                            label = "Password"
                            id="password"
                            type="password"
                            value={password}
                            onChange= {(ev: any) => {setPassword(ev.target.value)}}
                        />
                    </div>
                    <button onClick={variant === 'login'? login : register} className = "bg-red-600 rounded-md text-white w-full py-3 mt-10 hover:bg-red-700 transition">
                        {variant === 'login' ? 'Login' : 'Sign up'}
                    </button>
                    <div className="flex flex-row items-center mt-8 gap-4 justify-center">
                        <div onClick={() => signIn('google', {callbackUrl: '/profiles'})} className="w-10 h-10 bg-white rounded-full justify-center flex cursor-pointer hover:opacity-80 transition items-center">
                            <FcGoogle size={30}/>
                        </div>
                        <div onClick={() => signIn('github', {callbackUrl: '/profiles'})} className="w-10 h-10 bg-white rounded-full justify-center flex cursor-pointer hover:opacity-80 transition items-center">
                            <FaGithub size={30}/>
                        </div>
                    </div>
                    <p className = "text-neutral-500 mt-12">
                        {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                        <span onClick = {toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                            {variant === 'login' ? 'Create an account' : 'Login'}
                        </span>
                    </p>
                </div>

            </div>
        </div>

    </div>
    );
}

export default Auth;