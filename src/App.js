import React, { Component } from 'react';
import  { Parallax, Background } from 'react-parallax';

import './reset.css';
import './App.css';

import htmlLogo from './assets/icons/html5.svg';
import cssLogo from './assets/icons/css3.svg';
import jsLogo from './assets/icons/js.svg';
import reactLogo from './assets/icons/react.svg';
import reduxLogo from './assets/icons/redux.svg';
import androidLogo from './assets/icons/android.svg';
import postgresqlLogo from './assets/icons/postgresql.svg';
import awsLogo from './assets/icons/aws.svg';
import nodejsLogo from './assets/icons/nodejs.svg';
import authLogo from './assets/icons/auth0.svg';
import jwtLogo from './assets/icons/jwt.svg';
import socketioLogo from './assets/icons/socketio.svg';
import windowsLogo from './assets/icons/windows.svg';
import ubuntuLogo from './assets/icons/ubuntuflat.svg';
import vscodeLogo from './assets/icons/vscode.svg';
import postmanLogo from './assets/icons/postman.svg';
import githubLogo from './assets/icons/github.svg';
import gitLogo from './assets/icons/git.svg';
import gitlabLogo from './assets/icons/gitlab.svg';

import reactLogoB from './logo.svg';

const PARALLAX_STRENGTH = 600;

