function loadslider1(){
    $('#content').empty().append('<div class="container">\
    <h3>Materialize Carousel Demo</h3>\
    <div class="carousel" id="demo-carousel">\
        <a class="carousel-item" href="#one!"><img src="../assets/img/metro.JPG"></a>\
        <a class="carousel-item" href="#two!"><img src="../assets/img/snacks.jpeg"></a>\
        <a class="carousel-item" href="#three!"><img src="../assets/img/aloe vera2.jpg"></a>\
        <a class="carousel-item" href="#four!"><img src="../assets/img/american.jpg"></a>\
        <a class="carousel-item" href="#five!"><img src="../assets/img/garden1.jpeg"></a>\
      </div>\
    </div>')
}

var action=1;
setInterval(function(){ 
    if (action > 360){
        action = 1
    } else{
    action = action + 1 }}, 10);
    
$(document).ready(function(){
  $('#demo-carousel').carousel();
  setInterval(()=>{
      $('img').attr('style','transform: rotateZ('+ action +'deg);')
  },10)
});