const data = [
    {
        id: '1',
        image: 'https://i.postimg.cc/3JqWYgxc/1001-Nights.webp',
        name: 'Ajmal 1001 Nights',
        price: 99.99,
        category: 'Attar',
    },
    {
        id: '2',
        image: 'https://i.postimg.cc/Bv81BgQT/mukhallatdhanaloudh.webp',
        name: 'Mukhallat Dahn-al-Oudh',
        price: 129.33,
        category: 'Attar',
    },
    {
        id: '3',
        image: 'https://i.postimg.cc/m2RThpPL/j-firdaus-aura.jpg',
        name: 'Jannatul Fidaus & Aura',
        price: 59.99,
        category: 'Attar',
    },
    {
        id: '4',
        image: 'https://i.postimg.cc/WzMN75yH/Musk-Sufi.jpg',
        name: 'Mukhallat Sufi',
        price: 49.99,
        category: 'Attar',
    },
    {
        id: '5',
        image: 'https://i.postimg.cc/8kqwJZNV/Mukhallad-Fatimah.jpg',
        name: 'Mukhallat Fatima',
        price: 199.99,
        category: 'Attar',
    },
    {
        id: '6',
        image: 'https://i.postimg.cc/K8zzXSsP/ajmalwomansacredlove.jpg',
        name: 'Sacred Love by Ajmal',
        price: 89.99,
        category: 'Body Spray',
    },
    {
        id: '7',
        image: 'https://i.postimg.cc/KvdZWkB2/Armaf-Club-de-nuit-for-women.jpg',
        name: 'Armaf Club-de-nuit',
        price: 79.99,
        category: 'Body Spray',
    },
    {
        id: '8',
        image: 'https://i.postimg.cc/C1Np7Jpv/Armaf-for-Women.jpg',
        name: 'Armaf for Woman',
        price: 85.99,
        category: 'Body Spray',
    },
    {
        id: '9',
        image: 'https://i.postimg.cc/DZKbLf7r/bodysprayslide-1.jpg',
        name: 'Mixd Brands',
        price: 99.99,
        category: 'Body Spray',
    },
    {
        id: '10',
        image: 'https://i.postimg.cc/wx1Zr6z5/Emotion-Perfume-and-body-spray-Rasai.jpg',
        name: 'Emotion Rasassi',
        price: 63.33,
        category: 'Body Spray',
    },
    {
        id: '11',
        image: 'https://i.postimg.cc/pLKt6PDc/gift33.jpg',
        name: 'Ajmal Aristocrat',
        price: 189.99,
        category: 'Gift Pack',
    },
    {
        id: '12',
        image: 'https://i.postimg.cc/Yq5HRvmm/attarset1.jpg',
        name: 'Club-de-Nuit Al-Nuaim',
        price: 129.99,
        category: 'Gift Pack',
    },
    {
        id: '13',
        image: 'https://i.postimg.cc/nhwpm3Gp/giftset6.jpg',
        name: 'Sacred Love Ajmal',
        price: 63.33,
        category: 'Gift Pack',
    },
    {
        id: '14',
        image: 'https://i.postimg.cc/CMjh2HSs/giftset4.jpg',
        name: 'Beautiful Ajmal giftpack',
        price: 195.99,
        category: 'Gift Pack',
    },
    {
        id: '15',
        image: 'https://i.postimg.cc/QCTYm7yp/giftset9.webp',
        name: 'Aurum Ajmal',
        price: 179.99,
        category: 'Gift Pack',
    },
    {
        id: '16',
        image: 'https://i.postimg.cc/8cV6Sp7K/Ammer-Al-Oud-Perfume.jpg',
        name: 'Ammer-al-Oudh',
        price: 69.99,
        category: 'Perfumes',
    },
    {
        id: '17',
        image: 'https://i.postimg.cc/t4rWxGcJ/blue-Dreams.jpg',
        name: 'Blue-Dreams',
        price: 73.33,
        category: 'Perfumes',
    },
    {
        id: '18',
        image: 'https://i.postimg.cc/m2KG2PLg/Friction-Ajmal.jpg',
        name: 'Friction Ajmal',
        price: 119.99,
        category: 'Perfumes',
    },
    {
        id: '19',
        image: 'https://i.postimg.cc/fL16WFsg/perfumeslide.jpg',
        name: 'Primitive Forests Ajmal',
        price: 49.99,
        category: 'Perfumes',
    },
    {
        id: '20',
        image: 'https://i.postimg.cc/pTkH2kTw/Mufallat-Ruali-Gift-Pack.jpg',
        name: 'Mufallat Ruali',
        price: 95.55,
        category: 'Perfumes',
    },
]

const searchInput = document.getElementById('search');
const productsContainer = document.querySelector('.products');
const categories = document.querySelector('.categories');
const priceRange = document.getElementById('price_range');
const priceValue = document.getElementById('price_value');


const displayProducts = (filteredData) => {
    productsContainer.innerHTML = filteredData.map(item => `
    <div class="product">
        <img src=${item.image} alt=${item.name}>
        <span class="name">${item.name}</span>
        <span class="price">$${item.price}</span>
    </div>
    `).join('')
}

displayProducts(data);

searchInput.addEventListener('keyup', (e) => {
    const value = e.target.value.toLowerCase();

    if(value){
       displayProducts(data.filter(item => item.name.toLocaleLowerCase().indexOf(value) != -1))
       
    }else{
        displayProducts(data)
    }
})

const displayCategories = () => {
    const showCat = data.map(item => item.category)
    const filterdCat = ['All',...showCat.filter((item, idx) => 
    showCat.indexOf(item) === idx)]
    // console.log(filterdCat)

    categories.innerHTML = filterdCat.map(cat => `
    <span class="cat">${cat}</span>
    `).join('');




    categories.addEventListener('click', (e) => {
       const selectedCat =  e.target.textContent;
    //    console.log(selectedCat)

       if(selectedCat === 'All'){
            displayProducts(data)
       }else{
        displayProducts(data.filter(product => product.category === selectedCat))
       }
    })
}

const allPrices = () => {
    const prcieList = data.map((price) => price.price);
    const minPrice = Math.min(...prcieList)
    const maxPrice = Math.max(...prcieList)

    priceRange.min = minPrice
    priceRange.max = maxPrice
    priceRange.value = maxPrice

    priceValue.textContent = '$' + maxPrice

    priceRange.addEventListener('input', (e) => {
        priceValue.textContent = '$' + e.target.value
        displayProducts(data.filter(product => product.price <= e.target.value))
    })




    console.log(prcieList, minPrice, maxPrice)
}







displayCategories();
allPrices();