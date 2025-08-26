document.addEventListener('DOMContentLoaded', () => {

    const products = [
        {
            name: 'Camiseta Home Kit 23/24',
            price: 85,
            stars: 5,
            reviews: 620,
            seller: 'Tienda MUFC',
            category: 'Kits',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic3.tcdn.com.br%2Fimg%2Fimg_prod%2F311840%2Fcamisa_adidas_manchester_united_home_2023_102705_1_d37443b9928dbc7ce44e1d314b142307.jpg&f=1&nofb=1&ipt=4815c379fd5640e96356a13eb2d0b5af517190a9310760c39a802c6a1fbf82b8'
        },
        {
            name: 'Camiseta Away Kit 24/25',
            price: 85,
            stars: 4,
            reviews: 350,
            seller: 'Tienda MUFC',
            category: 'Kits',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.91futbol.com%2Fimages%2F2021%2F20Retro-125.jpg&f=1&nofb=1&ipt=4c59489bd84d551c5a3a9f06f9dac8a00bf9ab36e371472f6a04248402d84488'
        },
        {
            name: 'Chaqueta Entrenamiento Oficial',
            price: 70,
            stars: 4,
            reviews: 200,
            seller: 'Tienda MUFC',
            category: 'Entrenamiento',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_1880%2Cf_auto%2Cq_auto%2F324670fe3f7d4ace85d3503daa9d5133_9366%2FIT2010_41_detail.jpg&f=1&nofb=1&ipt=32189948432d5c647e1b937b36d3bb7ebd4148b7116177beb557b405977fc37f'
        },
        {
            name: 'Pantalón Corto Entrenamiento',
            price: 45,
            stars: 3,
            reviews: 120,
            seller: 'Tienda MUFC',
            category: 'Entrenamiento',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Ffutbol-factory%2Fimage%2Fupload%2Fc_pad%2Cf_auto%2Ch_2000%2Cw_1600%2Fv1%2Fproducts%2F237461_3.jpg&f=1&nofb=1&ipt=237b005e096a3a1b7fbc7cfa6fccc61682a20d08e04a6993fe97512d2a078c55'
        },
        {
            name: 'Bufanda Oficial MUFC',
            price: 20,
            stars: 5,
            reviews: 500,
            seller: 'Tienda MUFC',
            category: 'Accesorios',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.futbollife.es%2Fwp-content%2Fuploads%2F2019%2F10%2Fbufanda-Manchester-U..jpg&f=1&nofb=1&ipt=05c517db3af7ae280cb7a1455f1544c38bb5b5460cf16f59e7174a0c4f4ed5ff'
        },
        {
            name: 'Gorra Clásica MUFC',
            price: 28,
            stars: 4,
            reviews: 480,
            seller: 'Tienda MUFC',
            category: 'Accesorios',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fresources.claroshop.com%2Fmedios-plazavip%2Fmkt%2F63a2364e94688_clipdrop-2022-12-20-at-130351png.jpg&f=1&nofb=1&ipt=31d363b5ee50caf71dd68247adfeca5bed9bb8781b71525a3974dde34bad8ffb'
        },
        {
            name: 'Taza Old Trafford',
            price: 18,
            stars: 4,
            reviews: 300,
            seller: 'Tienda MUFC',
            category: 'Accesorios',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com.mx%2Fmg%2Fgm%2F3pp%2Fasr%2F1ec06bb2-11ab-4bca-bbdd-1154f230f15b.1b61a7e7445a6ff67e3cf96b297567bd.jpeg%3FodnHeight%3D2000%26odnWidth%3D2000%26odnBg%3Dffffff&f=1&nofb=1&ipt=dafda9fa9dff48296c26ea34d47a5ff964893dbce201d9ec5d2637426963cfa6'
        },
        {
            name: 'Llavero Escudo MUFC',
            price: 12,
            stars: 4,
            reviews: 220,
            seller: 'Tienda MUFC',
            category: 'Accesorios',
            image: 'https://assets.manutd.com/manutd-prod/assets/images/home/shop/accessories/MU-ACCESSORIES-KEYRING-MAIN.webp'
        },
        {
            name: 'Balón Oficial de Fútbol',
            price: 35,
            stars: 5,
            reviews: 400,
            seller: 'Tienda MUFC',
            category: 'Accesorios',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontents.mediadecathlon.com%2Fp2750910%2Fk%24b048ae577967c3654c0c9b413438de23%2Fsq%2Fbalon-de-futbol-manchester-united-adidas-talla-5-2425.jpg%3Fformat%3Dauto%26f%3D800x0&f=1&nofb=1&ipt=9b322540896d97bcf2cc08a0540ab2351b12544d4a318abcdde699ed784264b9'
        },
        {
            name: 'Póster Casemiro "El Muro"',
            price: 22,
            stars: 5,
            reviews: 750,
            seller: 'Tienda MUFC',
            category: 'Accesorios',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fe0.365dm.com%2F23%2F03%2F2048x1152%2Fskysports-casemiro-manchester-untied_6075625.jpg%3F20230302172651&f=1&nofb=1&ipt=41f4804fae0fb48f38d61bb8906c8344962a5ba175fc4b92eb9359dfb0bc82a7'
        }
    ];

    function renderProducts(productsToRender, containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        container.innerHTML = '';
        productsToRender.forEach(product => {
            const productCard = document.createElement('article');
            productCard.className = 'product-card';

            const starsHtml = '⭐'.repeat(product.stars);

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-card-content">
                    <h3>${product.name}</h3>
                    <div class="product-meta">
                        <span class="stars">${starsHtml}</span>
                        <span>(${product.reviews} reseñas)</span>
                    </div>
                    <span class="product-price">${product.price.toFixed(2)}€</span>
                    <button class="add-to-cart-btn">Añadir al carrito</button>
                </div>
            `;
            container.appendChild(productCard);
        });
    }

    const categories = ['Kits', 'Entrenamiento', 'Accesorios'];
    categories.forEach(category => {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered, `.product-carousel[data-category="${category}"]`);
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    document.addEventListener('click', (event) => {
        if (window.innerWidth <= 768) {
            const isClickInsideNav = mainNav.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            if (mainNav.classList.contains('active') && !isClickInsideNav && !isClickOnToggle) {
                mainNav.classList.remove('active');
            }
        }
    });

    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
            }
        });
    });

});