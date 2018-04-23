var total = 0;
var totalCart = 0;
var tp = document.getElementsByClassName("total-price");


function deleteItem(e){
  var productDelete = e.target.parentElement.parentElement;
  console.log(productDelete);
  totalCart -= productDelete.getElementsByClassName('total-price')[0].innerText.slice(1);
  getTotalPrice();

  productDelete.parentNode.removeChild(productDelete);
    
}

function getPriceByProduct(){  //itemNode
  // GET THE VALUES
  var price = document.getElementsByClassName("cost");
  var quantity = document.getElementsByClassName("quantity");
  total = 0;
  totalCart = 0;
  // var tp = document.getElementsByClassName("total-price");

  for (var index = 0; index < price.length; index++) {
    // CALCULATE THE TOTAL PRICE
    total = parseInt(price[index].innerText.slice(1) * quantity[index].value);
    // CHANGE THE TOTAL PRICE VALUE IN THE FORM CALLING A FUNCTION
    updatePriceByProduct(total,index);  
  }
  getTotalPrice();
}

function updatePriceByProduct(productPrice, index){
  tp[index].innerText = "$" + productPrice + ".00";
  totalCart += productPrice;    
}

function getTotalPrice() {
  var cartTotal = document.getElementsByClassName("cart-total");
  var cartSpan = cartTotal[0].getElementsByTagName("span");

  // WRITE THE TOTAL VALUE OF THE CART
  if(totalCart >= 0){
    cartSpan[0].innerText = "$" + totalCart + ".00";
  }
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
  var createItemButton = document.getElementById('new-item-create');
  
  // CALCULO DE TOTAL DE PRODUCTOS
  var calculatePriceButton = document.getElementById('calc-prices-button'); 
  calculatePriceButton.onclick = function(){
    getPriceByProduct();
  };

  
  ///////////////////////////////////////////
  // MODO ALTERNATIVO DE BORRAR ELEMENTOS //
  /////////////////////////////////////////
  // var deleteButtons = document.querySelectorAll('body .btn-delete');
  // deleteButtons.forEach(function(deleteB){
  //   deleteB.addEventListener('click',function(e){
  //     deleteItem(e);  
  //   });
  // });

  // BORRADO DE ELEMENTOS
  var deleteButtons = document.getElementsByClassName('btn-delete');
  Array.from(deleteButtons).forEach(function(deleteB){
    deleteB.addEventListener('click',function(e){
      deleteItem(e);  
    });
  });

  // createItemButton.onclick = createNewItem;
  
  
  // for(var i = 0; i<deleteButtons.length ; i++){
  //   var itemtodelete = deleteButtons[i].parentElement.parentElement;
  //   itemtodelete.onclick = function(){
  //     console.log("this is i: "+i);
  //     itemtodelete = deleteButtons[i].parentElement.parentElement;
  //     // console.log(itemtodelete);
  //     deleteItem(itemtodelete);
  //   };
  // }

};
