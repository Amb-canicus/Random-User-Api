
  
let contenido = document.querySelector('#contenido')
function traer(){
    fetch('https://randomuser.me/api/')
    .then(res=> res.json())
    .then(data=> {
        console.log(data)
        contenido.innerHTML = `
        <img src="${data.results['0'].picture.large} " width="300px" class="mx-auto d-block img-fluid rounded-circle" alt="">
        <p>Nombre: <span class="text-uppercase">${data.results['0'].name.first} ${data.results['0'].name.last}</span></p>
        <p>Domicilio: 
        <span class="text-uppercase">
            ${data.results['0'].location.city},
            ${data.results['0'].location.state},
            ${data.results['0'].location.country}
        </span>
        </p>
        <p>Teléfono: <span class="text-uppercase">${data.results['0'].phone}</span></p>
        <p>Móvil: <span class="text-uppercase">${data.results['0'].cell}</span></p>
        <p>Email: <span class="text-uppercase">${data.results['0'].email}</span></p>
        <p>Username: <span class="text-uppercase">${data.results['0'].login.username}</span></p>
        
        `
    })
}






























