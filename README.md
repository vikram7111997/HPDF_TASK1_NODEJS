# HPDF_TASK1_NODEJS
NODE JS EXP APP(SERVER-BACKEND) MADE UNDER THE WEEK1 TASK  OF HPDF

hello guys vikram shinde here......intern at the HPDF ....and this node js express app is a result of the week 1 task given to me during the course of this internship...
In this node js app we were to create simple localhost server which does 7 sub tasks which i will be detailing below
so the tasks were as follows :-
1) A simple hello-world at http://localhost:8080/ that displays a simple string
like "Hello World - Arpit"; replace "Arpit" with your own first name).
2) Add a route, for e.g. http://localhost:8080/authors , which:
    a) fetches a list of authors from a request to
    https://jsonplaceholder.typicode.com/users
    b) fetches a list of posts from a request to
    https://jsonplaceholder.typicode.com/posts
    c) Respond with only a list of authors and the count of their posts (a newline for
    each author).
3) Set a simple cookie ( if it has not already been set ) at
http://localhost:8080/setcookie with the following values:
name=<your-first-name> and age=<your-age> .
4) Fetch the set cookie with http://localhost:8080/getcookies and display
the stored key-values in it.
5) Deny requests to your http://localhost:8080/robots.txt page. (or you
can use the response at http://httpbin.org/deny if needed)
6) Render an HTML page at http://localhost:8080/html or an image at
http://localhost:8080/image .
7) A text box at http://localhost:8080/input which sends the data as POST to
any endpoint of your choice. This endpoint should log the received to
stdout . 

So I have used node js express to create a server which does the above task on the localhost:8080

So to run my app at ur local machine u will have to first install nodejs by just going to their official site nodejs.org
and downloading the package for ur respective o/s and installing it.

next create a folder where u would wish to reside ur app in,then start cmd from that directory itself and run the command 
npm init 
,then enter the desired details n if possible leave some fields to their defaults
then install the additional dependencies by having a look at the package.json file in my repo like installing the express package using
npm install express--save
,then run the index.js file by using the command node index.js
Note-Remember to keep all the files inside the same folder and installing all the additional dependencies
then open the browser and one by one with respect to the above tasks go to each endpoint and get the desired output.
Also I make added a folder named AppRelatedData which has some files for u to go through to get some additional info abt the app and 
understand how to actuallly run it .There is also a demo screen cast video of my machine which is in the same directory which would prove to be
helpful to get a feel of my app before actually running at ur machine. 
