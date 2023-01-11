const data = [
    {
        id: 1,
        name: 'Google Themed Portfolio',
        image: 'https://user-images.githubusercontent.com/100835323/198843676-7cf17d0b-b9aa-43b9-b889-ebd22167cd8a.png',
        liveUrl: 'https://abhishksen.github.io/google_themed_portfolio/',
        gitUrl: 'https://github.com/abhishksen/google_themed_portfolio#google_themed_portfolio',
        cat: 'frontend',
    },
    {
        id: 2,
        name: 'Responsive Sidebar',
        image: 'https://user-images.githubusercontent.com/100835323/209987006-393363cf-5c69-4d9f-b31a-cef0b5253986.png',
        liveUrl: 'https://abhishksen.github.io/sidebar/',
        gitUrl: 'https://github.com/abhishksen/sidebar',
        cat: 'css',
    },
    {
        id: 3,
        name: 'Text To Speech Converter',
        image: 'https://user-images.githubusercontent.com/100835323/210125869-9a3cb262-8a60-41f4-9b81-c396e73180e3.png',
        liveUrl: 'https://abhishksen.github.io/textToSpeech/',
        gitUrl: 'https://github.com/abhishksen/textToSpeech',
        cat: 'javascript',
    },
    {
        id: 4,
        name: 'Currency Converter',
        image: 'https://user-images.githubusercontent.com/100835323/209847670-64ce2fc0-3b46-4428-a0c5-2fec9d2b8ac9.png',
        liveUrl: 'https://abhishksen.github.io/currency.exchng/',
        gitUrl: 'https://github.com/abhishksen/currency.exchng',
        cat: 'javascript',
    },
    {
        id: 5,
        name: 'Calculator App',
        image: 'https://user-images.githubusercontent.com/100835323/209567630-c5934de0-cd88-4cfa-8c91-ccd1b7953240.png',
        liveUrl: 'https://abhishksen.github.io/calculator/',
        gitUrl: 'https://github.com/abhishksen/calculator',
        cat: 'javascript',
    },
    {
        id: 6,
        name: 'Age Calculator',
        image: 'https://user-images.githubusercontent.com/100835323/209645218-c11b8b98-29f2-4f1d-8dd6-f47d05ba1856.png',
        liveUrl: 'https://abhishksen.github.io/age.calculate/',
        gitUrl: 'https://github.com/abhishksen/age.calculate',
        cat: 'javascript',
    },
    {
        id: 7,
        name: 'Profile Card Design',
        image: 'https://user-images.githubusercontent.com/100835323/201834344-78333dc6-bab6-4009-b021-265ebd3512a4.png',
        liveUrl: 'https://github.com/abhishksen/profile_card',
        gitUrl: 'https://github.com/abhishksen/profile_card',
        cat: 'css',
    },
    {
        id: 8,
        name: 'Tic Tac Toe',
        image: 'https://user-images.githubusercontent.com/100835323/206961327-6745fe54-3d91-4fea-b474-2257f85e3db7.png',
        liveUrl: 'https://abhishksen.github.io/tic-tac-toe/',
        gitUrl: 'https://github.com/abhishksen/tic-tac-toe',
        cat: 'javascript',
    },
    {
        id: 9,
        name: 'IMDB Clone',
        image: 'https://user-images.githubusercontent.com/100835323/201461749-c43ae88a-7303-4240-b33d-aa7cdc92ec49.png',
        liveUrl: 'https://github.com/abhishksen/imdb_clone',
        gitUrl: 'https://github.com/abhishksen/imdb_clone',
        cat: 'react',
    },
    {
        id: 10,
        name: 'Movie Searching App',
        image: 'https://user-images.githubusercontent.com/100835323/192081449-5f2aef29-5e5e-430d-9a78-71c72ba2af72.png',
        liveUrl: 'https://github.com/abhishksen/MyMovies',
        gitUrl: 'https://github.com/abhishksen/MyMovies',
        cat: 'react',
    },
    {
        id: 11,
        name: 'Movie App Using Tmdb Api',
        image: 'https://user-images.githubusercontent.com/100835323/161538426-bf3a795e-3040-4dfd-80a0-cfe739ec0faf.png',
        liveUrl: 'https://abhishksen.github.io/movie_app/',
        gitUrl: 'https://github.com/abhishksen/movie_app',
        cat: 'api',
    },
    {
        id: 12,
        name: 'Landing Page',
        image: 'https://user-images.githubusercontent.com/100835323/166221916-08276b30-56ab-491f-9e88-baf3b89b50d8.png',
        liveUrl: 'https://abhishksen.github.io/Bootstrap_landing_page/',
        gitUrl: 'https://github.com/abhishksen/Bootstrap_landing_page',
        cat: 'bootstrap',
    },
    {
        id: 13,
        name: 'Travel Website',
        image: 'https://user-images.githubusercontent.com/100835323/163660256-36e54c25-d404-4788-b269-ef04a941ab38.png',
        liveUrl: 'https://abhishksen.github.io/travel_website/',
        gitUrl: 'https://github.com/abhishksen/travel_website',
        cat: 'frontend',
    },
    {
        id: 14,
        name: 'Portfolio Website Design',
        image: 'https://user-images.githubusercontent.com/100835323/161439840-d50b3279-29d4-43c5-a57e-1d18c5fd1308.jpg',
        liveUrl: 'https://abhishksen.github.io/portfolio_website/',
        gitUrl: 'https://github.com/abhishksen/portfolio_website',
        cat: 'frontend',
    },
    {
        id: 15,
        name: 'Education Website Design',
        image: 'https://user-images.githubusercontent.com/100835323/161534405-322559c4-bee1-4ad8-b4dd-afc7d8b88db3.jpg',
        liveUrl: 'https://abhishksen.github.io/education_website/',
        gitUrl: 'https://github.com/abhishksen/education_website',
        cat: 'html',
    },
    // {
    //     id: ,
    //     name: '',
    //     image: '',
    //     liveUrl: '',
    //     gitUrl: '',
    //     cat: '',
    // },
]

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".port-search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts.map(product =>
        `<div class="product">
        <img
          src=${product.image}
          alt="product image"
        />
        <span class="port-name"><a href= "${product.gitUrl}">${product.name}</a></span>
        <span class="liveUrlText"><a href= "${product.liveUrl}">Live preview</a></span>
      </div>`
    ).join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();

    if (value) {
        displayProducts(data.filter(item => item.name.toLowerCase().indexOf(value) !== -1))
    } else {
        displayProducts(data);
    }
});


const setCategories = () => {
    const allCats = data.map(item => item.cat);
    const categories = [
        "All",
        ...allCats.filter((item, i) => {
            return allCats.indexOf(item) === i;
        }),
    ];

    categoriesContainer.innerHTML = categories.map(cat =>
        `<span class="cat">${cat}</span>`
    ).join("");

    categoriesContainer.addEventListener("click", (e) => {
        const selectedCat = e.target.textContent;

        selectedCat === "All"
            ? displayProducts(data)
            : displayProducts(data.filter(item => item.cat === selectedCat));
    });

};

const setPrices = () => {
    const pricelist = data.map((item) => item.price);
    const minPrice = Math.min(...pricelist);
    const maxPrice = Math.max(...pricelist);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "$" + e.target.value
        displayProducts(data.filter(item => item.price <= e.target.value));
    });

};

setCategories();
setPrices();

