const loadSongs = () => {

    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=twenty%20one%20pilots", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "3a08200647msh7ad56d0087e6237p144504jsn2bc95ea720e5",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    .then((response) => response.json() )
    .then(jsondata => {
        console.log(jsondata);
        let music = jsondata.data
        for (let i=0; i<music.length; i++){
            let singleData=music[i]
            let single = document.createElement('img')
            single.src = singleData.album.cover_big
            single.classList.add('cover', 'img-fluid')
            document.querySelector('.music').appendChild(single)
        }
    })
    .catch(err => {
        console.error(err);
    });
          }

          window.onload = function (){

            fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=twenty%20one%20pilots", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "3a08200647msh7ad56d0087e6237p144504jsn2bc95ea720e5",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });

           
          }