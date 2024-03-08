const address = new URLSearchParams(location.search)
const productId = address.get('eventId')

if (productId) {
    fetch('https://striveschool-api.herokuapp.com/api/product/' + productId, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGRjZjJkN2IxMTAwMTkwZTZlMGIiLCJpYXQiOjE3MDk4OTEwMjQsImV4cCI6MTcxMTEwMDYyNH0.sok6eF9GDxnW8jBQmkd32UnlvkIXNZZ4YVU_zy1I5zI"
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Errore')
            }
        })
        .then((productDetail) => {

            const nameInput = document.getElementById('name')
            const descriptionInput = document.getElementById('description')
            const brandInput = document.getElementById('brand')
            const UrlInput = document.getElementById('imgUrl')
            const priceInput = document.getElementById('price')

            nameInput.value = productDetail.name
            descriptionInput.value = productDetail.description
            brandInput.value = productDetail.brand
            UrlInput.value = productDetail.imageUrl
            priceInput.value = productDetail.price
        })
        .catch(error => console.error('Errore durante il recupero del prodotto:', error))
}


const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const nameInput = document.getElementById('name')
    const descriptionInput = document.getElementById('description')
    const brandInput = document.getElementById('brand')
    const UrlInput = document.getElementById('imgUrl')
    const priceInput = document.getElementById('price')


    const newProduct = {
        name: nameInput.value,
        description: descriptionInput.value,
        brand: brandInput.value,
        imageUrl: UrlInput.value,
        price: priceInput.value,
    }

    const method = productId ? 'PUT' : 'POST';
    const url = productId ? 'https://striveschool-api.herokuapp.com/api/product/' + productId : 'https://striveschool-api.herokuapp.com/api/product/';

    fetch(url, {
        method: method,
        body: JSON.stringify(newProduct),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGRjZjJkN2IxMTAwMTkwZTZlMGIiLCJpYXQiOjE3MDk4OTEwMjQsImV4cCI6MTcxMTEwMDYyNH0.sok6eF9GDxnW8jBQmkd32UnlvkIXNZZ4YVU_zy1I5zI"
        },
    })
        .then((res) => {
            console.log('andato', res)
            if (res.ok) {
                console.log('ok', res)
                if (window.confirm("Vuoi aggiungere il prodotto?")) {
                    location.assign('./index.html')
                }
            }
            else {
                throw new Error('Errore durante il salvataggio')
            }
        })
})

function clearsField() {
    if (window.confirm("Sei sicuro di voler resettare l'intero modulo?")) {
        document.getElementById('form').reset();
    }
}