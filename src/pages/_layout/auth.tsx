import React from 'react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div>
      <h1>Autentication</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}