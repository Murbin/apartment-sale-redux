import React from 'react';
import { selectResume } from '../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
import { hasParkingCovered, dollarUS } from '../utils/helper';
import Steps from '../components/stepper';

const Resume = () => {
  const { username, email, address, floor, zone, parking, hasElevator, price } =
    useSelector(selectResume);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        height: '100vh',
        background: '#6085FC'
      }}
    >
      {' '}
      <Steps />
      <div
        style={{
          marginTop: 30,
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <p
          style={{
            fontFamily: 'monospace',
            margin: 15,
            fontSize: 22,
            color: 'black'
          }}
        >
          Resume{' '}
        </p>
        <p
          style={{
            fontFamily: 'monospace',
            margin: 15,
            fontSize: 19,
            fontWeight: 'light',
            color: 'black'
          }}
        >
          Name : {username}
        </p>

        <p
          style={{
            fontFamily: 'monospace',
            margin: 15,
            fontSize: 19,
            fontWeight: 'light',
            color: 'black'
          }}
        >
          Email : {email}
        </p>
        <p
          style={{
            fontFamily: 'monospace',
            margin: 15,
            fontSize: 19,
            fontWeight: 'light',
            color: 'black'
          }}
        >
          Address : {address}
        </p>
        <p
          style={{
            fontFamily: 'monospace',
            margin: 15,
            fontSize: 19,
            fontWeight: 'light',
            color: 'black'
          }}
        >
          Floor : {floor}
        </p>
        <p
          style={{
            fontFamily: 'monospace',
            margin: 15,
            fontSize: 19,
            fontWeight: 'light',
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
            margin: 15,
            fontSize: 19,
            fontWeight: 'light',
            color: 'black'
          }}
        >
          Has Parking ? :{hasParkingCovered(parking?.has, parking?.covered)}
        </p>
        <p
          style={{
            fontFamily: 'monospace',
            margin: 15,
            fontSize: 19,
            fontWeight: 'light',
            color: 'black'
          }}
        >
          Price : {price ? dollarUS.format(price) : ''}
        </p>
        <p
          style={{
            fontFamily: 'monospace',
            margin: 15,
            fontSize: 19,
            fontWeight: 'light',
            color: 'black'
          }}
        >
          Has an elevator ? : {hasElevator}
        </p>
      </div>
    </div>
  );
};

export default Resume;
