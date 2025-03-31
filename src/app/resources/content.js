import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Anandan",
  lastName: "S",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/ProfieImages/Profile.jpg",
  location: "Tamil Nadu,India", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Tamil", "English"], // optional: Leave the array empty if you don't want to display languages
};



const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Anan002",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/anandan-s-b8036b194/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:anandanhammed002@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name} Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software engineer and client handler</>,
  subline: (
    <>
      I'm Anandan, a software engineer,specializing in building intuitive and seamless user experiences.
      <br />Beyond work, I dedicate my time to personal growth—whether it's hitting the gym , or exploring new technologies.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a proactive Software Engineer with years of experience in designing, developing, and deploying scalable applications.
        Beyond technical development, I specialize in client engagement, facilitating seamless collaboration between stakeholders and development teams.
        My expertise lies in requirement analysis, translating business objectives into technical solutions, and delivering ongoing support to ensure optimal client satisfaction.
      </>
    ),
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: ".NET Frameworks",
        description: <>- ASP.NET Weforms, MVC, .NET Core.</>,
      },
      {
        title: "Development Tool",
        description: <>- Visual Studio</>,
      },
      {
        title: "Presentation Tier",
        description: <>- Angular, Web Forms, HTML,CSS, Java Scripts.</>,
      },
      {
        title: "Middle Tier",
        description: <>- Web Services,Window Services, API, C#.</>,
      },
      {
        title: "DataTier",
        description: <>- DataAccess Components& Stored Procedures(ADO.NET), Entity framework.</>,
      },
      {
        title: "Databases",
        description: <>- Microsoft SQL Server, Oracle DB.</>,
      },
      {
        title: "API Testing Tool",
        description: <>- Postman</>,
      },
      {
        title: "DeveOps Tool",
        description: <>- Azure Deveops and GitLab.</>,
      },
    ],
  },
  interpersonal: {
    display: true, // set to false to hide this section
    title: "Interpersonal skills",
    skills: [
      {
        title: "Communication Skills",
      },
      {
        title: "Client Relationship Management",
      },
      {
        title: "Presentation Skills",
      },
      {
        title: "Project Management",
      },
      {
        title: "Strategic Thinking",
      },
    ],
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Revalsys Technology",
        timeframe: "2024 - Present",
        role: "Software Developer",
        achievements: [
          <>
            Efficiently handled client interactions, provided innovative ideas for project features, and contributed to business growth.
          </>,
          <>
            Initiated project planning and developed dynamic database structures, significantly enhancing development efficiency.
          </>,
        ],
      },
      {
        company: "Voltech It Services",
        timeframe: "2022 - 2023",
        role: "Dot Net Developer",
        achievements: [
          <>
            Launched my career by gaining hands-on experience with fundamental concepts and core development practices.
          </>,
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Vel Tech Multi Tech Engineering College",
        description: <>Studied Biomedical engineering.</>,
      },
    ],
  },

};

const blog = {
  label: "Blog",
  title: "Writing about what I am seeing...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-15.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "vertical",
    },

    {
      src: "/images/gallery/img-16.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-17.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social,home, about, blog, work, gallery };
