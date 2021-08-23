import {
    BlogCard, Btn,
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
import {useState} from "react";

export const ProjectCards = () => {
    const [numOfProjects, setNumOfProjects] = useState(3);

    const showMoreContent = () => {
        setNumOfProjects(numOfProjects + 3)

    }

    const showLessContent = () => {
        setNumOfProjects(numOfProjects - 3)

    }


    const loadedData = projects.slice(0, numOfProjects);
    return (
        <GridContainer>
            {/* eslint-disable-next-line array-callback-return */}
            {loadedData.map((p, i) => {

                return (
                    <BlogCard key={i}>
                        <TitleContent>
                            <HeaderThree header>{p.title.toString()}</HeaderThree>
                            <Hr/>
                        </TitleContent>
                        <CardInfo className="card-info">{p.description}</CardInfo>
                        <div>
                            <TitleContent>Technologies </TitleContent>
                            <TagList>
                                {p.tags.map((t, i) => {
                                    // eslint-disable-next-line default-case
                                    return <ProjectTags tag={t} i={i} key={i}/>
                                })}
                            </TagList>
                        </div>
                        <UtilityList>
                            <ExternalLinks href={p.source}>Source Code</ExternalLinks>
                        </UtilityList>
                    </BlogCard>
                );

            })}

            {numOfProjects === 6 ? <Btn onClick={showLessContent}>Show Less</Btn> :
                <Btn onClick={showMoreContent}>Show More</Btn>}
        </GridContainer>

    )
}