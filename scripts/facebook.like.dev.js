/**
 * UsabilityDynamics Utility
 *
 * @version 0.2.3
 * @returns {Object}
 */
define("udx.utility.facebook.like", function(a, b, c) {
    console.log(c.id, "loaded");
    var d, e = document.getElementsByTagName("script")[0];
    document.getElementById("facebook-jssdk") || (d = document.createElement("script"), 
    d.id = "facebook-jssdk", d.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=373515126019844", 
    e.parentNode.insertBefore(d, e));
});