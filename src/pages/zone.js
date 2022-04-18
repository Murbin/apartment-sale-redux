import React from 'react';
import { FLOOR_FORM, PARKING_FORM } from '../utils/constants';
import { useDebouncedCallback } from 'use-debounce';
import { updateVal } from '../features/profileSale/profileSaleSlice';
import { useDispatch } from 'react-redux';
import { selectZone } from '../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
import { Field } from 'formik';
import Resume from './resume';
import PreviousNextStep from '../components/nextPreviousStep';
import {
  ContainerMain,
  ContainerInput,
  ContainerZone,
  ItemZone,
  LabelInput
} from '../assets/styles/style';

const Zone = ({ errors, touched, values, handleChange }) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val, child) => {
    dispatch(updateVal({ key, val, child }));
  }, 250);
  const zone = useSelector(selectZone);

  return (
    <ContainerMain>
      <ContainerInput>
        <ContainerZone>
          <ItemZone>
            {' '}
            <LabelInput>Bbq</LabelInput>
            <Field
              type="checkbox"
              name="bbq"
              onChange={(val) => {
                handleChange(val);
                updateValFromStore('zone', val, 'bbq');
              }}
              style={{ marginBottom: 20 }}
              values={zone.bbq ? 'true' : 'false'}
            />
          </ItemZone>
          <ItemZone>
            <LabelInput>Comunal</LabelInput>
            <Field
              type="checkbox"
              name="comunal"
              onChange={(val) => {
                handleChange(val);
                updateValFromStore('zone', val, 'comunal');
              }}
              style={{ marginBottom: 20 }}
              values={zone.comunal ? 'true' : 'false'}
            />
          </ItemZone>
          <ItemZone>
            <LabelInput>Entertainment</LabelInput>
            <Field
              type="checkbox"
              name="entertainment"
              onChange={(val) => {
                handleChange(val);
                updateValFromStore('zone', val, 'entertainment');
              }}
              style={{ marginBottom: 20 }}
              values={zone.entertainment ? 'true' : 'false'}
            />
          </ItemZone>
        </ContainerZone>
        <PreviousNextStep
          prev={FLOOR_FORM}
          nxt={PARKING_FORM}
          name={'zone'}
          errors={errors}
          value={'zone'}
          validate={() => {}}
        />
      </ContainerInput>
      <Resume />
    </ContainerMain>
  );
};

export default Zone;
