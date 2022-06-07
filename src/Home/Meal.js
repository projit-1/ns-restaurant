import React from 'react';

const Meal = ({ meal }) => {

    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={meal.image} alt="" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{meal.name}</h2>
                    <p>{meal.description}</p>
                    <p> Price : $ {meal.price}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;