const   menuEmail=document.querySelector(".navbar-email");
const   desktopMenu=document.querySelector(".desktop-menu");
const   menuRayitas=document.querySelector(".menu")
const   mobileMenu=document.querySelector(".mobile-menu");
const   menuCarritoIcon=document.querySelector(".navbar-shopping-cart")
const   shoppingCartContainer=document.querySelector("#shoppingCartContainer")
const   productDetailAside=document.querySelector("#productDetail")
const   productDetailClose=document.querySelector(".product-detail-close")
const   cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuRayitas.addEventListener("click", toggleMenuRayitas);
menuCarritoIcon.addEventListener("click", toggleCarritoshoppingCartContainer)
productDetailClose.addEventListener("click", closeProductDetailAside)

function toggleDesktopMenu(){
    console.log("click");
    const isshoppingCartContainerMenuClosed = shoppingCartContainer.classList.contains("inactive");
    if(!isshoppingCartContainerMenuClosed){
        shoppingCartContainer.classList.add("inactive")
    }
    const isProductDetailAsideClosed = productDetailAside.classList.contains("inactive")
    if(!isProductDetailAsideClosed){
        productDetailAside.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMenuRayitas(){
    console.log("click")
    const isshoppingCartContainerMenuClosed = shoppingCartContainer.classList.contains("inactive");
    if(!isshoppingCartContainerMenuClosed){
        shoppingCartContainer.classList.add("inactive")
    }
    const isProductDetailAsideClosed = productDetailAside.classList.contains("inactive")
    if(!isProductDetailAsideClosed){
        productDetailAside.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoshoppingCartContainer(){
    console.log("click")
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive")
    }
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive")
    }
    const isProductDetailAsideClosed = productDetailAside.classList.contains("inactive")
    if(!isProductDetailAsideClosed){
        productDetailAside.classList.add("inactive")
    }

    shoppingCartContainer.classList.toggle("inactive");

}

function openProductDetailAside(){
    console.log("click")
    productDetailAside.classList.remove("inactive");
}

function closeProductDetailAside(){
    console.log("click")
    productDetailAside.classList.add("inactive");
}


const productList = []

productList.push({
    Name: "Bicicleta",
    Price: 120,
    Image: "https://labicicleta.info/wp-content/uploads/2016/12/fixie.jpg",
})
productList.push({
    Name: "Television",
    Price:250,
    Image: "https://m.media-amazon.com/images/I/41UL68BGAJL._AC_SR300,300.jpg",
})
productList.push({
    Name: "Tostadora",
    Price: 50,
    Image: "https://osterla.vteximg.com.br/arquivos/ids/157879-1000-1000/TSSTTR500-1.jpg?v=637449519713770000",
}) 
productList.push({
    Name: "Reloj",
    Price: 20,
    Image: "https://i.blogs.es/3d84dd/captura-de-pantalla-2022-12-21-a-las-11.53.43/840_560.jpeg",
}) 
productList.push({
    Name: "Radio",
    Price: 50,
    Image: "https://concepto.de/wp-content/uploads/2022/12/radio-medio-de-comunicacion.jpg",
}) 
productList.push({
    Name: "Lavadora",
    Price: 50,
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7j-V4-IFVxVAFBVB_9PPkd2s-wRBJSW2pGcfSHoSLIT6e0IBlFmPfKReYEpJF_Qc2E4c&usqp=CAU",
}) 
productList.push({
    Name: "Juguete Peppa pig",
    Price: 50,
    Image: "https://i.ytimg.com/vi/PndVJC2vXgU/maxresdefault.jpg",
}) 
productList.push({
    Name: "Masajeador",
    Price: 140,
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfnCyOq-thcZXVHQbYv2bVAdk5wSliluqrcQ&usqp=CAU",
}) 
productList.push({
    Name: "Pantalon Levis",
    Price: 50,
    Image: "https://storesgo.com/uploads/product/mediumthumb/jpg/levis-pantalon-de-mezclilla-559-corte-recto-para-hombre-ajuste-comodo_1653819778.jpg",
}) 
productList.push({
    Name: "Bicicleta ciclista",
    Price: 50,
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}) 
productList.push({
    Name: "Moto",
    Price: 554300,
    Image: "https://live.staticflickr.com/4850/46289123052_5541a231e9_n.jpg",
}) 
productList.push({
    Name: "Remera",
    Price: 5000,
    Image: "https://live.staticflickr.com/4144/5204331656_0db67c3209_m.jpg",
}) 
productList.push({
    Name: "Campera",
    Price: 3800,
    Image: "https://live.staticflickr.com/3242/2919572245_28b94da6c6_n.jpg",
}) 
productList.push({
    Name: "Medias",
    Price: 100,
    Image: "https://live.staticflickr.com/2470/3536129669_af7bf9d92e_n.jpg",
}) 
productList.push({
    Name: "Pelota de futbol",
    Price: 4999,
    Image: "https://live.staticflickr.com/65535/49317073537_b75d8de325_n.jpg",
}) 


function renderProducts(arr) {
    for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.Image);
      productImg.addEventListener("click", openProductDetailAside)
    
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
    
      const productInfoDiv = document.createElement('div');
    
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.Price;
      const productName = document.createElement('p');
      productName.innerText = product.Name;
    
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
    
      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src',"./icons/bt_add_to_cart.svg");
    
      productInfoFigure.appendChild(productImgCart);
    
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
    
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
    
      cardsContainer.appendChild(productCard);
    }
  }

  renderProducts(productList);
   