import React, { useEffect } from "react";
import Product from "../components/Product";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from './../actions/productActions';
//import Product from './../components/Product';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector( state => state.productList )
    const {loading, error, products} = productList

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div>
            {(() => {
                if (loading) {
                    return <LoadingBox></LoadingBox>;
                } else if (error) {
                    return <MessageBox variant="danger">{error}</MessageBox>;
                }
                return (
                    <div className="row center">
                        {products.map((product) => {
                            return <Product key={product._id} product={product}></Product>;
                        })}
                    </div>
                );
            })()}
        </div>
    );
}
