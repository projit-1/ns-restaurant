import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="navbar bg-base-100">

            <div className="grid justify-center items-center  mx-auto">
                <div className="flex mx-auto">
                    <NavLink to='/breakfast' className='mx-3 bg-slate-300 px-2 rounded '> Breakfast</NavLink>
                    <NavLink to='/lunch' className='mx-3 bg-slate-300 px-2 rounded '> Lunch</NavLink>
                    <NavLink to='/dinner' className='mx-3 bg-slate-300 px-2 rounded '> Dinner</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Menu;