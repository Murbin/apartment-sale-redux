import React from 'react';
import Resume from './resume';
import { useSelector } from 'react-redux';
import { selectImage } from '../features/profileSale/profileSaleSlice';
import { Link } from 'react-router-dom';

const FinalReview = () => {
  const image = useSelector(selectImage);
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Resume />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          position: 'relative',
          width: '48%',
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <Link
          style={{
            textAlign: 'center',
            background: 'white',
            width: 100,
            padding: 7,
            textDecoration: 'none',
            color: 'black',
            fontWeight: 'bold',
            marginBottom: 40,
            borderRadius: 20
          }}
          to={'/'}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default FinalReview;
