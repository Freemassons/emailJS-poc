var data = {
    service_id: 'gmail',
    template_id: 'iSlack Welcome Email',
    user_id: 'user_LhVxw7bxvmWOzZmutMDb6',
    template_params: {}
};

$( document ).ready(function() {

    $("#submit-button").on("click", function() {
            event.preventDefault();
        
            console.log($("#first_name").val());
            data.template_params.first_name =  $("#first_name").val();
            data.template_params.last_name =  $("#last_name").val();
            data.template_params.user_name = $("#user_name").val();
            data.template_params.email =  $("#email").val();
            data.template_params.unique_link = "https://myuniquelink.com?signup=hello";

            $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json'
            }).done(function() {
                alert('Your mail is sent!');
            }).fail(function(error) {
                alert('Oops... ' + JSON.stringify(error));
        });
    });
});