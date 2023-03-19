function userAuthentication() {
    var user = { // data get from email and password field
      email: "ahmadjajja86@gmail.com",
      password: "ahmad786",
    };
  
    var users = [  // data get from database
      {
        email: "ahmadjajja86@gl.com",
        password: "ahmad786",
      },
      {
        email: "something@gmail.com",
        password: "asdf",
      },
    ];
  
    let authenticated = false;
  
    for (let i = 0; i < users.length; i++) {  //users[1]     1
      if (users[i].email == user.email && users[i].password == user.password) {   // used for checking email and password exist or not
        authenticated = true;
      }
    }
  
    if (authenticated == true) {
      console.log("login successfuly!");
    } else {
      console.log("invalid email or password");
    }
  }
  
  console.log(userAuthentication())