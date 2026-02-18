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

            var animeInfo = data["data"][dataIndex]["synopsis"]
            var animeInfotext = $("<p>")
            animeInfotext.text("Description: " + animeInfo)
             $("#anime-facts").append(animeInfotext);
            console.log(animeInfo);    

            console.log('I succeeded')
            
        },
        error: function(xhr,status,error) {
            console.log(error);
        }
        });
    });


    $("#business-button").on("click", function() {
          $.ajax({
        url: "https://corporatebs-generator.sameerkumar.website/",
        
        success: function(data) {
            $("#business-button").html('');
            var businessPhrase = data["phrase"];
            var phraseText = $("<p>")
            phraseText.text(businessPhrase)
            $("#business-button").append(phraseText);



            console.log(data["phrase"]);
     

    
            console.log('I succeeded')
            
        },
        error: function(xhr,status,error) {
            console.log(error);
        }
        });
    
    });
       
    
    $("#sepuko").on("click", function() {
        $("#samurai").attr("src", "grave.png")
    });



 });