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
      "machines": <Machines />,
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
        <div id="machines" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "machines" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
          <img className=" w-3 md:w-4" alt="yash' machines" src="./themes/Yaru/status/machines.svg" />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Machines</span>
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
      {/* Bitmoji Section */}
      <div className="relative flex justify-center items-center my-6 md:my-10">
        <div className="relative group">
          <div className="absolute -inset-3 bg-gradient-to-tr from-fuchsia-500 via-purple-600 to-blue-500 rounded-full blur-xl opacity-30 group-hover:opacity-70 transition-all duration-700"></div>
          <div className="relative w-28 md:w-36 rounded-full overflow-hidden border border-white/20 shadow-lg shadow-fuchsia-500/30 hover:scale-110 transition-transform duration-700 ease-out">
            <img
              className="w-full"
              src="./images/logos/bitmoji.png"
              alt="Yash Sarkar Logo"
            />
          </div>
        </div>
      </div>

      {/* Intro Text */}
      <div className="mt-4 md:mt-6 text-lg md:text-2xl text-center leading-snug tracking-tight">
        <div>
          hey there, i'm{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-orange-300 drop-shadow-md">
            Yash Sarkar
          </span>
        </div>
        <div className="font-normal mt-1 text-gray-200">
          a{" "}
          <span className="text-pink-500 font-semibold">
            Computer Science Student
          </span>{" "}
          & Cyber Security Enthusiast.
        </div>
      </div>
      <div className="mt-6 md:my-10 relative pt-px bg-gradient-to-r from-pink-400 via-white to-blue-400 w-36 md:w-56 mx-auto rounded-full">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <div className="relative mt-6 md:mt-10 w-11/12 md:w-3/4 mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg shadow-black/10 hover:shadow-pink-500/10 transition-all duration-700 ease-out hover:scale-[1.03]">
        <ul className="leading-relaxed tracking-tight text-sm md:text-base text-gray-200 space-y-6">
          <li>
            <span className="text-pink-400">💻</span>{" "}
            I'm a <span className="font-medium">B.Tech student</span> in{" "}
            <span className="text-blue-400 font-semibold">
              Computer Science
            </span>
            . I’ve completed a{" "}
            <span className="text-blue-400 font-semibold">
              3-month Cyber Security Internship
            </span>{" "}
            and am now exploring full-time cyber security roles.
            <br />
            (Reach me at{" "}
            <a
              className="text-orange-400 hover:text-pink-300 underline transition-colors"
              href="mailto:yashsarkar165@gmail.com"
            >
              yashsarkar165@gmail.com
            </a>
            )
          </li>

          <li>
            <span className="text-orange-400">⚙️</span>{" "}
            I love{" "}
            <span className="font-semibold">building websites</span> and tools
            that solve real-world problems.
          </li>

          <li>
            <span className="text-blue-400">🎮</span>{" "}
            When I'm not coding or solving machines, you’ll find me reading books,
            playing third-person games, or watching{" "}
            <a
              href="https://www.youtube.com/@Sidemen"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              Sidemen
            </a>{" "}
            videos.
          </li>

          <li>
            <span className="text-purple-400">🚀</span>{" "}
            I'm also deeply interested in learning about{" "}
            <span className="text-pink-400 font-medium">AI</span>,{" "}
            <span className="text-blue-300 font-medium">Networking</span>, and
            exploring cool open-source tools. 
          </li>

          <li>
            <span className="text-red-500">🏎️</span>{" "}
            Oh, and I’m a massive{" "}
            <span className="text-red-400 font-semibold">Max Verstappen</span>{" "}
            -fan and the thrill of Formula 1. Let's just say...{" "}
            <span className="italic text-orange-300">
              "SIMPLY LOVELY"
            </span>
          </li>
        </ul>
      </div>
    </>
  );
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
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400/80 via-gray-600/60 to-transparent opacity-70"></div>

        {education_list.map((edu, index) => (
          <div
            key={index}
            className="relative flex items-start gap-4 mb-6 md:mb-8 w-full group"
          >
            {/* Timeline Dot with Pulse */}
            <div className="absolute left-5 mt-2.5 w-3 h-3 bg-orange-400 rounded-full shadow-[0_0_12px_rgba(255,165,0,0.7)] group-hover:scale-125 transition-all duration-300 animate-pulse"></div>

            {/* Card */}
            <div className="ml-10 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-5 rounded-2xl w-full hover:scale-[1.03] hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-500 ease-out shadow-lg shadow-black/10">

              {/* Faint Background Image */}
              <div
                className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.22] transition-all duration-700 rounded-2xl"
                style={{
                  backgroundImage: `url(${edu.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.85) blur(1px)"
                }}
              ></div>

              {/* Foreground Content */}
              <div className="relative z-10 flex items-start">
                <img
                  src={edu.logo}
                  alt={edu.college}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-md bg-white/10 p-1 shadow-inner"
                />
                <div className="md:ml-4 mt-2 md:mt-0">
                  <div className="text-lg md:text-xl font-semibold text-white group-hover:text-orange-300 transition-all duration-300">
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
      certificate: "https://drive.google.com/file/d/1cv1YuIsjACA447LcaNz19-ZniK_UHgY-/view?usp=drive_link",
      bgImage: "https://wallpapercave.com/wp/wp15116909.webp",
    },
    {
      title: "Network Engineer Intern",
      company: "Star Cement Ltd.",
      duration: "Jul 2025 · 1 mos",
      location: "Meghalaya, India · On-site",
      skills: "Networking, Cisco Networking, VLANs, Packet Tracer, Troubleshooting",
      certificate: "https://media.licdn.com/dms/image/v2/D4D22AQEe_XGG_RWY9w/feedshare-shrink_800/B4DZhm3xA3HsAg-/0/1754072555715?e=1762387200&v=beta&t=DG2nOWkbO_WInaVVKhNDuGgLLKqEnrCsEVD1COTywH0",
      bgImage: "https://wallpapercave.com/wp/wp2044767.jpg",
    },
    {
      title: "Cyber Security Intern",
      company: "Academor",
      duration: "Nov 2023 · 1 mos",
      location: "India · Remote",
      skills: "Kali Linux, Vulnerability Scanning, Network Security, Linux Environment",
      certificate: "https://drive.google.com/file/d/1sZc4goi0I8dRKl-DZnckxc01EocD9Lev/view?usp=drive_link",
      bgImage: "https://wallpapercave.com/wp/wp15361052.jpg",
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
            className="relative w-full md:w-11/12 my-3 p-4 rounded-lg overflow-hidden border border-gray-50 border-opacity-10 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10"
          >
            
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{
                backgroundImage: `url(${exp.bgImage})`,
              }}
            ></div>

              
            <div className="relative z-10">
              <div className="flex flex-wrap justify-between items-center">
                <div className="text-base md:text-lg font-bold text-white drop-shadow-md">{exp.title}</div>
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
      domains: ["javascript", "next.js", "tailwindcss"],
      image: "images/logos/ubuntu.png",
    },
    {
      name: "Audiovate",
      date: "Oct 2025",
      link: "https://github.com/yashsarkar164/Audiovate",
      live: "https://audiovate.vercel.app/",
      description: [
        "Converts long PDF documents into audiobooks so you can listen instead of read — great for students and professionals who learn on the go.",
      ],
      domains: ["typescript", "javascript"],
      image: "https://wallpapercave.com/uwp/uwp4504049.jpeg",
    },
    {
      name: "CrackClock",
      date: "Jul 2025",
      link: "https://github.com/yashsarkar164/CrackClock",
      live: "https://crack-clock.vercel.app/",
      description: [
        "Checks password strength and estimates how long it would take to crack a given password, with clear feedback and attack-type breakdown."
      ],
      domains: ["typescript", "javascript"],
      image: "https://wallpapercave.com/wp/wp10328415.jpg",
    },
    {
      name: "ImageHunt",
      date: "Apr 2025",
      link: "https://github.com/yashsarkar164/ImageHunt",
      live: "https://yashsarkar164.github.io/ImageHunt/",
      description: [
        "Developed a responsive web app that allows users to search for images using a public API (e.g., Unsplash API), displaying results dynamically with real-time tracking of user queries and seamless UI design."
      ],
      domains: ["javascript", "api", "frontend"],
      image: "images/logos/imagehunt.png",
    },
    {
      name: "SGrade",
      date: "Nov 2024",
      link: "https://github.com/yashsarkar164/SGrade",
      live: "https://yashsarkar164.github.io/SGrade/",
      description: [
        "Built a full-stack web app using HTML, CSS, JavaScript, Node.js and a database, featuring secure login, a teacher dashboard to manage grades, and a student portal to view them."
      ],
      domains: ["javascript", "node.js", "database", "fullstack"],
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=80",
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

      {project_list.map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="flex w-full flex-col px-4 relative group"
        >
          <div
            className="absolute inset-0 opacity-3 group-hover:opacity-25 transition-opacity duration-500 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>

          <div className="relative w-full py-3 px-4 my-3 border border-gray-50 border-opacity-10 rounded-lg 
                          backdrop-blur-md bg-black/30 transition-all duration-500 transform group-hover:scale-[1.03] group-hover:shadow-lg group-hover:shadow-gray-800/40">

            <div className="flex flex-wrap justify-between items-center">
              <div className="flex justify-center items-center">
                <div className="text-base md:text-lg mr-2 font-semibold text-white group-hover:text-blue-300 transition-all duration-300">
                  {project.name}
                </div>
              </div>
              <div className="text-gray-300 font-light text-sm">{project.date}</div>
            </div>

            <ul className="tracking-normal leading-tight text-sm font-light ml-4 mt-2">
              {project.description.map((desc, i) => (
                <li key={i} className="list-disc mt-1 text-gray-100">
                  {desc}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-start justify-start text-xs py-2">
              {project.domains &&
                project.domains.map((domain, i) => (
                  <span
                    key={i}
                    className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} 
                    m-1 rounded-full bg-${tag_colors[domain]}/10`}
                  >
                    {domain}
                  </span>
                ))}
            </div>

            {/* CODE & LIVE buttons */}
            <div className="mt-3 flex gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-3 py-2 border border-gray-50 border-opacity-10 text-white rounded-md text-sm font-medium 
                            hover:bg-white/20 hover:text-white transition-all duration-300"
                >
                  CODE
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-3 py-2 border border-gray-50 border-opacity-10 text-white rounded-md text-sm font-medium 
                            hover:bg-white/20 hover:text-white transition-all duration-300"
                >
                  LIVE
                </a>
              )}
            </div>
          </div>
        </a>
      ))}
    </>
  );
}


