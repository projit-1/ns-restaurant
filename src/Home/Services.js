import React from 'react';
import Services1 from '../Images/adult-blur-blurred-background-687824.png'
import Services2 from '../Images/chef-cook-food-33614 - Copy.png'
import Services3 from '../Images/architecture-building-city-2047397 - Copy.png'

const Services = () => {
    return (
        <div className='mx-10'>
            <div> <h2>Why do you choice us</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptates, quisquam nesciunt corporis deserunt nam doloremque voluptatibus beatae, et quae architecto impedit ea! Pariatur necessitatibus amet magnam ab doloribus ratione?</p></div>

            <div className='grid grid-cols-3 gap-4'>
                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src={Services1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-sm">See more</button>
                        </div>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src={Services2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-sm">See more</button>
                        </div>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src={Services3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-sm">See more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;