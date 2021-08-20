import styled from 'styled-components';

export const BgImg = styled.div`
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
 display: none;
  }
`;