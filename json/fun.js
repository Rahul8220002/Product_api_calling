let rander = document.querySelector(".main_div");
let nav_bar=document.querySelector(".navbar")

let div=document.createElement("div")
let inputElement=document.createElement("input")
let button=document.createElement("button")
button.setAttribute("class","nav_btn")
div.setAttribute("class","nav")
inputElement.setAttribute("class","search_bar")
inputElement.setAttribute("placeholder","Search Here ...")
div.innerText="Q"
button.innerText="sing in"
nav_bar.appendChild(div)
nav_bar.appendChild(inputElement)
nav_bar.appendChild(button)


function search() {
   let filter=document.getElementsByClassName("search_bar").value.toUpperCase();

   let item= document.querySelectorAll(".Product_section")

   let l =document.getElementsByTagName("h1");

   for (let i = 0; i <l.length; i++) {
      let a=item[i].getElementsByTagName("h1")[0]
      let value=a.innerText || a.innerHTML || a.textContent;
      
      if (value.toUpperCase().indexOf(filter)>-1) {
         item[i].style.display="";
      } else {
         item[i].style.display="none";
      }
   }
   
}

let p1 = fetch("https://dummyjson.com/product");
p1.then((respose) => {
  let data = respose.json();
  

  data.then((product) => {
    let productDetails = product.products;
    
    productDetails.map((ele) => {
      let section = document.createElement("section");
      let image = document.createElement("img");
      let h1 = document.createElement("h1");
      let p1 = document.createElement("p");
      let btn = document.createElement("button");
      image.setAttribute("class", "myimgages");
      section.setAttribute("class", "Product_section");
      btn.setAttribute("class", "btn");
      image.setAttribute("src", ele.thumbnail);
      h1.innerHTML = `Product: ${ele.title}`;

      p1.innerText = ele.description;
      btn.innerText = "add to card";
      section.append(image, h1, p1, btn);
      rander.append(section);
    });
  });

});
