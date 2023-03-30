const navBar=document.querySelector("ul.navbar-menu");

const navBarObj=[{"/":" Home"}, 
                {"/librat":"Librat"},
                {"/dil":"Dil"},
                {"/profil":"Profili"}];

const keys= Object.keys(c);
keys.forEach(key => {
  navBar.append(`li: a(href="${key}") ${c[key]}`)
});