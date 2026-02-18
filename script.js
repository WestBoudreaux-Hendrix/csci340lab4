  $(document).ready(function(){
    console.log("Page has loaded")
    var notWork = $("<p>");
    notWork.text("This does not work yet!")
    notWork.css("color", "red")
    notWork.css("background", "yellow")
    notWork.css("font-family", "Honk")
    notWork.css("font-size", "20px")
    var sadFace =$("<img>")
    sadFace.attr("src", "sadface.png")
    sadFace.css("height", "150px")
    sadFace.css("width", "150px")


  
    $("#anime-facts").on("click", function() {
        // pick valid dates for it to loop through to pick for the url 
        var dateSuffix = Math.floor(Math.random() * (23 - 10 + 1)) + 10;
        var dataIndex = Math.floor(Math.random() * (25 - 0 + 1));
        console.log(dataIndex)
        var date = "20" + dateSuffix
        console.log(date)
        $.ajax({
        url: "https://api.jikan.moe/v4/seasons/"+date+"/spring?sfw",
        
        success: function(data) {
            $("#anime-facts").html('');
            var titleInfo = data["data"][dataIndex]["title"]
            var titleInfotext = $("<p>")
            titleInfotext.text("Anime Title: " + titleInfo + "  ")
            $("#anime-facts").append(titleInfotext);
            console.log(titleInfo);
            // $("#anime-facts").append("Anime Title: " + titleInfo + "  ")
            var animeInfo = data["data"][dataIndex]["synopsis"]
            var animeInfotext = $("<p>")
            animeInfotext.text("Description: " + animeInfo)
             $("#anime-facts").append(animeInfotext);
            console.log(animeInfo);
            // $("#anime-facts").append("Description: " + animeInfo)

    
            console.log('I succeeded')
            
        },
        error: function(xhr,status,error) {
            console.log(error);
        }
        });
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
        $("#kodomomuke-button").append(sadFace)

    });

    
    $("#sepuko").on("click", function() {
        $("#samurai").attr("src", "grave.png")
    });






 });