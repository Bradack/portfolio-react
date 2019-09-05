import fin1 from './../assets/projects/finitely/finite.ly.1.png';
import fin2 from './../assets/projects/finitely/finite.ly.2.png';


export default [
  {
    title: `Finite.ly`,
    links: {
      github: ``,
      hosted: `http://finite.ly`,
      gitlab: `https://gitlab.com/Bradack/finite.ly`
    },
    technologies: [
      `React`,
      `Redux`,
      `Socket.io`,
      `PostgresSQL`,
      `Node.js`
    ],
    images: [
      fin1,
      fin2,
    ],
    description: `Finite.ly is a (count down) timer web application with an emphasis towards power users, with gamers being the most likely demographic. It functions as a single page website with an emphasis on being an interactive web application. The frontend is designed with the React framework while a Socket.IO interface connects it to a Node.js backend supported by a PostgreSQL server running off of AWS's relational database service.`,
    notes: `Finite.ly is a project I first had brief thoughts of years ago when looking for a program that could gracefully handle multiple timers at once. It grew with the idea of offering an application that could not only manage a number of simultaneous timers gracefully to also aiming to provide support and functionality for cyclic occurances, most of all those that don't align with a 24-hour schedule. I have plans of moving the application into the React Native area as well, targetting mobile and, if possible, desktop clients.`
  },

  {
    title: `Caldentask`,
    links: {
      github: `https://github.com/BBJRinc/Final-Group-Project`,
    },
    technologies: [
      `React Native`,
      `Node.js`,
      `PostgresSQL`,
      `Git as a team`,
      `Auth0`,
      `JWTs`
    ],
    images: [
      `https://user-images.githubusercontent.com/32680642/38333515-110b6dca-3816-11e8-8add-2756c420ae87.png`,
      `https://user-images.githubusercontent.com/32680642/38334135-ce1e3982-3817-11e8-879b-95cc295b7437.png`,
      `https://user-images.githubusercontent.com/32680642/38334226-fe7d3326-3817-11e8-9bde-945d4b71b4a1.png`
    ],
    description: `Calentask was a group project developed while at DevMountain with a team of three other growing developers. Calentask was aimed to provide, effectively, a mixture of Trello-style 'card' organization and functionality that was, itself, organized onto a daily schedule calender. The primary focus of this project was learning and implementing React native and learning to work as a team both socially and through practicing further with Git and project organization. The backend was a lightweight Node.js server `,
    notes: `This thing was definitely an adventure... Of the five groups my cohort split into four decided to make React Native apps and I am proud to say that of those four our group was the only one to stick through to the end and develop a presentable project. I'm very thankful to my teammates for sticking through it despite how rough it was at times, both those that had the enthusiasm to and determination to make it work and those that were patient enough to keep with it when things looked unlikely. Learning the dev tools of CRNA, Expo, and the Android Studio wasn't nearly as easy as I had expected.\n
    Technical notes aside, working as a group was a fun and interesting experience. It was a wonderful chance to share knowledge and experience, while watching the way others went about things was enlightening.`
  },

  {
    title: `Portfolio`,
    links: {
      github: `https://github.com/bradack/portfolio-react`,
      hosted: `https://bradack.info`,
    },
    technologies: [
      `React`,
      `Responsive CSS`
    ],
    images: [
      
    ],
    description: `A portfolio initially built in plain HTML and CSS with minimal javascript before being transitioned to React in order to better facilitate various goals. Responsiveness was a key goal of the project.`,
    notes: `It wasn't until I started getting further into this particular project that it really struck me that while I had learned responsive designing for various platforms I had yet to actually implement it anywhere due to the nature of those projects! That being said the site is simple enough in it's layout that minimal media queries were necessary and a majority of the styling flexibility is built off max-width. This was, however, the first time I have felt I found a legitimate use for grid layout! Still nothing fancy but after fiddling with flexbox a bit I came to the conclusion that grid would simply be better suited. With more focus on responsiveness though I slowly became aware of how much I wish I had implemented a CSS reprocessor in order to learn and leverage it... But as of now it's been bumped up a good deal in my priorities. Mixins seem absolutely wonderful for DRY CSS.`
  },

  // {
  //   title: ``,
  //   links: {
  //     github: ``,
  //     hosted: ``,
  //     gitlab: ``
  //   },
  //   technologies: [
  //     ``
  //   ],
  //   images: [
  //     ``
  //   ],
  //   description: ``,
  //   notes: ``
  // },
]




