import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NotFound from "./PageNotFound/NotFound";

function OperationEdit (){

    const [name, pickName] = useState("");
    const [mobile, pickMobile] = useState("");
    const [age, pickAge] = useState("");
    const [education, pickEducatoin] = useState("");
    const [msg, updateMsg] = useState("");

    const {userid} = useParams();

    const update = ()=> {
        let newuser = {name : name, mobile : mobile, age : age, education: education };
        let url = "http://localhost:6789/user/"+userid;
        axios.put(url, newuser)
        .then(res => {
            updateMsg(name + " updated successfully ... ");
        })
    }

    useEffect(()=>{
        axios.get("http://localhost:6789/user/"+userid)
        .then(response =>{
            console.log(response);
            pickName(response.data.name);
            pickMobile(response.data.mobile);
            pickAge(response.data.age);
            pickEducatoin(response.data.education);
        })
        .catch(ress=>{
            console.log(ress);
            updateMsg("There is some problem ...");
            // return Promise.reject(error);
            return(
                <div>
                    <NotFound statuscode="404" statusmsg="Page Not Found"/>
                    <h3>asefe</h3>
                </div>
            )
            // throw new Error('404 occurs');
        })
    }, [])


    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-6 offset-3">
                    <h3 className="text-center"> Update User </h3>
                    <div className="p-3 rounded border shadow">
                        <div className="mb-3">
                            <label htmlFor="name"> Full Name : <b className="text-primary"> {name}</b></label>
                            <input id="name" type="text" className="form-control" onChange={e=> pickName(e.target.value)} value={name}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobile"> Mobile Number : <b className="text-primary"> {mobile}</b></label>
                            <input id="mobile" type="number" className="form-control" onChange={e=> pickMobile(e.target.value)} value={mobile}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age"> Age : <b className="text-primary"> {age}</b></label>
                            <input id="age" type="number" className="form-control" onChange={e=> pickAge(e.target.value)} value={age}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="education"> Education : <b className="text-primary"> {education}</b></label>
                            <input id="education" type="text" className="form-control" onChange={e=> pickEducatoin(e.target.value)} value={education}/>
                        </div>
                        <div className="mb-2 text-center">
                            <button className="btn btn-warning btn-sm me-3" onClick={update}> update </button>
                            <Link className="btn btn-light btn-sm me-3" onClick={update} to="/operation"> Back to User </Link>
                            <Link className="btn btn-info btn-sm" onClick={update} to="/"> Home </Link>
                        </div>
                    </div>
                    <p className="text-center">{msg}</p>
                </div>
            </div>
        </div>
    );
}

export default OperationEdit;