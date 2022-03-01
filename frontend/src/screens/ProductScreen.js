import React, { useEffect } from "react";
import Rating from "../components/Rating";
import Price from "./../components/Price";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function ProductScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productId = id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    return (
        <div>
            {(() => {
                if (loading) {
                    return <LoadingBox></LoadingBox>;
                } else if (error) {
                    return <MessageBox variant="danger">{error}</MessageBox>;
                }
                return (
                    <div>
                        <Link to="/">Retour aux produits</Link>
                        <div className="row top">
                            <div className="col-2">
                                <img className="large" src={product.image} alt={product.name} />
                            </div>
                            <div className="col-1">
                                <ul>
                                    <li>
                                        <h1>{product.name}</h1>
                                    </li>
                                    <li>
                                        <Rating rating={product.rating} numReviews={product.numReviews} />
                                    </li>
                                    <li>
                                        Prix :
                                        <Price price={product.price} />
                                    </li>
                                    <li>
                                        Description : <p>{product.description}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-1">
                                <div className="card card-body">
                                    <ul>
                                        <li>
                                            <div className="row">
                                                <div>Prix</div>
                                                <div className="price">
                                                    <Price price={product.price} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div>Statut</div>
                                                <div>
                                                    {product.countInStock > 0 ? (
                                                        <span className="success">En stock</span>
                                                    ) : (
                                                        <span className="danger">Indisponible</span>
                                                    )}
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <button className="primary block">Ajouter au panier</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })()}
        </div>
    );
}
