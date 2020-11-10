import React from 'react';

import {
  Card,
  Avatar,
  Name,
  InfoContainer,
  Info,
  AvatarContainer,
  CardContent,
  AddressInfoContainer,
  InfoLabel,
} from './styles';

interface UserCardProps {
  avatar_url?: string;
  name?: string;
  email?: string;
  phone?: string;
  state?: string;
  city?: string;
}

const UserCard: React.FC<UserCardProps> = ({
  avatar_url,
  name,
  email,
  phone,
  state,
  city,
}: UserCardProps) => {
  return (
    <Card>
      <AvatarContainer>
        <Avatar src={avatar_url} alt={name} />
      </AvatarContainer>

      <CardContent>
        <Name>{name}</Name>
        <InfoContainer>
          <InfoLabel>E-mail:</InfoLabel>
          <Info>{email}</Info>
          <InfoLabel>Phone:</InfoLabel>
          <Info>{phone}</Info>

          <InfoLabel>Address:</InfoLabel>
          <AddressInfoContainer>
            <Info>{state}</Info>-<Info>{city}</Info>
          </AddressInfoContainer>
        </InfoContainer>
      </CardContent>
    </Card>
  );
};

export default UserCard;
