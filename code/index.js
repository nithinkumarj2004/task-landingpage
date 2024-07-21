 //div
 const snacks_div = document.getElementById("snacks_all");
 const soaps_div = document.getElementById("soap");
 const shampoo_div = document.getElementById("shampoo");
 const masala_div = document.getElementById("masala");
 const ingredients_div = document.getElementById("ingredients");
 const all_div = document.getElementById("all");
 //button
 const snacks_but = document.getElementById("snacks_but");
 const soaps_but = document.getElementById("soap_but");
 const shampoo_but = document.getElementById("shampoo_but");
 const masalas_but = document.getElementById("masala_but");
 const ingredients_but = document.getElementById("ingredients_but");
 const all_but = document.getElementById("all_but");
 //event listener
 snacks_but.addEventListener("click",()=>{
     snacks_div.style.display = 'grid';
 });
 soaps_but.addEventListener("click",()=>{
     soaps_div.style.display = 'grid';
 });
 shampoo_but.addEventListener("click",()=>{
     shampoo_div.style.display = 'grid';
 });
 masala_but.addEventListener("click",()=>{
     masala_div.style.display = 'grid';
 });
 ingredients_but.addEventListener("click",()=>{
     ingredients_div.style.display = 'grid';
 });
 all_but.addEventListener("click",()=>{
     all_div.style.display = 'grid';
 });