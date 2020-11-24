import express from 'express';
import jwt from 'express-jwt';
import cors from 'cors';
import jwks from 'jwks-rsa';
import bodyParser from 'body-parser';
const PORT = 4000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/movies',(request, response) =>{
  let movies = [
   {"title": "Hunger", "author": "Roxane Gay", "pages": 320},
   {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
   {"title": "White Teeth", "author": "Adilet Smith", "pages": 480},
   {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
  ]
  response.json(movies);

})

app.listen(PORT,() =>{
  console.log('Server is running on port: ',`${PORT}`);
})
