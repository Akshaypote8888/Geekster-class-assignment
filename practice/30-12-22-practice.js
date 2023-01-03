const products = [
    {
        dish : "noodles",
        price:100,
    },
    {
        dish : "pasta",
        price: 120,
    },
    {
        dish : "pizza",
        price: "",
    },
    {
        dish : "Rice",
        price: 160,
    },
    {
        dish : "Burger",
        price: "",
    },
    {
        dish : "momos",
        price:200,
    },
];

let invalidProduct = products.filter((e)=>{
    if(e.price ==""){
        return true;
    }
    else {
        return false;
    }
})
console.log(invalidProduct)
