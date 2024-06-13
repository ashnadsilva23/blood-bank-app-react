import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewUsers = () =>{
    const [data, changeData] = useState([
    ])
    const fetchData = () => {
        axios.post("http://localhost:8080/view").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()

    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <h1 align="center"><u>View Course</u></h1><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>

     <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Mobile Number</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">place</th>
                                    <th scope="col">pincode </th>
                                    <th scope="col">bloodGrp </th>
                                    <th scope="col">disease </th>
                                    <th scope="col">gender </th>
                                </tr>
                            </thead>
                            <tbody>

                                {data.map(
                                    (value, index) => {
                                        return <tr>

                                            <td>{value.name}</td>
                                            <td>{value.mobileNo}</td>
                                            <td>{value.email}</td>
                                            <td>{value.address}</td>
                                            <td>{value.place}</td>
                                            <td>{value.pincode}</td>
                                            <td>{value.bloodGrp}</td>
                                            <td>{value.disease}</td>
                                            <td>{value.gender}</td>
                                        </tr>
                                    }
                                )}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default ViewUsers