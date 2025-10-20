export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

export const Hero =
  {
    welcome: "Welcome",
    header: "Hi, I am Marco, a Software Developer, 3D Artist and Video Producer.",
    subheader: "Technology enthusiast with a passion for learning and creating.",
    more: "Learn more about me"
  };

export const Grid = {
  title1: "Germany and Japan based developer",
  desc1: "Time zone flexible",
  title2: "My tech stack",
  desc2: "I enjoy learning and improving",
  title3: "Tech enthusiast with a passion for development.",
  title4: "Currently working as a freelancer",
  desc4: "Always looking for new projects.",
  contact: "Do you want to start a project together?",
  copyEmail: "Copy my E-Mail",
};

export const CV = [
  {
    id: 1,
    title: "edeltravel Luxusreisen GmbH",
    description: "Digital Developer",
    year: "2023",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    link: "https://edel.travel"
  },
  {
    id: 2,
    title: "Kumamoto Gakuen University",
    description: "Studied Business Japanese",
    year: "2022",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    link: "https://www.kumagaku.ac.jp/"
  },
  {
    id: 3,
    title: "Heinrich Heine University Düsseldorf",
    description: "BA - Modern Japan",
    year: "2019",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    link: "https://hhu.de/"
  },
  {
    id: 4,
    title: "Westdeutscher Rundfunk (WDR)",
    description: "Video & Audio Producer",
    year: "2017",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    link: "https://www1.wdr.de/"
  },
  {
    id: 5,
    title: "SAE Institute Cologne",
    description: "BA - 3D Animation & Game Design",
    year: "2015",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    link: "https://www.sae.edu/deu/de/"
  },
];

export const gridItems = [
  {
    id: 1,
    title: "CV",
    description: "123",
    list: CV,
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Germany and Japan based developer",
    description: "Time zone flexible",
    list: [],
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I enjoy learning and improving",
    list: [],
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    list: [],
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",

  },

  {
    id: 5,
    title: "Currently working as a freelancer",
    description: "Always looking for new projects.",
    list: [],
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "",

  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    list: [],
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const selectionOfProjects = "A selection of my recent projects";

export const projects = [
  {
    id: 1,
    title: "Intranet for a travel agency",
    des: "A lightweight intranet for a travel agency, which has a collection of information in one place.",
    img: "/intranet-preview.png",
    iconLists: ["/tail.svg", "/wp.svg", "/php.svg"],
    link: "https://tylus.dev/intranet",
  },
  {
    id: 2,
    title: "Felice Music School Website",
    des: "A website for a Japanese music school located in Nogata, Fukuoka.",
    img: "/felice-preview.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://felice.school/",
  },
  {
    id: 3,
    title: "Japan-Fahren",
    des: "An affordable drivers license acquisition service for German tourists in Japan.",
    img: "/japan-fahren-preview.png",
    iconLists: ["/tail.svg", "/ts.svg", "/wp.svg", "/php.svg"],
    link: "https://japan-fahren.de",
  },
  {
    id: 4,
    title: "JaJapan eSIM",
    des: "Unlimited data plans for visitors to Japan, at the most affordable prices in the industry.",
    img: "/jajapan-esim.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://esim.jajapan.com",
  },
  {
    id: 5,
    title: "Various Projects",
    des: "A collection of small open source projects I've worked on in the past.",
    img: "/github-preview.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/wp.svg", "/php.svg", "/rust.svg", "/python.svg"],
    link: "https://github.com/tairasu",
  },
];

export const contactMe = 
  {
    title: "Contact me to get your project started",
    desc: "Need IT assistance? Set up a server? Or just need a website for your business? Let's get in touch!",
    button: "Contact Me",
  };

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/tairasu",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://linkedin.com/in/marco-tylus",
  },
];


