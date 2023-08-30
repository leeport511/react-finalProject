const products = [
    {
        id: "1",
        name: "Mother Gamer Gygabyte B560m",
        category: "Other",
        brand: "Gigabyte",
        model: "B560M Aorus Pro",
        version: "rev 1.0",
        price: 210575,
        image: "Mother-gigabyte-b560m.webp",
    },

    {
        id: "2",
        name: "Mother Msi H410m-b",
        category: "Other",
        brand: "MSI",
        model: "H410m-b",
        price: 94990,
        image: "Mother-msi-h410.webp",
    },
    {
        id: "3",
        name: "Computer case Gs500r",
        category: "Other",
        brand: "Huntkey",
        model: "GS500r",
        version: "Gamer",
        price: 62398,
        image: "Gabinete-pc-500r.webp",
    },
    {
        id: "4",
        name: "Computer case Deepcool Matrexx",
        category: "Other",
        brand: "Deepcool",
        model: "MATREXX 50 ADD-RGB 4F",
        version: "Gamer",
        price: 73080,
        image: "Gabinete-deepcool.webp",
    },
    {
        id: "5",
        name: "Headphones Gamer Razen Kraken X",
        category: "Other",
        brand: "Razen",
        model: "KRAKEN X for Console",
        version: "Gamer",
        price: 49763,
        image: "Auris-razen-kraken.webp",
    },
    {
        id: "6",
        name: "Headphones gamer Logitech g635",
        category: "Other",
        brand: "Logitech",
        model: "G Series",
        version: "G635",
        price: 107000,
        image: "Auris-logitech-g635.webp",
    },
    {
        id: "7",
        name: "Keyboard HyperX Alloy Origins 60",
        category: "Keyboards",
        brand: "HyperX",
        model: "Alloy",
        version: "Origins 60",
        price: 92000,
        image: "HyperX Alloy RGB.webp",
    },
    {
        id: "8",
        name: "Keyboard Logitech K835 TKL",
        category: "Keyboards",
        brand: "Logitech",
        model: "TKL QWERTY GL",
        version: "K835",
        price: 49568,
        image: "Logitech K835.webp",
    },
    {
        id: "9",
        name: "Keyboard Redragon Draconic K530",
        category: "Keyboards",
        brand: "Redragon",
        model: "Draconic",
        version: "K530",
        price: 46655,
        image: "Redragon Draconic K530.webp",
    },
    {
        id: "10",
        name: "Keyboard Redragon Kumara K552",
        category: "Keyboards",
        brand: "Redragon",
        model: "Kumara",
        version: "K552",
        price: 34999,
        image: "Redragon Kumara K552 QWERTY.webp",
    },
    {
        id: "11",
        name: "AMD Ryzen 5 5600G",
        category: "Micro",
        brand: "AMD",
        model: "Ryzen 5",
        version: "5600G",
        price: 172912,
        image: "AMD Ryzen 5600G.webp",
    },
    {
        id: "12",
        name: "Micro Intel Core i3-10100F",
        category: "Micro",
        brand: "Intel",
        model: "Core I3",
        version: "10100F",
        price: 62788,
        image: "Intel Core I3-10100F.webp",
    },
    {
        id: "13",
        name: "Micro Intel Core i7-10700B",
        category: "Micro",
        brand: "Intel",
        model: "Core I5",
        version: "10700B",
        price: 299850,
        image: "Intel Core I7-10700.webp",
    },
    {
        id: "14",
        name: "Asus VA24E VA24EHE 23.8",
        category: "Screens",
        brand: "Asus",
        model: "VA24E",
        version: "VA24EHE",
        price: 114999,
        image: "Asus VA24E.webp",
    },
    {
        id: "15",
        name: "Screen gamer LG 27UL500 led 27",
        category: "Screens",
        brand: "LG",
        model: "27UL500",
        version: "led 27 white",
        price: 278855,
        image: "LG 27UL500.webp",
    },
    {
        id: "16",
        name: "Screen gamer Samsung F24T35 led 24",
        category: "Screens",
        brand: "Samsung",
        model: "F24T35",
        version: "led 24 blue",
        price: 106828,
        image: "Samsung F24T35 led-24.webp",
    },
    {
        id: "17",
        name: "Screen gamer Samsung Odyssey G5 S32AG55 LCD 32",
        category: "Screens",
        brand: "Samsung",
        model: "Odyssey G5",
        version: "S32AG55 LCD 32",
        price: 396700,
        image: "Samsung Odyssey G5 S32AG55.webp",
    },
    {
        id: "18",
        name: "Mouse Gamer Logitech G203 blue",
        category: "Mouses",
        brand: "Logitech",
        model: "GSeries Lightsync",
        version: "G203 blue",
        price: 23500,
        image: "Logitech G203 Lightsync.webp",
    },
    {
        id: "19",
        name: "Mouse Gamer Logitech G502 Hero black",
        category: "Mouses",
        brand: "Logitech",
        model: "GSeries Hero",
        version: "G502 black",
        price: 38990,
        image: "Logitech g502.webp",
    },
    {
        id: "20",
        name: "Mouse Gamer Razer Viper Mini black",
        category: "Mouses",
        brand: "Razer",
        model: "Viper",
        version: "Mini black",
        price: 60000,
        image: "Razer Viper Mini.webp",
    },
    {
        id: "21",
        name: "Mouse Gamer RedDragon Storm Pro M808-KS white",
        category: "Mouses",
        brand: "Redragon",
        model: "Storm Pro",
        version: "M808-KS white",
        price: 32473,
        image: "Redragon m808-ks.webp",
    },
];



export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    })

}

export const getItem = (itemId) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let item = products.find(product => product.id === itemId)

            item ?
            resolve(item)
            :
            reject(new Error(`Cound't find ${itemId}`))
        },1500)
    })
}