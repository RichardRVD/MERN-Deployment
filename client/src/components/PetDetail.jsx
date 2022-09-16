import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const PetDetail = () => {

    const [pet, setPet] = useState({})
    

    const navigate = useNavigate();

    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then( response => setPet(response.data.results ))
        .catch(err => console.log(err))
    }, [id])

    const adoptPet = (e, id) => {
        axios.delete(`http://localhost:8000/api/pet/delete/${id}`)
        .then( (response) => {
            console.log("Deleted from database", response)
            navigate("/")
        })
        .catch(err => console.log(err))
    }

    const likeHandler = (e) => {
        pet.likes += 1;
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <h1 className='m-3'>Pet Shelter</h1>
                </div>
                <div className="col">
                    <Link className='btn btn-info m-3' to={'/'} >back to home</Link>
                </div>
            </div>
            <div className="row m-5">
                <div className="col">
                    <h2>Details about: {pet.name}</h2>
                </div>
                <div className="col">
                    <button onClick={(e) => {adoptPet(e, pet._id)}} className='btn btn-danger' >Adopt {pet.name}</button>
                </div>
            </div>
            <div className="row">
                <h3 className='m-3'>Pet type: {pet.petType}</h3>
                <h3 className='m-3'>Description: {pet.description}</h3>
                <h3 className='m-3'>Skills:</h3>
                <h3>{pet.skills1}</h3>
                <h3>{pet.skills2}</h3>
                <h3>{pet.skills3}</h3>
            </div>
            <div className="row m-5">
                <div className="col">
                    <button className='btn btn-success'>Like {pet.name}</button>
                </div>
                <div className="col" disabled={true} onClick={likeHandler} >{pet.likes} likes(s)</div>
            </div>

        </div>
    )
}

export default PetDetail