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
      "experience": <Experience/>,
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
        <div id="experience" tabIndex="0" onFocus={this.changeScreen}
          className={(this.state.active_screen === "experience" ?
            " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" :
            " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
          <img className="w-3 md:w-4" alt="yash' experience" src="./themes/Yaru/status/work.svg" />
          <span className="ml-1 md:ml-2 text-gray-50">Experience</span>
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
  const education_list = [
    {
      degree: "Bachelor of Technology in Computer Science",
      college: "Assam down town University",
      duration: "2023 – 2027",
      result: "SGPA 8.5 / 10",
      logo: "images/logos/adtu.png",
      bg: "https://adtu.in/files/2025/01/10/1362955255.jpeg"
    },
    {
      degree: "Class 12ᵗʰ (PCM)",
      college: "Star Public School",
      duration: "2023",
      result: "Percentage 87%",
      logo: "images/logos/twelth.png",
      bg: "https://starpublicschool.co.in/assets/img/about_23102022.jpg"
    },
    {
      degree: "Class 10ᵗʰ",
      college: "Star Public School",
      duration: "2021",
      result: "Percentage 86.3%",
      logo: "images/logos/ten.png",
      bg: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nopgxFUdBNmhb8MkJrjO-N-YG2zMLrxq2V9LvBr9AMaUqA52Ek1N5iSFelqiTNyz4098AdmYnpB-sXpW8_smZgdre_1vVcoHwwpaJ7-iWuQ6wlSULidVL5Ovr1saKty0s806xRS=s1360-w1360-h1020-rw"
    }
  ];

  return (
    <>
      <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Education
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      <div className="relative flex flex-col items-start w-full px-4">
        {/* Vertical Timeline */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700 opacity-50"></div>

        {education_list.map((edu, index) => (
          <div
            key={index}
            className="relative flex items-start gap-4 mb-6 md:mb-8 w-full group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-5 mt-2.5 w-3 h-3 bg-orange-400 rounded-full group-hover:scale-125 transition-all duration-300 shadow-md"></div>

            {/* Card */}
            <div className="ml-10 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-5 rounded-2xl w-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg shadow-black/5">

              {/* Faint Background Image */}
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-all duration-300"
                style={{
                  backgroundImage: `url(${edu.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.8) blur(1px)"
                }}
              ></div>

              {/* Foreground Content */}
              <div className="relative z-10 flex items-start">
                <img
                  src={edu.logo}
                  alt={edu.college}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-md bg-white/10 p-1"
                />
                <div className="md:ml-4 mt-2 md:mt-0">
                  <div className="text-lg md:text-xl font-semibold text-white">
                    {edu.college}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {edu.degree}
                  </div>
                  <div className="text-sm text-gray-400">{edu.duration}</div>
                  <div className="text-sm text-gray-200 font-bold mt-1">
                    {edu.result}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


function Skills() {
  return (
    <>
      <div className="relative font-medium text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {/* Background wrapper */}
      <div className="relative w-10/12 rounded-xl overflow-hidden mt-6 p-4 md:p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/70 border border-gray-700/30 backdrop-blur-md shadow-lg">
        <img
          src="https://wallpapercave.com/wp/wp9259627.jpg"
          alt="skills-bg"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />

        <div className="relative z-10">
          <ul className="tracking-tight text-sm md:text-base w-full emoji-list text-gray-300">
            <li className="list-arrow text-sm md:text-base mt-2 leading-tight tracking-tight">
              I specialize in cybersecurity, programming, and web development with practical exposure to tools and platforms.
            </li>
            <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
              <div>
                My core areas are{" "}
                <strong className="text-ubt-gedit-orange">
                  Cyber Security, Programming, Web Development & Tools/Platforms
                </strong>
              </div>
            </li>
            <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
              <div>Here are my most frequently used technologies:</div>
            </li>
          </ul>

          <div className="w-full flex mt-6">
            <div className="text-sm text-center md:text-base w-1/2 font-bold text-white">
              Core Skills
            </div>
            <div className="text-sm text-center md:text-base w-1/2 font-bold text-white">
              Tools & Platforms
            </div>
          </div>

          <div className="w-full flex justify-center items-start font-bold text-center">
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap justify-center items-start w-full mt-2">
                {[
                  "Kali%20Linux-557CFF?logo=kali-linux",
                  "Metasploit-black",
                  "Nmap-3B82F6?logo=nmap",
                  "Hydra-4C1",
                  "Burp%20Suite-DB3A34?logo=burpsuite",
                  "Wireshark-007ACC?logo=wireshark",
                  "OSINT-0EA5A4",
                  "CTF-Challenges-8B5CF6",
                  "C%2B%2B-00599C?logo=c%2B%2B",
                  "Java-007396?logo=java",
                  "Python-3776AB?logo=python",
                  "Bash-121011?logo=gnu-bash",
                  "HTML5-%23E44D27?logo=html5",
                  "CSS3-1572B6?logo=css3",
                  "JavaScript-%23F7DF1C?logo=javascript&logoColor=black",
                  "SQL-003B57?logo=mysql",
                  "Node.js-339933?logo=node.js",
                  "Bootstrap-563D7C?logo=bootstrap",
                  "API%20Integration-0EA5A4",
                ].map((badge, i) => (
                  <img
                    key={i}
                    className="m-1 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_#00ffff80]"
                    src={`https://img.shields.io/badge/${badge}&style=flat&logoColor=white`}
                    alt={badge}
                  />
                ))}
              </div>
            </div>

            <div className="px-2 flex flex-wrap items-start w-1/2">
              <div className="flex flex-wrap justify-center items-start w-full mt-2">
                {[
                  "Git-F05032?logo=git",
                  "GitHub-181717?logo=github",
                  "Postman-FF6C37?logo=postman",
                  "VS%20Code-007ACC?logo=visual-studio-code",
                  "IntelliJ-000000?logo=intellij-idea",
                  "Cisco%20Packet%20Tracer-FF7A00",
                  "Linux%20Environments-0078D6?logo=linux",
                ].map((badge, i) => (
                  <img
                    key={i}
                    className="m-1 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_#00ffff80]"
                    src={`https://img.shields.io/badge/${badge}&style=flat&logoColor=white`}
                    alt={badge}
                  />
                ))}
              </div>
            </div>
          </div>

          <ul className="tracking-tight text-sm md:text-base w-full emoji-list mt-6 text-gray-300">
            <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
              <span>And of course,</span>
              <img
                className="inline ml-1"
                src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff"
                alt="Linux"
              />
              <span> — always exploring new tools & techniques.</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function Experience() {
  const experience_list = [
    {
      title: "Cyber Security Intern",
      company: "Elythra Edufyi Tech Solutions",
      duration: "Jul 2025 – Sep 2025 · 3 mos",
      location: "India · Remote",
      skills: "CTF, Metasploit, Nmap, Wireshark, Kali Linux, Burp Suite, OSINT, Vulnerability Analysis",
      certificate: "https://media.licdn.com/dms/image/v2/D4D2DAQGF2biPdO00Vw/profile-treasury-document-cover-images_800/B4DZnx2y22JMA8-/0/1760699300575?e=1761307200&v=beta&t=SWt0Md19GEWNa61sxirKaWfZznMSD7P3wGparxArxFg"
    },
    {
      title: "Network Engineer Intern",
      company: "Star Cement Ltd.",
      duration: "Jul 2025 – Aug 2025 · 2 mos",
      location: "Meghalaya, India · On-site",
      skills: "Networking, Cisco Networking, VLANs, Packet Tracer, Troubleshooting",
      certificate: "https://media.licdn.com/dms/image/v2/D4D22AQEe_XGG_RWY9w/feedshare-shrink_800/B4DZhm3xA3HsAg-/0/1754072555715?e=1762387200&v=beta&t=DG2nOWkbO_WInaVVKhNDuGgLLKqEnrCsEVD1COTywH0"
    },
    {
      title: "Cyber Security Intern",
      company: "Academor",
      duration: "Nov 2023 – Jan 2024 · 3 mos",
      location: "India · Remote",
      skills: "Kali Linux, Vulnerability Scanning, Network Security, Linux Environment",
      certificate: "https://media.licdn.com/dms/image/v2/D4D2DAQHvfVHDB-I3Qw/profile-treasury-document-cover-images_800/B4DZnx3Zr3IAA8-/0/1760699458420?e=1761307200&v=beta&t=tkTBS_2Anm7phC6HAkCaPM81GCmgSxYiulRzW7gqap4"
    },
  ];

  return (
    <>
      <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Experience
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center px-4">
        {experience_list.map((exp, index) => (
          <div
            key={index}
            className="w-full md:w-11/12 my-2 p-3 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5"
          >
            <div className="flex flex-wrap justify-between items-center">
              <div className="text-base md:text-lg font-bold">{exp.title}</div>
              <div className="text-gray-300 text-sm font-light">{exp.duration}</div>
            </div>

            <div className="text-sm text-gray-400 mt-0.5">{exp.company}</div>
            <div className="text-sm text-gray-400">{exp.location}</div>

            <div className="text-sm text-gray-100 mt-2 leading-snug">
              {exp.skills}
            </div>

            <div className="mt-3">
              <a
                href={exp.certificate}
                target="_blank"
                rel="noreferrer"
                className="block w-max px-3 py-1 border border-gray-50 border-opacity-10 text-white rounded-md text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}



function Projects() {
  const project_list = [
    {
      name: "UbuntuOS Portfolio",
      date: "Sept 2025",
      link: "https://github.com/yashsarkar164/YashPortfolio",
      live: "https://yashsarkar-portfolio.vercel.app/",
      description: [
        "Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js & Tailwind CSS",
      ],
      domains: ["javascript", "next.js", "tailwindcss"]
    },
    {
      name: "Audiovate",
      date: "Oct 2025",
      link: "https://github.com/yashsarkar164/Audiovate",
      live: "https://audiovate.vercel.app/",
      description: [
        "Converts long PDF documents into audiobooks so you can listen instead of read — great for students and professionals who learn on the go.",
      ],
      domains: ["typescript", "javascript"]
    },
    {
      name: "CrackClock",
      date: "Jul 2025",
      link: "https://github.com/yashsarkar164/CrackClock",
      live: "https://crack-clock.vercel.app/",
      description: [
        "Checks password strength and estimates how long it would take to crack a given password, with clear feedback and attack-type breakdown."
      ],
      domains: ["typescript", "javascript"]
    },
    {
      name: "ImageHunt",
      date: "Apr 2025",
      link: "https://github.com/yashsarkar164/ImageHunt",
      live: "https://yashsarkar164.github.io/ImageHunt/",
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
    "fullstack": "indigo-500",
    "typescript": "blue-600",
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
                {project.live && (
                  <div className="mt-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full text-center px-3 py-2 border border-gray-50 border-opacity-10 text-white rounded-md text-sm font-medium 
                 hover:bg-white/10 hover:text-white transition-all duration-200"
                    >
                      LIVE
                    </a>
                  </div>
                )}

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