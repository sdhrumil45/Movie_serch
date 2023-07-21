const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const moviebox = document.querySelector("#moviebox");
const getmovie = async(api) =>{
    const response = await fetch(api);
    const data = await response.json();
    showmovie(data.results)
    console.log(data.results)
}

const showmovie = (data) =>{
    moviebox.innerHTML="";
    data.forEach(
        (item) => {
            const box = document.createElement("div");
            box.classList.add("box");
            box.innerHTML = `
            <img src="${IMGPATH + item.poster_path}" alt="name">
            <div class="overlay">
                <div class="title">
                    <h2> ${item.title}</h2>
                    <span> ${item.vote_average} </span>
                </div>
                <h2>overview</h2>
                <p> ${item.overview}
                </p>
            </div>
            `
            moviebox.appendChild(box);
        }
    );
}

document.querySelector("#serch").addEventListener(
    "keyup",function (event) {
        if(event.target.value != ""){
            getmovie(SEARCHAPI + event.target.value)}
        else{
            getmovie(APIURL)
        }
    }
)

getmovie(APIURL);
