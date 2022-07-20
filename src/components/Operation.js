import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotFound from "./PageNotFound/NotFound";

// import axios from 'axios';

axios.interceptors.request.use(
  (req)=>{
    console.log('interceptor request is called');
    return req;
  },
  (err)=>{
    console.log('interceptor request error');
    return err;
  }
);

axios.interceptors.response.use(
  (res)=>{
    console.log('interceptor response is called');
    if(res.data.name==='vicky'){
        res.data.name='vikas kumar';
    }
    return res;
  },
  (err)=>{
    console.log('interceptor response error');
    if(err.response.status === 404){
        err.response.statusText = 'There is some proplem in your url seems like Page Not Found...'
        console.log(err.response.statusText);
    }
    return Promise.reject();
  }
);


function Operation (){

    const [userlist, updateUser] = useState([]);
    const [name, pickName] = useState("");
    const [mobile, pickMobile] = useState("");
    const [age, pickAge] = useState("");
    const [education, pickEducatoin] = useState("");
    const [msg, updateMsg] = useState("Action message");

    const getUser = ()=>{
        
        axios.get("http://localhost:6789/user")
        .then(response =>{
            updateUser(response.data);
        })
        .catch(res=>{
            updateMsg("There is some problem in server Please check ...");
        })
    }

    const Save = ()=> {
        let newuser = {name : name, mobile : mobile, age : age, education: education };
        let url = "http://localhost:6789/user";
        axios.post(url, newuser)
        .then(res => {
            updateMsg(name + " added successfully ... ");
            pickName("");
            pickMobile("");
            pickAge("");
            pickEducatoin("");
            getUser();
        })
    }

    const deleteUser = (id, username)=>{
        axios.delete("http://localhost:6789/user/"+id)
        .then(res=> {
            updateMsg(username + " deleted from the list ...")
            getUser();
        })
    }

    useEffect(()=>{
        getUser();
    }, [])


    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-3 offset-1">
                    <h3 className="text-center"> Add New User </h3>
                    <div className="p-3 rounded border shadow">
                        <div className="mb-3">
                            <label htmlFor="name"> Full Name : </label>
                            <input id="name" type="text" className="form-control" onChange={e=> pickName(e.target.value)} value={name}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobile"> Mobile Number : </label>
                            <input id="mobile" type="number" className="form-control" onChange={e=> pickMobile(e.target.value)} value={mobile}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age"> Age : </label>
                            <input id="age" type="number" className="form-control" onChange={e=> pickAge(e.target.value)} value={age}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="education"> Education : </label>
                            <input id="education" type="text" className="form-control" onChange={e=> pickEducatoin(e.target.value)} value={education}/>
                        </div>
                        <div className="mb-2">
                            <button className="btn btn-primary btn-sm" onClick={Save}> Save User </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <h3> Available User </h3>
                    <label className="text-center form-control shadow">{msg}</label>
                    <table className="table table-bordered shadow mt-4 text-center shadow">
                        <thead>
                            <tr>
                                <th> SNo.</th>
                                <th> Name </th>
                                <th> Mobile No. </th>
                                <th> Age </th>
                                <th> Education </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userlist.map( (data, index) => { 
                                    return(
                                        <tr key={index}>
                                            <td> {index+1} </td>
                                            <td> {data.name} </td>
                                            <td> {data.mobile} </td>
                                            <td> {data.age} </td>
                                            <td> {data.education} </td>
                                            <td>
                                                <Link to={`/edit/${data.id}`} className="btn btn-warning me-2 btn-sm"> Edit </Link>
                                                <button className="btn btn-danger btn-sm" onClick={deleteUser.bind(this, data.id, data.name)}> Delete </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Operation;