const express = require("express");
const app = express();
const port = 3000;
const axios = require('axios');
const { CookieJar } = require('tough-cookie');
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);




/*
Summary: This node js program aims to log into the https://flatiron.campuscardcenter.com/ch/login.html page and sign in with demo
    credentials to get a Gold Card account balance. https://flatiron.campuscardcenter.com/ch/login.html?username=cyberwisp&password=cyberwisp&action=Login works
when used in Postman, a browser, iOS URLSession (though not on Apple Watch) and Android OKHTTPClient, but does not sign in and only returns the login page in Axios. 
(I am not restricted to only using Axios but I want this to work in Node.js). 

*/

//CREDENTIALS TO USE


//Username: cyberwisp

//Password: cyberwisp


app.get("/", (req, res) => { 
  res.json({ message: "ok" });

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  CookieJar: new CookieJar(),
  url: 'https://flatiron.campuscardcenter.com/ch/login.html?username=cyberwisp&password=cyberwisp&action=Login',
};

axios.request(config)
.then((response) => {

  console.log(JSON.stringify(response.data));
  //Should print the screen signed in. Would contain the word "welcome" and have the account balance in the HTML response. 
  //Instead it is currently only returning the login page. 
})
.catch((error) => {
  console.log(error);
  console.log(error.response.data);
  console.log(error.response.status);
  console.log(error.response.headers);
});

});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});