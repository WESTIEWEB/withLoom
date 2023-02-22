import React from 'react'
import { useLocation, Navigate } from "react-router-dom";


interface ProtectRouteProps {
    children: any
}

export const ProtectUserRoute = ({children}: ProtectRouteProps) => {
    
    const location = useLocation()

    // Gets the user info from local storage
    const user = localStorage.getItem('email')
    const token = localStorage.getItem('token')

    // If the user is not logged in, redirect to the login page
    if(!user || !token) {
        return <Navigate to="/access" state={{from: location.pathname}} />
    }

    return children
}
