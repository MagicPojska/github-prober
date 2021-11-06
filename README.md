<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  
<img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2l0aHVifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="Logo" width="150" height="110">


  <h3 align="center">GitHub Prober</h3>

  <p align="center">
    Project that will help you with browsing GitHub!
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a project built for searching GitHub users and their repositories. After a successful login you will be greeted with a navbar and within it an input field for searching. Try searching some of your favourite GitHub users. You don't have to press enter because I used debounce to submit your search term every 700ms after the typing stops.


<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [React.js](https://reactjs.org/)
* [Tailwind](https://tailwindcss.com/)
* [NodeJS](https://nodejs.org/en/)
* [ExpressJS](https://expressjs.com/)
* [GitHub OAuth](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Install NPM
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Login to your GitHub account, go to settings, then Developer Settings and make a new GitHub App. <br />
Type the Homepage URL: http://localhost:3000 <br />
Type the Callback URL: http://localhost:8080/auth/github <br />
Uncheck WebHook! After that save your Client ID and Generate new client secret key and save that one too. 
2. Go to settings again, then Developer Settings and then Personal Access Tokens and generate a new one and save it.
3. Clone the repo
   ```sh
   git clone https://github.com/MagicPojska/github-prober
   ```
4. Go inside server folder
   ```sh
   cd server
   ```
5. Install NPM packages
   ```sh
   npm install
   ```
6. Make .env file and paste your Client ID, Client secret and a new secret key(it can be anything you want) in variables like this: <br />
    GITHUB_CLIENT_ID = Your Client ID <br />
    GITHUB_CLIENT_SECRET = Your Client Secret <br />
    SECRET = Your secret key <br />
7. Go back to root folder and enter client folder
   ```sh
   cd ..
   cd client
   ```
8. Install NPM packages
   ```sh
   npm install
   ```
9. Make .env file and paste your Client ID again and Personal Access Token in variables like this: <br />
    REACT_APP_GITHUB_CLIENT_ID = Your Client ID <br />
    REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN = Your Personal Access Token <br />

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Login screen:
![Login](public/images/login.png)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Safet Pojskić - pojskicsafet@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>
