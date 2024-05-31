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
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Basit Tri Anggoro",
  initials: "BTA",
  location: "Tangerang, Indonesia",
  locationLink: "https://maps.app.goo.gl/r1GWdXdbT4KYFaEW9",
  about:
    "Hello I'm a Frontend Web Developer 👋🏼. I'm focused on building products with extra attention to detail.",
  summary:
    "I’m passionate about creating appealing and user-friendly websites. Currently using React.js. I love doing research about business, technology, and self-development.",
  avatarUrl: "https://media.licdn.com/dms/image/C5603AQHECuizKoCPuA/profile-displayphoto-shrink_800_800/0/1606662143151?e=1722470400&v=beta&t=Bn3DYKenEVXyV7egsoTeN3qdIS5-xIkfOMiVTFuvElk",
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
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Apple Developer Academy (Scholarship Program organized by Apple)",
      degree: "Software Developer",
      start: "2020",
      end: "2021",
    },
    {
      school: "Universitas Islam Negeri Jakarta",
      degree: "Bachelor's degree, Information Technology",
      start: "2016",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Online Shops Owner",
      // link: "https://www.nokia.com",
      badges: ["Full-time"],
      title: "Tiktokshop, Lazada, Shopee Seller",
      // logo: NSNLogo,
      start: "2020",
      end: "Present",
      description: "Selling products via Tiktokshop, Lazada & Shopee. Managing & running all activity in my online shop from doing research, marketing, selling, etc.",
    },
    {
      company: " Homeplan Startup - Apple Catalyst Program",
      // link: "https://bsgroup.eu/",
      badges: ["Hybrid - Fulltime"],
      title: "Co-Founder (COO) & Software Developer",
      // logo: JojoMobileLogo,
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
      // logo: ClevertechLogo,
      start: "2020",
      end: "2020",
      description:
      "Learned about design, technical, and business especially on Apple Platforms. Developed some iOS applications using Swift Programming Language. Worked both as individual and team.",
    },
    {
      company: "PT Mozaik Bintang Persada",
      // link: "https://parabol.co",
      badges: ["Offline"],
      title: "Internship",
      // logo: ParabolLogo,
      start: "2019",
      end: "2019",
      description:
        "Implemented Laravel Framework for creating mobile app backend. Worked as a team for developing the application.",
    },
    {
      company: "Pondok Yatim Nuraini",
      // link: "https://www.nokia.com",
      badges: [],
      title: "Freelance",
      // logo: NSNLogo,
      start: "2017",
      end: "Present",
      description: "Creating design for banners, flyer, brochure using Photoshop & Canva. Also develop orphans and indigent people for reading Quran properly.",
    },
  ],
  skills: [
    "Front-End Development",
    "JavaScript",
    "React JS",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "Swift",
    // "Laravel",
    "Agile Application Development",
  ],
  projects: [
    {
      title: "Homeplan",
      techStack: [" Apple Developer Academy", "Swift", "Sprite Kit", "UI Kit", "Core Data", "URL Session", "Laravel", "PostgreSQL", "Postman", "MVVM", "Git"],
      description:
        "An app that helps you estimate the cost of house renovation. You can easily get your detail cost and materials needed. It provides service for renovating house including contractors and materials. (iPhone, iPad, Android | in a team of 7)",
      logo: MonitoLogo,
      link: {
        label: "Homeplan",
        href: "https://drive.google.com/file/d/1wxM-q81FUWD_Ch3wa4tTBhi36wDnZgQT/view?usp=drive_link",
      },
    },
    {
      title: "Badmintech",
      techStack: [
        " Apple Developer Academy",
        "Swift",
        "Core ML",
        "Create ML",
        "Core Motion",
        "Core Data",
        "Replay Kit",
        "AV Foundation",
        "Watch Kit",
        "Health Kit",
        "MVC",
        "Git"
      ],
      description: "Created during pandemic Covid-19. We provide this app for helping beginners play badminton by detecting, giving evaluation of player movement, and basic theory of badminton. (iPhone & Apple Watch | in a team of 6)",
      logo: ConsultlyLogo,
      link: {
        label: "Badmintech",
        href: "https://drive.google.com/file/d/1gI6uVyxyQ0UdwhwHrnop6eJiUn4kvWui/view?usp=drive_link",
      },
    },
    {
      title: "Sleepy",
      techStack: [" Apple Developer Academy", "UI Kit", "AVFoundation", "MVC", "Git"],
      description:
        "An app to make you fall asleep quickly and wake up refreshed. Enjoy a large variety of nature sounds, instrumental sounds and meditation techniques to create your own bedtime experience. (iPhone | in a team of 4)",
      logo: JarockiMeLogo,
      link: {
        label: "Sleepy",
        href: "https://github.com/BasitTA/sleepy",
      },
    },
    {
      title: "Tasty Food - Solo Project",
      techStack: ["Web FE Development", "React JS", "Vite", "Tailwind CSS", "Material UI"],
      description:
        "Provide various food recipes from many countries all over the world",
      logo: Minimal,
      link: {
        label: "Tasty Food",
        href: "https://basitta.github.io/react-menu-makanan/",
      },
    },
    {
      title: "Admission System Web (Pondok Tahfidz Nuraini)",
      techStack: ["Laravel", "Bootstrap", "SAW Method", "TOPSIS Method"],
      description:
        "Website for selecting new students who will enter the orphanage. Using combination of SAW & TOPSIS Method",
      logo: BarepapersLogo,
      link: {
        label: "Admission System Aplication (Pondok Yatim Nuraini)",
        href: "https://github.com/BasitTA/spk-ptn",
      },
    },
    {
      title: "Dare App - Mozaik Project",
      techStack: ["Laravel"],
      description: "Provide information to make children dare about challenges in their live",
      logo: YearProgressLogo,
      link: {
        label: "Dare App - Mozaik Project",
        href: "https://github.com/BasitTA/projek-mozaik/",
      },
    },
    {
      title: "Betta Fish Commerce - Solo Project",
      techStack: ["Node JS", "Bootstrap"],
      description: "Created design of small commerce for selling betta fish",
      logo: YearProgressLogo,
      link: {
        label: "Betta Fish Commerce - Solo Project",
        href: "https://github.com/BasitTA/bettaFish-commerce",
      },
    },
  ],





  // additional
  organizations: [
    {
      title: "Homeplan",
      techStack: [" Apple Developer Academy", "Swift", "Sprite Kit", "UI Kit", "Core Data", "URL Session", "Laravel", "PostgreSQL", "Postman", "MVVM", "Git"],
      description:
        "An app that helps you estimate the cost of house renovation. You can easily get your detail cost and materials needed. It provides service for renovating house including contractors and materials. (iPhone, iPad, Android | in a team of 7)",
      logo: MonitoLogo,
      link: {
        label: "Homeplan",
        // href: "https://monito.dev/",
      },
    },
    {
      title: "Badmintech",
      techStack: [
        " Apple Developer Academy",
        "Swift",
        "Core ML",
        "Create ML",
        "Core Motion",
        "Core Data",
        "Replay Kit",
        "AV Foundation",
        "Watch Kit",
        "Health Kit",
        "MVC",
        "Git"
      ],
      description: "Created during pandemic Covid-19. We provide this app for helping beginners play badminton by detecting, giving evaluation of player movement, and basic theory of badminton. (iPhone & Apple Watch | in a team of 6)",
      logo: ConsultlyLogo,
      link: {
        label: "Badmintech",
        href: "https://github.com/sherwin-yang/MC3-17",
      },
    },
    {
      title: "Sleepy",
      techStack: [" Apple Developer Academy", "UI Kit", "AVFoundation", "MVC", "Git"],
      description:
        "An app to make you fall asleep quickly and wake up refreshed. Enjoy a large variety of nature sounds, instrumental sounds and meditation techniques to create your own bedtime experience. (iPhone | in a team of 4)",
      logo: JarockiMeLogo,
      link: {
        label: "Sleepy",
        href: "https://github.com/BasitTA/sleepy",
      },
    },
    {
      title: "Tasty Food",
      techStack: ["Web FE Development", "React JS", "Vite", "Tailwind CSS", "Material UI"],
      description:
        "Provide various food recipes from many countries all over the world",
      logo: Minimal,
      link: {
        label: "Tasty Food",
        href: "https://basitta.github.io/react-menu-makanan/",
      },
    },
    {
      title: "Admission System Web (Pondok Yatim Nuraini)",
      techStack: ["Laravel", "Bootstrap", "SAW Method", "TOPSIS Method"],
      description:
        "Website for selecting new students who will enter the orphanage. Using combination of SAW & TOPSIS Method",
      logo: BarepapersLogo,
      link: {
        label: "Admission System Aplication (Pondok Yatim Nuraini)",
        href: "https://github.com/BasitTA/spk-ptn",
      },
    },
    {
      title: "Dare App - Mozaik Project",
      techStack: ["Laravel"],
      description: "Provide information to make children dare about challenges in their live",
      logo: YearProgressLogo,
      link: {
        label: "Dare App - Mozaik Project",
        href: "https://github.com/BasitTA/projek-mozaik/",
      },
    },
  ],
} as const;
