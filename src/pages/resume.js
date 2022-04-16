import React from 'react';
import { selectResume } from '../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
import { hasParkingCovered, dollarUS } from '../utils/helper';

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
        Has Parking ? :{hasParkingCovered(parking?.has, parking?.covered)}
      </p>
      <p
        style={{
          fontFamily: 'monospace',
          fontSize: 17,
          color: 'black'
        }}
      >
        Price : {price ? dollarUS.format(price) : ''}
      </p>
      <p
        style={{
          fontFamily: 'monospace',
          fontSize: 17,
          color: 'black'
        }}
      >
        Has an elevator ? : {hasElevator}
      </p>
    </div>
  );
};

export default Resume;
