/* $("form").validate({
    rules: {
        name: {
            minlength: 2,
            maxlength: 50,
            required: true,
        },
        lastname: {
            minlength: 2,
            maxlength: 50,
            required: true,
        },
        handle: {
            minlength: 6,
            maxlength: 15,
            required: true,
            alphanumeric: true,
        },
        email: {
            required: true,
            email: true,
        },
        password: {
            required: true,
            minlength: 6,
            maxlength: 15,
        },
        password_confirmation: {
            required: true,
            equalTo: "#password",
        },
        handle: {
            required: true,
        },
    },
    highlight: function (element) {
        console.log(element);
        $(element).closest(".input-group").addClass("'has-error'");
    },
    unhighlight: function (element) {
        $(element).closest(".input-group").removeClass("has-error");
    },
    errorElement: "span",
    errorClass: "help-block",
    errorPlacement: function (error, element) {
        if (element.parent(".input-group").length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    },
}); */
// Example starter JavaScript for disabling form submissions if there are invalid fields

var myModal = new bootstrap.Modal(document.getElementById("myModal"), options);
let regex = /g[0-9]/;

patter = { regex };
