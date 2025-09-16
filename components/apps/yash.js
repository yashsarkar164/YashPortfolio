import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutYash extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", 
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about yash" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="yash' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="yash' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="yash' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="yash's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutYash;

export const displayAboutYash = () => {
    return <AboutYash />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Yash Sarkar Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Yash Sarkar</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Computer Science Student!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">Btech Student</span> currently pursuing Computer Science. I've completed my 3 months internship as a Cyber Security Intern, and now I'm looking for full-time cyber security roles!  ( Hit me up <a className='text-underline' href='mailto:yashsarkar165@gmail.com'><u>@yashsarkar165@gmail.com</u></a> :) )</li>
                <li className=" mt-3 list-building">Also I enjoy building awesome websites/softwares . </li>
                <li className=" mt-3 list-time"> When I am not coding my next project/solving machines, I like to spend my time reading books, playing third-person video games or watching <a href="https://www.youtube.com/@Sidemen" target="_blank" rel="noreferrer" className="text-blue-500">Sidemen</a> videos.</li>
                <li className=" mt-3 list-star">  I'm also interested in learning about AI, Networking, and exploring cool open-source tools.</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Assam down town University
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2023 - 2027</div>
                    <div className=" text-sm md:text-base">Computer Science</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">SGPA &nbsp; 8.5/10</div>
                </li>
                <li className="list-disc">
                    <div className=" text-lg md:text-xl mt-4 text-left font-bold leading-tight">
                        Class 12<sup>th</sup>
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2023</div>
                    <div className=" text-sm md:text-base">PCM</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentage &nbsp; 87%</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 10<sup>th</sup>
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2021</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentage &nbsp; 86.3%</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
  return (
    <>
      <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      <ul className="tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          I specialize in cybersecurity, programming, and web development with practical exposure to tools and platforms.
        </li>
        <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            My core areas are <strong className="text-ubt-gedit-orange">Cyber Security, Programming, Web Development & Tools/Platforms</strong>
          </div>
        </li>
        <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>Here are my most frequently used technologies:</div>
        </li>
      </ul>

      <div className="w-full md:w-10/12 flex mt-4">
        <div className="text-sm text-center md:text-base w-1/2 font-bold">Core Skills</div>
        <div className="text-sm text-center md:text-base w-1/2 font-bold">Tools & Platforms</div>
      </div>

      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img className="m-1" src="https://img.shields.io/badge/Kali%20Linux-557CFF?style=flat&logo=kali-linux&logoColor=white" alt="Kali Linux" />
            <img className="m-1" src="https://img.shields.io/badge/Metasploit-black?style=flat" alt="Metasploit" />
            <img className="m-1" src="https://img.shields.io/badge/Nmap-3B82F6?style=flat&logo=nmap&logoColor=white" alt="Nmap" />
            <img className="m-1" src="https://img.shields.io/badge/Hydra-4C1?style=flat" alt="Hydra" />
            <img className="m-1" src="https://img.shields.io/badge/Burp%20Suite-DB3A34?style=flat&logo=burpsuite&logoColor=white" alt="Burp Suite" />
            <img className="m-1" src="https://img.shields.io/badge/Wireshark-007ACC?style=flat&logo=wireshark&logoColor=white" alt="Wireshark" />
            <img className="m-1" src="https://img.shields.io/badge/OSINT-0EA5A4?style=flat" alt="OSINT" />
            <img className="m-1" src="https://img.shields.io/badge/CTF-Challenges-8B5CF6?style=flat" alt="CTF Challenges" />
            <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="C++" />
            <img className="m-1" src="https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white" alt="Java" />
            <img className="m-1" src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" alt="Python" />
            <img className="m-1" src="https://img.shields.io/badge/Bash-121011?style=flat&logo=gnu-bash&logoColor=white" alt="Bash" />
            <img className="m-1" src="https://img.shields.io/badge/HTML5-%23E44D27?style=flat&logo=html5&logoColor=white" alt="HTML5" />
            <img className="m-1" src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3" />
            <img className="m-1" src="https://img.shields.io/badge/JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=black" alt="JavaScript" />
            <img className="m-1" src="https://img.shields.io/badge/SQL-003B57?style=flat&logo=mysql&logoColor=white" alt="SQL" />
            <img className="m-1" src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js" />
            <img className="m-1" src="https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white" alt="Bootstrap" />
            <img className="m-1" src="https://img.shields.io/badge/API%20Integration-0EA5A4?style=flat" alt="API Integration" />
          </div>
        </div>

        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img className="m-1" src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white" alt="Git" />
            <img className="m-1" src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub" />
            <img className="m-1" src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white" alt="Postman" />
            <img className="m-1" src="https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white" alt="VS Code" />
            <img className="m-1" src="https://img.shields.io/badge/IntelliJ-000000?style=flat&logo=intellij-idea&logoColor=white" alt="IntelliJ" />
            <img className="m-1" src="https://img.shields.io/badge/Cisco%20Packet%20Tracer-FF7A00?style=flat" alt="Cisco Packet Tracer" />
            <img className="m-1" src="https://img.shields.io/badge/Linux%20Environments-0078D6?style=plastic&logo=linux&logoColor=white" alt="Linux environments" />
          </div>
        </div>
      </div>

      <ul className="tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
        <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <span>And of course,</span>
          <img className="inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="Linux" />
          <span> — always exploring new tools & techniques.</span>
        </li>
      </ul>
    </>
  )
}



