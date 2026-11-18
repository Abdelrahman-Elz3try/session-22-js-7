const store ={
    name: "Tactical store", city: "Portsaid", phone: "0123444444",
};

document.querySelector("#store-name").innerHTML = store.name;
document.querySelector("#store-info").innerHTML = store.city + " | " + store.phone ;

const cart = [
  { name: "Mouse", price: 250, qty: 2 },
  { name: "Keyboard", price: 400, qty: 1 },
  { name: "Headset", price: 300, qty: 1 }
];

function displaycart() {
   let cartList = document.querySelector("#cart");
   cartList.innerHTML = "";
 
   let totalElement = document.querySelector("#total");
   let countElement = document.querySelector("#count");
 
   let total = 0;
 
   for (let i = 0; i < cart.length; i++) {
    let itemTotal = cart[i].price * cart[i].qty;
    total += itemTotal;
       let capitalName = cart[i].name.charAt(0).toUpperCase() + cart[i].name.slice(1).toLowerCase();

       cartList.innerHTML += "<li>" + capitalName + " - " + cart[i].price + " EGP x " + cart[i].qty + " = " + itemTotal + " EGP</li>";
    }
    countElement.innerHTML = "You have " + cart.length + " items in your cart";
  
    let shippingText = "";
    if (total > 1000) {
      shippingText = "<br> You got free shipping!";
    } else {
      let remaining = 1000 - total;
      shippingText = "<br>Add " + remaining + " EGP more for free shipping";
    }
  
    totalElement.innerHTML = "Total: " + total.toFixed(2) + " EGP" + shippingText;
}

displaycart();

    cart.push({ name: "USB Cable", price: 100, qty: 1 });
    cart.unshift({ name: "Sticker", price: 30, qty: 1 });
    cart.pop();
    cart.shift();
    
    displaycart();