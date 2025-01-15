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
  // about:
  //   "📱 iOS Developer | Apple Developer Academy Alumni | Passionate About Building User-Centric Apps 📱\n\nHi, I’m iOS Developer! I hold a degree in Information Technology from Syarif Hidayatullah State Islamic University Jakarta. I completed a two-year internship at Apple Developer Academy, including Apple Catalyst Program (Startup Acceleration), where I gained hands-on experience in building impactful iOS applications.",
  about: "",
  summary:
    "Completed a two-year scholarship program at Apple Developer Academy, including Apple Catalyst Program (Startup Acceleration), where I gained hands-on experience in building impactful iOS applications.\n\n🌟 What I Bring:\n- Experienced in mobile apps development (iOS) using Agile Methodology\n- Experience collaborating on app development projects\n- Strong problem-solving mindset and eagerness to grow\n\nI’m excited to contribute my skills and enthusiasm to a forward-thinking team as an iOS Developer. Let’s connect and build something great together! 🚀",
  avatarUrl: "basit-profile.jpeg",
  personalWebsiteUrl: "__",
  contact: {
    email: "bta.aang@gmail.com",
    tel: "0896-2395-5429",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BasitTriAnggoro",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/basit-tri-anggoro",
        icon: LinkedInIcon,
      },
      {
        name: "Website",
        url: "https://basit-tri-anggoro.vercel.app/",
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
    // {
    //   company: "Online Shops Owner",
    //   link: "",
    //   badges: ["Full-time"],
    //   title: "Tiktokshop, Lazada, Shopee Seller",
    //   logo: NSNLogo,
    //   start: "2020",
    //   end: "2024",
    //   description: "Selling products via Tiktokshop, Lazada & Shopee. Managing & running all activity in my online shop from doing research, marketing, selling, etc.",
    // },
    {
      company: " Apple Catalyst Program (Homeplan Startup)",
      link: "https://developeracademy.apps.binus.ac.id/",
      badges: ["Hybrid - Fulltime"],
      title: "iOS Developer & Co-Founder",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2021",
      description:
      "What i've done:\n• iOS Development: Swift Programming Language, UIKit, AVKit, Responsive Design, MVVM, Agile Methodologies, etc.\n• Tools: Xcode, Jira, Trello, Notion, Miro, Github, Slack, etc.\n• Business model, monetization plan, marketing funnel, Apple marketing guideline, understanding how to analyze the market, UAT, research, etc.\n• Build startup as a team (7 persons) for iPhone, iPad and Android App as COO (create founder agreement, documentations, handle internal problems, etc).\n\nApple Catalyst Program is the second year program from Apple Developer Academy. We joined this program as a limited startup team come from the first year program.",
    },
    {
      company: " Apple Developer Academy | Indonesia",
      link: "https://developeracademy.apps.binus.ac.id/",
      badges: ["Hybrid - Internship"],
      title: "iOS Developer",
      logo: ClevertechLogo,
      start: "2020",
      end: "2020",
      description:
      "What i've done:\n• iOS Development: Swift, UIKit, AVFoundation, MVC, HIG, Agile Methodologies, Teamwork.\n• Tools: Xcode, Jira, Trello, Notion, Miro, Github, Slack, Sketch, etc.\n• Understanding foundation of Apple Design, Coding & Business.\n\nApple Developer Academy is a scholarship program organized by Apple. We learn to use the CBL framework to find solutions based on problems through a systematic & long thinking process. We are used to making applications based on real existing problems and supported by data through research according to the needs & problems that have been found.",
    },
    {
      company: "PT Mozaik Bintang Persada",
      link: "",
      badges: ["On-Site - Internship"],
      title: "Mobile App Development (Web Developer)",
      logo: ParabolLogo,
      start: "2019",
      end: "2019",
      description:
        "What i've done:\n• Learned about Laravel Framework and served data for creating mobile app backend.\n• Worked as a team of 3 persons for developing Dare App (app for making kids brave).\n\nPT. Mozaik Bintang Persada is a software house based in Ciledug, Tangerang.",
    },
  ],
  skills: [
    "Agile Application Development",
    "iOS Mobile Development (Swift)",
    "Collaboration Tools (Git, Jira, Trello, Notion, etc)",
    "Front-End Web Development (React JS, Tailwind, Bootstrap)",
    "Others: Laravel, Ms. Office, Digital Marketing",
    "Critical Thinking, Problem Solver, Teamwork, Time Management"
  ],
  projects: [
    {
      title: "Homeplan (Start-up)",
      techStack: [" Apple Developer Academy", "Swift (iOS Mobile App)", "Sprite Kit", "UI Kit", "Core Data", "URL Session", "Laravel", "PostgreSQL", "Postman", "MVVM", "Git"],
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
      title: "Badmintech",
      techStack: [ " Apple Developer Academy", "Swift (iOS Mobile App)", "Core ML", "Create ML", "Core Motion", "Core Data", "Replay Kit", "AV Foundation", "Watch Kit", "Health Kit", "MVC", "Git"
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
      title: "Sleepy",
      techStack: [" Apple Developer Academy", "Swift (iOS Mobile App)", "UI Kit", "AVFoundation", "MVC", "Git"],
      description:
        "An app to make you fall asleep quickly and wake up refreshed. Enjoy a large variety of nature sounds, instrumental sounds and meditation techniques to create your own bedtime experience. (iPhone | in a team of 4)",
      logo: JarockiMeLogo,
      videoSrc: "sleepy.mp4",
      gifSrc: '',
      link: {
        label: "Sleepy",
        href: "https://github.com/BasitTA/sleepy",
      },
    },
    {
      title: "Clima",
      techStack: [ "Personal Project","Swift (iOS Mobile App)", "Core Location", "URL Session", "MVC", "Git"
      ],
      description: "Prepare your uniform before its getting cold! 🥶",
      logo: ConsultlyLogo,
      videoSrc: 'clima.mp4',
      gifSrc: '',
      link: {
        label: "Clima",
        href: "https://github.com/BasitTriAnggoro/Clima",
      },
    },
    {
      title: "ByteCoin",
      techStack: [ "Personal Project","Swift (iOS Mobile App)", "URL Session", "MVC", "Git"
      ],
      description: "Get your BTC rate now! 🤑",
      logo: ConsultlyLogo,
      videoSrc: 'bytecoin.mp4',
      gifSrc: '',
      link: {
        label: "ByteCoin",
        href: "https://github.com/BasitTriAnggoro/Byte-Coin",
      },
    },
    {
      title: "Quizzler",
      techStack: [ "Personal Project", "Swift (iOS Mobile App)", "MVC", "Git"
      ],
      description: "Choose your answer!",
      logo: ConsultlyLogo,
      videoSrc: 'quizzler.mp4',
      gifSrc: '',
      link: {
        label: "Quizzler",
        href: "https://github.com/BasitTriAnggoro/Quizzler",
      },
    },
    {
      title: "Xylophone",
      techStack: [ "Personal Project", "Swift (iOS Mobile App)", "AVFoundation", "Git"
      ],
      description: "Convey your musical skill!",
      logo: ConsultlyLogo,
      videoSrc: 'xylophone.mp4',
      gifSrc: '',
      link: {
        label: "Xylophone",
        href: "https://github.com/BasitTriAnggoro/Xylophone",
      },
    },
    {
      title: "Tipsy",
      techStack: [ "Personal Project", "Swift (iOS Mobile App)", "Git"
      ],
      description: "Application for splitting bill with your friends",
      logo: ConsultlyLogo,
      videoSrc: 'tipsy.mp4',
      gifSrc: '',
      link: {
        label: "Tipsy",
        href: "https://github.com/BasitTriAnggoro/Tipsy",
      },
    },
    // {
    //   title: "Dice",
    //   techStack: [ "Swift (iOS Mobile App)", "Git"
    //   ],
    //   description: "Roll the dice! ",
    //   logo: ConsultlyLogo,
    //   videoSrc: 'Dice.mp4',
    //   gifSrc: '',
    //   link: {
    //     label: "Dice",
    //     href: "https://github.com/BasitTriAnggoro/Dice",
    //   },
    // },
    // {
    //   title: "Destini",
    //   techStack: [ "Swift (iOS Mobile App)", "Git"
    //   ],
    //   description: "Choose story, based on user options",
    //   logo: ConsultlyLogo,
    //   videoSrc: 'Destini.mp4',
    //   gifSrc: '',
    //   link: {
    //     label: "Destini",
    //     href: "https://github.com/BasitTriAnggoro/Destini",
    //   },
    // },
    {
      title: "BMICalculator",
      techStack: [ "Personal Project", "Swift (iOS Mobile App)", "Git"
      ],
      description: "Application for counting the BMI",
      logo: ConsultlyLogo,
      videoSrc: 'bmicalculator.mp4',
      gifSrc: '',
      link: {
        label: "BMICalculator",
        href: "https://github.com/BasitTriAnggoro/BMI-Calculator",
      },
    },
    {
      title: "EggTimer",
      techStack: [ "Personal Project", "Swift (iOS Mobile App)", "Git"
      ],
      description: "Enjoy your egg fellas!",
      logo: ConsultlyLogo,
      videoSrc: 'eggtimer.mp4',
      gifSrc: '',
      link: {
        label: "EggTimer",
        href: "https://github.com/BasitTriAnggoro/Egg-Timer",
      },
    },
    {
      title: "GoPlan",
      techStack: [ "Personal Project", "Swift (iOS Mobile App)", "Git"
      ],
      description: "Plan and stay motivate 😊",
      logo: ConsultlyLogo,
      videoSrc: 'goplan.mp4',
      gifSrc: '',
      link: {
        label: "GoPlan",
        href: "https://github.com/BasitTriAnggoro/Go-Plan",
      },
    },
    {
      title: "Tasty Food",
      techStack: ["Personal Project", "React JS (Front-end Website)", "Vite", "Tailwind CSS", "Material UI", "Git"],
      description:
      "Responsive Web that provides various food recipes from many countries all over the world. Getting API data from https://www.themealdb.com.",
      logo: Minimal,
      videoSrc: 'menu-new.mp4',
      gifSrc: '',
      link: {
        label: "Tasty Food",
        href: "https://basitta.github.io/react-menu-makanan/",
      },
    },
    {
      title: "Toko Sepatu Boss",
      techStack: ["Personal Project", "React JS (Front-end Website)", "create-react-app", "Bootstrap", "Git"],
      description:
      "Responsive Shoes Website - Landing Page Design",
      logo: Minimal,
      videoSrc: 'sepatu-new.mp4',
      gifSrc: '',
      link: {
        label: "Toko Sepatu Boss",
        href: "https://basitta.github.io/toko-sepatu-boss/",
      },
    },
    {
      title: "Betta Fish Commerce",
      techStack: ["Personal Project", "Node JS (Website App)", "Bootstrap", "Express.js", "MongoDB", "Mongoose", "Git"],
      description: "Small commerce for selling betta fish",
      logo: YearProgressLogo,
      videoSrc: 'betta-fish.mp4',
      gifSrc: '',
      link: {
        label: "Betta Fish Commerce - Solo Project",
        href: "https://github.com/BasitTA/bettaFish-commerce",
      },
    },
    {
      title: "Student Admission System",
      techStack: ["Thesis Assignment (Solo Project)", "PHP (Website App)", "Laravel", "Bootstrap", "SAW Method", "TOPSIS Method", "Git"],
      description:
      "New student admission system in Pondok Tahfidz Nuraini Tangerang, using combination of SAW & TOPSIS Methodologies",
      logo: BarepapersLogo,
      videoSrc: 'spk-new.mp4',
      gifSrc: '',
      link: {
        label: "Admission System Aplication (Pondok Yatim Nuraini)",
        href: "https://github.com/BasitTA/spk-ptn",
      },
    },
    // {
    //   title: "Badmintech - Apple Developer Academy Project",
    //   techStack: [ " Apple Developer Academy", "Mobile Development", "Swift Programming Language", "Core ML", "Create ML", "Core Motion", "Core Data", "Replay Kit", "AV Foundation", "Watch Kit", "Health Kit", "MVC", "Git"
    //   ],
    //   description: "During pandemic Covid-19 we help people for staying healthy. Badmintech helps beginners play badminton by detecting, giving evaluation of player movement, and basic theory of badminton. (iPhone & Apple Watch | in a team of 6)",
    //   logo: ConsultlyLogo,
    //   videoSrc: 'badmintech.mp4',
    //   gifSrc: '',
    //   link: {
    //     label: "Badmintech",
    //     href: "https://drive.google.com/file/d/1gI6uVyxyQ0UdwhwHrnop6eJiUn4kvWui/view?usp=drive_link",
    //   },
    // },
    {
      title: "Dare App",
      techStack: ["Internship Project", "PHP (for Mobile App)", "Laravel", "Git"],
      description: "Provide information to make children dare about challenges in their live",
      logo: YearProgressLogo,
      videoSrc: "",
      gifSrc: '',
      link: {
        label: "Dare App",
        href: "https://github.com/BasitTA/projek-mozaik/",
      },
    },
    // {
    //   title: "I'm actively working on updating my portfolio projects..",
    //   techStack: [],
    //   description: "👷🏻‍♂️🛠️🏗️",
    //   logo: YearProgressLogo,
    //   videoSrc: "",
    //   gifSrc: "coming-soon.gif",
    //   link: {
    //     label: "Coming Soon..",
    //     href: "",
    //   },
    // },
  ],
  certificates: [
    {
      title: "",
      // title: "",
      techStack: ["Swift(iOS Dev)", " Apple Developer Academy"],
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
        href: "/certificates/swift1.png",
      },
    },
    {
      title: "",
      // title: "Swift Tutorial",
      techStack: ["Swift(iOS Dev)", "Great Learning Academy"],
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
        href: "/certificates/swift.png",
      },
    },
    {
      title: "",
      // title: "Basics of Scrum, Agile, and Project Delivery",
      techStack: ["Agile Methodology","Udemy"],
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
        href: "/certificates/scrum2.png",
      },
    },
    {
      title: "",
      // title: "Scrum Fundamentals Certified",
      techStack: ["Agile Methodology","SCRUMstudy"],
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
        href: "/certificates/scrum.png",
      },
    },
    {
      title: "",
      // title: "Software Development Fundamentals",
      techStack: ["Software Development Fundamental","Multimatics"],
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
        href: "/certificates/sdf2.png",
      },
    },
    {
      title: "",
      // title: "Software Development Fundamentals",
      techStack: ["Software Development Fundamental", "Microsoft Technology Associate"],
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
        href: "/certificates/sdf.png",
      },
    },
    {
      title: "",
      // title: "The Ultimate React Course 2024: React, Next.js, Redux, & More",
      techStack: ["FE Web Dev","Udemy"],
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
        href: "/certificates/webdev9.png",
      },
    },
    {
      title: "",
      // title: "The Web Developer Bootcamp 2024",
      techStack: ["FE Web Dev","Udemy"],
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
        href: "/certificates/webdev3.png",
      },
    },
    {
      title: "",
      // title: "React, Angular, Vue.js by Example",
      techStack: ["FE Web Dev","Udemy"],
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
        href: "/certificates/webdev7.png",
      },
    },
    {
      title: "",
      // title: "Web Design for Web Developers: Build Beautiful Websites",
      techStack: ["FE Web Dev","Udemy"],
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
        href: "/certificates/webdev.png",
      },
    },
    {
      title: "",
      // title: "Jadi Fullstack Web Developer dari Front End sampai Back End”",
      techStack: ["Web Dev","Edspert.id"],
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
        href: "/certificates/webdev2.png",
      },
    },
    {
      title: "",
      // title: "Software Development Engineer In Test: Backend & Frontend Testing 101",
      techStack: ["Web Dev","Alterra"],
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
        href: "/certificates/webdev8.png",
      },
    },
    {
      title: "",
      // title: "JavaScript Intermediate",
      techStack: ["Web Dev","Sololearn"],
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
        href: "/certificates/webdev6.png",
      },
    },
    {
      title: "",
      // title: "Introduction to JavaScript",
      techStack: ["Web Dev","Sololearn"],
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
        href: "/certificates/webdev5.png",
      },
    },
    {
      title: "",
      // title: "HTML5 Application Development Fundamentals",
      techStack: ["Web Dev","Microsoft Technology Associate"],
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
        href: "/certificates/webdev4.png",
      },
    },
    {
      title: "",
      // title: "Clean Code Principles with Java & Getting Started with Spring Boot",
      techStack: ["Java","HIMIT PENS x Blibli"],
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
        href: "/certificates/java.png",
      },
    },
    {
      title: "",
      // title: "Telecom Customer Churn Prediction Using Machine Learning & Python",
      techStack: ["Python","BootUP"],
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
        href: "/certificates/python.png",
      },
    },
    {
      title: "",
      // title: "Foundation of Digital Marketing and E-commerce",
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
        href: "/certificates/digitalmarketing2.png",
      },
    },
    {
      title: "",
      // title: "Attract and Engage Customers with Digital Marketing",
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
        href: "/certificates/digitalmarketing1.png",
      },
    },
    {
      title: "",
      // title: "Through the Era of Digital Revolution",
      techStack: ["Information Technology","Himti"],
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
        href: "/certificates/himti2.png",
      },
    },
    {
      title: "",
      // title: "Road to Congress Permira XIX",
      techStack: ["Information Technology","Permira Kazan"],
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
        href: "/certificates/himti3.png",
      },
    },
    {
      title: "",
      // title: "Building Business with Technology",
      techStack: ["Business Technology","HIMTI UIN JAKARTA"],
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
        href: "/certificates/himti.png",
      },
    },
  ],

} as const;
