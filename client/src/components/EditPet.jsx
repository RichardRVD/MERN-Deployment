import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';

const EditPet = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [errors, setErrors] = useState([])

    const [formInfo, setFormInfo] = useState({
        name: "",
        petType: "",
        description: "",
        skills1: "",
        skills2: "",
        skills3: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then( response => {
            console.log(response)
            setFormInfo(response.data.results)
        })
        .catch(err => console.log("Edit page error with GET", err))
    }, [id]);

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    };

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pet/update/${id}`, formInfo)
        .then( response => {
            console.log(response)
            navigate("/")
        })
        .catch( err => {
            const errorResponse = err.response.data.err.errors;
            console.log("Error from Catch:", err.response.data.err.error)
            const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        });
    }
  return (
    <div className='container'>
        <div className="row d-flex">
            <div className="col">
                <h1>Pet Shelter</h1>
            </div>
            <div className="col">
                <Link to='/' className='btn btn-warning mt-2'>back to home</Link>
            </div>
        </div>
        <div className='row'>
            <h2>Know a pet needing a home?</h2>
        </div>
        <div className='row'>
            <form className='form-group bg-light' onSubmit={submitHandler}>
            {errors.map((error, index) => <p key={index} className="bg-danger">{error}</p>)}
                <div className="col">
                    <div className="form-group bg-light">
                        <label className='form-label lead bg-light'>Pet Name:</label><br/>
                        <input type="text" className='form-control bg-light' name='name' onChange={onChangeHandler} value={formInfo.name}/>
                    </div>
                    <div className="form-group bg-light">
                        <label className='form-label lead bg-light'>Pet Type:</label><br/>
                        <input type="text" className='form-control bg-light' name='petType' onChange={onChangeHandler} value={formInfo.petType} />
                    </div>
                    <div className="form-group bg-light">
                        <label className='form-label lead bg-light'>Pet Description:</label><br/>
                        <input type="text" className='form-control bg-light' name='description' onChange={onChangeHandler} value={formInfo.description} />
                    </div>
                </div>
                <div className="col">
                    <h3>Skills (optional):</h3>
                    <div className="form-group bg-light">
                        <label className='form-label lead bg-light'>Skill 1:</label><br/>
                        <input type="text" className='form-control bg-light' name='skills1' onChange={onChangeHandler} value={formInfo.skills1} />
                    </div>
                    <div className="form-group bg-light">
                        <label className='form-label lead bg-light'>Skill 2:</label><br/>
                        <input type="text" className='form-control bg-light' name='skills2' onChange={onChangeHandler} value={formInfo.skills2} />
                    </div>
                    <div className="form-group bg-light">
                        <label className='form-label lead bg-light'>Skill 3:</label><br/>
                        <input type="text" className='form-control bg-light' name='skills3' onChange={onChangeHandler} value={formInfo.skills3} />
                    </div>
                </div>
                <button className='btn btn-primary m-3'>Edit Pet</button>
            </form>
        </div>
    </div>
  )
}

export default EditPet;