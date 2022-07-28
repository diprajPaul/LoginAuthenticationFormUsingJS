class Auth {
    // setup the class and hide the body by default
   constructor() {
       document.querySelector("body").style.display = "none";
       const auth = localStorage.getItem("auth");
       this.validateAuth(auth);
   }
   // check to see if the localStorage item passed to the function is valid and set
   validateAuth(auth) {
       if (auth != 1) {
           window.location.replace("/Login%20Authentication%20using%20JS/index.html");
       } else {
           document.querySelector("body").style.display = "block";
       }
   }
   // will remove the localStorage item and redirect to login  screen
   logOut() {
       localStorage.removeItem("auth");
        // window.location.replace("http://127.0.0.1:5500/Login%20Authentication%20using%20JS/index.html");
          window.location.pathname = "/Login%20Authentication%20using%20JS/index.html";
   }
}