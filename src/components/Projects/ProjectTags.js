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

export const ProjectTags = ({tag,i}) => {

    // eslint-disable-next-line default-case
    switch (tag) {
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
}

export default ProjectTags;