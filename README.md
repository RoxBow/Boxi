# Conciergerie

# Table of Contents
1. [Local Use](#local-use)  
A. [Install project](#install-project)  
B. [Launch project](#launch-project)
2. [Built With](#built-with)
3. [Authors](#authors)

# Local Use

## Install project

Install all packages with

```
$ yarn install
```

Or

```
$ npm install
```

Now, we have to create the database in MongoDb (install Mongo on your machine).

Open Mongo's shell with

```
$ mongo
```

## Launch project


First, start your mongo database. Find your where is installed MongoDB on your device and run mongod.exe.


Example on Windows:
```
cd C:\Program Files\MongoDB\Server\3.6\bin
$ mongod
```

Then launch the project with 
```
$ yarn start
```

then go to http://localhost:3001


# Built With

* [ParcelJs](https://parceljs.org/) - Task manager
* [NodeJs](https://nodejs.org/en/) - Server
* [ExpressJs](http://expressjs.com/) - Used to manage request server
* [ReactJs](https://reactjs.org/) - Render front page
* [Redux](https://redux.js.org/) - Used to manage react global state
* [React-router](https://github.com/ReactTraining/react-router) - Manage route front
* [MongoDB](https://www.mongodb.com/) - Database

# Authors

* **Vincent Deplais** - [RoxBow](https://github.com/RoxBow)
* **Benjamin Ngoum** - [BNgoum](https://github.com/BNgoum)