function Projects() {
  const project_list = [
    {
      name: "UbuntuOS Portfolio",
      date: "Apr 2021",
      link: "https://github.com/yashsarkar164/YashPortfolio",
      description: [
        "Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js & Tailwind CSS",
      ],
      domains: ["javascript", "next.js", "tailwindcss"]
    },
    {
      name: "ImageHunt",
      date: "Apr 2025",
      link: "https://github.com/yashsarkar164/ImageHunt",
      description: [
        "Developed a responsive web app that allows users to search for images using a public API (e.g., Unsplash API), displaying results dynamically with real-time tracking of user queries and seamless UI design."
      ],
      domains: ["javascript", "api", "frontend"]
    },
    {
      name: "SGrade",
      date: "Nov 2024",
      link: "https://github.com/yashsarkar164/SGrade",
      description: [
        "Built a full-stack web app using HTML, CSS, JavaScript, Node.js and a database, featuring secure login, a teacher dashboard to manage grades, and a student portal to view them."
      ],
      domains: ["javascript", "node.js", "database", "fullstack"]
    }
  ];

  const tag_colors = {
    "javascript": "yellow-300",
    "next.js": "purple-600",
    "tailwindcss": "blue-300",
    "api": "green-500",
    "frontend": "blue-400",
    "node.js": "green-600",
    "database": "red-500",
    "fullstack": "indigo-500"
  };

  return (
    <>
      <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {
        project_list.map((project, index) => {
          return (
            <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
              <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                <div className="flex flex-wrap justify-between items-center">
                  <div className='flex justify-center items-center'>
                    <div className="text-base md:text-lg mr-2">{project.name}</div>
                  </div>
                  <div className="text-gray-300 font-light text-sm">{project.date}</div>
                </div>
                <ul className="tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                  {
                    project.description.map((desc, i) => {
                      return <li key={i} className="list-disc mt-1 text-gray-100">{desc}</li>;
                    })
                  }
                </ul>
                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                  {
                    (project.domains ?
                      project.domains.map((domain, i) => {
                        return <span key={i} className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}>{domain}</span>
                      })
                      : null)
                  }
                </div>
              </div>
            </a>
          )
        })
      }
    </>
  )
}


function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Yash-resume.pdf" title="Yash Sarkar resume" frameBorder="0"></iframe>
    )
}