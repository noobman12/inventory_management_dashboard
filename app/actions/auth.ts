'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  // Get form data
  const username = formData.get('username');
  const password = formData.get('password');

  // For demo purposes, we accept any login if fields are not empty
  if (username && password) {
    
    // Set the cookie
    const cookieStore = await cookies();
    cookieStore.set('auth_token', 'demo-token-123', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });

    // Redirect to dashboard
    redirect('/');
  } else {
    // Handle error
    console.error('Login failed');
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('auth_token');
  redirect('/login');
}
