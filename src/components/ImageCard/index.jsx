import React, { useEffect, useState } from 'react';
import Skeleton from '../Skeleton';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.regular};
  color: #ffffff;
  font-size: 16px;
  text-shadow: #000 2px 3px 2px; 
`;

const ImageCard = ({photo, title}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
    {imageLoaded ? (
      <Card photo={photo}>
        <Title>{title}</Title>
      </Card>
      ) : <Skeleton width="90px" height="90px" /> }
     </>
)}
export default ImageCard;