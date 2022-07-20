import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct, removeSelectedProduct } from "./action/MyAction";

function ProductDetails() {

    const dispatch = useDispatch();
    const {prodid} = useParams();
    const apilist = useSelector(state=> state.product);

    const {title, Image, description} = apilist;
    // console.log(Image?.path);

    useEffect(()=>{
        if(prodid &&  prodid!=='') dispatch(fetchProduct(prodid));
        return ()=>{
            dispatch(removeSelectedProduct());
        }
    }, [prodid]);

    return(
        <div className="container mt-5">
            <div className="row">
                <h2 className="text-center">Product Details Page</h2>
                <div className="col-lg-4 offset-4 mt-4 text-center shadow rounded">
                    <img src={Image?.path} className="img-fluid rounded pt-3" alt={title} />
                    <p className="text-info p-2">{title}</p>
                    <p className="mt-0"><i><b>{description}</b></i></p> 
                </div>
                <div className="col-lg-4 offset-4 mt-4 text-center shadow rounded">
                    <Link to="/" className="btn"> Back to Home </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;