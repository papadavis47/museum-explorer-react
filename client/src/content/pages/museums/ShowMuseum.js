import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ShowMuseum(props) {
  // TODO: Get PARAMS from the link
  const { id } = useParams();
  const  [museum, setMuseum] = useState({});
  const [error, setError] = useState(null);
  // TODO: use currentMuseum state
  // TODO: make pieces state, when museum changes, useEffect to call api for all these pieces
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/museums/${id}`)
    .then(response => {
      if (response.data.message) {
        setError(response.data.message)
        console.log(response.data.err)
      } else {
        setMuseum(response.data);
      }
    })
    .catch(err=>{
      console.log(err)
      setError(err)
    });
  }, [])

  useEffect(() => {
    console.log('request to api for all pieces')
  }, [museum]);

  let museDeets =!museum ? <h3>Loading . . . </h3> : (
    <div>
      <h2>{museum.name}</h2>
      <h5>{museum.city}, {museum.country}</h5>
      <img src={museum.image} alt={museum.name} />
    </div>
  )

  return (
    <div>
      <h1>SHOW MUSEUM STUB</h1>
      {museDeets}
    </div>
  )
}