$(document).ready(function(){


    $("#btnYes").on("click", function(){
        $(".hero-is-success").css("background-image", "url()")
        $(".title").text("Please select the following options:");

    })

    $("#submit").on("click", function(event){
        event.preventDefault()
        if(cert !==""){
          var cert = $("#cert").val();
          var certURL = "&certification_country=US&certification="+cert}
        if(genre !==""){
          var genre = $("#genre").val();
          var genreURL = "&with_genres="+genre}
        var pageNum = (Math.floor(Math.random()*20))+2
        var urlMovie = "https://api.themoviedb.org/3/discover/movie?api_key=f6d55af2d8f9fea21ad4afda60e788bf&language=en-US"+certURL+genreURL+"&include_adult=false&include_video=true&page="+pageNum;
        var newURLmovie = "https://api.themoviedb.org/3/discover/movie?api_key=f6d55af2d8f9fea21ad4afda60e788bf&language=en-US"+certURL+genreURL+"&include_adult=false&include_video=true&page="+pageNum
        
        var check1 = [];
        console.log(newURLmovie)
        var movieShow = []
        var repeatMovie = false
        $.ajax({
            url: newURLmovie,
            method: "GET",
          }).then(function(response){
            var firstSel = Math.floor(Math.random()*20);
            movieShow.push(firstSel);
            for(i = 0; i < 4; i++){
              var movieSel = Math.floor(Math.random()*20);
              for(j = 0; j < movieShow.length; j++){
                if(movieShow[j] === movieSel){
                  var repeatMovie = true
                }      
              }
              if(repeatMovie){
                i--
                repeatMovie= false
              }
              else{
                movieShow.push(movieSel);
              }
            }
            posterImage(movieSel, response)
          })
        })
        
        function posterImage(movie, response){
          console.log("Hi")
          console.log(response)
        }

})