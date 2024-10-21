const ResumeSection = () => {
    return (
        <section id="resume" className="flex items-center justify-center bg-neutral-100 px-4 py-12 md:py-24 font-montserrat">
            <div className="flex flex-col items-center justify-center max-w-screen-lg w-full">
            <div id="education" className="flex flex-col md:flex-row items-center md:items-start justify-between w-full">
                <div className="flex flex-col md:w-1/4">
                    <div className="relative inline-block pb-4">
                        <h2 className="font-bold text-xl text-neutral-800 uppercase border-b-2 border-orange-500 pb-1 inline-block">Education</h2>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start lg:w-3/4">
                    <div className="pb-8">
                        <h2 className="font-semibold text-center md:text-start text-xl text-neutral-700">BS Computer Science</h2>
                        <div className="flex items-center justify-start gap-x-2 text-sm">
                            <span>University of Houston</span>
                            <span>•</span>
                            <span>December 2025</span>
                        </div>
                    </div>
                    <h2 className="font-semibold text-xl text-neutral-700">AS Computer Science</h2>
                    <div className="flex items-center justify-start gap-x-2 text-sm">
                        <span>Austin Community College</span>
                        <span>•</span>
                        <span>December 2023</span>
                    </div>
                </div>
            </div>

            <hr className="border-t-2 border-neutral-300 my-8 w-full" />
            
            <div id="work" className="flex flex-col md:flex-row items-center md:items-start justify-between w-full">
                <div className="flex flex-col md:w-1/4">
                    <div className="relative inline-block pb-4">
                        <h2 className="font-bold text-xl text-neutral-800 uppercase border-b-2 border-orange-500 pb-1 inline-block">Work</h2>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start lg:w-3/4">
                    <h2 className="font-semibold text-center md:text-start text-xl text-neutral-700">International Game Technology IGT</h2>
                    <div className="flex items-center justify-start gap-x-2 text-sm pb-5">
                        <span>Computer Operator I</span>
                        <span>•</span>
                        <span>Jan 2020 - Sept 2021</span>
                    </div>
                    <p>Adhered to operational checklists ensuring accurate execution of daily processing, performed troubleshooting of systems and monitored networks for anomalies. Worked to develop strong and effective relationships with our customers.</p>
                </div>
            </div>
            
            <hr className="border-t-2 border-neutral-300 my-8 w-full" />
            
            <div id="skills" className="flex flex-col md:flex-row items-center md:items-start justify-between w-full">
                <div className="flex flex-col md:w-1/4">
                    <div className="relative inline-block pb-4">
                        <h2 className="font-bold text-xl text-neutral-800 uppercase border-b-2 border-orange-500 pb-1 inline-block">Skills</h2>
                    </div>
                </div>

                <div className="flex flex-col w-full md:w-3/4">
                    {/* Row 1: Frontend and Backend */}
                    <div className="flex flex-col md:flex-row justify-between gap-y-6 md:gap-y-0 md:gap-x-6 mb-8">
                        <div className="flex flex-col items-center md:w-1/2">
                            <h2 className="font-semibold text-lg text-neutral-700">Frontend development</h2>
                            <div className="flex flex-col gap-y-2 items-start w-full">
                                {/* React */}
                                <div className="flex flex-col w-full">
                                    <span className="ml-2 text-sm">React</span>
                                    <div className="h-5 overflow-hidden rounded-full bg-neutral-300">
                                        <div className="h-full rounded-full bg-orange-400 w-10/12"></div>
                                    </div>
                                </div>
                                {/* Tailwind */}
                                <div className="flex flex-col w-full">
                                    <span className="ml-2 text-sm">Tailwind</span>
                                    <div className="h-5 overflow-hidden rounded-full bg-neutral-300">
                                        <div className="h-full rounded-full bg-orange-400 w-10/12"></div>
                                    </div>
                                </div>
                                {/* Vite */}
                                <div className="flex flex-col w-full">
                                    <span className="ml-2 text-sm">Vite</span>
                                    <div className="h-5 overflow-hidden rounded-full bg-neutral-300">
                                        <div className="h-full rounded-full bg-orange-400 w-9/12"></div>
                                    </div>
                                </div>
                                {/* Typescript */}
                                <div className="flex flex-col w-full">
                                    <span className="ml-2 text-sm">Typescript</span>
                                    <div className="h-5 overflow-hidden rounded-full bg-neutral-300">
                                        <div className="h-full rounded-full bg-orange-400 w-1/2"></div>
                                    </div>
                                </div>                                    
                            </div>
                        </div>

                        <div className="flex flex-col items-center md:w-1/2">
                            <h2 className="font-semibold text-lg text-neutral-700">Backend development</h2>
                            <div className="flex flex-col gap-y-2 items-start w-full">
                                {/* Python */}
                                <div className="flex flex-col w-full">
                                    <span className="ml-2 text-sm">Python</span>
                                    <div className="h-5 overflow-hidden rounded-full bg-neutral-300">
                                        <div className="h-full rounded-full bg-orange-400 w-10/12"></div>
                                    </div>
                                </div>
                                {/* C++ */}
                                <div className="flex flex-col w-full">
                                    <span className="ml-2 text-sm">C++</span>
                                    <div className="h-5 overflow-hidden rounded-full bg-neutral-300">
                                        <div className="h-full rounded-full bg-orange-400 w-10/12"></div>
                                    </div>
                                </div>
                                {/* Node.js */}
                                <div className="flex flex-col w-full">
                                    <span className="ml-2 text-sm">Node.js</span>
                                    <div className="h-5 overflow-hidden rounded-full bg-neutral-300">
                                        <div className="h-full rounded-full bg-orange-400 w-3/4"></div>
                                    </div>
                                </div>
                                {/* Express.js */}
                                <div className="flex flex-col w-full">
                                    <span className="ml-2 text-sm">Express.js</span>
                                    <div className="h-5 overflow-hidden rounded-full bg-neutral-300">
                                        <div className="h-full rounded-full bg-orange-400 w-3/4"></div>
                                    </div>
                                </div>
                                {/* R */}
                                <div className="flex flex-col w-full">
                                    <span className="ml-2 text-sm">R</span>
                                    <div className="h-5 overflow-hidden rounded-full bg-neutral-300">
                                        <div className="h-full rounded-full bg-orange-400 w-2/3"></div>
                                    </div>
                                </div>            
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Databases and Technologies */}
                    <div className="flex flex-col md:flex-row justify-between gap-y-6 md:gap-y-0 md:gap-x-6 mb-8">
                        <div className="flex flex-col items-center md:w-1/2">
                            <h2 className="font-semibold text-lg text-neutral-700">Databases</h2>
                            <div className="flex flex-col gap-y-2 items-start w-full">
                                {/* SQLite */}
                                <div className="flex flex-col w-full">
                                    <span className="ml-2 text-sm">SQLite</span>
                                    <div className="h-5 overflow-hidden rounded-full bg-neutral-300">
                                        <div className="h-full rounded-full bg-orange-400 w-10/12"></div>
                                    </div>
                                </div>                                   
                            </div>
                        </div>

                        <div className="flex flex-col items-center md:w-1/2">
                            <h2 className="font-semibold text-lg text-neutral-700">Technologies</h2>
                            <div className="flex flex-col gap-y-2 items-start w-full">
                                {/* Linux */}
                               <div className="flex flex-col w-full">
                                    <span className="ml-2 text-sm">Linux</span>
                                    <div className="h-5 overflow-hidden rounded-full bg-neutral-300">
                                        <div className="h-full rounded-full bg-orange-400 w-3/4"></div>
                                    </div>
                                </div>
                                {/* Git */}
                               <div className="flex flex-col w-full">
                                    <span className="ml-2 text-sm">Git</span>
                                    <div className="h-5 overflow-hidden rounded-full bg-neutral-300">
                                        <div className="h-full rounded-full bg-orange-400 w-2/3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>                  
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default ResumeSection;