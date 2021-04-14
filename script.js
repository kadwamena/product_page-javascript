let container = document.querySelector(".container");
let navigationBar = document.createElement("div");
navigationBar.className = "nav";
container.append(navigationBar);

let companyName = document.createElement("h1");
companyName.className = "company";
companyName.innerHTML = "Kay Enterprise";
navigationBar.append(companyName);



let cartCounter = document.createElement("div");
cartCounter.className = "cart";
cartCounter.innerHTML = "0";
navigationBar.append(cartCounter);


class Products {
  constructor(imageUrl, title, price, stock, description) {
    this.imageUrl = imageUrl;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.description = description;
  }
}

class ProductDetails extends Products {
  constructor(imageUrl, title, price, stock, description) {
    super(imageUrl, title, price, stock, description);
  }

  imageContainer() {
    let imageCard = document.createElement("div");
    imageCard.className = "image-container";
    imageCard.innerHTML = `
            <div class="image-holder-1">
                <img id="img-1" src="${this.imageUrl}" alt="">
                <div class="image-info">
                    <h2>${this.title}</h2>
                    <h3>${this.price}</h3>
                    <h3>${this.stock}</h3>
                    <p>${this.description}</p>
                    <button id ="addCart">Add to Cart</button>
                    <button id ="removeCart" >Remove</button>
                </div>
            </div>
            `;

    return imageCard;
  }
}

const products = [
  new ProductDetails(
    "assets/laptop.jpg",
    "TDD-10.1 Netbook PC - 10.1",
    "GHC 717.00",
    "Stock Available - 15",
    "A laptop isn’t just a piece of electronics, it’s also an investment. That’s why we designed the N1001 Netbook PC with a special protective finish to guard against wear and tear."
  ),
  new ProductDetails(
    "assets/nokia.jpg",
    "Nokia 6.1 Plus",
    "GHC 762.00",
    "Stock Available - 40",
    "The Nokia 6.1 Plus comes equipped with a 5.8-inch FHD+ display having a resolution of 2280 x 1080 pixels. It also has an Octa Core 3060mAh 16.0MP+5.0MP Camera Fingerprint ID."
  ),
  new ProductDetails(
    "assets/fifa21.jpg",
    "EA Sports Fifa 21 PlayStaion 4 Game Disc",
    "GHC 290.00",
    "Stock Available - 105",
    "FIFA 21 is a football simulation video game published by Electronic Arts as part of the FIFA series.It is the 28th installment in the FIFA series, and was released 9 October 2020."
  ),
  new ProductDetails(
    "assets/controller.jpg",
    "Wireless Game Controller Gamepad - Black",
    "GHC 160.00",
    "Stock Available - 75",
    "Extensively tested by eSports athletes, the Wireless Game Controller Gamepad incorporates precision design ergonomics with incredibly responsive, customisable controls"
  ),
  new ProductDetails(
    "assets/modem.jpg",
    "Vodafone Universal Mobile Wi-Fi",
    "GHC 185",
    "Available Stock - 35",
    "The Vodafone R207 is the most affordable ultra-low cost Mobile Wi-Fi Hotspot supporting HSPA+ (21Mbps) as well as Wi-Fi 802.11 b/g/n standards with security encryption up to WPA2."
  ),
  new ProductDetails(
    "assets/mouse.jpg",
    "HP Original Wireless Mouse - Black",
    "GHC 27",
    "Available Stock - 135",
    "The Wireless Optical Mouse from Dell offers you everyday wireless performance with excellent battery life. It is designed to create a clutter-free workspace with a reliable, plug-and-play wireless connection."
  ),
];

products.map((myProduct) => {
  container.append(myProduct.imageContainer());
});

const addToCart = () => {
  let cartNumber = document.querySelector(".cart");
  let parsedCartNumber = parseInt(cartNumber.innerHTML);
  parsedCartNumber = parsedCartNumber + 1;
  cartNumber.innerHTML = parsedCartNumber;
};

let addCart = document.querySelectorAll("#addCart");
for (let myCart of addCart) {
  myCart.addEventListener("click", addToCart);
}

const removeFromCart = () => {
  let cartNumber = document.querySelector(".cart");
  let parsedCartNumber = parseInt(cartNumber.innerHTML);
  if (parsedCartNumber === 0) {
      alert ("Cart quantity is empty")
      return;
  }
  parsedCartNumber = parsedCartNumber - 1;
  cartNumber.innerHTML = parsedCartNumber;
};

let removeCart = document.querySelectorAll("#removeCart");
for (let myCart of removeCart) {
  myCart.addEventListener("click", removeFromCart);
}
