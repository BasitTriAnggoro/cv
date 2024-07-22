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
    "I am a Frontend Developer skilled in HTML, CSS, JavaScript, and React.js. I am highly dedicated and constantly learning. I have completed several small projects that helped me understand the fundamentals of frontend development and industry best practices. I actively follow online courses and participate in developer communities to stay updated with the latest trends. I am looking for an opportunity to join a dynamic team and learn from experienced professionals.",
  summary:
    "I’m passionate about creating appealing and user-friendly apps. Currently deep dive in frontend web development using React.js. I love doing research about business, technology, and self-development.",
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
    // {
    //   company: "Online Shops Owner",
    //   link: "",
    //   badges: ["Full-time"],
    //   title: "Tiktokshop, Lazada, Shopee Seller",
    //   logo: NSNLogo,
    //   start: "2020",
    //   end: "Present",
    //   description: "Selling products via Tiktokshop, Lazada & Shopee. Managing & running all activity in my online shop from doing research, marketing, selling, etc.",
    // },
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
      title: "Betta Fish Commerce - Solo Project",
      techStack: ["Node JS", "Bootstrap"],
      description: "Created design of small commerce for selling betta fish",
      logo: YearProgressLogo,
      link: {
        label: "Betta Fish Commerce - Solo Project",
        href: "https://github.com/BasitTA/bettaFish-commerce",
      },
    },
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
      title: "I'm actively working on updating my portfolio projects..",
      techStack: ["Coming Soon.."],
      description: "👷🏻‍♂️🛠️🏗️",
      logo: YearProgressLogo,
      link: {
        label: "Coming Soon..",
        href: "",
      },
    },
  ],
  certificates: [
    {
      title: "Apple Developer Academy : Februari 2020 - December 2020",
      techStack: ["Internship","Apple"],
      description:
      "",
      logo: Minimal,
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
      title: "Web Development for Beginner : Jadi Fullstack Web Developer dari Front End sampai Back End”",
      techStack: ["IT Certificate","Edspert.id"],
      description:
      "",
      logo: Minimal,
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1zRlkqZIEDoe9FEJhhgb1kEXElz34dsM_",
      },
    },
    {
      title: "Clean Code Principles with Java & Getting Started with Spring Boot",
      techStack: ["IT Webinar","HIMIT PENS x Blibli"],
      description:
      "",
      logo: Minimal,
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1ARyjgCqS0CkOxLV15apPK9HoNxzhB7kl",
      },
    },
    {
      title: "Software Development Fundamentals",
      techStack: ["IT Certificate","Multimatics"],
      description:
      "",
      logo: Minimal,
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1G599NoxjwNxDv_LQlezDALbwzDHXWZdw",
      },
    },
    {
      title: "Software Development Fundamentals",
      techStack: ["IT Certificate","Microsoft Technology Associate"],
      description:
      "",
      logo: Minimal,
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1Xega9aON8EhcGWxKoePup1peHfKAJs8Z",
      },
    },
    {
      title: "HTML5 Application Development Fundamentals",
      techStack: ["IT Certificate","Microsoft Technology Associate"],
      description:
      "",
      logo: Minimal,
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1hwYnHpqw6NIu5IepyYtPCEFvUA4IAy_H",
      },
    },
    {
      title: "Through the Era of Digital Revolution",
      techStack: ["IT Seminar","Himti UIN Jakarta"],
      description:
      "",
      logo: Minimal,
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/18NYr-6uabq-k9pzd0Tb4yTNQ1d1ZC7GY",
      },
    },
    {
      title: "Make Up Your Mind and Become an Entrepreneur",
      techStack: ["Entrepreneurship Seminar","Genbi UIN Jakarta"],
      description:
      "",
      logo: Minimal,
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/13yXaL4-EHKmvf-rGEGuTQBaAz3E25sCa",
      },
    },
    {
      title: "Delegasi Mahasiswa Road to Congress Permira XIX Kazan",
      techStack: ["Webinar Himpunan","HIMTI X Permira Kazan"],
      description:
      "",
      logo: Minimal,
      link: {
        label: "Certificate",
        href: "",
      },
      imgLink: {
        label: "Certificate",
        href: "https://lh3.googleusercontent.com/d/1LwEtlcgEr-9ckNBccd6EjyKHBpvsCK6s",
      },
    },
  ],

} as const;
