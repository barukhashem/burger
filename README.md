# Node Express Handlebars

### Bodacious Burgers (Eat The Burger) App


### Overview

In this assignment, I created a colorful burger restaurant logger application called `Bodacious Burgers` that lets users input the names of burgers they would like to eat.

When the user submits a new burger's name, the app displays the burger with an adjacent button saying "`Ready To Eat!`" on the "Try Our Most Popular Burgers" area of the page. When the "Ready To Eat!" button is clicked, the burger moves to the "And If You're Still Hungry...." area of the page with an adjacent button saying "`Make Me Another!`" When the "Make Me Another!" button is clicked, the burger moves back to the "Try Our Most Popular Burgers" area of the page. The app stores every burger in a database, whether eaten or not.

I created the app with MySQL, Node, Express, Handlebars, and an ORM. Following the MVC (Model View Controller) design pattern, I used Node and MySQL to query and route data in my app and Handlebars to generate my HTML. Lastly, I deployed the app to Heroku.


### Directory Structure

### Steps Of Creation:

`App Setup`

1. I created a GitHub repo called `burger` and cloned it to my computer.

2. I created a package.json file via the command `npm init -y`.

3. I installed the Express npm package via the command `npm install express`.

4. I created a server.js file.

5. I installed the Handlebars npm package via the command `npm install express-handlebars`.

6. I installed MySQL npm package via the command `npm install mysql`.

7. I imported the express npm package into the server.js file.


`DB Setup`

1. In the burger directory, I created a folder named `db`.

2. In the db folder, I created a schema.sql file with the following:

     * I created and used the burgers_db.

     * I created a burgers table with the following fields:

          * `id:` an auto incrementing int that serves as the primary key.

          * `burger_name:` a string.

          * `devoured:` a boolean.

3. In the db folder, I created a seeds.sql file and wrote INSERT INTO queries to populate the burgers table with at least three entries.

4. I ran the schema.sql and seeds.sql files into the mysql server from the command line.

5. In the db folder of the app, I started the MySQL command line tool and login: mysql -u root -p.

6. With the mysql> command line tool running, I entered the command source schema.sql to run my schema file and all of the queries in it, thereby creating my database.

7. I inserted the entries defined in seeds.sql by running the file: source seeds.sql.

8. I closed out of the MySQL command line tool via the command `exit.`


`Config Setup`

1. In the burger directory, I created a folder named `config`.

2. In the config folder, I created a connection.js file.

3. In the connection.js file, I set up the code to connect Node to MySQL, then exported the connection.

4. In the config folder, I created an orm.js file.

5. I Imported the connection.js into the orm.js file.

6. In the orm.js file, I created the following three methods used to retrieve and store data in the database that will execute the necessary MySQL commands in the controllers:

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`

7. I exported the ORM object in module.exports.


`Models Setup`

1. In the burger directory, I created a folder named `models`.

2. In the models folder, I created the burger.js file.

3. In the burger.js, I imported orm.js into burger.js

4. Also in the burger.js, I wrote the code that will call the ORM functions using burger specific input for the ORM.

5. I exported at the end of the burger.js file.


`Controllers Setup`

1. In the burger directory, I created a folder named `controllers`.

2. In the controllers folder, I created the burgers_controller.js file.

3. In the burgers_controller.js file, I imported the following:

     * Express
     * burger.js

4. I created the router for the app and exported the router at the end of the file.


`Views Setup`

1. In the burger directory, I created a folder named `views`.

2. In the views folder, I created two folders: one named `layouts` and one named `partials`.

3. Also, in the views folder, I set up the index.handlebars to have the template that Handlebars can render onto.

4. I created a button in index.handlebars that will submit the user input into the database.

5. In the layouts folder, I created the main.handlebars file and set it up to be used by Handlebars.

6. In the partials folder, I created a folder named `burgers`.

7. In the burgers folder, I created the burger_block.handlebars file.


### Installation

1. To run the application locally, first clone this repository with the following command:

`git clone https://github.com/barukhashem/burger.git`

2. Install the application dependencies:

`cd burger`
`npm install`

3. Run the node server locally:

`node server.js`

4. Open the local application on port 8080 at the URL:

`http://localhost:8080`


