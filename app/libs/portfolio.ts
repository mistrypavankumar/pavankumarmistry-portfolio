import { SiHackerrank } from "react-icons/si";
import { CompetitiveSitesData } from "./competitive";

/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Mistry Pavan Kumar",
  logo_name: "MistryPavanKumar",
  nickname: "Pavan",
  subTitle: "Full Stack Developer | MS Computer Science @Rowan University",
  body:
    "I build exceptional digital experiences with expertise in React, Flutter, and Node.js. With 2+ years of professional development experience, I specialize in creating high-performance applications that solve real-world problems.",
  resumeLink:
    "https://drive.google.com/file/d/1uTNqqSWnvWzUQSFYntoHrhnjCgQ9bRN9/view?usp=sharing",
  portfolio_repository: "https://github.com/mistrypavankumar/Portfolio-react",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build responsive web applications using React, Next.js, Node.js, Express, and MongoDB (MERN stack)",
        "⚡ Develop cross-platform mobile apps with Flutter, React Native, and native Android solutions using Kotlin.",
        "⚡ Engineer real-time collaborative tools (e.g., code editors, chat apps) with WebSocket, Firebase, and Google Auth.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "NextJs",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
          },
        },

        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#0175C2",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Design machine learning models (e.g., 97.53% accurate crop disease detection) using Python, NumPy, and Pandas.",
        "⚡ Implement end-to-end computer vision solutions for image analysis and dynamic user interactions.",
        "⚡ Develop scalable data pipelines and visualization dashboards with Matplotlib and D3.js.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#21058FFF",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#035B79FF",
          },
        },
      ],
    },

    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploy and manage applications on Firebase, Heroku, and Docker-based environments.",
        "⚡ Optimize cloud infrastructure for high-traffic web/mobile apps with integrated databases (MySQL, MongoDB).",
        "⚡ Host and maintain serverless backends and APIs for seamless scalability.",
      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#2C89D1FF",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#026B9CFF",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#5401C2FF",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Lead end-to-end product development—from wireframing to deployment—ensuring optimal user experience.",
        "⚡ Design brand assets (e.g., logos) and interactive prototypes to align with business goals.",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites: CompetitiveSitesData = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconName: SiHackerrank,
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/pavan_kumar143mg?hr_r=1",
    },
    // {
    //   siteName: "Codechef",
    //   iconName: SiCodechef,
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/pavan_kumar777",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Rowan University",
      location: "NJ, USA",
      subtitle: "MS in Computer Science",
      logo_path: "biet-logo.png",
      alt_name: "rowan-university",
      duration: "2023 - Present",
      descriptions: [
        "🔹 Mastering advanced CS concepts: Algorithms, Cybersecurity, Data Mining/Warehousing, and Distributed Databases",
        "🔹 Developing expertise in computer architecture and Agile software engineering methodologies",
        "🔹 Building research capabilities in emerging technologies through academic projects",
      ],
      website_link: "http://rowan.edu",
    },
    {
      title: "Bharat Institute of Engineering and Technology",
      location: "Hyderabad, India",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "biet-logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2020 - 2023",
      descriptions: [
        "🔹 Built strong CS foundation in Data Structures, Algorithms, DBMS, and Operating Systems",
        "🔹 Won 1st place in 100+ participant Hackathon for innovative Agrodrone solution",
        "🔹 Gained full-stack development skills through coursework and projects",
      ],
      website_link: "http://biet.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Frontend Developer (React)",
      subtitle: "- HackerRank",
      logo_path: "certificate_2.png",
      certificate_link:
        "https://drive.google.com/file/d/1G2eeHwIhfZ7tQVN5cFP-9jd08ohJ3xl3/view?usp=sharing",
      alt_name: "HackerRank",
      color_code: "#1F70C199",
    },
    {
      title: "Problem Solving (Intermediate)",
      subtitle: "- HackerRank",
      logo_path: "certificate_3.png",
      certificate_link:
        "https://drive.google.com/file/d/13CZqUVoviCBN9y_ca3XTYnB53z97jkfV/view?usp=sharing",
      alt_name: "HackerRank",
      color_code: "#1F70C199",
    },

    {
      title: "SQL (Advanced)",
      subtitle: "- HackerRank",
      logo_path: "certificate_5.png",
      certificate_link:
        "https://drive.google.com/file/d/1_zpjS3nZAQWyaP1Aa1ZGLlwtI9jPp20W/view?usp=sharing",
      alt_name: "HackerRank",
      color_code: "#1F70C199",
    },
    {
      title: "React Basics",
      subtitle: "- Meta",
      logo_path: "certificate_4.png",
      certificate_link:
        "https://drive.google.com/file/d/1yNdpSOPdMN73G4dQljhxcEWFCbCXUj3O/view?usp=sharing",
      alt_name: "Coursera",
      color_code: "#00000099",
    },
    {
      title: "HTML and CSS in depth",
      subtitle: "- Meta",
      logo_path: "certificate_6.png",
      certificate_link:
        "https://drive.google.com/file/d/1khfhv0dDzpmo6aTN4tAKnkw5yDlmuUJ0/view?usp=sharing",
      alt_name: "Coursera",
      color_code: "#00000099",
    },
    {
      title: "Introduction to Front-End Development",
      subtitle: "- Meta",
      logo_path: "certificate_7.png",
      certificate_link:
        "https://drive.google.com/file/d/1hwRiruZOT4wA-iWxY6oFhYCgdR_QHXRR/view?usp=sharing",
      alt_name: "Coursera",
      color_code: "#00000099",
    },
    {
      title: "Version Control",
      subtitle: "- Meta",
      logo_path: "certificate_8.png",
      certificate_link:
        "https://drive.google.com/file/d/1qlYR7RkjoEVjBK6fu_b2yOarQqKLu2FR/view?usp=sharing",
      alt_name: "Coursera",
      color_code: "#00000099",
    },
    {
      title: "Java for Android",
      subtitle: "- Vanderbilt University",
      logo_path: "certificate_9.png",
      certificate_link:
        "https://drive.google.com/file/d/12Io5FO2lzeCbT0XsOvwWQ-6PYCOBrJ0g/view?usp=sharing",
      alt_name: "Coursera",
      color_code: "#8C151599",
    },

    {
      title: "Building Web Applications in PHP",
      subtitle: "- University of Michigan",
      logo_path: "certificate_12.png",
      certificate_link:
        "https://drive.google.com/file/d/1fwKUXAX9Jctpyi4VZk867DMDeKArn-1f/view?usp=sharing",
      alt_name: "Coursera",
      color_code: "#00274C99", // University of Michigan blue
    },
    {
      title: "Python Basics for Data Science",
      subtitle: "- IBM",
      logo_path: "certificate_11.png",
      certificate_link:
        "https://drive.google.com/file/d/1q9kNAjxv25eF5sMuuSvJ8If1IWhOxsY1/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Programming for the Web with JavaScript",
      subtitle: "- University of Pennsylvania",
      logo_path: "certificate_10.png",
      certificate_link:
        "https://drive.google.com/file/d/1D3UJDMJ4AEXteKYNLJ7a_apBjVicqoRm/view?usp=sharing",
      alt_name: "edX",
      color_code: "#FFBB0099",
    },
    {
      title: "Core Python for Everyone",
      subtitle: "- Madhusudan Mothe",
      logo_path: "certificate_1.png",
      certificate_link:
        "https://drive.google.com/file/d/1SnoALaaZl0XzSsTlfdeVWrsZhP4AaYSO/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have completed various Internships in the field of Full Stack Development that gave me industry exposure on both Front End and Back End development. Apart from Developing Web and Mobile applications, I love teaching and writing about Tech. Hence I actively contribute to Open Source Communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Basic Banking Application using Flutter and SQflite",
          company: "The Sparks Foundation",
          company_url: "https://www.thesparksfoundationsingapore.org/",
          logo_path: "TSF_logo.png",
          duration: "February 2021 - March 2021",
          location: "Work From Home",
          description:
            "During this Internship, I developed a basic banking application in which we can transfer amount from one user to another in a single click. To develop this app i had used flutter and sqflite as a backend.",
          color: "#1597bb",
        },
        {
          title: "Linux developer Intern",
          company: "Swecha",
          company_url: "https://swecha.org/",
          logo_path: "logo2.png",
          duration: "July 2020 - August 2020",
          location: "Work From Home",
          description:
            "Developed a Debian Distro, an Operating System based on Linux kernel. The Distro comes pre-installed with all the softwares and Engineer would require.            ",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Part-Time Jobs",
      experiences: [
        {
          title: "Software Development Associate",
          company: "Kabb",
          company_url: "https://www.kabb.in",
          logo_path: "kabb.jpeg",
          duration: "Jul 2022 - Present ",
          location: "Work From Home",
          description:
            "Working as a Software Development Associate in the field of Mobile Application Development using React Native",
          color: "#7752A7",
        },
        {
          title: "Flutter Developer",
          company: "OrgSpeak",
          company_url: "https://orgspeak.com/",
          logo_path: "orgSpeak.jpeg",
          duration: "Oct 2022 - Dec 2022",
          location: "Work From Home",
          description:
            "Worked as a Flutter Developer in the field of Mobile Application Development and my role was as an front-end developer.",
          color: "#4a71e9",
        },
        {
          title: "Full Stack Developer",
          company: "SoftWeb Technologies",
          company_url: "https://www.softwebcompany.tech",
          logo_path: "softWeb-tech.jpg",
          duration: "May 2022 - Dec 2022",
          location: "Work From Home",
          description:
            "Worked as a Full Stack Developer in the field of Web Development and Mobile Application Development using React, React Navtive, Mongodb, firebase, etc.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pavan_kumar1.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://mistrypavankumar.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Laxmi ganapthi colony, Thattiannaram, Hyderabad - 500068",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/@17.357193,78.5905192,15z/data=!4m5!7m4!1m2!1s101440642366560785550!2sChZqczVaaGZRN19wMXhjTG1OaEExWF9REggHBbY8-eHe_A%3D%3D!2e2?hl=en",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8688668145",
  },
};

export {
  settings,
  greeting,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
