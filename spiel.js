$(document).ready(function(){
    $("body").html("<div class='ueberschrift'>Berechne deinen BMI: </div>");
    
$("body").html("<br> Körpermasse in kg:  <input id='masse' type='text' size='10'></input><br>");   
         $("body").append("Größe in cm: <input id='groesse' type='text' size='10'></input><br>");
         $("body").append("<br> <input id='berechnen' type='button' value='Berechnen'></input>");
         
         $("#berechnen").click(function(){
            var masse=parseInt($("#masse").val()); 
            var groesse=parseInt($("#groesse").val());
           
            var bmi=parseInt(masse/((groesse/100)*(groesse/100)));
            
            $("body").append("Dein BMI beträgt "+bmi+".");
            
            });
             
});

