window.fbAsyncInit = function() {
    FB.init({
        appId      : '1673441282934020',
        xfbml      : true,
        version    : 'v2.5'
    });
    
    FB.login(function(response) {
        console.log(response);
    }, {scope:'read_stream'});
    
    /*
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            var accessToken = response.authResponse.accessToken;
            FB.api(
                "/me/home",
                function (response) {
                    if (response && !response.error) {
                        console.log("success");
                        console.log(response);
                    } else {
                        console.log("failedz");
                        console.log(response);
                    }
                }
            );
        } else {
            console.log("failed");
            console.log(response);
        }
    });
    */
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
