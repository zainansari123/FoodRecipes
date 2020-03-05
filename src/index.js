
$( document ).ready(function() {
    openlogin();
    console.log( "ready!" );
    $('#header').append('<div class="container-fluid padding10">\
            <div class="jumbotron jumbotron-fluid jumbo">\
                <div class="heading">\
                    <span>\
                        <img src="../assets/img/favicons/favicon.ico" alt="food-icon">\
                    </span>\
                    FOOD RECIPES\
                </div>\
                <div class="quote">\
                    <p>\
                        “You don’t have to cook <br>\
                        fancy or complicated masterpieces,<br>\
                        just good food from fresh ingredients.”<br>\
                        – Julia Child\
                    </p>\
                </div>\
            </div>\
        </div>\
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">\
            <a class="navbar-brand" href="#">FOOD-RECIPES</a>\
            <ul class="navbar-nav">\
                <li class="nav-item">\
                    <a class="nav-link" href="index.html">Home</a>\
                </li>\
                <li class="nav-item">\
                    <a class="nav-link" onclick ="opencontact()">ContactUs</a>\
                </li>\
                <li class="nav-item">\
                    <a class="nav-link" href="about.html">AboutUs</a>\
                </li>\
                <li class="nav-item">\
                    <a class="nav-link" onclick="openlogin()">Login</a>\
                </li>\
                <li class="nav-item">\
                    <a class="nav-link" href="register.html">Register</a>\
                </li>\
            </ul>\
        </nav> ')
});

$( document ).ready(function() {
$('#footer').append('\
<footer class="page-footer font-small light-blue pt-4">\
<div class="container-fluid text-center text-md-left">\
    <div class="row">\
        <div class="col-md-6 mt-md-0 mt-3">\
            <h5 class="text-uppercase">Footer Content</h5>\
            <p>Here you can use rows and columns to organize your footer content.</p>\
        </div>\
        <hr class="clearfix w-100 d-md-none pb-3">\
        <div class="col-md-3 mb-md-0 mb-3">\
            <h5 class="text-uppercase">Links</h5>\
            <ul class="list-unstyled">\
                <li>\
                    <a href="#!">Link 1</a>\
                </li>\
                <li>\
                    <a href="#!">Link 2</a>\
                </li>\
                <li>\
                    <a href="#!">Link 3</a>\
                </li>\
                <li>\
                    <a href="#!">Link 4</a>\
                </li>\
            </ul>\
        </div>\
        <div class="col-md-3 mb-md-0 mb-3">\
            <h5 class="text-uppercase">Links</h5>\
            <ul class="list-unstyled">\
                <li>\
                    <a href="#!">Link 1</a>\
                </li>\
                <li>\
                    <a href="#!">Link 2</a>\
                </li>\
                <li>\
                    <a href="#!">Link 3</a>\
                </li>\
                <li>\
                    <a href="#!">Link 4</a>\
                </li>\
            </ul> </div> </div></div>\
<div class="footer-copyright text-center py-3">© 2020 Copyright: <a href="https://mdbootstrap.com/"> MDBootstrap.com</a></div>\
</footer>')
});

function openlogin(){
    $('#content').empty().append("<h1>login works</h1>")
}

function opencontact(){
    $('#content').empty().append("<h1>contact works</h1>")
}

function openregister(){
    $('#content').empty().append("<h1>register works</h1>")
}
