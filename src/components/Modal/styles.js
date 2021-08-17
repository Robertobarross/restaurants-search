import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  
  background-color: rgba(78, 89, 131, 0.5);
  backdrop-filter: blur(5px);
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: calc(100% - 144px);
  width: 500px;
  padding: 24px;
  background-color: #ffffff;
  box-shadow: 0px 0px 32px rgba(8, 89, 131);
  border-radius: 8px;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 10px;
`;

export const Address = styled.span`
  font-family: ${(props) => props.theme.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const RestaurantPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  object-fit: cover;
`;