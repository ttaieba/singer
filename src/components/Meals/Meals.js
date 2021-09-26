import React, { useEffect } from 'react';
import { useState } from 'react';
import Carts from '../Carts/Carts';
import Meal from '../Meal/Meal';
import './Meals.css'


const Meals = () => {

    const [singers, setSinger] = useState([])
    const [cart, setCart] = useState([]);

    // json data access 
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setSinger(data))
    }, [])

    // handdler for button 
    const handleAddToCart = (sing) => {

        const newCart = [...cart, sing]
        setCart(newCart);

    }



    return (
        <div className="">
            {/* <h1>participate singer: {singers.length} </h1> */}

            {/* display data from home */}
            <div className="container">
                <div className="display">
                    {
                        singers.map(sing => <Meal
                            key={sing.id}
                            sing={sing}
                            handleAddToCart={handleAddToCart}
                        >

                        </Meal>)
                    }
                </div>

                {/* for update cart data  */}
                <div className="cart-container">

                    <Carts cart={cart} ></Carts>
                </div>

            </div>

        </div >
    );
};

export default Meals;