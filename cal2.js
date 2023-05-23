$(document).ready(function(){
    var total = 0
    $("#range-s").val(500)
    $('#valBox').val(500)
    $("#range-s").on('input', function(event){
        event.preventDefault()
        $(".amount").val(event.target.value)
        
    });
    $("#valBox").on('input', function(){
        $("#range-s").val($("#valBox").val())
    })
    $(".calculate").click(function(){
        $(".tax-table").css("display", "block")
        total = Number($("#range-s").val())
        var tax = total /100 * 10
        if(total <= 9875){
            $(".final-amount").text( tax)
            $(".cal-value").text(total)
            $("#tax-perc").text("10")
            $("#taxac").text(tax)
        }
        else if(total > 9875 && total <= 40125){
            tax = total /100 * 12
            $(".final-amount").text( tax)
            $(".cal-value").text(total)
            $("#tax-perc").text("12")
            $("#taxac").text(tax)
        }
        else if(total > 40125 ){
            tax = total /100 * 22
            $(".final-amount").text( tax)
            $(".cal-value").text(total)
            $("#tax-perc").text("22")
            $("#taxac").text(tax)
            
        }
    })
  });