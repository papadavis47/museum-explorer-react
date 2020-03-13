import React, {useState} from 'react';
import { useAddMuseum } from '../../../CustomHooks';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function NewMuseum(props) {
  const sendToDb = () => {
    console.log('sending information to db');
    axios.post(`${process.env.REACT_APP_SERVER_URL}/museums`, inputs)
    .then(response => {
      if (response.data.message) {
        console.log(response.data.err)
        setError(response.data.message)
      } else {
        setNewMuse(response.data)
      }
    }).catch(err=>{
      console.log(err)
      setError(err)
    });
    
  }



  const { inputs, handleInputChange, handleSubmit } = useAddMuseum(sendToDb)
  const [newMuse, setNewMuse] = useState(null);
  const [error, setError] = useState(null);


  if (newMuse) return <Redirect to={`/museums/${newMuse._id}`} />

  return (
    <div>
      <h1>NEW MUSEUM STUB</h1>
      <form onSubmit={handleSubmit}>
        <label>Museum Name:</label>
        <input type="text" name="name" onChange={handleInputChange} value={inputs.name} required/>

        <label>city:</label>
        <input type="text" name="city" onChange={handleInputChange} value={inputs.city}/>

        <label>Country:</label>
        <input type="text" name="country" onChange={handleInputChange} value={inputs.country}/>

        <label>Museum Image Url:</label>
        <input type="text" name="image" onChange={handleInputChange} value={inputs.image}/>

        <button type="submit">Add Museum</button>
      </form>
    </div>
  )
}