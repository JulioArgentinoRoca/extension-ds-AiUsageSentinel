const companyUser=document.getElementById("companyUser")
const companyPassword=document.getElementById("companyPassword")
const AreaUser=document.getElementById("AreaUser")
const AreaPassword=document.getElementById("AreaPassword")
const message= document.getElementById("test")
const button= document.getElementById("button")

const userList = document.getElementById('userList');

document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/saludo')
    .then(res => res.json())
    .then(data => {
      const clave = Object.keys(data)[0];   // "mensaje"
      const valor = data[clave];            // "Hola desde la API"

      document.getElementById('mensaje').textContent = clave;
      document.getElementById('resultado').textContent = valor;
    })
    .catch(err => {
      document.getElementById('resultado').textContent = 'Error: ' + err;
    });
});


