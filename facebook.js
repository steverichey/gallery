window.fbAsyncInit = function() {
    FB.init({
        appId      : '1673441282934020',
        xfbml      : true,
        version    : 'v2.5'
    });
    
    
// Check if the current user is logged in and has authorized the app
      FB.getLoginStatus(checkLoginStatus);
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

      
      // Login in the current user via Facebook and ask for email permission
      function authUser() {
        FB.login(checkLoginStatus, {scope:'read_stream'});
      }
      
      // Check the result of the user status and display login button if necessary
      function checkLoginStatus(response) {
        if(response && response.status == 'connected') {
          //alert('User is authorized');
          
          // Hide the login button
          document.getElementById('loginButton').style.display = 'none';
          
          // Now Personalize the User Experience
          console.log('Access Token: ' + response.authResponse.accessToken);
            
            /* make the API call */
FB.api(
    "/me/home",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
          console.log("yay");
          console.log(response);
      } else{
          console.log("fail");
          console.log(response);
      }
    }
);
        } else {
          alert('User is not authorized');
          
          // Display the login button
          console.log("display the login button");
            document.getElementById('loginButton').style.display = 'block';
        }
      }