const NOTES = {
  HTML: `Pretty basic! Or at least what all I know is basic. From what I know there is not a lot TO HTML, but I have mainly dealt in JSX. I should perhaps do better at using appropriate tags, but outside of keeping consistency with header tags I, personally, find it more clear and sensible to simply stick with div tags and keep descriptive CSS class names or comments close by to keep the element's purpose more clear rather than trying to rely on HTML's keywords.`,
  CSS: `Oh CSS... At times as confusing as it is powerful. It becomes easier and clearer with time and I greatly appreciate much of what it can accomplish and how it works, even if little elements here and there can be confusing or infuriating, or just downright do not make sense from my perspective. (Why is it align-items and justify-content? Why not align- and justify-items or align- and justify-content?!). At times I feel like my relationship with flexbox is obsessive. There's a lot of talk about grid and I have dabbled in it some, but for the projects I have worked on myself it has not felt particularly valuable versus flexbox.\n P.S. Can not wait for the backdrop-filter property to get adopted by more browsers. Having difficulties finding a good way to implement a nice frosted look to the text holders on this site. I was kind of amazed to find it was something CSS couldn't already do.`,
  JS: `Wow. Not sure if I know where to even start on this one or what to say. Coming from a bit of a transition from Java to JS there was a lot that was familiar and a lot that has been odd or different. Javascript has some peculiar quirks and there is a lot I still have to learn but it has been a blast and I am happy to keep finding more to it.`,
  REACT: `Love it! To put things bluntly. React has, in many ways, proven to be more than I had ever hoped for when entering web development. I enjoy the structure and flow of it and I am a pretty big fan of JSX. React, to me, feels a lot more like writing a program and, within that program, defining your UI. With Angular and other early libraries (that I know of) the theme seemed to be to play alongside HTML in a give and take. React, meanwhile, abstracts you from all of that and feels like it puts you in a position where JS is in control from the start and HTML is just a UI tool. It is a concept that is probably just entirely psychological for me but it has made working with React a much more enjoyable experience to me.`,
  REDUX: `I had a bit of a rocky start with this trying to grasp the structure of the typical connect() function and the mapping of state/dispatch but I feel like I learned a lot about how it works from those hurdles. I am rather fine and happy working with Redux, though most of the work I have done with it I feel has been rather basic. I have read complaints around here and there about it, but that is the fate of all things on the internet. Personally I am rather fond of the idea of a central state object when it proves useful.`,
  RN: `Oh boy... As far as the coding went I found React Native an interesting and fun platform to work with and I would love to explore it more. My team sadly just had a not-insignificant number of issues with the various development tools and the different levels of Native and Expo. I wish we could have done more to sort out some of those issues, but time was critical.`,
  SQL: `I have heard some horror stories about this stuff... Queries that have spanned pages and pages, HUGE lists of tables... Never having looked at some of the more massive systems, myself, a lot of it seems almost unfathomable. I feel like there is a lot I still frequently need to reference here and a lot I have to learn, but the fact that everyone and their mother seems to have their own flavor of SQL syntax with its tiny nuances leaves me unsure if I should bother striving for TOO much in this area without a particular direction to aim for. I think I feel fairly solid in finding my way around though, as long as I have the docs at hand.`,
  AWS: `Admittedly not a ton of experience here, yet, mostly implementing their PostgreSQL solution to run Finite.ly's database with a touch of exploring beyond that, and access controls! An S3 bucket is planned eventually to hold some of the graphical resources for the project. The AWS certification has tempted me some, but such things are, by nature, so very specific to the platform being used and I am doubtful of how much practical knowledge I would gain if I find work at a location that does not use AWS, or if my path takes a leaning towards the frontend.`,
  NODE: `I find it oddly jarring switching from imports to require, but working with node has been an interesting and fun experience. It does not quite have the graphical satisfaction of seeing an interactable UI come together, but it has still been rather enjoyable. The work I did at Dev Mountain and with most projects lead to... fairly barebones-feeling implementations of Node. Auth. Endpoints. Authorization. Database queries. Done. My work on the Discord bot has, by comparison, felt surprisingly rewarding, though. It was the first time feeling like I am really DOING something with Node beyond supplying a middle ground between clients and the database.`,
  AUTH0: `I find their login to be more and more tacky the more I use it... And have grown more and more conscious to noticing it being used in sites. That and I think their prices are kind of absurd, at least for my level of wants from it. Personal grudges aside, though, it is what it is. I have not done much exploration into what all services it provides on their dashboard but implementation in Node is certainly not difficult.`,
  JWT: `There are some pretty strongly felt debates online about whether Java Web Tokens provide any legitimate use beyond third party authentication/authorization, but... at least for Finite.ly they seem to have worked out rather well! They are an interesting concept and it was fun to work with them, but perhaps the argument of cookies vs JWT is still a bit out of range of my level of experience.`,
  SIO: `Pretty fun and interesting! Personally I enjoy the syntax of the Socket.IO library over my experience with Axios, though obviously they each fill the roles they were designed for. Most of my experience with sockets has been with Finite.ly, in order to ensure all of a user's clients stay in sync as perfectly as possible. (How utterly annoying would it be if the alarm on your phone went quiet when you acknowledge it but your computer on the other side of the house just kept blaring on?)`,
  WIN: `It's... Windows! My own OS of choice, despite its evils. All of the three major players in the desktop market have their sins but I find Windows the easiest to live with. As a bonus I got my A+ and Net+ back several years ago, though it only covered up to Vista at the time and 8 and 10 have... definitely been far different of a beast. (And a depressingly more touch-oriented beast at that.)`,
  UBUNTU: `Linux... In theory it is awesome, in practice it often feels awful. (Cue some ranting. Feel free to skip over this!) I have tried it several times over the years but every time has resulted in most of my interest slowly dying off. A lot of my experiences could probably be likened with my recent experience with installing it onto my laptop. The device itself has a 4k screen, so while I could probably get by on 1:1 scaling it is not comfortable and I find myself reading more easy in the 1.25-1.5x scaling range depending. This works out find until you plug it in to an external 1080 monitor and suddenly everything is awkwardly large on the external display. Does Ubuntu support different scaling on different displays? Not particularly. Step one is to find the buried command that will individually set the scaling of each of your displays. That command does not -actually- even change your system settings though. Instead it just changes your settings in active memory. So from there you get to create a new script file with that command, and then set that script to run every time you system starts by adding it to your user files... There are just too many hoops to jump through for what is, and SHOULD, be considered basic functionality from a modern OS. It is not even that the task is difficult it is just incredibly bothersome to hit such anti-user speedbumps time after time. Windows has a slider bar. Ubuntu has 10 minutes of googling and command line work.`,
  VSC: `It has treated me well! So far no real complaints about it. Aside from the rule of "Never allow VSCode to 'fix' your import statements for you" (when you move a file). Terrible, terrible things have come from that. Admittedly my only other code editors I have used were vi and Netbeans back when I was using Java, though.`,
  POSTMAN: `Fairly simple and straightforward... Endpoint tests! Though a browser is arguably better for get requests, especially with the various formatting addons around that can prettify it up nicely/legibly.`,
  GITHUB: `Not as pretty as GitLab and the mascot is not as cute. Their layout is at times unintuitive to me, but even since  starting to use it their landing page for being logged in has improved dramatically in my own opinion. Time has gotten me more and more adjusted to the site as a whole. You can not really bash on issue tracking and communication.`,
  GIT: `So much to learn here still, I feel! But speed and comfort with the CLI grows with usage and I feel like I can navigate pretty well through all the basics. Stuff like rolling back commits might be a little more iffy, and I am still not entirely sure about topics such as when it is considered appropriate to rebase. Certainly not a master, but I can function pretty adequately as a user. (At least as far as I know)`,
  GITLAB: `Prettier than GitHub, and with a fox! You can not really argue with that! I have appreciated their layout more than GitHub's and the fact that they have free private repositories where I can be my self-conscious self and not be judged quite so hard/frequently by strangers for my inexperience as I explore different things.`,
}


