import Carousel from "react-elastic-carousel";
import {BlogCard, CardInfo, ExternalLinks, HeaderThree, Hr, TagList, TitleContent, UtilityList} from "./ProjectsStyles";
import {
    FaDiscord,
    FaEthereum,
    FaHtml5,
    FaJava,
    FaNodeJs,
    FaPython,
    FaReact,
    SiJavascript,
    SiMysql
} from "react-icons/all";
import {projects} from '../../constants/constants';

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
                                switch (t) {
                                    case "Java":
                                        return <FaJava key={i} style={{height: "50px", width: "50px"}}/>

                                    case "Python":
                                        return <FaPython key={i} style={{height: "50px", width: "50px"}}/>

                                    case "React":
                                        return <FaReact key={i} style={{height: "50px", width: "50px"}}/>

                                    case "Javascript":
                                        return <SiJavascript key={i} style={{height: "50px", width: "50px"}}/>
                                    case "Solidity":
                                        return <FaEthereum key={i} style={{height: "50px", width: "50px"}}/>
                                    case "Discord.py":
                                        return <FaDiscord key={i} style={{height: "50px", width: "50px"}}/>
                                    case "node.js":
                                        return <FaNodeJs key={i} style={{height: "50px", width: "50px"}}/>
                                    case "sql":
                                        return <SiMysql key={i} style={{height: "50px", width: "50px"}}/>
                                    case "html":
                                        return <FaHtml5 key={i} style={{height: "50px", width: "50px"}}/>
                                }
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