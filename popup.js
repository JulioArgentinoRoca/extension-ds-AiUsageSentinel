const companyUser=document.getElementById("companyUser")
const companyPassword=document.getElementById("companyPassword")
const AreaUser=document.getElementById("AreaUser")
const AreaPassword=document.getElementById("AreaPassword")
const message= document.getElementById("test")
const button= document.getElementById("button")

const userList = document.getElementById('userList');
const resultado = document.getElementById('resultado');

let foundCompany=false;
let foundCompanyArea=false;
let companyId=null;

button.addEventListener('click', () => {
  fetch('http://localhost:3000/usuarios')
    .then(res => res.json())
    .then(data => {
      data.company.forEach(company => {
        if(company.name === companyUser.value && company.password === companyPassword.value){
          foundCompany=true;
          companyId=company.id;
          
        }
        console.log(companyUser.value)
        console.log(companyPassword.value)
      });

      if(foundCompany){
        data.companyAreas.forEach(area => {
          if(area.name === AreaUser.value && area.password === AreaPassword.value && area.companyId === companyId){
            foundCompanyArea=true;
          }
        });
      }

      if(foundCompanyArea){
        window.location.href = "isWorking.html";
      }
      


      resultado.textContent = "error: data is wrong";
    })
    .catch(err => {
      document.getElementById('resultado').textContent = 'Error: ' + err;
    });
});


