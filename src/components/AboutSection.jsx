import { BsStars } from "react-icons/bs";

const AboutSection = () => {
    return (
        <section id="about" className="flex bg-neutral-800 px-4 py-24 justify-center items-center">
            <div className="flex justify-center max-w-2xl lg:max-w-4xl">
                <img src="/src/assets/portrait.jpg" className="rounded-3xl w-48 max-h-56 mt-8"></img>
                <div className="flex flex-col pl-24 font-montserrat">
                    <h2 className="text-neutral-100 text-2xl font-medium">About Me</h2>
                    <p className="text-neutral-300 py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum distinctio fugit velit dolor maxime inventore a cum dolorum dolorem labore animi doloribus repudiandae voluptate nesciunt vel, reprehenderit corporis! Sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quam perferendis, commodi, perspiciatis aliquid culpa facilis consequatur voluptas repudiandae eius saepe? Impedit fugiat, minus in reprehenderit dolor ipsa quos illum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit</p>
                    <div className="flex items-center">
                        <BsStars size={16} className="text-slate-100 mr-1" />
                        <span className="text-neutral-100 font-medium">Interests: </span>
                        <p className="ml-2 text-neutral-300">Lorem, Ipsum, Piano</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;