import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon, ChromeIcon } from "@/components/icons";
import { Globe2 } from "lucide-react";
export const RESUME_DATA = {
  name: "Basit Tri Anggoro",
  initials: "BTA",
  location: "Tangerang, Indonesia",
  locationLink: "https://maps.app.goo.gl/r1GWdXdbT4KYFaEW9",
  about:
    "I am a Frontend Developer skilled in HTML, CSS, JavaScript, React.js, Swift, and PHP. I am highly dedicated and constantly learning. I have completed several small projects that helped me understand the fundamentals of frontend development and industry best practices.",
  summary:
    "I’m passionate about creating appealing and user-friendly apps. Currently deep dive in frontend web development using React.js. I actively follow online courses and participate in developer communities to stay updated with the latest trends. I am looking for an opportunity to join a dynamic team and learn from experienced professionals. I love doing research about business, technology, and self-development.",
  avatarUrl: "basit-profile.jpeg",
  personalWebsiteUrl: "__",
  contact: {
    email: "bta.aang@gmail.com",
    tel: "0896-2395-5429",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BasitTA",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/basit-tri-anggoro",
        icon: LinkedInIcon,
      },
      {
        name: "Website",
        url: "https://cv-basittas-projects.vercel.app/",
        icon: Globe2,
      },
    ],
  },
  education: [
    {
      school: "State Islamic University Syarif Hidayatullah Jakarta",
      degree: "Bachelor's degree, Information Technology",
      start: "2016",
      end: "2021",
    },
    {
      school: "SMAN 8 Tangerang",
      degree: "Science",
      start: "2013",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Online Shops Owner",
      link: "",
      badges: ["Full-time"],
      title: "Tiktokshop, Lazada, Shopee Seller",
      logo: NSNLogo,
      start: "2020",
      end: "Present",
      description: "Selling products via Tiktokshop, Lazada & Shopee. Managing & running all activity in my online shop from doing research, marketing, selling, etc.",
    },
    {
      company: " Homeplan Startup - Apple Catalyst Program",
      link: "",
      badges: ["Hybrid - Fulltime"],
      title: "Co-Founder (COO) & Software Developer",
      logo: JojoMobileLogo,
      start: "2021",
      end: "2021",
      description:
      "Building startup trough the second program from Apple Developer Academy. We create & develop a renovation app (Homeplan) from ideation to implementation. This app created from real world problems for home renovation process.",
    },
    {
      company: " Apple Developer Academy",
      link: "https://developeracademy.apps.binus.ac.id/",
      badges: ["Hybrid"],
      title: "Internship",
      logo: ClevertechLogo,
      start: "2020",
      end: "2020",
      description:
      "Learned about design, technical, and business especially on Apple Platforms. Developed some iOS applications using Swift Programming Language. Worked both as individual and team.",
    },
    {
      company: "PT Mozaik Bintang Persada",
      link: "",
      badges: ["Offline"],
      title: "Internship",
      logo: ParabolLogo,
      start: "2019",
      end: "2019",
      description:
        "Implemented Laravel Framework for creating mobile app backend. Worked as a team for developing the application.",
    },
    {
      company: "Pondok Yatim Nuraini",
      link: "",
      badges: [],
      title: "Freelance",
      logo: NSNLogo,
      start: "2017",
      end: "Present",
      description: "Creating design for banners, flyer, brochure using Photoshop & Canva. Also develop orphans and indigent people for reading Quran properly.",
    },
  ],
  skills: [
    "Web Development",
    "Front-End Development",
    "JavaScript",
    "React JS",
    "Tailwind CSS",
    "Bootstrap",
    "iOS Development",
    "Swift",
    "Agile Application Development",
    "Git",
    // "Laravel",
  ],
  projects: [
    {
      title: "Tasty Food - Solo Project",
      techStack: ["FE Web Development", "Javascript Programming Language", "React JS", "Vite", "Tailwind CSS", "Material UI", "Git"],
      description:
      "Responsive Web that provides various food recipes from many countries all over the world. Getting API data from https://www.themealdb.com.",
      logo: Minimal,
      videoSrc: 'menu-new.mov',
      gifSrc: '',
      link: {
        label: "Tasty Food",
        href: "https://basitta.github.io/react-menu-makanan/",
      },
    },
    {
      title: "Toko Sepatu Boss - Solo Project",
      techStack: ["FE Web Development", "Javascript Programming Language", "React JS", "create-react-app", "Bootstrap", "Git"],
      description:
      "Responsive Shoes Website - Landing Page Design",
      logo: Minimal,
      videoSrc: 'sepatu-new.mov',
      gifSrc: '',
      link: {
        label: "Toko Sepatu Boss",
        href: "https://basitta.github.io/toko-sepatu-boss/",
      },
    },
    {
      title: "Betta Fish Commerce - Solo Project",
      techStack: ["FE Web Development", "Javascript Programming Language", "Node JS", "Bootstrap", "Express.js", "MongoDB", "Mongoose", "Git"],
      description: "Small commerce for selling betta fish",
      logo: YearProgressLogo,
      videoSrc: 'betta-fish.mov',
      gifSrc: '',
      link: {
        label: "Betta Fish Commerce - Solo Project",
        href: "https://github.com/BasitTA/bettaFish-commerce",
      },
    },
    {
      title: "Student Admission System - Thesis Assignment",
      techStack: ["Web Development", "PHP Programming Language", "Laravel", "Bootstrap", "SAW Method", "TOPSIS Method", "Git"],
      description:
      "New student admission system in Pondok Tahfidz Nuraini Tangerang, using combination of SAW & TOPSIS Methodologies",
      logo: BarepapersLogo,
      videoSrc: 'spk-new.mov',
      gifSrc: '',
      link: {
        label: "Admission System Aplication (Pondok Yatim Nuraini)",
        href: "https://github.com/BasitTA/spk-ptn",
      },
    },
    {
      title: "Homeplan - Apple Developer Academy Project",
      techStack: [" Apple Developer Academy", "Mobile Development", "Swift Programming Language", "Sprite Kit", "UI Kit", "Core Data", "URL Session", "Laravel", "PostgreSQL", "Postman", "MVVM", "Git"],
      description:
        "An app that helps you estimate the cost of house renovation. You can easily get your detail cost and materials needed. It provides service for renovating house including contractors and materials. (iPhone, iPad, Android | in a team of 7)",
      logo: MonitoLogo,
      videoSrc: 'homeplan.mp4',
      gifSrc: '',
      link: {
        label: "Homeplan",
        href: "https://drive.google.com/file/d/1wxM-q81FUWD_Ch3wa4tTBhi36wDnZgQT/view?usp=drive_link",
      },
    },
    {
      title: "Badmintech - Apple Developer Academy Project",
      techStack: [ " Apple Developer Academy", "Mobile Development", "Swift Programming Language", "Core ML", "Create ML", "Core Motion", "Core Data", "Replay Kit", "AV Foundation", "Watch Kit", "Health Kit", "MVC", "Git"
      ],
      description: "During pandemic Covid-19 we help people for staying healthy. Badmintech helps beginners play badminton by detecting, giving evaluation of player movement, and basic theory of badminton. (iPhone & Apple Watch | in a team of 6)",
      logo: ConsultlyLogo,
      videoSrc: 'badmintech.mp4',
      gifSrc: '',
      link: {
        label: "Badmintech",
        href: "https://drive.google.com/file/d/1gI6uVyxyQ0UdwhwHrnop6eJiUn4kvWui/view?usp=drive_link",
      },
    },
    {
      title: "Sleepy - Apple Developer Academy Project",
      techStack: [" Apple Developer Academy", "Mobile Development", "Swift Programming Language", "UI Kit", "AVFoundation", "MVC", "Git"],
      description:
        "An app to make you fall asleep quickly and wake up refreshed. Enjoy a large variety of nature sounds, instrumental sounds and meditation techniques to create your own bedtime experience. (iPhone | in a team of 4)",
      logo: JarockiMeLogo,
      videoSrc: "",
      gifSrc: '',
      link: {
        label: "Sleepy",
        href: "https://github.com/BasitTA/sleepy",
      },
    },
    {
      title: "Dare App - Internship Project (PT. Mozaik Bintang Persada)",
      techStack: ["Mobile Development", "PHP Programming Language", "Laravel", "Git"],
      description: "Provide information to make children dare about challenges in their live",
      logo: YearProgressLogo,
      videoSrc: "",
      gifSrc: '',
      link: {
        label: "Dare App - Mozaik Project",
        href: "https://github.com/BasitTA/projek-mozaik/",
      },
    },
    {
      title: "I'm actively working on updating my portfolio projects..",
      techStack: [],
      description: "👷🏻‍♂️🛠️🏗️",
      logo: YearProgressLogo,
      gifSrc: "coming-soon.gif",
      link: {
        label: "Coming Soon..",
        href: "",
      },
    },
  ],
  certificates: [
    {
      title: "Apple Developer Academy Internship - iOS Developer",
      techStack: ["Internship","Apple"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1JhbcJQHjcn2QZ4Xf00TrcbvBnNPg1ZhJ",
      },
    },
    {
      title: "The Ultimate React Course 2024: React, Next.js, Redux, & More",
      techStack: ["IT Certificate","Udemy"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1hFbRkUXDw0aJxV80JCCazsYpJecfk7q6",
      },
    },
    {
      title: "The Web Developer Bootcamp 2024",
      techStack: ["IT Certificate","Udemy"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1go8h5-mKJzyn6xq0ZzJLMfJNXGFk-Fsw",
      },
    },
    {
      title: "React, Angular, Vue.js by Example",
      techStack: ["IT Certificate","Udemy"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/13YRh1pGUIU4FfeqTrBgPtZEg7XiK5I0F",
      },
    },
    {
      title: "Web Design for Web Developers: Build Beautiful Websites",
      techStack: ["IT Certificate","Udemy"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/16wUTTzt2f5HPsUEypEJRo0Ojfr_20a9c",
      },
    },
    {
      title: "Basics of Scrum, Agile, and Project Delivery",
      techStack: ["IT Certificate","Udemy"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1BYUeQUFGZHeqNZ0iejARJkwU_RFz6kkE",
      },
    },
    {
      title: "Scrum Fundamentals Certified",
      techStack: ["IT Certificate","SCRUMstudy"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1FPkiLYIk6c8L_ldg9WZr6dYOm7LTUaqj",
      },
    },
    {
      title: "Jadi Fullstack Web Developer dari Front End sampai Back End”",
      techStack: ["IT Webinar","Edspert.id"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1o28oJZTLgYxUD94PeKbG-hC_OmJMu0Ji",
      },
    },
    {
      title: "Software Development Engineer In Test: Backend & Frontend Testing 101",
      techStack: ["IT Webinar","Alterra"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1foKWYoyQKaaWYuFu83IeWD1zn1yNl2wm",
      },
    },
    {
      title: "JavaScript Intermediate",
      techStack: ["IT Certificate","Sololearn"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/11xWYs13eKjCjuG_XYJ9Nrv2ODLdeuWol",
      },
    },
    {
      title: "Introduction to JavaScript",
      techStack: ["IT Certificate","Sololearn"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/12umQZT60BtSt7h6xugxJir10yOP6627q",
      },
    },
    {
      title: "Software Development Fundamentals",
      techStack: ["IT Certificate","Multimatics"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/18MZeJNUpQfoKi_fx-cmNEpLdxLAVagnY",
      },
    },
    {
      title: "Software Development Fundamentals",
      techStack: ["IT Certificate","Microsoft Technology Associate"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1fOlvoB3D1JwpnqFWkCIqVnClfl8i75rh",
      },
    },
    {
      title: "HTML5 Application Development Fundamentals",
      techStack: ["IT Certificate","Microsoft Technology Associate"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1GEI-QS95cFVbQk1OdboOo6aLCv4s_7f0",
      },
    },
    {
      title: "Clean Code Principles with Java & Getting Started with Spring Boot",
      techStack: ["IT Webinar","HIMIT PENS x Blibli"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1Qx2pcrQDbUS9uWr7n4J2SPnf-Ko5fosj",
      },
    },
    {
      title: "Telecom Customer Churn Prediction Using Machine Learning & Python",
      techStack: ["IT Webinar","Boot Up"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1nsUX89J7jHWaFS2s_79bC-oRr5eml4k4",
      },
    },
    {
      title: "Foundation of Digital Marketing and E-commerce",
      techStack: ["Digital Marketing","Coursera"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1Mj7By5cD8Ku5gdsjff8wmWbeOBqTWNhx",
      },
    },
    {
      title: "Attract and Engage Customers with Digital Marketing",
      techStack: ["Digital Marketing","Coursera"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1B7CZJOwh-BgV1CKlOEGJ78-UjgYk3mk8",
      },
    },
    {
      title: "Through the Era of Digital Revolution",
      techStack: ["IT Webinar","Permira Kazan"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1tFlrocUBCbkvrQS-fc3kE2mc8MUJjADw",
      },
    },
    {
      title: "Road to Congress Permira XIX",
      techStack: ["IT Seminar","Permira Kazan"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1IK9-d_iu4RtImhhjBV__5SuM0jKMCVuu",
      },
    },
    {
      title: "Building Business with Technology",
      techStack: ["IT Seminar","HIMTI UIN JAKARTA"],
      description:
      "",
      logo: Minimal,
      videoSrc: "",
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1rillIH4rU1h62-8VHrgTgZNC58sDkpBU",
      },
    },
  ],

} as const;
