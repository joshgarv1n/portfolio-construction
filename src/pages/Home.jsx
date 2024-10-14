import { FaHardHat, FaExclamationTriangle } from "react-icons/fa";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="bg-[url('./assets/mountains-bg.jpg')] h-screen bg-cover bg-center">
            <div className="flex justify-center items-center flex-col pt-36">
                <div className="flex flex-col items-start transform -translate-x-48">
                    <h1 className="font-marker text-8xl">Josh Garvin</h1>
                    <h2 className= "font-marker text-5xl">Software Engineer</h2>
                </div>
                <div className="flex justify-center items-center pt-60">
                    <FaExclamationTriangle className="mr-4" size={30} />
                    <h2 className= "font-cinzel text-5xl">Under Construction</h2>
                    <FaExclamationTriangle className="ml-4" size={30} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;