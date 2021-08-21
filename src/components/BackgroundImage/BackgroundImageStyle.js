import styled from 'styled-components';

export const BgImg = styled.div`
  width: 100%;
  height: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {

    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;