import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const AllPets = () => {

    const [allPets, setAllPets] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
        .then( response => {
            console.log(response.data.results)
            setAllPets(_.orderBy(response.data.results,['petType'],['asc']))
        })
        .catch(err => console.log(err))
    },[])

  return (
    <div className='container'>
        <div className="row d-flex">
            <div className="col">
                <h1>Pet Shelter</h1>
            </div>
            <div className="col">
                <Link to='/pets/new' className='btn btn-primary mt-2'>Add A Pet to the Shelter</Link>
            </div>
        </div>
        <div className='row'>
            <h2>These pets are looking for a good home</h2>
        </div>
        <div className="row">
            <table className='table table-striped table-dark'>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Type</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPets.map((pet, index) => {
                            return (
                                <tr key={index}>
                                    <td>{pet.name}</td>
                                    <td>{pet.petType}</td>
                                    <td><Link className='btn btn-info' to={`/pet/${pet._id}`}>details</Link> | <Link className='btn btn-primary' to={`/pet/edit/${pet._id}`}>edit</Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AllPets