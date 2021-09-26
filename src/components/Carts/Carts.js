import React from 'react';
import './Carts.css';

const Carts = (props) => {


    // get data for cart
    const { cart } = props;


    let member = []
    let total = 0;

    for (const sing of cart) {
        member = member + " , " + sing.name
        total = total + sing.salary
    }


    return (
        <div className="cart-style">
            <h2>  Concert details </h2>

            {/* total number of member  */}

            <p>Total Singer Added: {props.cart.length} </p>


            <br />

            {/* total amount  */}
            <div className="member-salary">
                <p>total salary: $ {total} </p>

            </div>

            {/* added member name */}

            <h3>Selected Memeber: {member}</h3>
        </div>
    );
};

export default Carts;