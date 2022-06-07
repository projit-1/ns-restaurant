import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="navbar bg-base-100">


            <div className="grid justify-center items-center  mx-auto">
                <div className="flex mx-auto">
                    <NavLink to='/breakfast' className='mx-5'> Breakfast</NavLink>
                    <NavLink to='/lunch' className='mx-5'> Lunch</NavLink>
                    <NavLink to='/dinner' className='mx-5'> Dinner</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Menu;