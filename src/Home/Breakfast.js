import React, { useEffect, useState } from 'react';
import Meal from './Meal';

const Breakfast = ({ meal }) => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('Breakfast.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])
    return (
        <div>
            <h2>breakefast: {meals.length}</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    meals.map(meal => <Meal
                        meal={meal}
                        key={meal._id}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Breakfast;