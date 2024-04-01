<h1 align="center">
  To-do List
</h1>

<h3 align="center">
    To-do list with MongoDB database
</h3>

<p align="center">
  <a href="https://github.com/alexbraga/todo-list/commits/master"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alexbraga/todo-list"></a>
</p>

<h4 align="center">
	 Status: Finished
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#how-it-works">How it works</a> •
 <a href="#tech-stack">Tech Stack</a> •
 <a href="#author">Author</a>
</p>

## About

<p align="justify">Node.js to-do list app connected to a MongoDB database, built for <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" rel="noopener noreferrer" target="_blank">The Complete 2021 Web Development Bootcamp</a>.</p>

---

## Features

- Automatically create a new list from URL pathname
- Item deletion
- Express routing
- Express rote parameters

#### Changes to the original project

- Added environment variables for hiding sensitive data

---

## How it works

1. <a href="#clone-this-repository">Clone this repository</a>
2. <a href="#running-the-back-end">Run the back-end server</a>
3. <a href="#creating-a-new-list">Create a new list</a>

### Pre-requisites

Before you begin, you will need to have the following tools installed on your
machine:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [npm](https://npmjs.com)
- [MongoDB](https://www.mongodb.com/try/download/community) (you can also use MongoDB [cloud version](https://www.mongodb.com/atlas) instead)

In addition, you might also want an editor to work with the code, like [VS Code](https://code.visualstudio.com/).

### Clone this repository

```
git clone https://github.com/alexbraga/todo-list.git
```

### Running the Back-end

Go to the app folder
```
cd todo-list
```

Install the dependencies
```
npm install
```

Run the application in development mode
```
node app.js
```

The server will start at port `3000`

### Creating a new list

To create a new list just type the desired list name after `/` and hit enter. Ex.: `http://localhost:3000/mycustomlist`

---

## Tech Stack

The following tools were used in the construction of the project:

#### **Server** ([Node.js](https://nodejs.org/en/))

- **[dotENV](https://github.com/motdotla/dotenv)**
- **[EJS](https://ejs.co/)**
- **[Express](https://expressjs.com/)**
- **[Lodash](https://lodash.com/)**
- **[Mongoose](https://mongoosejs.com/)**

---

## Author

<h4>Alexandre Braga</h4>

<div>
<a href="https://www.linkedin.com/in/alexgbraga/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white" alt="LinkedIn"></a>&nbsp;
<a href="mailto:contato@alexbraga.com.br" target="_blank"><img src="https://img.shields.io/badge/-email-c14438?style=for-the-badge&logo=Gmail&logoColor=white" alt="E-Mail"></a>
</div>
