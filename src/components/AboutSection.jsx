import { BsStars } from "react-icons/bs";

const AboutSection = () => {
    return (
        <section id="about" className="flex bg-neutral-800 px-4 py-12 sm:py-24 justify-center items-center overflow-x-hidden w-screen w-full">
            <div className="flex flex-col md:flex-row items-center justify-center max-w-2xl lg:max-w-4xl">
                <img src="/portrait.jpg" className="rounded-3xl w-40 sm:w-48 max-h-56 mb-6 md:mb-0"></img>
                <div className="flex flex-col p-0 sm:p-4 md:pl-24 font-montserrat">
                    <h2 className="text-neutral-100 text-2xl font-medium">About Me</h2>
                    <p className="text-neutral-300 py-4">Hi! I’m Josh, a computer science student at the University of Houston and Software Engineer currently working in Automation. I’m passionate about using technology to solve real-world problems, whether that’s building effective automation solutions or developing robust, user-friendly applications. I enjoy working with tools like React and Node.js to create projects that are both functional and fun. My work has taught me to always look for smarter, more efficient ways to tackle challenges, and I love the continuous learning that comes with it.</p>
                    <div className="flex items-center">
                        <BsStars size={16} className="text-slate-100 mr-1" />
                        <span className="text-neutral-100 font-medium">Interests: </span>
                        <p className="ml-2 text-neutral-300">Web Development, Automation</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;