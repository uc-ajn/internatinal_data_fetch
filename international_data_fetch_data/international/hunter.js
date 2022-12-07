import HunterSDK from "hunterio";
 
var KEY = 'cadc8fa18628d09f581d9b3b13889cfdad300231';
 
var hunter = new HunterSDK(KEY);  
 
hunter.domainSearch({
    domain: 'ucertify.com'
}, function(err, body) {
    if (err) {
        console.log(err);
    } else {
        console.log(body.data.emails);
    }
});

