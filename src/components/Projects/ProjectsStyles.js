import styled from 'styled-components';


export const Img = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }

`
export const BlogCard = styled.div`
  border-radius: 10px;
  background-color: #212125;
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  margin-top: 10px;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #fff;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: linear-gradient(to right, #206aff, #3565ff, #465fff, #5458ff, #6251ff, #714cff, #7e47ff, #8b40ff, #9b3bff, #aa35ff, #b92dff, #c722ff);;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: .3rem

  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #fff;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background-color: #0058ff;
  border-radius: 15px;
  transition: 0.5s;

  &:hover {
    background: #206aff;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`
export const Tag = styled.li`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: underline;
`