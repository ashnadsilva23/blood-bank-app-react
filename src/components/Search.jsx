import axios from 'axios'
import React, { useState } from 'react'

const Search = () => {
    const [data, changeData] = useState({
        "name": ""

    })
const [result, setResult] = useState([ ])

    const deleteBook = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8080/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("deleted successfully")

                } else {
                    alert("error in deletion")

                }

            }
        ).catch().finally()


    }
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })


    }
    const readValue = () => {
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)

            }
        ).finally()
    }
    return (
        <div>

            <h1 align="center"><u>Search Book</u></h1><br></br>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Title</label>
                                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                                </div>

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-primary" onClick={readValue}>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                {result.map(
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
                                            <td><button className="btn btn-danger" onClick={() => { deleteBook(value._id) }}>Delete</button></td>

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

export default Search