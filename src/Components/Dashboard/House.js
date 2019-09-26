import React from 'react';
// import './House.css';

export default function House(props) {
  let { property_id, property_name, address, city, state, zip, image, monthly, desired } = props.house;
  return (
    <div className='House'>
      <div>
        <img src={image} alt="" srcset=""/>
      </div>
      <div className='house_detail_box'>
        <p>Property Name: {property_name}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Zip: {zip}</p>
      </div>
      <div>
        <p>Monthly Mortgage: {monthly}</p>
        <p>Desired Rent: {desired}</p>
        <p></p>
        <p></p>
      </div>
      <button onClick={()=>props.delete(property_id)}>delete</button>
    </div>
  )
}