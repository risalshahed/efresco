'use client'

import { logout } from '../_lib/actions/auth'

export default function SignOutButton() {
  return (
    <button
      onClick={logout}
      className="bg-cyan-900 text-slate-100 px-5 py-2"
    >
      Sign Out
    </button>
  )
}