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

    $(".edit").on("click", function (evt) {
       window.location.href='edit-post.html';
    });

    $(".edit-post-button").on("click", function() {
        var formItems = [$("#title"), $("#author"), $("#post-content")];
        for(var i=0; i < formItems.length; i++) {
            console.log(formItems[i].val());
        }
        $(".edit-post-button").val("Post Saved");
        $(".edit-post-button").css("background-color", "#008CBA");
    });
});