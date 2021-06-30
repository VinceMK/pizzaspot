
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
            case pizza_flavour="periperi" :
                if (pizza_size === "large") {
                    pizza_price = 2000;  
                } else if(pizza_size === "medium"){
                    pizza_price = 1500;
                    
                } else{
                    pizza_price === 1000;
                }
                
                break;
            case pizza_flavour="Hawaian" :
                if (pizza_size === "large") {
                    pizza_price = 2500;  
                } else if(pizza_size === "medium"){
                    pizza_price = 2000;
                    
                } else{
                    pizza_price === 1500;
                }
                
                break;
            case pizza_flavour="Chicken" :
                if (pizza_size === "large") {
                    pizza_price = 1800;  
                } else if(pizza_size === "medium"){
                    pizza_price = 1300;
                    
                } else{
                    pizza_price === 1000;
                }
                
                break;

            case pizza_flavour ="Vegan"  :

            case pizza_flavour =" Sicilian" :
                if (pizza_size === "large") {
                    pizza_price = 1800;  
                } else if(pizza_size === "medium"){
                    pizza_price = 1300;
                    
                } else{
                    pizza_price === 1000;
                }
        
                break;
                
            default:
                
                break;
        }

        switch (piza_topings) {
            case "broccolli":

                toppings_price = 100;
                break;
            case "broccolli":
                toppings_price = 100;
            
                break;
            case "sausage":
                toppings_price =100;
        
                break;
            case "olives":
                toppings_price = 120;
    
                break;
            case "cheese":
                toppings_price =200;

                break;
            case "mushrooms":
                toppings_price = 100;

                break;
                                                                
            default:
                toppings_price = 200
                break;
        }

        

    });


   
});