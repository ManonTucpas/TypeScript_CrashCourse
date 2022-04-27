https://www.youtube.com/watch?v=BwuLxPH8IDs&t=11052s 

reprendre a: 1:36:47

# Install TypeScript #


sudo npm install -g typescript
sudo apt install nodejs (come with the npm tools)
sudo npm install node-modules (to reinstall node_modules)

# Compile TypeScript file to JavaScript file #


tsc filename.tsc

# TypeScript Basics with VSCode #

VsCode extension :  ESLint
html5: to have an auto generated index

# To test the code on a navigator #

1. copy the path of index.html
2. open the console log (CTRL + SHIFT + C)
3. You'll see the result of the code

# To test the application on a URL as localhost #

in the current folder 
1. run:
    npm init -> it will create a package.json file
2. run:
    npm install --save-dev lite-server -> this install extra tools
3. int the pacakge.json file in "scripts" block add:
   "start": "lite-server"
4. at the end of the file add:
    "devDependencies": {
       "lite-server": "^2.6.1"
    }
5 run:
  npm start 
  -> do it in another terminal as well you can let it running
  -> and compile on the other terminal
  -> the page will be automatically refreshed

# TS Core Types #

1. number (including float and int)
2. string
3. boolean
4. object 
4. array: can be flexible or not -> with any[] you put string & number in a array
5. tuple: [string ,number ] -> fix lenght adn type array
6. enum :
will attribute ADMIN = 0, READ_ONLY = 1, AUTHOR = 2:
enum Role { ADMIN, READ_ONLY, AUTHOR};
increment after the setting value:
enum Role { ADMIN = 1, READ_ONLY, AUTHOR}; -> READ_ONLY will be 2 AUTHOR 3 etc...
we can do whatever we want:
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100 , AUTHOR = 'AUTHOR'};
7. any: can store any kind of value but it's dangerous



# Compiler && config deep dive

# Working with Next-gen Js Code

# Classes && Interfaces

# Advanced types && TypeScript features

# Generics

# Decorators

# Practice

# Working with Namespace && Modules

# Webpack && TypeScript

# Third-Party Librairies && TypeScript

# React + TypeScript && NodeJS + TypeScript