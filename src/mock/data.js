import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Safdar Ahmed', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'See what I have been upto!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Safdar',
  subtitle: 'I\'m a Student and Developer. ',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Computer Science Undergraduate student based in Delhi.',
  paragraphTwo: 'I have worked with different tech stacks as a full stack developer and also have proficiency as a cloud architect in major platforms like AWS and GCP.',
  paragraphThree: 'These are some of the projects I have developed',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'hms.jpg',
    title: 'HMS',
    info: 'This is an IoT based health monitoring and cloud medical record keeping system. It can be used to store and retrieve uniquely identified medical records remotely and also a host of personal fitness tracking features like calorie counter, sleep and exercise tracker, medicine reminder and more.',
    info2: '',
    tech1: 'reactjs',
    tech2: 'java',
    tech3: 'npm',
    tech4: 'javascript',
    url: '',
    repo: 'https://github.com/bharatgoyal01999/hms', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'revaudio.jpg',
    title: 'RevAudio',
    info: 'This is a web app that lets you record a message and then plays the recorded audio in reverse. The frontend and backend are completely isolated, hosted on different servers and communicate via API calls.',
    info2: '',
    tech1: 'python',
    tech2: 'd3',
    tech3: 'reactjs',
    tech4: 'aws',
    url: '',
    repo: 'https://github.com/Safdarahmedd/revaudio-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfolio.jpg',
    title: 'Portfolio',
    info: 'Developed a portfolio website using the Django framework with a web-accessible admin panel, a blog powered by PostgresQL database, styled with bootstrap and CSS.',
    info2: '',
    tech1: 'postgres',
    tech2: 'd3',
    tech3: 'bootstrap',
    tech4: 'nginx',
    url: '',
    repo: 'https://github.com/Safdarahmedd/portfolio-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cppkart.jpg',
    title: 'Cpp Kart',
    info: 'Built a functional solution using the C++ language. I developed an e-commerce platform complete with a GUI, user login, product categories, and product ratings implemented with various libraries and file pointers.',
    info2: '',
    tech1: 'cplusplus',
    tech2: '',
    tech3: '',
    tech4: '',
    url: '',
    repo: 'https://github.com/Safdarahmedd/cppkart', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pet.jpg',
    title: 'Pet World',
    info: 'Developed this website with the XAMPP stack for my Database and Web Lab minor project. It has a dynamic frontend and the platform offers user login, options for adoption of pets, a cart, and search based on multiple parameters.',
    info2: '',
    tech1: 'apache',
    tech2: 'mariadb',
    tech3: 'perl',
    tech4: 'php-alt',
    url: '',
    repo: 'https://github.com/Safdarahmedd/petworld-xampp', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'If you have any queries you can reach me below',
  btn: 'Mail me',
  email: 'safdarahmed.18@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
    id: nanoid(),
    name: 'wordpress',
    url: 'https://muser01.wordpress.com/',
    },
    {
      id: nanoid(),
      name: 'stack-overflow',
      url: 'https://stackoverflow.com/users/story/12973096',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/safdar-ahmed-021415203/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Safdarahmedd',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
