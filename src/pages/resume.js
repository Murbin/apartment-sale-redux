import React from 'react';
import { selectResume } from '../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
import { hasParkingCovered, dollarUS } from '../utils/helper';
import Steps from '../components/stepper';
import { ContainerResume, Text, Title } from '../assets/styles/style';

const Resume = () => {
  const { username, email, address, floor, zone, parking, hasElevator, price } =
    useSelector(selectResume);

  return (
    <ContainerResume>
      {' '}
      <Steps />
      <Title>Resume </Title>
      <Text>Name : {username}</Text>
      <Text>Email : {email}</Text>
      <Text>Address : {address}</Text>
      <Text>Floor : {floor}</Text>
      <Text>
        Zones : {zone.bbq && 'Bbq'} {zone.comunal && ' Comunal'}
        {zone.entertainment && ' Entertainment'}
        {!zone.bbq && !zone.entertainment && !zone.comunal ? 'NA' : ''}
      </Text>
      <Text>
        Has Parking ? :{hasParkingCovered(parking?.has, parking?.covered)}
      </Text>
      <Text>Price : {price ? dollarUS.format(price) : ''}</Text>
      <Text>Has an elevator ? : {hasElevator}</Text>
    </ContainerResume>
  );
};

export default Resume;
