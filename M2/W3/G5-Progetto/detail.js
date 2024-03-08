const address = new URLSearchParams(location.search)
const productId = address.get('productId')

const deleteProduct = function () {
    fetch('https://striveschool-api.herokuapp.com/api/product/' + productId, {
        method: 'DELETE',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGRjZjJkN2IxMTAwMTkwZTZlMGIiLCJpYXQiOjE3MDk4OTEwMjQsImV4cCI6MTcxMTEwMDYyNH0.sok6eF9GDxnW8jBQmkd32UnlvkIXNZZ4YVU_zy1I5zI"
        }
    })
        .then((res) => {
            if (res.ok) {
                if (window.confirm("Vuoi cancellare il prodotto?")) {
                    location.assign('./index.html')
                }
                console.log('prodotto eliminato')
            } else {
                throw new Error('errore')
            }
        })
}

const detailsGenerations = function (detail) {
    const row = document.getElementById('product-details')
    row.innerHTML = `<div class="col col-12 col-lg-6">
                        <img src="${detail.imageUrl}" class="w-100 my-4" alt="product img"/>
                        <h3 class="text-center my-4">${detail.name} - ${detail.brand}</h3>
                        <p>
                            ${detail.description}
                        </p>
                        <p>
                            Prezzo: ${detail.price}€
                        </p>
                        <button class="btn btn-danger" onclick="deleteProduct()">
                            Elimina
                        </button>
                        <button type="button" class="btn btn-secondary onclick="modProduct"">
                            <a class="text-white" style="text-decoration: none;" href="./backoffice.html?eventId=${detail._id}">Modifica</a>
                        </button>
                    </div>`
}

const getProductDetails = function () {
    fetch("https://striveschool-api.herokuapp.com/api/product/" + productId, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGRjZjJkN2IxMTAwMTkwZTZlMGIiLCJpYXQiOjE3MDk4OTEwMjQsImV4cCI6MTcxMTEwMDYyNH0.sok6eF9GDxnW8jBQmkd32UnlvkIXNZZ4YVU_zy1I5zI"
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Errore nel caricamento')
            }
        })
        .then((productDetail) => {
            detailsGenerations(productDetail)
        })
}

getProductDetails()