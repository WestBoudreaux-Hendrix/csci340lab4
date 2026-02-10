  $(document).ready(function(){
    console.log("Page has loaded")
    var notWork = $("<p>");
    notWork.text("This does not work yet!")
    notWork.css("color", "red")
    notWork.css("background", "yellow")
    notWork.css("font-family", "Honk")
    notWork.css("font-size", "20px")


  
    $("#anime-facts").on("click", function() {
        $("#anime-facts").append(notWork)
        // $.ajax({
        // url: "https://placebear.com/200/300",
        
        // success: function(data) {
        //     console.log(data)
        //     console.log('I succeeded')
            
        // },
        // error: function(xhr,status,error) {
        //     console.log(error);
        // }
        // });
    });


    $("#shonen-button").on("click", function() {
        $("#shonen-button").append(notWork)
    });
       
    $("#shojo-button").on("click", function() {
        $("#shojo-button").append(notWork)
    });
        
    $("#seinen-button").on("click", function() {
        $("#seinen-button").append(notWork)
    });
       
    $("#josei-button").on("click", function() {
        $("#josei-button").append(notWork)
    });

    $("#kodomomuke-button").on("click", function() {
        $("#kodomomuke-button").append(notWork)
    });






 });