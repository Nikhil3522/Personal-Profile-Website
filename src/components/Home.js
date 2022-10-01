import { useEffect } from "react";
import image from "../Assets/image.png";
import '../style/Home.css';
import { Typewriter } from 'react-simple-typewriter';
import Aos from "aos";
import "aos/dist/aos.css";

function Home(){
    useEffect(() => {
        Aos.init({duration: 1200})
    }, [])
    return(
        <div className="home">
            <div className="left-Container">
                <h1 className="intro"> 
                <Typewriter
                    words={['My name is Nikhil Kumar Jha. I am a full stack developer.']}
                    cursor
                    cursorStyle='_'
                    typeSpeed={60}
                /></h1>
            </div>
            <div className="right-Container" data-aos="fade-left">
                <img className="image" src={image} />
            </div>
        </div>
    )
}

export default Home;