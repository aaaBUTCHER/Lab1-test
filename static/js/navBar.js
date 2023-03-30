const navBar=document.querySelector("ul.navbar-menu");

const navBarObj=[{"/":" Home"}, 
                {"/librat":"Librat"},
                {"/dil":"Dil"},
                {"/profil":"Profili"}];

navBarObj.forEach((c)=>{
  const keys=Object.keys(c);
  navBar.innerHTML+=`<li> <a href=${keys}> ${c[keys]}</a></li>`
});