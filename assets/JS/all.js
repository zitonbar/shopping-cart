document.addEventListener('DOMContentLoaded', function () {
    const decreaseButton = document.querySelector('.decrease-btn');
    const increaseButton = document.querySelector('.increase-btn');
    const quantityElement = document.querySelector('#quantity');
  console.log(decreaseButton);
    let quantity = 0;
  
    function updateQuantity() {
      quantityElement.textContent = quantity;
    }
  
    decreaseButton.addEventListener('click', function () {
      if (quantity > 0) {
        quantity--;
        updateQuantity();
      }
    });
  
    increaseButton.addEventListener('click', function () {
      quantity++;
      updateQuantity();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
        init();
    });