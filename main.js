const catalogo = [
    {
        id:1,
        name:'Camisa preta',
        price:19.90
    },
    {
        id:2,
        name:'Camisa branca',
        price:29.90
    },
    {
        id:3,
        name:'Camisa azul',
        price:49.90
    },
    {
        id:4,
        name:'Camisa cinza',
        price:52.40
    },
    {
        id:5,
        name:'Camisa reta',
        price:9.50
    },
    {
        id:6,
        name:'Camisa pink',
        price:249.90
    },
    {
        id:7,
        name:'Camisa grande',
        price:379.49
    },
    {
        id:8,
        name:'Camisa amarela',
        price:11.49
    },

]

catalogo.forEach((item)=>{
    const Card = `<div>
    <h2 class='font-bold'>${item.id}</h2>
    <h4>${item.name}</h4>
    <span>${item.price}</span>
</div>`

document.getElementById("root").innerHTML += Card;
})

