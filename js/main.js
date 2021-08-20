

// document.getElementById('unified-memory').addEventListener('click', function(){
//     const memoryCost = document.getElementById('memory-cost');
//     const memoryCostTotal = memoryCost.innerText;
//     const result = parseInt(memoryCostTotal) + 188;
// })


function productCost(product,price,isIncreasing){
    const memoryCost = document.getElementById(product+'-cost');
    let memoryCostTotal = memoryCost.innerText;
    if(isIncreasing == true){
        memoryCostTotal = price;
    }
    memoryCost.innerText = memoryCostTotal;
    
}

// memory cost
document.getElementById('firstUnified-memory').addEventListener('click', function(){
    productCost('memory', 0 ,true);
});
document.getElementById('secondUnified-memory').addEventListener('click', function(){
    productCost('memory', 180 ,true);
});

// storage cost
document.getElementById('ssd-storageOne').addEventListener('click', function(){
    productCost('storage', 0, true);
})
document.getElementById('ssd-storageTwo').addEventListener('click', function(){
    productCost('storage', 100, true);
})
document.getElementById('ssd-storageThree').addEventListener('click', function(){
    productCost('storage', 180, true);
})

// delivery cost
document.getElementById('late-delivery').addEventListener('click', function(){
    productCost('delivery', 0, true);
})
document.getElementById('fast-delivery').addEventListener('click', function(){
    productCost('delivery', 20, true);
})



























