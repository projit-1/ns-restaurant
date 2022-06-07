import React, { useEffect, useState } from 'react';
import Lmeal from './Lmeal';

const Lunch = ({ lmeal }) => {
    const [lmeals, setLmeals] = useState([])
    useEffect(() => {
        fetch('Lunch.json')
            .then(res => res.json())
            .then(data => setLmeals(data))
    }, [])
    return (
        <div>
            <h2>Lunch: {lmeals.length}</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    lmeals.map(lmeal => <Lmeal
                        key={lmeal._id}
                        lmeal={lmeal}
                    ></Lmeal>)
                }
            </div>
        </div>
    );
};

export default Lunch;