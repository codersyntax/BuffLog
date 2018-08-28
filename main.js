$( document ).ready(function() {
    $("#contact-form-submit").on("click", function() {
        var formItems = [$("#name"), $("#email"), $("#message")];
        for(var i=0; i < formItems.length; i++) {
            console.log(formItems[i].val());
            formItems[i].val("");
        }
    });

    $("#sample-post-full").on("click", function() {
        window.location.href='view-post.html';
    });
});