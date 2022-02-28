import React from "react";
import NumberFormat from "react-number-format";

export default function Price(props) {
    const price = props.price;
    return (
        <NumberFormat value={price} displayType={"text"} thousandSeparator={true} suffix={" €"} decimalScale={2} fixedDecimalScale={true} />
    );
}
