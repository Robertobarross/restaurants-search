import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Skeleton } from '..';
import restaurante from '../../assets/restaurante.png'
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick} >
     <RestaurantInfo>
       <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf edit={false} value={restaurant.rating} activeColor="#e7711c" />
       <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
     </RestaurantInfo>
     <RestaurantPhoto 
        imageLoaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
        alt="Foto do Restaurante" />
        {!imageLoaded && <Skeleton width="100px" height="100px" />}
   </Restaurant>
     )}
export default RestaurantCard;