class App extends Component {

  renderDivider() {
    return (
      <div className='svg-divider'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 420 12' width= '100%'>
          <path class='svg-divider' d="M147.938.907c-4.691.385-24.52 4.58-130.563 5.062H-.219c3.122 0 5.79.025 8.781.031-2.99.01-5.66.031-8.78.031h17.593c131.84.599 130.217 7.197 132.406 4.438 4.552-3.467 10.301-4.096 14.469-4.438h.531c-.063 0-.123-.027-.187-.031.063 0 .124-.027.187-.031h-.531c-4.168-.342-9.917-.971-14.469-4.437-.428-.54-.702-.72-1.844-.625zm122.78 0c-.448.06-.651.265-.937.625-4.552 3.466-10.3 4.095-14.469 4.437h-.687c.113.01.228.023.344.031-.064 0-.125.027-.188.031h.531c4.168.342 9.917.971 14.47 4.438 2.188 2.759.566-3.84 132.406-4.438h17.593c-3.121 0-5.79-.025-8.781-.031 2.99-.01 5.66-.031 8.781-.031h-17.594C287.546 5.449 273.714.506 270.72.907zm-16.093 5.062h-.219c-.29-.017-.543-.021-.812-.031-4.576-.67-8.813-4.906-8.813-4.906-4.087 3.986-8.677 4.803-9.625 4.937h-.375s.16.028.188.031c-.028 0-.188.031-.188.031h.375c.948.135 5.538.952 9.625 4.938 0 0 4.257-4.25 8.844-4.906.259-.01.503-.015.781-.031-.073 0-.145-.026-.219-.031.146-.011.292-.028.438-.031zm-19.844.062L234.72 6l.062-.031h-.125c-9.914-4.936-14.918-4.937-24.875-4.937s-14.96 0-24.875 4.937h-.125l.063.031-.063.031h.125c9.914 4.935 14.919 4.938 24.875 4.938 9.957 0 14.962 0 24.875-4.938zm-50 0s-.16-.028-.187-.031c.028 0 .187-.031.187-.031h-.375c-.948-.135-5.537-.952-9.625-4.937 0 0-4.236 4.235-8.812 4.906-.27.01-.522.014-.813.03.074 0 .146.027.219.032-.073.01-.145.028-.219.03.278.017.522.022.781.032 4.588.656 8.844 4.906 8.844 4.906 4.088-3.986 8.677-4.803 9.625-4.937h.375z"/>
        </svg>
      </div>
    )
  }

