import { LuMail } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactForm from "./ContactForm";

const ContactSection = () => {
    return (
        <section id="contact" className="bg-neutral-800 text-neutral-300 px-4 py-16 font-montserrat">
            <div className="mx-auto max-w-screen-lg">
                <div className="flex flex-col gap-6">
                    {/* Row 1: Get in touch */}
                    <div className="flex items-center gap-6">
                        <LuMail size={60} className="text-white" />
                        <h2 className="text-white text-2xl font-medium">Get in touch.</h2>
                    </div>
                    {/* Row 2: Form and Social Media */}
                    <div className="flex w-full gap-6">
                        {/* Contact Form */}
                        <ContactForm />

                        {/* Socials */}
                        <div className="flex flex-col w-1/2 gap-y-4">
                            <p>Thanks for visiting! Feel free to leave a message here, explore my <a href="#" className="font-semibold hover:underline">projects</a>, or download my <a href="./public/resume.pdf" download className="font-semibold hover:underline">resume</a>.</p>
                            <div className="flex items-center gap-x-3">
                                <LuMail size={20} className="text-white" />
                                <a href="mailto:jgarvin.dev@gmail.com?subject=Portfolio Contact" className="hover:text-orange-500">jgarvin.dev@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <FaLinkedin size={20} className="text-white" />
                                <a href="https://www.linkedin.com/in/josh-garvin/" className="hover:text-orange-500" target="_blank">josh-garvin</a>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <FaGithub size={20} className="text-white" />
                                <a href="https://github.com/joshgarv1n" className="hover:text-orange-500" target="_blank">joshgarv1n</a>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <FaXTwitter size={20} className="text-white" />
                                <a href="https://x.com/joshgarv1n" className="hover:text-orange-500" target="_blank">@joshgarv1n</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;