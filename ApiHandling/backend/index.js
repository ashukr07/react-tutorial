import express from "express";

const port =3000;
const app = express();

app.get("/api/products",(req,res)=>{
    const products = [
        {
            id:1,
            name: 'table wooden',
            price : 200,
            image:"Tanzania"
        },
        {
            id:2,
            name: 'table plastic',
            price : 150,
            image:"Suriname"
        },
        {
            id:3,
            name: 'table glass',
            price : 250,
            image:"Tanzania"
        },
        {
            id:4,
            name: 'table metal',
            price : 300,
            image:"Tanzania"
        },
        {
            id:5,
            name: 'table polyster',
            price : 150,
            image:"Tanzania"
        },

    ]

    if(req.query.search){
        const filteredProducts = products.filter(product => product.name.includes(req.query.search));
        res.send(filteredProducts);
        return;
    }

    setTimeout(()=>{
        res.send(products);
    },3000)
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
