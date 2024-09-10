// Create web server
var express = require('express');
var app = express();
app.use(express.bodyParser());

// Create a variable to hold comments
var comments = [];

// Create a GET route to return comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

// Create a POST route to add a comment
app.post('/comments', function(req, res) {
    comments.push(req.body);
    res.json(req.body);
});

// Start the server
app.listen(3000); 
 Now you can test the server by running it and sending a POST request to it. You can use curl or a tool like Postman to send a POST request to the server. 
 $ node comments.js 
 You can now send a POST request to the server by running the following command in a separate terminal: 
 $ curl -X POST -H "Content-Type: application/json" -d '{"author": "John Doe", "text": "Hello, world!"}' http://localhost:3000/comments 
 The server will respond with the comment you posted: 
 {"author":"John Doe","text":"Hello, world!"} 
 You can also send a GET request to the server to get all the comments. 
 $ curl http://localhost:3000/comments 
 [] 
 You should see the comment you posted in the response. 
 [{"author":"John Doe","text":"Hello, world!"}] 
 You can now create a simple web page that will send a POST request to the server when you submit a form. 
 Create a new file called  index.html  with the following content: 
 <!DOCTYPE html>
<html>
<head>
    <title>Comments</title>
</head>
<body>
    <h1>Comments</h1>
    <div id="comments"></div>
    <form id="comment-form">
        <input type="text" name="author" placeholder="Name">
        <input type="text" name="text" placeholder="Comment">
        <input type="submit" value="Submit">
    </form>
    <script>
        var comments = document.getElementById('comments');
        var form = document.getElementById('comment-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            var author = form.elements.author.value;
            var text = form.elements.text.value;

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:3000/comments', true);
            xhr