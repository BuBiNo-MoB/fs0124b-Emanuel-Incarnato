const prodRender = function (everyProduct) {
    const row = document.getElementById('row')

    everyProduct.forEach(product => {
        const newCol = document.createElement('div')
        newCol.classList.add('col', 'col-12', 'col-sm-6', 'col-md-3')

        newCol.innerHTML = `<div class="card mb-4">
                                <img src="${product.imageUrl}" class="card-img-top" alt="product picture">
                                <div class="card-body">
                                    <h5 class="card-title">
                                        ${product.name}
                                    </h5>
                                    <p class="card-text">
                                        ${product.description}
                                    </p>
                                    <p class="card-text">
                                        ${product.brand}
                                    </p>
                                    <p class="card-text">
                                        ${product.price}€
                                    </p>
                                    <a href="./detail.html?productId=${product._id}" class="btn btn-primary">
                                        Info aggiuntive sul prodotto
                                    </a>
                                    <button class="btn btn-danger delete-btn mt-2" data-product-id="${product._id}">
                                        Elimina scheda
                                    </button>
                                </div>
                            </div>`
            
        row.appendChild(newCol)

        const deleteButton = newCol.querySelector('.delete-btn')
        deleteButton.addEventListener('click', () => {
            const productId = deleteButton.getAttribute('data-product-id')
            deleteProduct(productId)
        })
    })
}

const deleteProduct = function (productId) {
    if (window.confirm("Vuoi davvero cancellare il prodotto?")) {
        fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGRjZjJkN2IxMTAwMTkwZTZlMGIiLCJpYXQiOjE3MDk4OTEwMjQsImV4cCI6MTcxMTEwMDYyNH0.sok6eF9GDxnW8jBQmkd32UnlvkIXNZZ4YVU_zy1I5zI"
            }
        })
            .then((res) => {
                if (res.ok) {
                    const cardToRemove = document.querySelector(`.delete-btn[data-product-id="${productId}"]`).closest('.col')
                    if (cardToRemove) {
                        cardToRemove.remove()
                        console.log('Prodotto eliminato con successo!')
                    } else {
                        console.error('La scheda del prodotto non è stata trovata')
                    }
                }
            })
    }
}

const spinHide = function () {
    const spinner = document.getElementById('circle')
    spinner.classList.add('d-none')
}

const getProduct = function () {
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGRjZjJkN2IxMTAwMTkwZTZlMGIiLCJpYXQiOjE3MDk4OTEwMjQsImV4cCI6MTcxMTEwMDYyNH0.sok6eF9GDxnW8jBQmkd32UnlvkIXNZZ4YVU_zy1I5zI"
        }
    })
        .then((res) => {
            spinHide()

            console.log('ok', res)
            if (res.ok) {
                return res.json()
            }
            else {
                throw new Error('ce un errore')
            }
        })
        .then(product => {
            console.log('events', product)
            prodRender(product)
        })
}

getProduct()
