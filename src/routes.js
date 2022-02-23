import React from 'react'
import Users from './components/usersTable'
import {EditUser} from './components/editUser'

import {  Route, Routes } from 'react-router-dom'

export default function routes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Users />} />
                <Route  path="users/:id" element={<EditUser/>} />
            </Routes>

        </>
    )
}