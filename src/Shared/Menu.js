import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div class="navbar bg-base-100">


            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li><a>Breakefast</a></li>
                    <li><a>Lunch</a></li>
                    <li><a>Dinner</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;