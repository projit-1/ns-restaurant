import React, { useEffect, useState } from 'react';
import Dmeal from './Dmeal';

const Dinner = ({ dmeal }) => {
    const [dmeals, setDmeals] = useState([])
    useEffect(() => {
        fetch('Dinner.json')
            .then(res => res.json())
            .then(data => setDmeals(data))
    }, [])
    return (
        <div>
            <h2>Deanner: {dmeals.length}</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                {
                    dmeals.map(dmeal => <Dmeal
                        key={dmeal._id}
                        dmeal={dmeal}
                    ></Dmeal>)
                }
            </div>
        </div>
    );
};

export default Dinner;