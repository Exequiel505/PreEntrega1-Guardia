const products = [
    {
        id: "ad1",
        name : "producto 1",
        description : "descripcion 1",
        price : 1200,
        stock : 5,
        category : "mundo-abierto",
        image: "/image/zelda.jpg"

    },
    {
        id: "ad2",
        name : "producto 2",
        description : "descripcion 2",
        price : 122,
        stock : 1,
        category : "shooter",
        image: "/image/black.jpg"

    },
    {
        id: "ad3",
        name : "producto 3",
        description : "descripcion 3",
        price : 130,
        stock : 3,
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