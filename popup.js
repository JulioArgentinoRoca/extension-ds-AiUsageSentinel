const companyUser=document.getElementById("companyUser")
const companyPassword=document.getElementById("companyPassword")
const AreaUser=document.getElementById("AreaUser")
const AreaPassword=document.getElementById("AreaPassword")
const message= document.getElementById("test")
const button= document.getElementById("button")

const userList = document.getElementById('userList');
const resultado = document.getElementById('resultado');

let foundCompany=false;
let companyId=null;

document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/usuarios')
    .then(res => res.json())
    .then(data => {
      data.company.forEach(company => {
        if(company.name === companyUser && company.password === companyPassword){
          foundCompany=true;
          companyId=company.id;
        }
      });

      if(foundCompany){
        data.companyAreas.forEach(area => {
          if(area.name === AreaUser && area.password === AreaPassword && area.companyId === companyId){
            
          }
        });
      }

      resultado.textContent = data.company[0].name;
    })
    .catch(err => {
      document.getElementById('resultado').textContent = 'Error: ' + err;
    });
});


