function deleteItem(e){
  // let litag = document.getElementsByTagName("li");
  // litag.forEach(function(li){
  //   li.onclick = function(e){
  //     console.log(e.currentTarget.innerHTML);
  //   }
  // })
  
  // e.currentTarget.innerHTML = "";
  let body = document.getElementsByTagName("body")[0];
  body.removeChild("elements");

  // e.target.parentNode.parentNode

  // body[0].childNodes["elements"]
  // let delElement = deleteDiv[e].getElementsByClassName(e);
  // delElement.innerHTML = "";
}

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  // GET THE VALUES
  let price = document.getElementsByClassName("cost");
  let quantity = document.getElementsByClassName("quantity");
  let total = 0;
  let totalCart = 0;

  let tp = document.getElementsByClassName("total-price");
  let cartTotal = document.getElementsByClassName("cart-total");
  let cartSpan = cartTotal[0].getElementsByTagName("span");

  for (let index = 0; index < price.length; index++) {
    // CALCULATE THE TOTAL PRICE
    total = parseInt(price[index].innerText.slice(1) * quantity[index].value);
    // CHANGE THE TOTAL PRICE VALUE IN THE FORM
    tp[index].innerText = "$" + total + ".00";
    totalCart += total;
  }
  // WRITE THE TOTAL VALUE OF THE CART 
  cartSpan[0].innerText = "$" + totalCart + ".00";
  
}

  

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  // let parent = document.getElementsByTagName("body")[0];
  // parent.appendChild(element);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // document.getElementsByClassName('calc-prices-button')[0].onclick = () => {getTotalPrice();}
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = function(){
    getTotalPrice();
  };

  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = function(){
      deleteItem(deleteButtons[i]);
    };
  }
};
