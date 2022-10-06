const buttons = document.querySelectorAll('.buttonGet')
const modalTitle = document.querySelector('#modalTitle')
const modalImg = document.querySelector('#modalImg')
const modalDesc = document.querySelector('#modalDesc')
const modalAutor = document.querySelector('#modalAutor')
const modalExpo = document.querySelector('#modalExpo')
const modalUbi = document.querySelector('#modalUbi')
const modalBg = document.querySelector('#modalBg')

const exposiciones = [
    {
        título: "San Martin",
        descripción: "lortem asdmasd dfjksand fosnfeifj weopifnw3 efo 2ó34f aerjw",
        autor: "SMG",
        ubicación: "sala 1",
        exposición: "asdasdasd",
        imagen: "../img/Plano1.jpg",
    },
    {
        título: "San Martin",
        descripción: "lortem asdmasd dfjksand fosnfeifj weopifnw3 efo 2ó34f aerjw",
        autor: "SMG",
        ubicación: "sala 1",
        exposición: "asdasdasd",
        imagen: "../img/Plano1.jpg",
    },
    {
        título: "San Martin",
        descripción: "lortem asdmasd dfjksand fosnfeifj weopifnw3 efo 2ó34f aerjw",
        autor: "SMG",
        ubicación: "sala 1",
        exposición: "asdasdasd",
        imagen: "../img/Plano1.jpg",
    },
    {
        título: "San Martin",
        descripción: "lortem asdmasd dfjksand fosnfeifj weopifnw3 efo 2ó34f aerjw",
        autor: "SMG",
        ubicación: "sala 1",
        exposición: "asdasdasd",
        imagen: "../img/Plano1.jpg",
    },
]


buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.id
        console.log(id)
        getData(id)
    })
})

const getData = async (num) => {
    modalBg.classList.add('active')
    fetch(`https://rickandmortyapi.com/api/character/${num}`)
        .then(results => results.json())
        .then(data => {
            console.log(data)
            modalBg.classList.remove('active')
            const newObject = {
                titulo: data.name,
                descripcion: data.url,
                autor: data.gender,
                ubicacion: data.species,
                exposicion: data.status,
                imagen: data.image,
            }
            createModal(newObject)
        })
        .catch(error => console.log(error))
}

const createModal = (obj) => {
    modalTitle.textContent = obj.titulo
    modalDesc.textContent = obj.descripcion
    modalAutor.textContent = obj.autor
    modalExpo.textContent = obj.exposicion
    modalUbi.textContent = obj.ubicacion
    modalImg.src = obj.imagen
}

{/* <button data-id="1" class="buttonGet">1</button>
<button data-id="2" class="buttonGet">2</button>
<button data-id="3" class="buttonGet">3</button>
<button data-id="4" class="buttonGet">4</button>
<button data-id="5" class="buttonGet">5</button> */}