import React from 'react'
import { useLocation, Navigate } from "react-router-dom";


interface ProtectRouteProps {
    children: React.ReactNode
}

export const ProtectUserRoute = ({children}: ProtectRouteProps) => {
    
    const location = useLocation()
    const user = localStorage.getItem('email')
    const token = localStorage.getItem('token')

   
}
