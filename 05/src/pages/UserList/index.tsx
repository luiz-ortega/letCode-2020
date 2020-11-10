import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { v4 } from 'uuid';

import { Title, Container } from './styles';
import UserCard from '../../components/UserCard';

interface UserRequest {
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
    state: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  };
}

interface User {
  id: string;
  name: string;
  avatar_url: string;
  email: string;
  phone: string;
  address: {
    state: string;
    city: string;
  };
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const response = await api.get(`/?results=5`);

    const formattedUsers = response.data.results.map((user: UserRequest) => ({
      id: v4(),
      name: `${user.name.first} ${user.name.last}`,
      avatar_url: user.picture.large,
      email: user.email,
      phone: user.phone,
      address: {
        state: user.location.state,
        city: user.location.city,
      },
    }));

    setUsers([...formattedUsers]);
  }

  return (
    <>
      <Title>Users</Title>

      <Container>
        {users.map(user => (
          <div key={user.id}>
            <UserCard
              avatar_url={user.avatar_url}
              name={user.name}
              email={user.email}
              phone={user.phone}
              state={user.address.state}
              city={user.address.city}
            />
          </div>
        ))}
      </Container>
    </>
  );
};

export default UserList;
