import React from "react";

function CartItems(props) {
    const { product } = props;
    const { _id, name, price, image, details } = product;

    return (
        <tbody>
            <tr>
            <th><img src={image} width="300px" height="400px"></img></th>
            <td>{name}</td>
            <td>{details}</td>
            <td>฿ {price}</td>
            </tr>
        </tbody>
    );
}

export default CartItems;