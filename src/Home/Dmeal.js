import React from 'react';

const Dmeal = ({ dmeal }) => {
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={dmeal.image} alt="" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{dmeal.name}</h2>
                    <p>{dmeal.description}</p>
                    <p> Price : $ {dmeal.price}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dmeal;