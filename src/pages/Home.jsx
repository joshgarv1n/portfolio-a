import { FaGithub, FaStackOverflow, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { BsStars } from "react-icons/bs";

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
            <section id="about" className="flex bg-zinc-800 px-4 py-16 justify-center items-center">
                <div className="flex justify-center max-w-4xl">
                    <img src="/src/assets/portrait.jpg" className="rounded-3xl w-48"></img>
                    <div className="flex flex-col pl-24">
                        <h2 className="text-slate-100">About Me</h2>
                        <p className="text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum distinctio fugit velit dolor maxime inventore a cum dolorum dolorem labore animi doloribus repudiandae voluptate nesciunt vel, reprehenderit corporis! Sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quam perferendis, commodi, perspiciatis aliquid culpa facilis consequatur voluptas repudiandae eius saepe? Impedit fugiat, minus in reprehenderit dolor ipsa quos illum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit</p>
                        <div className="flex items-center">
                            <BsStars size={16} className="text-slate-100 mr-1" />
                            <span className="text-slate-100">Interests: </span>
                            <p className="ml-2 text-slate-300">Lorem, Ipsum, Piano</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="resume" className="bg-zinc-50">Resume</section>
            <section id="contact" className="bg-zinc-500">Contact</section>
        </div>
    );
};

export default Home;