import React from 'react';

const Lmeal = ({ lmeal }) => {
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={lmeal.image} alt="" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{lmeal.name}</h2>
                    <p>{lmeal.description}</p>
                    <p> Price : $ {lmeal.price}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lmeal;