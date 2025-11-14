import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Sourav Pati Portfolio',
  description: "Software Developer || Desktop Application Developer || MERN Stack Engineer || AI/ML Engineer",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */

export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi I'm Sourav Pati`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        a Computer Science student from ITER, Bhubaneswar with expertise in <strong className='text-stone-100'>Full Stack Software Development</strong>,
        <strong className='text-stone-100'> AI/ML</strong>, and a passion for impactful real-world problem-solving.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I look forward to growing through <strong className="text-stone-100">shared knowledge</strong> and <strong className="text-stone-100">impactful creations</strong>.
        {' '}
        </p>
        <em className='text-stone-200 prose-lg'>Every collaboration is a chance to learn and craft something extraordinary.</em>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1XSGCimsnDePAkjo0V3489NzFQsvevcY1/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I’m Sourav Pati, a Computer Science undergraduate (B.Tech, ITER) with strong foundations in software development 
  and machine learning. Experienced in full-stack development, AI/ML projects, and systems programming. Passionate about solving complex problems 
  with clean, efficient, and impactful solutions.`,
  aboutItems: [
    {label: 'Location', text: 'Bhubaneswar, Odisha', Icon: MapIcon},
    {label: 'Age', text: `${(new Date().getFullYear()) - 2005 + 1}`, Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Novels, Gaming', Icon: SparklesIcon},
    {label: 'Study', text: 'Institute of Technical Education and Research, Bhubaneswar', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Not yet Employed', Icon: BuildingOffice2Icon, styles: {fontStyle: 'italic'}},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Core Programming Languages',
    skills: [
      {
        name: 'Java',
        level: 10,
      },
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'C',
        level: 9,
      },
      {
        name: 'C++',
        level: 8,
      },
      {
        name: 'JavaScript',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML5/CSS3',
        level: 10,
      },
      {
        name: 'React.js',
        level: 10,
      },
      {
        name: 'Next.js',
        level: 10,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Express.js',
        level: 9,
      },
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Flask',
        level: 8,
      },
    ],
  },
  {
    name: 'AI / ML',
    skills: [
      {
        name: 'Tensorflow',
        level: 9,
      },
      {
        name: 'Scikit-Learn',
        level: 9,
      },
      {
        name: 'Pytorch',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'ML-based full-body diagnosis',
    description: 'An application for aiding in full body checkup',
    url: 'https://github.com/sourav-625/ML-based-full-body-diagnosis',
    image: porfolioImage5,
  },
  {
    title: 'FaceTrace',
    description: 'An AI based individual face recognition system',
    url: 'https://github.com/sourav-625/Person_recognition_Image_processing',
    image: porfolioImage6,
  },
  {
    title: 'OncoShield',
    description: 'A AI-driven non-invasive tumor detection system',
    url: 'https://github.com/sourav-625/oncoshield',
    image: porfolioImage1,
  },
  {
    title: 'CropScan IR',
    description: 'A IR-imaging based crop monitoring system',
    url: 'https://github.com/sourav-625/CropScan',
    image: porfolioImage2,
  },
  {
    title: 'Sourav-math-lib',
    description: "A Java library providing advanced mathematical functions and tools",
    url: 'https://github.com/sourav-625/sourav-math-lib',
    image: porfolioImage3,
  },
  {
    title: "Sudoku Game app",
    description: "An online webapp for sudoku lovers",
    url: 'https://sourav-625.github.io/Sudoku-game/',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2027',
    location: 'Institute of Technical Education and Research, Bhubaneswar',
    title: 'Bachelor of Technology(B.Tech)',
    marks: 9.48,
    content: <p></p>
  },
  {
    date: 'March 2023',
    location: 'Modern Public School, Balasore',
    title: 'Higher Secondary Education (+2 Science)',
    marks: 92.20,
    content: <p></p>
  },
  {
    date: 'April 2021',
    location: 'Modern Public School, Balasore',
    title: 'Matriculation',
    marks: 91.60,
    content: <p></p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: '',
      text: 'Honesty gives ambition its direction, and sincerity gives it its soul.',
    },
    {
      name: '',
      text: 'Ambition without sincerity is greed; sincerity without honesty is blindness.',
    },
    {
      name: '',
      text: 'Let your ambition rise high, but let honesty and sincerity be the wings that carry it.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Message me here.',
  items: [
    {
      type: ContactType.Email,
      text: 'k0259.mpsbls@gmail.com',
      href: 'mailto:k0259.mpsbls@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Bhubaneswar, Odisha, india',
      href: 'https://www.google.ca/maps/place/',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Sourav-Pati',
      href: 'https://www.linkedin.com/in/sourav-pati-31189b307/',
    },
    {
      type: ContactType.Twitter,
      text: '@sourav-625',
      href: 'https://x.com/SouravPati625',
    },
    {
      type: ContactType.Github,
      text: 'sourav-625',
      href: 'https://github.com/sourav-625',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sourav-625'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sourav-pati-31189b307/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/SouravPati625'},
];
