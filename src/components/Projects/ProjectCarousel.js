import {BlogCard, CardInfo, ExternalLinks, HeaderThree, Hr, TagList, TitleContent, UtilityList} from "./ProjectsStyles";
import {projects} from '../../constants/constants';
import ProjectTags from "./ProjectTags";
import "./CarouselStyle.css";
import { useState } from "react";
import Slider from "react-slick";
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/all";


export const ProjectCarousel = () => {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <IoIosArrowDroprightCircle />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <IoIosArrowDropleftCircle />
            </div>
        );
    };

    const [cardIndex, setCardIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setCardIndex(next),
    };

    return (
            <Slider {...settings}>
                {projects.map((p, i) => {
                    return (
                        <BlogCard key={i} className={i === cardIndex ? "slide activeSlide" : "slide"}>
                            <TitleContent>
                                <HeaderThree title>{p.title}</HeaderThree>
                                <Hr/>
                            </TitleContent>
                            <CardInfo className="card-info">{p.description}</CardInfo>
                            <div>
                                <TitleContent>Technologies </TitleContent>
                                <TagList>
                                    {/* eslint-disable-next-line array-callback-return */}
                                    {p.tags.map((t, i) => {
                                        // eslint-disable-next-line default-case
                                        return <ProjectTags tag={t} key={i}/>
                                    })}
                                </TagList>
                            </div>
                            <UtilityList>
                                <ExternalLinks href={p.source}>Source Code</ExternalLinks>
                            </UtilityList>
                        </BlogCard>
                    );
                })}
            </Slider>
    );
}

export default ProjectCarousel;