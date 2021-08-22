import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    TagList,
    TitleContent,
    UtilityList
} from "./ProjectsStyles";
import {projects} from '../../constants/constants';
import ProjectTags from "./ProjectTags";

export const ProjectCards = () => {
    return (
        <GridContainer>
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
        </GridContainer>

    )
}