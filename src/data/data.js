const products = [
    {
        id: "ad 1",
        name : "producto 1",
        description : "descripcion 1",
        price : 1200,
        stock : 5,
        category : "survival",
        image: "/image/resident.jpeg"

    },
    {
        id: "ad 2",
        name : "producto 2",
        description : "descripcion 2",
        price : 122,
        stock : 1,
        category : "survival",
        image: "/image/resident.jpeg"

    },
];

const getProducts = () =>{
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (products)
        }, );
    })
};

export default getProducts;