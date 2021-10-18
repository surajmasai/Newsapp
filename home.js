
var headline_div = document.getElementById("popular");


async function popular() {

    var res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=0f4190076acf4e5b8c0728e52fc97ce7")
    let data = await res.json();

    // console.log(data.articles);
    popularnews(data.articles)
}
popular();


function popularnews(news_data) {

    news_data.forEach((data) => {
        // console.log(data)

        var name = data.title;

        var writer = data.author;

        var des = data.description;

        var photo = data.urlToImage;

        var date = data.publishedAt;




        let div = document.createElement("div");


        var title = document.createElement("h2");
        title.innerText = name;


        var auth = document.createElement("p");
        auth.innerText = writer;

        var descri = document.createElement("p");
        descri.innerText = des;

        var pdate = document.createElement("p");
        pdate.innerText = date;

        var img = document.createElement("img");
        img.src = photo;

        div.addEventListener("click", function () {
            getnews(name, writer, des, photo, date, data.content);
        })

        div.append(img, pdate, title, auth, descri);

        headline_div.append(div)

    });

}

function search() {
    window.location.href = 'search.html'
}



function getnews(name, writer, des, photo, date, content) {
    // console.log("yes")
    // console.log(name, writer, des, photo, date, content)
    const newsdata = [{ name, writer, des, photo, date, content }];

    localStorage.setItem("Details", JSON.stringify(newsdata));

    window.location.href = "news.html";

}
