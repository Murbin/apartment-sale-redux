import React from 'react';
import { selectResume } from '../../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { HOME } from '../../constants/index';

const Resume = () => {
  const { username, email, address, floor, zone, parking, hasElevator, price } =
    useSelector(selectResume);

  return (
    <div
      style={{
        background: '#6085FC',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <p
        style={{
          fontFamily: 'monospace',
          fontSize: 22,
          color: 'black'
        }}
      >
        Resume{' '}
      </p>
      <p
        style={{
          fontFamily: 'monospace',
          fontSize: 17,
          color: 'black'
        }}
      >
        Name : {username}
      </p>

      <p
        style={{
          fontFamily: 'monospace',
          fontSize: 17,
          color: 'black'
        }}
      >
        Email : {email}
      </p>
      <p
        style={{
          fontFamily: 'monospace',
          fontSize: 17,
          color: 'black'
        }}
      >
        Address : {address}
      </p>
      <p
        style={{
          fontFamily: 'monospace',
          fontSize: 17,
          color: 'black'
        }}
      >
        Floor : {floor}
      </p>
      <p
        style={{
          fontFamily: 'monospace',
          fontSize: 17,
          color: 'black'
        }}
      >
        Zones : {zone.bbq && 'Bbq'} {zone.comunal && ' Comunal'}
        {zone.entertainment && ' Entertainment'}
        {!zone.bbq && !zone.entertainment && !zone.comunal ? 'NA' : ''}
      </p>
      <p
        style={{
          fontFamily: 'monospace',
          fontSize: 17,
          color: 'black'
        }}
      >
        Has Parking ? : {parking.has === 'Si' ? 'Yes' : 'Dont Have Parking'}{' '}
        {parking.covered === 'Si' ? '. It has covered' : ''}
      </p>
      <p
        style={{
          fontFamily: 'monospace',
          fontSize: 17,
          color: 'black'
        }}
      >
        Price : {price}
      </p>
      <p
        style={{
          fontFamily: 'monospace',
          fontSize: 17,
          color: 'black'
        }}
      >
        Has Elevator ? : {hasElevator}
      </p>
      {/* <Link
        style={{
          marginRight: 20,
          textDecoration: 'none',
          color: '#6085FC',
          fontWeight: 'bold'
        }}
        to={HOME}
      >
        Send
      </Link> */}
    </div>
  );
};

export default Resume;
