import React from 'react';
import { User, Lock, Check } from 'lucide-react';
import Link from 'next/link';
import { login } from '@/app/actions/auth';

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#292929] to-[#dcdcdc] flex flex-col items-center justify-center p-4">
      {/* Background Rings - approximated positions based on design */}
      {/* Top Left Group */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full border-[40px] border-white/10" />
      <div className="absolute top-20 -left-40 w-[300px] h-[300px] rounded-full border-[30px] border-white/10" />
      
      {/* Bottom Left Group */}
      <div className="absolute bottom-0 -left-20 w-[350px] h-[350px] rounded-full border-[35px] border-white/10" />
      <div className="absolute -bottom-20 left-20 w-[200px] h-[200px] rounded-full border-[20px] border-white/10" />

      {/* Right Group */}
      <div className="absolute top-1/4 -right-20 w-[300px] h-[300px] rounded-full border-[30px] border-white/10" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full border-[40px] border-white/10" />
      <div className="absolute -bottom-10 -right-10 w-[250px] h-[250px] rounded-full border-[25px] border-white/10" />


      {/* Main Content */}
      <div className="z-10 flex flex-col items-center w-full max-w-[500px]">
        {/* Logo Area */}
        <div className="mb-8 flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                <span className="text-black font-bold text-2xl">M</span>
            </div>
            <h1 className="text-white text-2xl font-bold tracking-widest">MARLINE</h1>
        </div>

        {/* Login Card */}
        <div className="bg-white w-full rounded-lg shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">USER LOGIN</h2>
            
            <form action={login} className="space-y-6">
                {/* Username */}
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-black" />
                    </div>
                    <input
                        name="username"
                        type="text"
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                        placeholder="Username"
                    />
                </div>

                {/* Password */}
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-black" />
                    </div>
                    <input
                        name="password"
                        type="password"
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                        placeholder="Password"
                    />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex items-center justify-center h-5 w-5 border border-gray-400 rounded bg-gray-800 text-white">
                             <Check size={14} strokeWidth={4} />
                        </div>
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-gray-900 hover:underline">
                            Forgot password?
                        </a>
                    </div>
                </div>

                {/* Login Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-[#444242] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-md"
                    >
                        Login
                    </button>
                </div>
            </form>

            {/* OR Separator */}
            <div className="mt-6 relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-900 font-medium">OR</span>
                </div>
            </div>

            {/* Google Login */}
            <div className="mt-6">
                <button
                    type="button"
                    className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                        />
                    </svg>
                    Continue with google
                </button>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-sm">
                <span className="text-gray-900">Don't have an account? </span>
                <Link href="#" className="font-medium text-blue-700 hover:text-blue-600">
                    Sign up here.
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
