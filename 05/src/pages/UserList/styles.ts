import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: #383838;
  width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 100px;
  align-items: center;

  > * {
    margin-bottom: 80px;
  }
`;
