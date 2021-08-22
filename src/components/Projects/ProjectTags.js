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

export const ProjectTags = ({tag,key}) => {

    switch (tag) {
        case "Java":
            return <FaJava key={key} style={{height: "50px", width: "50px"}}/>

        case "Python":
            return <FaPython key={key} style={{height: "50px", width: "50px"}}/>

        case "React":
            return <FaReact key={key} style={{height: "50px", width: "50px"}}/>

        case "Javascript":
            return <SiJavascript key={key} style={{height: "50px", width: "50px"}}/>
        case "Solidity":
            return <FaEthereum key={key} style={{height: "50px", width: "50px"}}/>
        case "Discord.py":
            return <FaDiscord key={key} style={{height: "50px", width: "50px"}}/>
        case "node.js":
            return <FaNodeJs key={key} style={{height: "50px", width: "50px"}}/>
        case "sql":
            return <SiMysql key={key} style={{height: "50px", width: "50px"}}/>
        case "html":
            return <FaHtml5 key={key} style={{height: "50px", width: "50px"}}/>

    }
}

export default ProjectTags;