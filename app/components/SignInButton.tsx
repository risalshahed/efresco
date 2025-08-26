'use client';

import { login } from "../_lib/actions/auth";

export default function SignInButton() {
  return (
    <button
      onClick={login}
      className='bg-green-700 hover:bg-green-600 p-2 rounded block lg:inline'
    >
      Github Login
    </button>
  )
}