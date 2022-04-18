import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import {
  selectImage,
  updateImage
} from '../features/profileSale/profileSaleSlice';
import { PRICE_FORM, HAS_ELEVATOR_FORM } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import Resume from './resume';
import PreviousNextStep from '../components/nextPreviousStep';
import {
  ContainerMain,
  BackgroundDepartment,
  LabelInput,
  Error
} from '../assets/styles/style';

const Image = ({ errors, values, handleChange }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(updateImage({ key, val }));
  }, 250);
  const image = useSelector(selectImage);

  const handleLoadLocalFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const localImageUrl = window.URL.createObjectURL(file);
    handleChange(localImageUrl);
    updateValFromStore('image', localImageUrl);
  };

  return (
    <ContainerMain>
      <BackgroundDepartment img={image}>
        <p
          style={{
            fontSize: 22,
            margin: '0px 0px 10px 0px'
          }}
        >
          Click to load an image.
        </p>

        <input
          name={'image'}
          id="my-upload-btn"
          type="file"
          accept=".jpg, .jpeg, .png .svg"
          onChange={handleLoadLocalFile}
        />

        <PreviousNextStep
          prev={PRICE_FORM}
          nxt={HAS_ELEVATOR_FORM}
          name={'image'}
          errors={errors}
          value={image}
          validate={() => {}}
        />
      </BackgroundDepartment>
      <Resume />
    </ContainerMain>
  );
};

export default Image;
