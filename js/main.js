
let pizza_price , size_price, crust_price, toppings_price, delivery_price;

let total= 0;

$().ready(function() {
    ('#submitform').click(function(event) {
         event.preventDefault();


        let pizza_flavour = $("#flavour option:selected").val();
        let pizza_size = $("#size option:selected").val();
        let piza_crust = $("#crust option:selected").val();
        let piza_topings = $("#Toppings option:selected").val();
        let delivery_mode = $('input[name=""]:checked').val();
        let quantity = $('#pizza_no').val();

        // switch case pizza_flavour
        switch (pizza_flavour) {
            case value:
                
                break;
            case value:
                
                break;
            case value:
                
                break;
            default:
                break;
        }


        console.log(piza_crust);
    });


   
});