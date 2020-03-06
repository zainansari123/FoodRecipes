function openlogin(){
    $('#content').empty().append('\
    <div class="container card" style="width:50%; margin-top:5%;">\
    <div class="box">\
        <h2>Login</h2>\
        <form action="">\
            <div class="inputBox">\
                <input type="text" name="" class="form-control" required="">\
                <label> Username</label>\
            </div>\
            <div class="inputBox">\
                    <input type="password" name="" class="form-control" required="">\
                    <label> Password</label>\
            <br>\
                    <input type="submit" class="btn btn-success" value="Login">\
                </div>\
        </form>\
        </div>\
    </div>')
}