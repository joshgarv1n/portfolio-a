const ResumeSection = () => {
    return (
        <section id="resume" className="flex items-center justify-center bg-neutral-100 px-4 py-24 font-montserrat">
            <div className="flex flex-col items-center justify-center max-w-screen-lg w-full">
            <div id="education" className="flex justify-between w-full">
                <div className="flex flex-col lg:w-1/4">
                    <h2 className="font-bold text-xl text-neutral-800 uppercase">Education</h2>
                    <div className="border-b-2 border-orange-500 w-28 mt-1"></div>
                </div>
                <div className="flex flex-col lg:w-3/4">
                    <div className="pb-8">
                        <h2 className="font-semibold text-xl text-neutral-700">BS Computer Science</h2>
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
            
            <div id="work" className="flex justify-between w-full">
                <div className="flex flex-col lg:w-1/4">
                    <h2 className="font-bold text-xl text-neutral-800 uppercase">Work</h2>
                    <div className="border-b-2 border-orange-500 w-16 mt-1"></div>
                </div>
                <div className="flex flex-col lg:w-3/4">
                    <h2 className="font-semibold text-xl text-neutral-700">International Game Technology IGT</h2>
                    <div className="flex items-center justify-start gap-x-2 text-sm pb-5">
                        <span>Computer Operator I</span>
                        <span>•</span>
                        <span>January 2020 - September 2021</span>
                    </div>
                    <p>This is where I will discuss my role with this employer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut libero voluptatibus sit, deleniti, officiis nihil autem quaerat harum sint ex numquam temporibus recusandae minus, cupiditate odit error in placeat.</p>
                </div>
            </div>
            
            <hr className="border-t-2 border-neutral-300 my-8 w-full" />
            
            <div id="skills" className="flex justify-between w-full">
                <div className="flex flex-col lg:w-1/4">
                    <h2 className="font-bold text-xl text-neutral-800 uppercase">Skills</h2>
                    <div className="border-b-2 border-orange-500 w-16 mt-1"></div>
                </div>

                <div className="flex flex-col w-full lg:w-3/4">
                    {/* Row 1: Frontend and Backend */}
                    <div className="flex justify-between gap-x-6 mb-8">
                        <div className="flex flex-col items-center lg:w-1/2">
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

                        <div className="flex flex-col items-center lg:w-1/2">
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
                                        <div className="h-full rounded-full bg-orange-400 w-8/12"></div>
                                    </div>
                                </div>
                                {/* Express.js */}
                                <div className="flex flex-col w-full">
                                    <span className="ml-2 text-sm">Express.js</span>
                                    <div className="h-5 overflow-hidden rounded-full bg-neutral-300">
                                        <div className="h-full rounded-full bg-orange-400 w-8/12"></div>
                                    </div>
                                </div>           
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Databases and Mobile */}
                    <div className="flex justify-between gap-x-6">
                        <div className="flex flex-col items-center lg:w-1/2">
                            <h2 className="font-semibold text-lg text-neutral-700">Databases</h2>
                            <div className="flex flex-col gap-y-2 items-start w-full">
                                {/* SQLite */}
                                <div className="flex flex-col w-full">
                                    <span className="ml-2 text-sm">SQLite</span>
                                    <div className="h-5 overflow-hidden rounded-full bg-neutral-300">
                                        <div className="h-full rounded-full bg-orange-400 w-10/12"></div>
                                    </div>
                                </div>
                                {/* MySQL */}
                                <div className="flex flex-col w-full">
                                    <span className="ml-2 text-sm">MySQL</span>
                                    <div className="h-5 overflow-hidden rounded-full bg-neutral-300">
                                        <div className="h-full rounded-full bg-orange-400 w-3/4"></div>
                                    </div>
                                </div>
                                {/* MongoDB */}
                                <div className="flex flex-col w-full">
                                    <span className="ml-2 text-sm">MongoDB</span>
                                    <div className="h-5 overflow-hidden rounded-full bg-neutral-300">
                                        <div className="h-full rounded-full bg-orange-400 w-3/5"></div>
                                    </div>
                                </div>                                    
                            </div>
                        </div>

                        <div className="flex flex-col items-center lg:w-1/2">
                            <h2 className="font-semibold text-lg text-neutral-700">Mobile development</h2>
                            <div className="flex flex-col gap-y-2 items-start w-full">
                                {/* React Native */}
                                <div className="flex flex-col w-full">
                                    <span className="ml-2 text-sm">React Native</span>
                                    <div className="h-5 overflow-hidden rounded-full bg-neutral-300">
                                        <div className="h-full rounded-full bg-orange-400 w-10/12"></div>
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