  render() {
    return (
      <div className="main">

        
        <Parallax strength={PARALLAX_STRENGTH}>

          <Background >
            <div className='section-bg landing-bg' />
          </Background>

          <div className='section landing'>
            <div className='landing-title card'>
              <h1>Bradack Barnard</h1>
              <h4>Full-Stack Web Developer</h4>
            </div>
          </div>

        </Parallax>

        <div className='blur-border' />
        
        <Parallax strength={PARALLAX_STRENGTH}>

          <Background >
            <div className='section-bg about-bg' />
          </Background>

          <div className='section about'>
            <div className='section-title card'>
              <h2>ABOUT</h2>
            </div>
            <div className='about-contents card'>
              <h5>Salutations!</h5>
              <p>I'll give you the benefit of the doubt that you already saw my name above. Blowing my own horn and talking about myself has never been a strong point of mine but here goes!</p>
              <p>I have been a huge fan of computers from a young age, everything about them from software to hardware has awed me and held a certain addictive quality. A high school course in QBasic assured me that I had both the mindset for it and, more importantly, loved programming. Meanwhile a course in maintenance lead me to an appreciation towards hardware and troubleshooting; things that have proved to be an invaluable life skills for this day and age. Despite A+ and Net+ certification, however, the bulk of my passion has always rested in the coding side of computer systems.</p>
              <p>I find comfort in the languages' syntax, the structures, the absolute qualities of it all. People often find frustration in how computers work, often accusing them of being wrong, while I have always found fascination in how they almost faultlessly do exactly as they are told. Sometimes we just have to figure out exactly what we, or someone else, has told it to do. The problem solving, the puzzles and the struggles, the abstract models and ideas, the fact that there is always something more to learn... All of it makes programming such an enjoyable activity and provides such wonderful challenges and room for growth.</p>
            </div>
          </div>

        </Parallax>

        <div className='blur-border' />

        <Parallax strength={PARALLAX_STRENGTH}>

          <Background >
            <div className='section-bg technologies-bg' />
          </Background>

          <div className='section technologies'>
            <div className='section-title card'>
              <h2>TECHNOLOGIES</h2>
            </div>
            <div className='technologies-contents'>
          {/* FRONTEND TECHNOLOGIES CARD */}
              <div className='technologies-group card'>

                <div className='technologies-row'>
                  <img src={htmlLogo} alt='HTML5' />
                  <img src={cssLogo} alt='CSS3' />
                </div>

                <div className='technologies-row'>
                  <img src={jsLogo} alt='Javascript' />
                  <div>
                   <img src={reactLogo} alt='React' />
                  </div>
                  <img src={reduxLogo} alt='Redux' />
                </div>

                <div className='technologies-row'>
                  <img src={androidLogo} alt='React Native' />
                </div>

                {this.renderDivider()}
                <h5>Frontend</h5>

              </div>
          {/* BACKEND TECHNOLOGIES CARD */}
              <div className='technologies-group card'>

                <div className='technologies-row'>
                  <img src={postgresqlLogo} alt='PostgreSQL' />
                  <img src={awsLogo} atl='Amazon Web Services' />
                </div>

                <div className='technologies-row'>
                  <div style={{background: '#202020', borderRadius:'5px', width: '100%', height: '100%'}}>
                    <img src={nodejsLogo} alt='Node J S' style={{padding: '2px'}}/>
                  </div>
                </div>

                <div className='technologies-row'>
                  <img src={authLogo} alt='Auth 0' />
                  <div style={{
                      borderRadius: '100px',
                      overflow: 'hidden'}}>
                    <img src={jwtLogo} alt='J W T' style={{height:'auto', width:'180%', maxWidth: 'none', maxHeight: 'none'}} />
                  </div>
                  <img src={socketioLogo} alt='Socket I O' />
                </div>

                {this.renderDivider()}
                <h5>Backend</h5>
                
              </div>
          {/* TOOLS TECHNOLOGIES CARD */}
              <div className='technologies-group card'>
                <div className='technologies-row'>
                  <img src={windowsLogo} alt='Windows' />
                  <img src={ubuntuLogo} alt='Ubuntu' />
                </div>
                <div className='technologies-row'>
                  <img src={vscodeLogo} alt='V S Code' />
                  <img src={postmanLogo} alt='Postman' />
                </div>
                <div className='technologies-row'>
                  <img src={githubLogo} alt='GitHub' />
                  <img src={gitLogo} alt='Git' />
                  <img src={gitlabLogo} alt='GitLab' />
                </div>
                {this.renderDivider()}
                <h5>Tools</h5>
              </div>
            </div>
          </div>

        </Parallax>

        <div className='blur-border' />

        <Parallax strength={PARALLAX_STRENGTH}>

          <Background >
            <div className='section-bg projects-bg' />
          </Background>

          <div className='section projects'>
            
          </div>

        </Parallax>

        <div className='blur-border' />

        <Parallax strength={PARALLAX_STRENGTH}>

          <Background >
            <div className='section-bg contacts-bg' />
          </Background>

          <div className='section contacts'>
            <div className='section-title card'>
              <h2>CONTACTS / LINKS</h2>
            </div>
            <div className='contacts-contents card'>
              <div className='contacts-column'>
                <h6>Phone:</h6>
                <h6><a href='tel:918-376-0086'>(918) 376-0086</a></h6>
                <br />
                <h6>Email:</h6>
                <h6><a href='mailto:Bradack.Barnard@gmail.com'>Bradack.Barnard@gmail.com</a></h6>
              </div>
              <div className='contacts-column'>
                <h6>LinkdIn:</h6>
                <h6><a href='https://www.linkedin.com/in/BradackBarnard/'>BradackBarnard</a></h6>
                <br />
                <h6>GitHUB:</h6>
                <h6><a href='https://www.github.com/BradackB'>BradackB</a></h6>
              </div>
          </div>
          </div>

        </Parallax>

      </div>
    )
  }
}



export default App;
