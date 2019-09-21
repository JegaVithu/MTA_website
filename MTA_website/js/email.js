$(document).ready(function() {
    
    $('#submit').click(function() {
        var email = $("#email").val();
        var fullname = $("#fullname").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        var temp = "mailto:n.sankeeth@gmail.com?subject="+subject+"&body="+message+" Thank you. Sent by"+ fullname 
        window.open(temp);
        
    })



});