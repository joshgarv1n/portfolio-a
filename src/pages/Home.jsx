import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosArrowDropdown } from "react-icons/io";
import AboutSection from "../components/AboutSection";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <section id="hero" className="relative h-screen w-screen bg-hero-img bg-cover bg-center flex flex-col justify-center items-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-neutral-50 text-8xl font-montserrat font-semibold">Josh Garvin</h1>
                    <h2 className="text-neutral-50 text-4xl font-montserrat font-semibold">Software Engineer</h2>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="https://github.com/joshgarv1n" target="_blank">
                            <FaGithub size={25} className="text-neutral-50 text-neutral-50 hover:text-orange-500 transition duration-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/josh-garvin/" target="_blank">
                            <FaLinkedin size={25} className="text-neutral-50 text-neutral-50 hover:text-orange-500 transition duration-300" />
                        </a>
                        <a href="https://x.com/joshgarv1n" target="_blank">
                            <FaXTwitter size={25} className="text-neutral-50 text-neutral-50 hover:text-orange-500 transition duration-300" />
                        </a>
                    </div>
                    <div className="flex justify-center space-x-4 mt-6">
                        <a href="" download className="flex items-center px-4 py-2 border-2 border-orange-500 text-neutral-50 rounded-full hover:bg-slate-400 hover:bg-opacity-50 hover:text-neutral-50 transition duration-300">
                            Resume <HiOutlineDownload size={20} className="ml-2" />
                        </a>
                        <a href="#contact" className="px-4 py-2 border-2 border-white text-white rounded-full hover:bg-slate-400 hover:bg-opacity-50 hover:text-white transition duration-300">
                            Contact
                        </a>
                    </div>
                </div>

                <a href="#about" className="absolute bottom-8 w-full flex justify-center">
                    <IoIosArrowDropdown size={40} className="text-white animate-bounce" />
                </a>
            </section>
            <AboutSection />
            <ResumeSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Home;