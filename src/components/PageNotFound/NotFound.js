import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css';

function NotFound(props) {
    return(
        <div className="container">
            <div className="row">	
                <div className="col-lg-8 offset-2">
                    <div className="col-sm-10 col-sm-offset-1  text-center">
                        <div className="four_zero_four_bg">
                            <h1 className="text-center p-5 mr-3 text-danger">{props.statuscode}</h1>
                        </div>
                    </div>
                    <div className="contant_box_404 text-center">
                        <p>The page you are looking for has error !</p>
                        <h2 className="text-danger mb-3"> {props.statusmsg} ... </h2>
                        <Link to="/" className="link_404 btn btn-primary">Go to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;