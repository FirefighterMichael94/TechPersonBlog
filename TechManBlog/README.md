# Tech Blog

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-Up](#mock-up)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Description

A CMS-style blog site where developers can publish their blog posts and comment on other developers' posts.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
...
Mock-Up

Getting Started
To get a local copy up and running, follow these steps.

tech-blog/
├── config/
│   └── connection.js
├── controllers/
│   ├── api/
│   │   ├── commentRoutes.js
│   │   ├── index.js
│   │   ├── postRoutes.js
│   │   └── userRoutes.js
│   └── homeRoutes.js
├── db/
│   ├── schema.sql
├── models/
│   ├── Comment.js
│   ├── index.js
│   ├── Post.js
│   └── User.js
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── comment.js
│   │   ├── deletePost.js
│   │   ├── editPost.js
│   │   ├── login.js
│   │   ├── logout.js
│   │   └── newPost.js
│   └── images/
├── seeds/
│   ├── seed.js
│   ├── postData.json
│   └── userData.json
├── utils/
│   ├── auth.js
│   └── helpers.js
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   ├── partials/
│   │   ├── comment.handlebars
│   │   ├── header.handlebars
│   │   └── post.handlebars
│   ├── dashboard.handlebars
│   ├── homepage.handlebars
│   ├── login.handlebars
│   └── signup.handlebars
├── .env
├── package.json
├── package-lock.json
└── server.js
Installation

Clone the repo

git clone https://github.com/yourusername/tech-blog.git
Install NPM packages

npm install
##Usage

To start the server, run:

npm start

Built With
Node.js
Express.js
Handlebars.js
Sequelize
MySQL
bcrypt
##Contributing
File was created by Me studying and the help of AI
##License
Distributed under the MIT License. See LICENSE for more information.

Questions
If you have any questions, please contact yourname.

csharp

