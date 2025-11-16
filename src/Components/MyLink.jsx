import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({to,className,children}) => {
    return (
       <NavLink to={to} className={({isActive})=> isActive ? "text-pink-500 underline":`${className}`}>{children}</NavLink>
    );
};

export default MyLink;