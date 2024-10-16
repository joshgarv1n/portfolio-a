import { FaGithub, FaStackOverflow, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import AboutSection from "../components/AboutSection";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <section id="hero" className="h-screen w-screen bg-hero-img bg-cover bg-center flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-gray-50">I'm Josh Garvin.</h1>
                    <div className="flex justify-center">
                        <a href="">
                            <FaGithub size={25} className="text-slate-50" />
                        </a>
                        <a href="">
                            <FaStackOverflow size={25} className="text-slate-50" />
                        </a>
                        <a href="">
                            <FaLinkedin size={25} className="text-slate-50" />
                        </a>
                        <a href="">
                            <FaInstagram size={25} className="text-slate-50" />
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <a href="" download className="flex items-center px-4 py-2 border-2 border-orange-500 text-white rounded-full hover:bg-slate-400 hover:bg-opacity-50 hover:text-white transition duration-300">
                            Resume <HiOutlineDownload size={20} className="ml-2" />
                        </a>
                        <a href="#contact" className="px-4 py-2 border-2 border-white text-white rounded-full hover:bg-slate-400 hover:bg-opacity-50 hover:text-white transition duration-300">
                            Contact
                        </a>
                    </div>
                </div>
            </section>
            <AboutSection />
            <ResumeSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Home;