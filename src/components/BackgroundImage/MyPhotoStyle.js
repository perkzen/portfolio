import styled from 'styled-components';

export const MyPhotoImg = styled.img`

  height: 400px;
  width: 400px;
  margin-left: 50px;
  border-radius: 10px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 60%;
    height: 60%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;