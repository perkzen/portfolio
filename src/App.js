import './App.css';
import Theme from "./styles/theme";
import {Layout} from "./layout/Layout";
import {Section} from "./styles/GlobalComponents";
import Hero from "./components/Hero/Hero";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
    return (
        <div>
            <Theme>
                <Layout>
                    <Section grid>
                        <Hero/>
                        <BackgroundImage/>
                    </Section>
                    <Projects/>
                    <Technologies/>
                    <AboutMe/>
                </Layout>
            </Theme>
        </div>
    );
}

export default App;
