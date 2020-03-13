import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Museum(props) {
  // TODO: make 'museums' state
  const [museums, setMuseums] = useState([]);
  const [error, setError] = useState(null);
  // TODO: call to API to get all museums

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/museums`)
    .then(response => {
      if (response.data.message) {
        setError(response.data.message)
        console.log(response.data.err)
      }else {
        console.log('Success! Retrieving: ', response.data)
        setMuseums(response.data)
      }
    }).catch(err=>{
      setError(err.message)
      console.log(err)})
  },[])

  let museumLinkList = museums.length < 1 ?
  <h3>There are no Museums left!</h3> :
  museums.map((museum, i) => (
    <div key={`museumListItem-${i}`}>
      <h4><Link to={`/museums/${museum._id}`}>{museum.name}</Link></h4>
      <h5>{museum.city}, {museum.country}</h5>
    </div>
  ))


  return (
    <div>
      <h1>MUSEUMS STUB</h1>
      <Link to="/museums/add">Add a Museum</Link>
      {museumLinkList}
    </div>
  )
}