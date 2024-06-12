import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddReg = () => {
    const [data, changeData] = useState([

        {
            "name": "",
            "mobileNo": "",
            "gender": "",
            "email": "",
            "address": "",
            "place": "",
            "pincode": "",
            "bloodGrp": "",
            "disease": "",
            "userName": "",
            "password": "",
            "cpswd": ""




        }

    ])


    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })


    }
    const readValue = () => {
    console.log(data)
        if (data.password==data.cpswd) {
            axios.post("http://localhost:8080/", data).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.status == "success") {
                        alert("successfully added")
                    }
                    else {
                        alert("failed")
                    }

                }
            )
        }
        else {
            alert("check password")
        }
    }

    return (
        <div>
            <h1 align="center"><u>Sign Up</u></h1>
            <div className="container">
                <div className="card" >
                    <div className="card-body">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Name</label>
                                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Date of Birth</label>
                                        <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />

                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Blood group</label>
                                        <select id="" className="form-control" name='bloodGrp' value={data.bloodGroup} onChange={inputHandler}>
                                            <option value="a+ve">a+ve</option>
                                            <option value="a-ve">a-ve</option>
                                            <option value="b+ve">b+ve</option>
                                            <option value="b-ve">b-ve</option>
                                            <option value="ab+ve">ab+ve</option>
                                            <option value="ab-ve">ab-ve</option>
                                            <option value="o+ve">o+ve</option>
                                            <option value="o-ve">o-ve</option>
                                        </select>

                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Address</label>
                                        <textarea id="" className="form-control" name='address' value={data.address} onChange={inputHandler}></textarea>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Mobile Number</label>
                                        <input type="text" className="form-control" name='mobileNo' value={data.mobileNo} onChange={inputHandler} />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">pincode</label>
                                        <input type="text" className="form-control" name='pincode' value={data.pincode} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Gender</label>
                                        <select id="" className="form-control" name='address' value={data.address} onChange={inputHandler}>
                                            <option value="MALE">MALE</option>
                                            <option value="FEMALE">FEMALE</option>
                                            <option value="OTHERS">OTHERS</option>

                                        </select>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">place</label>
                                        <input type="text" className="form-control" name='place' value={data.place} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">pincode</label>
                                        <input type="text" className="form-control" name='pincode' value={data.pincode} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Would you Have Any Disease</label>
                                        <select name="" id="" className="form-control">
                                        <option value="NO">NO</option>

                                            <option value="YES">YES</option>
                                        </select>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Username</label>
                                        <input type="text" className="form-control" name='userName' value={data.userName} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password" className="form-control" name='password' value={data.passward} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label"> confirm Password</label>
                                        <input type="password" className="form-control" name='cpswd' value={data.cpswd} onChange={inputHandler} />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <button className="btn btn-success" onClick={readValue}>Register</button><br></br><br></br>

                                        <p>Back to Login <Link to="/">Login</Link></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddReg