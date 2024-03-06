fetch('https://striveschool-api.herokuapp.com/books')
    .then(response => response.json())
    .then(dati => {

        console.log(dati);

        for (let books of dati) {
            let col = document.createElement("div");
            col.className = "col-sm-6 col-md-3 col-lg-2 mb-3";

            let card = document.createElement("div");
            card.className = "card";

            let img = document.createElement("img");
            img.className = "card-img-top";
            img.src = books.img;

            let body = document.createElement("div");
            body.className = "card-body";

            let title = document.createElement("h5");
            title.className = "card-title";
            title.textContent = books.title;

            let price = document.createElement("p");
            price.className = "card-text";
            price.textContent = books.price;

            let button = document.createElement("button");
            button.className = "btn btn-danger";
            button.textContent = "Scarta";

            let addButton = document.createElement("button");
            addButton.className = "btn btn-success";
            addButton.textContent = "Aggiungi";

            button.addEventListener("click", function () {
                let grid = document.getElementById("grid");
                grid.removeChild(col)
            })

            card.appendChild(img);
            card.appendChild(body);
            body.appendChild(title);
            body.appendChild(price);
            body.appendChild(addButton);
            body.appendChild(button);
            col.appendChild(card);
            let grid = document.getElementById("grid");
            grid.appendChild(col);
        }
    })

