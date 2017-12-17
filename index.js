
//START OF OUR CODE....

var express=require('express');//importing express
var app=express();

var cookieparser=require('cookie-parser');//importing cookie parser dependency
app.use(cookieparser());

var bodyparser=require('body-parser');//importing body parser dependency
var urlencodedparser=bodyparser.urlencoded({extended:false});

var request=require('request');//importing request dependency

app.use(bodyparser.json()); //parse JSON request body

//now using morgan for pritning the incoming request onto the console
var morgan=require('morgan');
app.use(morgan('dev'));


//TASK 1 - PRINTING HELLO WORLD ONTO THE CLIENT SIDE SCREEN(browser) FOR ENDPOINT '/'
app.get('/',function(req,res){
    res.send('HELLO WORLD - THIS IS TECHIE_VIKI');
});


//TASK 2 - fetching data from particular website,performing some manipulations and giving it to client side browser
// FOR ENDPOINT '/authors'
app.get('/authors',function(req,res){
    var auth=[];
    var post=[];
    request('https://jsonplaceholder.typicode.com/users',function(error,response,body){
       auth=JSON.parse(body);
       request('https://jsonplaceholder.typicode.com/posts',function(error,response,body1){
           post=JSON.parse(body1);
           
            var i;
            for(i=0;i<auth.length;i++){
                var author_name=auth[i].name;
                var author_id=auth[i].id;
                var post_list=post.filter(function(element){
                    return element.userId == author_id;
                });
                var ans={ author : author_name, post : post_list.length};
                console.log(ans);
                res.write(JSON.stringify(ans)+'\n');                
            }
            res.end();
       });
        
    });

    
});


//TASK 3 - setting up two cookies in the browser for request with endpoint '/setcookie'
app.get('/setcookie',function(req,res){
    res.cookie('name','viki');
    res.cookie('age','20');
    res.send('Cookies are being set.....plzz go to endpoint /getcookie to check the cookies that were set');
});


//TASK 4 - Revealing the cookies that were already set when user goes for endpoint '/getcookie'
app.get('/getcookie',function(req,res){
    res.send(req.cookies);
});


//TASK 5 - PRINTING THE DENY MESSAGE ON THE CLIENT SIDE SCREEN(browser) FOR ENDPOINT '/robots.txt'
app.get('/robots.txt',function(req,res){
    res.send('ACCESS DENIED');
});


//TASK 6(a) - Sending an image file for endpoint '/image'
app.get('/image',function(req,res){
    res.sendFile(__dirname+'/ME_PIC.jpg');
});


//TASK 6(b) - Sending a html file for endpoint '/html'
app.get('/html',function(req,res){
    res.sendFile(__dirname+'/simple.html');
});


//TASK 7 - Render a html form where value entered by user will be taken via post method and shown at the console by accessing endpoint '/input'
app.get('/input',function(req,res){
    res.sendFile(__dirname+'/form.html');
});

app.post('/post',urlencodedparser,function(req,res){
    console.log('here is what user wrote -- '+req.body.name);
    res.send('in case u want to know what u just wrote,here it is - '+req.body.name);
});


//default response for any other endpoint url
app.use(function(req,res){
    res.send('SORRY THE PAGE U R REQUESTING FOR IS NOT YET DEVELOPED');
});


//for listening on port 8080 and printing onto console whenever our server will be started
app.listen(8080,function(){
    console.log('...SERVER HAS BEEN STARTED ON PORT 8080...');
});


//END OF CODE......


