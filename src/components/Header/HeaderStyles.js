
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Span = styled.span`
    font-size: 2rem;
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  overflow: hidden;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  
    
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;


// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  padding: 8px;

  &:hover {
    background-color: #2f3957;
    transform: scale(1.2);
    cursor: pointer;

  }
`


export const AnimatedLink = styled.a`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to right, #206aff, #3565ff, #465fff, #5458ff, #6251ff, #714cff, #7e47ff, #8b40ff, #9b3bff, #aa35ff, #b92dff, #c722ff);

    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    visibility: visible;
    width: 100%;
  }
`