$(document).ready(function(){
    $("body").html("<div class='ueberschrift'>Berechne deinen BMI: </div>");
    
$("body").html("<br> Körpermasse in kg:  <input id='masse' type='text' size='10'></input><br>");   
         $("body").append("Größe in cm: <input id='groesse' type='text' size='10'></input><br>");
         $("body").append("<br> <input id='berechnen' type='button' value='Berechnen'></input>");
         
         $("#berechnen").click(function(){
            var masse=parseInt($("#masse").val()); 
            var groesse=parseInt($("#groesse").val());
           
            var bmi=parseInt(masse/((groesse/100)*(groesse/100)));
           
            
            $("body").append("<div class='normalertext'> Dein BMI beträgt "+bmi+".</div>");
            
            if (bmi<=18){
            $("body").append("<br> <div class='normalertext'> Ein BMI unter 18 weist auf Untergewicht hin. Du \n\
                 solltest mehr essen und Dir nicht zu viele Gedanken um dein Körpergewicht machen.</div>");
             }else if (18<bmi<=24){
                 $("body").append("<br> <div class='normalertext'> Du hast einen optimalen BMI, welcher auf\n\
                      Normalgewicht hinweist. Mach weiter so :) </div>");
             }else if (bmi>24){
                 $("body").append("<br> <div class='normalertext'> Dein BMI ist größer als 24 und weist auf leichtes\n\
                                    Übergewicht hin. Aber das Aussehen allein spielt keine Rolle! </div>");
             }
             
             $("body").append("Das ist übrigens Jothini's erste App :) ");
             
            });
             
});

