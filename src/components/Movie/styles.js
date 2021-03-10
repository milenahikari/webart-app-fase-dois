import styled from 'styled-components/native';

export const Container = styled.View`
  width: 338px;
  height: 112px;
  margin-top: 80px;
  background: #22213CB2;

  flex-direction: row;
  position: relative;
`;

export const ContainerLeft = styled.View`
  width: 40%;
  height: 100%;
  align-items: center;
`;

export const ImageMovie = styled.Image`
  width: 109px;
  height: 151px;
  border-radius: 5px;

  position: absolute;
  top: -50px;
`;

export const ContainerRight = styled.View`
  width: 60%;
  height: 100%;
  padding: 10px;
  justify-content: space-around;
`;

export const Title = styled.Text`
  width: 130px;
  color: #FBFBFB;
  font-size: 16px;
`;

export const Detail = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageImdb = styled.Image`
  width: 26px;
  height: 26px;
  margin-right: 10px;
`;

export const VoteAverage = styled.Text`
  color: #FBFBFB;
  font-size: 14px;
`;

