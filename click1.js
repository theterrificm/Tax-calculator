$(document).ready(function(){
    
    $("#calculate").click(function(event){
        event.preventDefault()
        var calValue = Number($('#floatingPassword').val())
        var tax = calValue /100 * 10
        console.log(typeof(calValue));
        $(".cal-value").text($('#floatingPassword').val())
        $(".donut").css({
            "background": "conic-gradient(red 0deg 36deg, #4253b2 36deg 360deg)"
        })
    });
  });