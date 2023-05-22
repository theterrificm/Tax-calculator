$(document).ready(function(){
    var total = 0
    $("#range-s").on('input', function(event){
        event.preventDefault()
        $(".amount").val(event.target.value)
        total = Number(event.target.value)
    });
    $(".calculate").click(function(){
        var tax = total /100 * 10
        $(".final-amount").text( tax)
    })
  });