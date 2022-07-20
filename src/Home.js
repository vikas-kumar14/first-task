import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import { fetchProducts } from "./action/MyAction";
import { useDispatch, useSelector } from "react-redux";


function Home() {
    const dispatch = useDispatch();
    const prodlist = useSelector((state)=>state.allProducts.products);

    useEffect(()=>{
        dispatch(fetchProducts());
    }, []);

    return(
        <div className="homecomp">
            <h2 className="mt-3 mb-2">Product List</h2>
            <div className="cont">
                <div className="subcont"> 
                    {
                        prodlist.map((data, index)=>{
                            return(
                                <Link key={index} className="prod shadow m-2 rounded p-1 pt-3 pb-3" to={`/product/${data.id}`}>
                                    <img src={data.Image.path} alt={data.Image.alt} className="rounded"/>
                                    <p> {data.title} </p>
                                    <button> quick view </button>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;