const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "New In",
    price: 2999,
    colors: [
      {
        code: "Gray",
        img: "./img/img1.jpeg",
      },
      {
        code: "Black",
        img: "./img/img.jpeg",
      },
    ],
  },
  {
    id: 2,
    title: "Mon Cherie",
    price: 1149,
    colors: [
      {
        code: "gray",
        img: "./img/mon1.jpeg",
      },
      {
        code: "white",
        img: "./img/mon2.jpeg",
      },
    ],
  },
  {
    id: 3,
    title: "Casual Wear",
    price: 2100,
    colors: [
      {
        code: "lightgray",
        img: "./img/casual.jpeg",
      },
      {
        code: "green",
        img: "./img/casual1.jpeg",
      },
    ],
  },
  {
    id: 4,
    title: "Party Wear",
    price: 2999,
    colors: [
      {
        code: "black",
        img: "./img/party.jpeg",
      },
       {
         code: "lightgray",
       img: "./img/party2.jpeg",
    
      },
    ],
  },
  {
    id: 5,
    title: "Indo Western",
    price: 999,
    colors: [
      {
        code: "gray",
        img: "./img/indo.jpeg",
      },
      {
        code: "black",
        img: "./img/indo1.jpeg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
