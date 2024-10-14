import { FaHardHat, FaExclamationTriangle } from "react-icons/fa";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="bg-[url('./assets/mountains-bg.jpg')] h-screen bg-cover bg-center flex flex-col">
            <div className="flex flex-col items-center pt-20 sm:pt-5">
                <h1 className="font-marker text-5xl md:text-8xl">Josh Garvin</h1>
                <h2 className= "font-marker text-3xl md:text-5xl">Software Engineer</h2>
            </div>
            <div className="flex flex-1 justify-center items-start py-24">
                <div className="flex items-center">
                    <FaExclamationTriangle className="mr-2 md:mr-4" size={25} />
                    <h2 className= "font-cinzel text-xl md:text-3xl">Under Construction</h2>
                    <FaExclamationTriangle className="ml-2 md:ml-4" size={25} />
                </div>
            </div> 
            <Footer />
        </div>
    );
};

export default Home;