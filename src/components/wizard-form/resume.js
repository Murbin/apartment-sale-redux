import React from 'react';
import { selectResume } from '../../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';

const Resume = () => {
  const { username, email, address, floor, zone, parking, hasElevator, price } =
    useSelector(selectResume);

  return (
    <div>
      <p>Name : {username}</p>
      <p>Email : {email}</p>
      <p>Address : {address}</p>
      <p>Floor : {floor}</p>
      <p>
        Zones : {zone.bbq && 'Bbq'} {zone.comunal && ' Comunal'}
        {zone.entertainment && ' Entertainment'}
        {!zone.bbq && !zone.entertainment && !zone.comuna ? 'NA' : ''}
      </p>
      <p>
        Has Parking ? :{' '}
        {parking.has === 'Si' ? 'Has Parking' : 'Dont Have Parking'}{' '}
        {parking.covered === 'Si' ? '.It has covered' : ''}
      </p>
      <p>Price : {price}</p>
      <p>Has Elevator ? : {hasElevator}</p>
    </div>
  );
};

export default Resume;
