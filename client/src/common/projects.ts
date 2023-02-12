export const projects = [
  {
    id: 0,
    name: "Portfolio",
    title: "portfolio",
    description: `Starting goal of my portfolio App was to set up Webpack from scratch. 
        No Create-React-App ! Then put down some basic React funtionalities, write Project / 
        Tech Stack / Features descriptions,
         create Photo Galleries and finally, the hardest part. Make a short text
        speaking about myself ! Refactored with Typescript & React Styled Components.`,
    preview: "./previewPortfolio.jpg",
    url: "https://zero-psy.com/portfolio",
    git: "https://github.com/orestispsy/portfolio-typescript",
    pics: [{ pic: "./projectPics/pf1.jpg" }],
    features: [
      "Bio",
      "Projects Preview",
      "Photo Galleries",
      "Tech-Stack & Project Features",
      "Quick Email Form",
      `Easter Egg - Music`,
    ],
    stack: [
      "Webpack.js",
      "Typescript",
      "React.js",
      "Styled Components",
      "Node.js",
      "Express.js",
      "Email.js",
    ],
  },

  {
    id: 1,
    name: "The Gig Guide",
    title: "the-gig-guide",
    description: `The main idea behind the Gig Guide was to bring some order in the life of a rock n roll
        band touring the planet, helping them store their own concert agenda. Too many gigs,
        needing a database and then some Javascript magic to happen ! Then let the fans take part in it
        and give them the opportunity to interact through chat & private messages, community posts and
        contributions of their own material, inside the concert database. This is an overall demonstration
        of my Front & Backend experience, featuring React.js, Express.js, Redux, Socket.io & PostgreSQL.`,

    features: [
      "Register/Login",
      "Global Gig Map",
      "Add/Edit Gig Entry Section",
      "Coordinates Finder",
      "Poster Gallery/Editor",
      "Gig Entries Timeline",
      "Gig Entry - User Photo/Comment Contribution",
      "Star Wars Intro Style Gig Entries Animation",
      "Chat Room",
      "Chat Online Users",
      "User Edit Section",
      "Chat Color & User Photo Options",
      "Custom Chat Emojis",
      "Chat Private Mode",
      "Chat Warnings & Notifications With Sound!",
      "Delete Chat Messages",
      "Ticker",
      "Visitors Counter",
      "Chat User Network Menu",
      "Guest Mode - Limited Site View",
      "Admin Mode - Full Site View",
      "Super Admin Mode - User Config Controls",
      "Radio Shows Draggable Media Player",
      "Dark / Light Switch Mode",
      "User Nudge Chat Feature",
      "Ban User - Super Admin Chat Feature",
    ],

    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Redux",
      "Socket.io",
      "PostgreSQL",
      "S3 - AWS",
      "Google Maps Api",
    ],
    preview: "./preview1kg.jpg",
    url: "https://gigguide.zero-psy.com",
    git: "https://github.com/orestispsy/the-gig-guide",
    pics: [
      { pic: "./projectPics/gg1.jpg" },
      { pic: "./projectPics/gg4.gif" },
      { pic: "./projectPics/gg5.jpg" },
      { pic: "./projectPics/gg6.jpg" },
      { pic: "./projectPics/gg7.jpg" },
      { pic: "./projectPics/gg8.jpg" },
      { pic: "./projectPics/gg9.gif" },
      { pic: "./projectPics/gg10.jpg" },
      { pic: "./projectPics/gg11.jpg" },
      { pic: "./projectPics/gg12.gif" },
      { pic: "./projectPics/gg13.gif" },
      { pic: "./projectPics/gg14.jpg" },
    ],
  },
  {
    id: 2,
    name: "Xmas-Special",
    title: "xmas2022-special",
    description: `Well, it was about time to get deeper into the HTML Canvas.
                  Here javascript classes took over, to create objects and use them to built moving and interactive Sprites.
                  Then again Christmas was about to come and I had this thought, of creating a platform "wishing-card" game
                  for my friends and the people ! Even though the time has passed, you can still help a demon, find his
                  way outta hell !`,
    preview: "./previewXmasSpecial2.jpg",
    url: "https://zero-psy.com/xmas2022",
    git: "",
    pics: [
      { pic: "./projectPics/xs2.jpg" },
      { pic: "./projectPics/xs1.jpg" },
      { pic: "./projectPics/xs3.gif" },
      { pic: "./projectPics/xs4.jpg" },
      { pic: "./projectPics/xs5.jpg" },
    ],
    features: [
      "Main Game Character",
      "Character Keyboard Moving",
      "Sprites & Platforms",
      "Interactive Items",
      "Plot & Finale"
    ],
    stack: ["HTML Canvas" , "Typescript", "React.js", "Styled Components" ],
  },

  {
    id: 3,
    name: "Fee Calculator",
    title: "fee-calculator",
    description: `This project is the assessment for an intership. 
        A React App, calculating the given values, returning as result the total fee
        according to rules. Written in Typescript & tested with Jest and React Testing Library.`,
    preview: "./previewCalculator.jpg",
    url: "https://zero-psy.com/wolt",
    git: "https://github.com/orestispsy/delivery-fee-calculator",
    pics: [
      { pic: "./projectPics/calc1.jpg" },
      { pic: "./projectPics/calc2.jpg" },
      { pic: "./projectPics/calc3.gif" },
    ],

    stack: ["Typescript", "React.js", "React Testing Library", "Jest"],
  },

  {
    id: 4,
    hot: false,
    remastered: true,
    name: "Connect4",
    title: "connect-4",
    description: `The story goes like this : I was creating DOM elements with Javascript and started building shapes, styling with CSS Grid. At some point, my screen
        started looking similar to the Board of Score 4, that old Game for kids I've coded with jQuery about a year ago. I decided to move on
        and add functionalities. After a few hundreds of lines I came up with this version ! Made with love for the game & pure Vanilla JS. `,

    features: [
      "2-Player Game Mode",
      "Player vs CPU Mode [Easy]",
      "Draggable Playing Dot",
      "Music & Sound Effects",
      "Gameplay Music Interactions",
      "Horizontal, Vertical & Diagonal Victories",
      "Victory Board Animations",
    ],

    stack: ["Vanilla JS"],
    preview: "./previewC4RE.jpg",
    url: "https://zero-psy.com/c4/",
    git: "https://github.com/orestispsy/c4-remastered",
    pics: [
      { pic: "./projectPics/c4RE1.jpg" },
      { pic: "./projectPics/c4RE2.jpg" },
      { pic: "./projectPics/c4RE3.jpg" },
      { pic: "./projectPics/c4RE4.gif" },
    ],
  },
  {
    id: 5,
    name: "zero-psy",
    title: "zero-psy",
    description: `This is the landing page of my main domain. Here I am experimenting
         with Element object methods in the HTML DOM, doing multiple CSS / Javascript
         animations, while trying bringing a "Space-Invaders-Style" User Interface ! The whole script is written in
        Vanilla JS.`,
    preview: "./previewZeroPsy.jpg",
    url: "https://zero-psy.com",
    git: "https://github.com/orestispsy/falling-stars",
    pics: [{ pic: "./projectPics/zp1.jpg" }, { pic: "./projectPics/zp2.gif" }],

    stack: ["Javascript"],
  },

  {
    id: 6,
    name: "spotiFIRE!",
    title: "spotifire",
    description:
      "The SpotiFIRE ! In this project I am practicing with asynchronous HTTP/Ajax requests with jQuery for the first time. Calling an external api which retrieves data libraries from Spotify and throws the results on screen. A Spotify search-engine, just outside of it ! Give it a try and have patience for a couple of seconds while waiting for the results. Sometimes free data needs time on its way back home ! ",
    preview: "./spotiFIRE/preview.jpg",
    url: "./spotiFIRE/index.html?scroll=infinite",
    git: "https://github.com/orestispsy/zero-psy/tree/master/client/public/spotiFIRE",
    pics: [
      { pic: "./projectPics/sf1.jpg" },
      { pic: "./projectPics/sf2.jpg" },
      { pic: "./projectPics/sf3.gif" },
    ],
    stack: ["jQuery"],
    features: [
      "Spotify Api Ajax Requests",
      "Artist/Album Search",
      "Listed Results",
      "Direct Links to Spotify",
      `Infinity Scroll On URL Location Search "?scroll=infinite"`,
      `More Results Button On URL Location "/index.html"`,
    ],
  },
  {
    id: 7,
    name: "Imageboard",
    title: "imageboard",
    description:
      "My very first steps into Vue.js. In this application I am building an imageboard while using Amazon Web Services to store User photos on the Cloud.",
    preview: "./previewImageboard.jpg",
    git: "https://github.com/orestispsy/vue-imageboard",
    pics: [
      { pic: "./projectPics/ib1.jpg" },
      { pic: "./projectPics/ib2.gif" },
      { pic: "./projectPics/ib3.jpg" },
    ],
    stack: ["Vue.js", "Node.js", "Express.js", "PostreSQL", "S3 - AWS"],
    features: ["Gallery", "Image Upload", "Image Preview & Comment Section"],
  },

  {
    id: 8,
    name: "Petition",
    title: "petition",
    description:
      "A project made through my days in the Spiced Academy Bootcamp. Starting coding back-end with Node.js & Express.js, introducing register/login Section, CRUD operations & HTML Canvas drawing for the signing user ! Built with Javascript & Handlebars.",
    preview: "./previewPetition.jpg",
    git: "https://github.com/orestispsy/Bootcamp-Petition-Project",
    pics: [
      { pic: "./projectPics/pt1.jpg" },
      { pic: "./projectPics/pt2.gif" },
      { pic: "./projectPics/pt3.jpg" },
      { pic: "./projectPics/pt4.jpg" },
    ],
    stack: ["Handlebars", "Node.js", "Express.js", "PostreSQL"],
    features: [
      "Register/Login",
      "User Info Edit",
      "HTML Canvas Signature Drawing",
      "Delete Signature & Re-sign",
      "Signers List",
      "Delete Account",
    ],
  },

  {
    id: 9,
    name: "Social Network",
    title: "social-network",
    description:
      "Under The Surface - Social Network. In this project I am landing into the React World. Understanding Component & State Use. Practicing Redux to build features like make/accept/deny friend requests & Socket.io to implement my first Chat Room ever !",
    preview: "./previewSocialNetwork.jpg",
    url: false,
    git: "https://github.com/orestispsy/UnderTheSea-SocialNetwork",
    pics: [
      { pic: "./projectPics/sn1.jpg" },
      { pic: "./projectPics/sn2.jpg" },
      { pic: "./projectPics/sn3.gif" },
      { pic: "./projectPics/sn4.jpg" },
      { pic: "./projectPics/sn5.gif" },
      { pic: "./projectPics/sn6.jpg" },
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Redux",
      "Socket.io",
      "PostgreSQL",
      "S3 - AWS",
      "SES - AWS",
    ],
    features: [
      "Register/Login",
      "Change Password With Email Confirmation",
      "Add/Edit User Bio",
      "Profile Image Upload",
      "User Network Search",
      "Make / Cancel / Accept / Deny Friend Requests",
      "Un-Friend Users",
      "Chat Room",
      "Chat Online Users",
      "Delete Account",
    ],
  },
  {
    id: 10,
    name: "Connect4",
    title: "connect-4-jquery",
    description: `What to say about this project ! You were a kid too, right !? Score 4 ! The classic game made from scratch with the use of jQuery. Go for Horizontal, Vertical & Diagonal victories in 2-Player Mode. Watch my first steps doing animation events too and don't forget to click the "Hit Me" Button !  `,
    preview: "./connect4/preview.jpg",
    url: "./connect4/index.html",
    git: "https://github.com/orestispsy/zero-psy/tree/master/client/public/connect4",
    pics: [
      { pic: "./projectPics/c41.jpg" },
      { pic: "./projectPics/c42.jpg" },
      { pic: "./projectPics/c43.jpg" },
      { pic: "./projectPics/c44.gif" },
    ],
    stack: ["jQuery"],
    features: [
      "2-Player Game Mode",
      "Horizontal, Vertical & Diagonal Victories",
      "Victory Animation",
      "Music",
    ],
  },
];

export default {
  projects,
};
