import styled from 'styled-components';

export const Card = styled.div`
  background-color: #495464;
  border-radius: 10px;
  width: 350px;
  margin: 0 auto;

  -webkit-box-shadow: 5px 5px 18px 3px #495464;
  box-shadow: 5px 5px 18px 3px #495464;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  position: absolute;
  margin-bottom: 50px;

  -webkit-box-shadow: 5px 5px 18px 3px rgba(0, 0, 0, 0.79);
  box-shadow: 5px 5px 18px 3px rgba(0, 0, 0, 0.79);
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: -40px;
  margin-bottom: 100px;
`;

export const Name = styled.span`
  font-size: 24px;
  color: #f4f4f2;
  font-weight: regular;
  text-align: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 30px;

  > * {
    margin-bottom: 5px;
  }
`;

export const Info = styled.p`
  color: #f4f4f2;
`;

export const InfoLabel = styled.span`
  color: #f4f4f2;
  font-weight: bold;

  border-bottom: 1px solid white;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AddressInfoContainer = styled.div`
  display: flex;
`;
