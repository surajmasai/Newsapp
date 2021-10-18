
var dnews = JSON.parse(localStorage.getItem("Details"));
// console.log(dnews)


dnews.forEach((item) => {

    const pitem = item;

    const html = ` <div>
                <div>
                    <img src="${item.photo}" alt="image" style ="width:800px;" >;
                </div>
                <div>
                    <h1>${item.name}</h1>
                    <p>${item.date}</p>
                    <p>${item.writer}</p>
                </div>
                <div>
                <p>${item.dec}</p>
                </div>
                <div>
                    <p>${item.content}</p>
                </div>

            </div>`

    const out = document.getElementById("details");
    out.insertAdjacentHTML("beforeend", html)
});