let btn = document.getElementById("btn");

function relod(){
  window.location.href="index.html";
}

btn.addEventListener("click", function () {
  let input = document.getElementById("ip-box");
  let url = `http://www.omdbapi.com/?s=${input.value}&apikey=53b4ed65`;

  let xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.responseType = "json";

  xhr.addEventListener("load", function () {
    console.log(xhr.response);

    console.log(this.response.Search);

    for (let i = 1; i < xhr.response.Search.length; i++) {
      let image = document.createElement("img");
      image.classList.add("image-card");

      image.src = xhr.response.Search[i].Poster;
      document.body.appendChild(image);
    }
  });

  xhr.send();
});
