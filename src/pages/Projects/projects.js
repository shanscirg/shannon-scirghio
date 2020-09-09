import slangSS from '../../utils/images/slangSS.png';
import slangFavicon from '../../utils/images/slangFavicon.png';
import whatsSS from '../../utils/images/whatsSS.png';
import whatsFav from '../../utils/images/whatsFav2.png';
import burgerSS from '../../utils/images/burgerSS.png';
import burgerIcon from '../../utils/images/burgerIcon.jpg';
import moodiaSS from '../../utils/images/moodiaSS.png';
import moodiaIcon from '../../utils/images/moodiaIcon.png';
import employeeSS from '../../utils/images/employeeSS.png';
import employeeIcon from '../../utils/images/employeeIcon.png';
import weatherSS from '../../utils/images/weatherSS.png';
import weatherIcon from '../../utils/images/weatherIcon.png';
import a1SS from '../../utils/images/a1SS.png';
import a1icon from '../../utils/images/a1icon.png';

export default [
    {
        name: 'Slanguage',
        image: slangSS,
        icon: slangFavicon,
        href: 'https://slanguageapp.herokuapp.com',
        description: 'is a language-learning app for developing proficiency in slang and colloquialisms from a variety of world languages. Created by a team of 4 motivated and hardworking individuals.',
        role: 'I worked with both the frontend and backend, including React JS components, hooks, and API routes and calls, database models, and overall functionality and communication between the frontend and backend.',
        techs: 'HTML5, CSS3, JavaScript, React.js, MongoDB, Express.js, Node.js, Bootstrap, Mic Recorder To MP3, Axios, React Audio Player, React Bootstrap, React Router Dom, Bcrypt JS, Heroku',
        github: 'https://github.com/cha2169540/Slanguage'
    },
    {
        name: 'What\'s My Life!?',
        image: whatsSS,
        icon: whatsFav,
        href: 'https://whats-my-life.herokuapp.com/',
        description: 'is a personality assessment app that provides the user a description of their Myers Briggs Indicator Type and six fun facts about them, such as what travel destination might suit them best. Developed by a team of four creative and passionate individuals.',
        role: 'I worked on the backend and frontend, developed API routes and AJAX calls to have frontend and backend communicate with data from the MySQL database and localstorage. Wrote Handlebars template files to dynamically generate user results.',
        techs: 'HTML5, CSS3, Bootstrap, JavaScript, MySQL2, Sequelize, Express.js, Node.js, Express Handlebars, Bcrypt JS, Heroku',
        github: 'https://github.com/shanscirg/whats-my-life'
    },
    {
        name: 'A1 Mechanical Services',
        image: a1SS,
        icon: a1icon,
        href: 'https://www.a1msoklahoma.com/',
        description: 'is an HVAC Service company in Tulsa, OK. This site allows the user to get free quotes and learn more about the company and its services.',
        role: 'This was a solo project completed at my internship with F5 Web Development.',
        techs: 'HTML5, CSS3, vanilla JavaScript',
        github: 'https://github.com/zda17/A1-Mechanical-New'
    },
    {
        name: 'Moodia',
        image: moodiaSS,
        icon: moodiaIcon,
        href: 'https://shanscirg.github.io/Moodia/',
        description: 'is an entertainment app for users to get ideas of songs, movies, and videos to listen to or watch, based on their mood. The user chooses their mood, and then the app generates entertainment ideas based on that mood.',
        role: 'This was the first team project I worked on! I worked on the backend by setting up API calls, as well as on the frontend by writing the logic for making the app functional.',
        techs: 'HTML5, CSS3, Bootstrap, JavaScript, AJAX',
        github: 'https://github.com/shanscirg/Moodia'
    },
    {
        name: 'Weather Dashboard',
        image: weatherSS,
        icon: weatherIcon,
        href: 'https://shanscirg.github.io/Weather-Dashboard/',
        description: 'was my first project in which I utilized a third-party API to retrieve data. The user can search any city to see the current weather and a 5-day forecast. Searches get saved onto the page as buttons to be clicked on to bring up the weather information again.',
        role: 'This was a solo project, so I did everything from the JavaScript logic to API calls to styling.',
        techs: 'HTML5, CSS3, Bootstrap, JavaScript, AJAX',
        github: 'https://github.com/shanscirg/Weather-Dashboard'
    },
    {
        name: 'BurgerVille',
        image: burgerSS,
        icon: burgerIcon,
        href: 'https://burger-ville.herokuapp.com/burgers',
        description: 'is an MVC app where users can input the name of a burger they\'d like to eat, which subsequently appears on the screen. They are able to click a button to "devour" the burger, and it moves to the devoured burgers section.',
        role: 'This was an individual project, so I worked on everything from frontend to backend. It was great experience for understanding MVC (Model - View - Controller).',
        techs: 'HTML5, CSS3, Bootstrap, JavaScript, MySQL2, Node.js, Express.js, Handlebars, Heroku',
        github: 'https://github.com/shanscirg/burger'
    },
    {
        name: 'Employee Directory',
        image: employeeSS,
        icon: employeeIcon,
        href: 'https://employee-directory-ss.netlify.app/',
        description: 'was my first attempt at a React app. It\'s a very basic app that shows a set list of employees. The user can choose to sort the employees alphabetically, filter them to find only engineers, or reset it.',
        role: 'I worked on this project by myself, so I used React.js to build functional and class-based components that dynamically render on the page.',
        techs: 'HTML5, CSS3, JavaScript, React.js, Netlify',
        github: 'https://github.com/shanscirg/employee-directory'
    }
]