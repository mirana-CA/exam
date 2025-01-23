import React from 'react'
import "./index.scss"
import { NavLink, Outlet } from 'react-router-dom'


const AdminNav = () => {
  return (
    <>
      <nav className='admin_nav'>
        <ul>
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
          <li>
            <NavLink to="addnew">Add New</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default AdminNav
