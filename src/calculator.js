function opencalcy(){
    $('#content').empty().append('<div class="card container" style="margin: 5% 5% 5% 5%; width:50%;" >\
    <div class="card row">\
        <input type="text" placeholder="Calculator" id="result"\
            style="font-size: 20px; padding: 1% 1% 1% 1%;" class="form-control">\
    </div>\
    <div class="card row">\
        <button type="button" onclick="one(this.id)" id="1" class="col-sm-3 btn btn-success">1</button>\
        <button type="button" onclick="one(this.id)" id="2" class="col-sm-3 btn btn-primary">2</button>\
        <button type="button" onclick="one(this.id)" id="3" class="col-sm-3 btn btn-warning">3</button>\
    </div>\
    <div class="card row">\
        <button type="button" onclick="one(this.id)" id="4" class="col-sm-3 btn btn-secondary">4</button>\
        <button type="button" onclick="one(this.id)" id="5" class="col-sm-3 btn btn-info">5</button>\
        <button type="button" onclick="one(this.id)" id="6" class="col-sm-3 btn btn-danger">6</button>\
    </div>\
    <div class="card row">\
        <button type="button" onclick="one(this.id)" id="7" class="col-sm-3 btn btn-success">7</button>\
        <button type="button" onclick="one(this.id)" id="8" class="col-sm-3 btn btn-primary">8</button>\
        <button type="button" onclick="one(this.id)" id="9" class="col-sm-3 btn btn-warning">9</button>\
    </div>\
    <div class="card row">\
        <button type="button" onclick="one(this.id)" id="0" class="col-sm-3 btn btn-secondary">0</button>\
        <button type="button" onclick="sum()" class="col-sm-3 btn btn-info">+</button>\
        <button type="button" onclick="sub()" class="col-sm-3 btn btn-danger">-</button>\
    </div>\
    <div class="card row">\
        <button type="button" onclick="multi()" class="col-sm-3 btn btn-secondary">*</button>\
        <button type="button" onclick="divide()" class="col-sm-3 btn btn-info">/</button>\
        <button type="button" onclick="equal()" class="col-sm-3 btn btn-danger">=</button>\
    </div>\
    <button  type="button" onclick="reset()" class="col-sm-6 btn btn-secondary">Reset</button>\
</div>')
}
    var data = []
    var result = 0
    var first = 0;
    var second = 0;
    var action;
    function one(id) {
        data.push(parseInt(id))
        var old = $('#result').val() + id
        $('#result').val(old)
    }
    function reset() {
        $('#result').val('')
    }
    function sum(){
        first = $('#result').val()
        action = '+'
        $('#result').val('')
    }

    function sub(){
        first = $('#result').val()
        action = '-'
        $('#result').val('')
    }

    function divide(){
        first = $('#result').val()
        action = '/'
        $('#result').val('')
    }
            
    function multi(){
        first = $('#result').val()
        action = '*'
        $('#result').val('')
    }

    function equal() {
        if(action == "+"){
            result = parseInt(first) + parseInt($('#result').val())
            $('#result').val(result)
        }
        if(action == "-"){
            result = parseInt(first) - parseInt($('#result').val())
        $('#result').val(result)
        }
        if (action == "/"){
            result = parseInt(first) / parseInt($('#result').val())
        $('#result').val(result)
        }
        if (action == "*"){
            result = parseInt(first) * parseInt($('#result').val())
        $('#result').val(result)
        }
    }