function Machines() {
  const machine_list = [
    {
      title: "The Planets: Earth",
      description:
        "A space-themed CTF focused on enumeration, privilege escalation, and web exploitation. Required deep reconnaissance and OS-level privilege bypassing.",
      tools: ["nmap", "dirb", "hydra"],
      report: "https://www.peteonsoftware.com/index.php/2024/07/22/vulnhub-walkthrough-the-planets-earth/",
      preview: "https://wallpapercave.com/wp/wp15709388.jpg",
      link: "https://www.vulnhub.com/entry/the-planets-earth,755/",
    },
    {
      title: "Mr. Robot",
      description:
        "Inspired by the TV show, this machine required identifying hidden files, decoding credentials, and achieving root via command injection — total pwn.",
      tools: ["nikto","Burp Suite", "john", "php-reverse-shell", "privilege escalation"],
      report: "https://drive.google.com/file/d/1HLZMBYUHVS4OGv5vTrMvqCreqIRMAZsD/view?usp=sharing",
      preview: "https://wallpapercave.com/wp/wp15116926.webp",
      link: "https://www.vulnhub.com/entry/mr-robot-1,151/",
    },
    {
      title: "Game of Thrones",
      description:
        "A fantasy-styled Linux CTF box full of hidden clues. From dirbusting to exploiting weak sudo configs, every flag uncovered another house’s secret.",
      tools: ["nmap", "gobuster", "linpeas", "ssh tunneling"],
      report: "https://k3ramas.blogspot.com/2017/11/game-of-thrones-ctf-1-walkthrough_1.html",
      preview: "https://wallpapercave.com/wp/wp10411929.jpg",
      link: "https://www.vulnhub.com/entry/game-of-thrones-ctf-1,201/",
    },
    {
      title: "Web Machine (N7)",
      description:
        "A fun and realistic web exploitation challenge focusing on weak PHP authentication, SQL injection, and manual privilege escalation to gain root access.",
      tools: ["burpsuite", "sqlmap", "nmap"],
      report: "https://jamarir.hashnode.dev/vulnhub-web-machine-n7",
      preview: "https://wallpapercave.com/wp/wp11938493.jpg",
      link: "https://www.vulnhub.com/entry/web-machine-n7,756/",
    },
  ];

  return (
    <>
      <div className="font-medium relative text-2xl mt-10 md:mt-16 mb-6">
        Machines (CTFs)
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 -translate-y-1/2 right-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {machine_list.map((machine, index) => (
          <a
            key={index}
            href={machine.link}
            target="_blank"
            rel="noreferrer"
            className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/20 hover:scale-[1.03] transition-all duration-500 ease-out group"
          >
            <img
              src={machine.preview}
              alt={machine.title}
              className="w-full h-40 object-cover opacity-60 group-hover:opacity-80 transition-all duration-500"
            />

            <div className="p-4 relative z-10">
              <div className="text-lg md:text-xl font-semibold text-cyan-300 group-hover:text-orange-300 transition-all duration-300">
                {machine.title}
              </div>

              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                {machine.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {machine.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-cyan-400/10 text-cyan-300 text-xs px-2 py-1 rounded-md border border-cyan-400/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href={machine.report}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 border border-gray-50 border-opacity-10 text-white rounded-md text-sm font-medium hover:bg-white/10 transition-all duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Report
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>

      <p className="text-gray-400 text-sm text-center mt-10">
        “Each machine taught me something new — enumeration, persistence, and patience.
        More machines coming soon...”
      </p>
    </>
  );
}




function Resume() {
  return (
    <iframe className="h-full w-full" src="./files/Yash-resume.pdf" title="Yash Sarkar resume" frameBorder="0"></iframe>
  )
}