

// total Price calculation 
function updateTotalPrice() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const DeliveryCharge = parseInt(document.getElementById('delivery-cost').innerText);
    const totalPrice = bestPrice + memoryCost + storageCost + DeliveryCharge;
    document.getElementById('total-price').innerText = document.getElementById('overall-price').innerText = totalPrice;
    
};

// promocode 
function promoCodeApply() {
    const promoCode = document.getElementById('promo-code').value;
    if (promoCode.toLowerCase() == 'stevekaku') {
        let totalPrice = parseFloat(document.getElementById('total-price').innerText);

        //promocode appling calculation
        totalPrice = totalPrice - (totalPrice * 0.20);
        document.getElementById('overall-price').innerText = totalPrice;
    }
    else{
        alert('Unvalid code. Please give a valid promo code.')
    }
    document.getElementById('promo-code').value = '';
};


// memory cost
document.getElementById('first-unified-memory').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = 0;
    updateTotalPrice();
});
document.getElementById('second-unified-memory').addEventListener('click', function () {
    const result = document.getElementById('memory-cost').innerText = 180;
    updateTotalPrice();
});

// storage cost 
document.getElementById('first-ssd-cost').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 0;
    updateTotalPrice();
});
document.getElementById('second-ssd-cost').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 100;
    updateTotalPrice();
});
document.getElementById('third-ssd-cost').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 180;
    updateTotalPrice();
});

// delivery charge 
document.getElementById('free-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 0;
    updateTotalPrice();
});
document.getElementById('delivery-charge').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 20;
    updateTotalPrice();
});

