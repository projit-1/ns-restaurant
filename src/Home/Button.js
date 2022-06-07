import React from 'react';

const Button = ({ children }) => {
    return (
        <div>
            <button className="btn btn-wide  text-white">{children}</button>
        </div>
    );
};

export default Button;