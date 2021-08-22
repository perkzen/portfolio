import Carousel from "react-elastic-carousel";
import {BlogCard, CardInfo, ExternalLinks, HeaderThree, Hr, TagList, TitleContent, UtilityList} from "./ProjectsStyles";
import {projects} from '../../constants/constants';
import ProjectTags from "./ProjectTags";

export const ProjectCarousel = () => {
    return (<Carousel>
        {projects.map((p, i) => {
            return (
                <BlogCard key={i}>
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
    </Carousel>)
}