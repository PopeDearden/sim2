import React from 'react';
// import './House.css';

export default function House(props) {
  let { property_id, property_name, address, city, state, zip } = props.house;
  return (
    <div className='House'>
      <div className='house_detail_box'>
        <p>Property Name: {property_name}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Zip: {zip}</p>
      </div>
      <button onClick={()=>props.delete(property_id)}>delete</button>
    </div>
  )
}