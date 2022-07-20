import React, { useState } from "react";

function Events (){

    // form event start
    const[name, pickName] = useState("");
    const[mobile, pickMobile] = useState("");

    const nameInput = (e)=>{
        pickName(e.target.value);
    }
    const formClick = (event)=>{
        event.preventDefault();
    }
    const formSubmit = ()=>{
        alert('form action --- double click');
        pickName("");
        pickMobile("");
    }
    // form event ends


    // propagation start
    const stopPropa = (e)=>{
        alert("Jack child element");
        e.stopPropagation();
    }
    // propagation ends

    //Key Event start
    const keyEvent = (e)=>{
        let x = e.altKey;
        alert(x);
    }
    //Key event ends
    return(
        <div className="container">
            <h2 className="text-center text-info mt-3 mb-4"> Event Page </h2>
            <div className="row">

                <form className="col-lg-3 shadow" onSubmit={formSubmit}>
                    <h4 className="text-center mt-2 mb-3">Form Event</h4>
                    <div className="mb-3">
                        <label>Name :</label><i>{name}</i>
                        <input type="text" className="form-control" onChange={nameInput} value={name}/>
                    </div>
                    <div className="mb-3">
                        <label>Mobile :</label>{mobile}
                        <input type="number" className="form-control" onChange={obj=>pickMobile(obj.target.value)} value={mobile}/>
                    </div>
                    <div>
                        <input type="submit" className="btn btn-primary" onClick={formClick} onDoubleClick={formSubmit}/>
                    </div>
                </form>


                <div className="col-lg-6 shadow">
                    <h4 className="text-center mt-2 mb-3"> Propagation </h4>
                    <table className="table table-bordered">
                        <thead>
                            <tr className="bg-info text-center">
                                <th>SNO</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr onClick={(e)=>{e.preventDefault(); alert('tom parent element')}}>
                                <td>1.</td>
                                <td>Tom</td>
                                <td className="text-center"> <button className="btn btn-dark" onClick={(e)=>{e.preventDefault(); alert('tom child element')}}>Bubbling Phase</button> </td>
                            </tr>
                            <tr onClickCapture={(e)=>{e.preventDefault(); alert('jerry parent element')}}>
                                <td>2.</td>
                                <td>Jerry</td>
                                <td className="text-center"> <button className="btn btn-dark"  onClick={(e)=>{e.preventDefault(); alert('jerry child element')}}>Capturing Phase</button> </td>
                            </tr>
                            <tr onClick={(e)=>{e.preventDefault(); alert('jack parent element')}}>
                                <td>3.</td>
                                <td>Jack</td>
                                <td className="text-center"> <button className="btn btn-dark" onClick={stopPropa}> Stop Propagation </button> </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="bg-info text-center">
                                <th>SNO</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>


                <div className="col-lg-3 shadow">
                    <h4 className="text-center mt-2 mb-3"> Other Event </h4>
                    <input type="text" className="form-control" placeholder="Alt+key returns true" onKeyUp={keyEvent}/>
                </div>
            </div>
        </div>
    )
}

export default Events;