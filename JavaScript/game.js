// var queryurl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + usersearch + "&limit=" + userlimit + "&offset=" + useroffset + "&rating=PG&lang=en"
// var apiKey = "Dt0dix0wkjE7dUb2pxHApq3mrQGFpjPc";

// var userlimit = "10";
// var useroffset = "0";
var topics = [];





$("#search").on("click", function () {
    var userSearch = $("input").val();
    var limit = 10;
    var queryurl = "https://api.giphy.com/v1/gifs/search?api_key=Dt0dix0wkjE7dUb2pxHApq3mrQGFpjPc&q=" + userSearch + "&limit=" + limit + "&offset=0&rating=PG&lang=en"
    console.log(userSearch);

    $.ajax({
        url: queryurl,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var result = response.data
        topics.push(userSearch)

        $("#giphys").empty();

        for (var i = 0; i < result.length; i++) {
            $("#giphys").append(
                `
                <img class="giphy" src="${result[i].images.original_still.url}" data-still="${result[i].images.original_still.url}" data-animate="${result[i].images.original.url}" data-state="still">Rating: ${result[i].rating}
                
                `
            )


        }


        $(".giphybtn").empty();

        for (var i = 0; i < topics.length; i++) {
            $(".giphybtn").append(`<button class="topicbtn">${topics[i]}</button>`)
        }

        // Event listener for animating gif
        $(".giphy").on("click", function () {
            console.log("inhere")
            var state = $(this).attr("data-state");

            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        });
    });


    // loop to check if word to be search is not in array already

})


