window.fbAsyncInit = function() {
    FB.init({
        appId      : '1673441282934020',
        xfbml      : true,
        version    : 'v2.5'
    });
    
    /* make the API call */
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            var accessToken = response.authResponse.accessToken;
            console.log(accessToken);
        } else {
            console.log(response);
        }
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
