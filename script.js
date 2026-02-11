  $(document).ready(function(){
    console.log("Page has loaded")
    var notWork = $("<p>");
    notWork.text("This does not work yet!")
    notWork.css("color", "red")
    notWork.css("background", "yellow")
    notWork.css("font-family", "Honk")
    notWork.css("font-size", "20px")
    var sadFace =$("<img>")
    sadFace.attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sad-face_ico.png/640px-Sad-face_ico.png-10-24-12-38-31-576x720.png")
    sadFace.css("height", "150px")
    sadFace.css("width", "150px")


  
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
        $("#shonen-button").append(sadFace)
    });
       
    $("#shojo-button").on("click", function() {
        $("#shojo-button").append(notWork)
        $("#shojo-button").append(sadFace)
    });
        
    $("#seinen-button").on("click", function() {
        $("#seinen-button").append(notWork)
        $("#seinen-button").append(sadFace)
    });
       
    $("#josei-button").on("click", function() {
        $("#josei-button").append(notWork)
        $("#josei-button").append(sadFace)

    });

    $("#kodomomuke-button").on("click", function() {
        $("#kodomomuke-button").append(notWork)
        $("#josei-button").append(sadFace)

    });

    
    $("#sepuko").on("click", function() {
        $("#samurai").attr("src", "https://pixnio.com/free-images/2017/10/24/2017-10-24-12-38-31-576x720.png")
    });






 });