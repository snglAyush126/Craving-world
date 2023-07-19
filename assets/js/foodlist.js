document.addEventListener('DOMContentLoaded', function() {
    const addButtons = document.getElementsByClassName('add-button');
    const removeButtons = document.getElementsByClassName('remove-button');
    const orderSummary = document.getElementById('order-summary');
    const totalAmount = document.getElementById('total-amount');
  
    let totalPrice = 0;
  
    for (let i = 0; i < addButtons.length; i++) {
      addButtons[i].addEventListener('click', function() {
        const pizzaName = this.previousElementSibling.previousElementSibling.textContent;
        const pizzaPrice = parseFloat(this.previousElementSibling.textContent.slice(1));
  
        const listItem = document.createElement('li');
        listItem.innerHTML = pizzaName + ' ' + this.previousElementSibling.textContent;
        orderSummary.appendChild(listItem);
  
        totalPrice += pizzaPrice;
        totalAmount.textContent = '$' + totalPrice.toFixed(2);
      });
    }
  
    for (let i = 0; i < removeButtons.length; i++) {
      removeButtons[i].addEventListener('click', function() {
        const listItem = this.parentNode;
        const pizzaPrice = parseFloat(this.previousElementSibling.textContent.slice(1));
  
        listItem.parentNode.removeChild(listItem);
  
        totalPrice -= pizzaPrice;
        totalAmount.textContent = '$' + totalPrice.toFixed(2);
      });
    }
  });
  