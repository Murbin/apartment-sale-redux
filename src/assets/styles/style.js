import styled from 'styled-components';

export const Hero = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Button = styled.button`
  background: #6085fc;
  border: 2px solid white;
  color: white;
  font-size: 25px;
  font-weight: bold;
  border-radius: 100px;
  width: 250px;
  cursor: pointer;
  margin-top: 150px;
`;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
  padding: 40px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 800px) {
    width: 50%;
    height: 100vh;
    padding: 0px;
  }
`;

export const LabelInput = styled.div`
  font-size: 12px;
  width: 98%;
  text-align: center;
  margin: 0px 0px 10px 0px;
  font-weight: bold;
  @media (min-width: 650px) {
    font-size: 22px;
    width: 320px;
  }
`;

export const Error = styled.p`
  margin: 0;
  color: red;
`;

export const ContainerZone = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1250px) {
    flex-direction: row;
  }
`;

export const ItemZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 200px;
  }
`;

export const ContainerResume = styled.div`
  background: #6085fc;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
  @media (min-width: 800px) {
    width: 50%;
    height: 100vh;
    padding-bottom: 0px;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  text-align: center;
  color: black;
  margin: 10px;
  @media (min-width: 650px) {
    font-size: 19px;
  }
`;

export const Title = styled(Text)`
  font-weight: bold;
`;

export const ContainerStepper = styled.div`
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    padding-top: 30px;
  }
`;

export const ContainerReview = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: 800px) {
    width: 50%;
    height: 100vh;
  }
`;

export const BackgroundDepartment = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: 800px) {
    width: 50%;
    height: 100vh;
  }
`;
