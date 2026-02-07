// ===================================
// Car Data from Catalog
// ===================================
const carsData = [
    // Mercedes
    {
        id: 1,
        brand: "Mercedes",
        model: "C220d",
        year: 2025,
        fuel: "Diesel",
        transmission: "Auto",
        price: 2500,
        image: "https://www.mercedes-benz.co.za/content/dam/hq/passengercars/cars/c-class/c-class-saloon-w206-pi/overview/spa/02-2025/images/mercedes-benz-c-class-w206-spa-front-2400x2400-02-2025.jpg"
    },
    {
        id: 2,
        brand: "Mercedes",
        model: "A200d",
        year: 2026,
        fuel: "Diesel",
        transmission: "Auto",
        price: 2000,
        image: "https://www.mercedes-benz.co.za/content/dam/hq/passengercars/cars/a-class/hatchback-w177-fl-pi/overview/spa/05-2025/images/mercedes-benz-a-class-w177-spa-a-class-2400x2400-05-2025.jpg"
    },


    // Volkswagen Touareg
    {
        id: 3,
        brand: "Volkswagen",
        model: "Touareg",
        year: 2025,
        fuel: "Diesel",
        transmission: "Auto",
        price: 1200,
        image: "https://assets.volkswagen.com/is/image/volkswagenag/MG_16-9-B?Zml0PWNyb3AsMSZmbXQ9cG5nJndpZD04MDAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmYzRiMA=%3D"
    },
    {
        id: 4,
        brand: "Volkswagen",
        model: "Touareg",
        year: 2023,
        fuel: "Diesel",
        transmission: "Auto",
        price: 1200,
        image: "https://assets.volkswagen.com/is/image/volkswagenag/MG_16-9-B?Zml0PWNyb3AsMSZmbXQ9cG5nJndpZD04MDAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmYzRiMA=%3D"
    },

    // Volkswagen T-Roc
    {
        id: 5,
        brand: "Volkswagen",
        model: "T-Roc",
        year: 2023,
        fuel: "Diesel",
        transmission: "Auto",
        price: 600,
        image: "https://cdn.netcarshow.com/Volkswagen-T-Roc-2026-1600-01.jpg"
    },
    {
        id: 6,
        brand: "Volkswagen",
        model: "T-Roc",
        year: 2024,
        fuel: "Diesel",
        transmission: "Auto",
        price: 600,
        image: "https://cdn.netcarshow.com/Volkswagen-T-Roc-2026-1600-01.jpg"
    },
    {
        id: 7,
        brand: "Volkswagen",
        model: "T-Roc",
        year: 2025,
        fuel: "Diesel",
        transmission: "Auto",
        price: 600,
        image: "https://cdn.netcarshow.com/Volkswagen-T-Roc-2026-1600-01.jpg"
    },
    {
        id: 8,
        brand: "Volkswagen",
        model: "T-Roc",
        year: 2025,
        fuel: "Diesel",
        transmission: "Auto",
        price: 600,
        image: "https://cdn.netcarshow.com/Volkswagen-T-Roc-2026-1600-01.jpg"
    },
    {
        id: 9,
        brand: "Volkswagen",
        model: "T-Roc",
        year: 2025,
        fuel: "Diesel",
        transmission: "Auto",
        price: 600,
        image: "https://cdn.netcarshow.com/Volkswagen-T-Roc-2026-1600-01.jpg"
    },


    // Cupra
    {
        id: 10,
        brand: "Cupra",
        model: "Formentor",
        year: 2025,
        fuel: "Diesel",
        transmission: "Auto",
        price: 800,
        image: "https://cdn.netcarshow.com/Cupra-Formentor-2025-1600-01.jpg"
    },

    // Volkswagen Golf 8
    {
        id: 11,
        brand: "Volkswagen",
        model: "Golf 8",
        year: 2023,
        fuel: "Diesel",
        transmission: "Auto",
        price: 800,
        image: "https://cdn.netcarshow.com/Volkswagen-Golf-2024-1600-01.jpg"
    },
    {
        id: 12,
        brand: "Volkswagen",
        model: "Golf 8",
        year: 2026,
        fuel: "Diesel",
        transmission: "Auto",
        price: 800,
        image: "https://cdn.netcarshow.com/Volkswagen-Golf-2024-1600-01.jpg"
    },


    // Seat Ibiza
    {
        id: 13,
        brand: "Seat",
        model: "Ibiza",
        year: 2025,
        fuel: "Essence",
        transmission: "Auto",
        price: 400,
        image: "https://www.larevueautomobile.com/images/fiche-technique/2009/Seat/Ibiza/Seat_Ibiza_001.jpg"
    },


    // Opel Corsa
    {
        id: 14,
        brand: "Opel",
        model: "Corsa",
        year: 2025,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://cdn.netcarshow.com/Opel-Corsa-2024-1600-01.jpg"
    },
    {
        id: 15,
        brand: "Opel",
        model: "Corsa",
        year: 2025,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://cdn.netcarshow.com/Opel-Corsa-2024-1600-01.jpg"
    },


    // Hyundai Accent
    {
        id: 16,
        brand: "Hyundai",
        model: "Accent",
        year: 2022,
        fuel: "Diesel",
        transmission: "Auto",
        price: 400,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7C4xcFMDMp-8tqMxOgAl7xsjicjGne2fcQ&s"
    },
    {
        id: 17,
        brand: "Hyundai",
        model: "Accent",
        year: 2024,
        fuel: "Essence",
        transmission: "Auto",
        price: 400,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7C4xcFMDMp-8tqMxOgAl7xsjicjGne2fcQ&s"
    },
    {
        id: 18,
        brand: "Hyundai",
        model: "Accent",
        year: 2025,
        fuel: "Essence",
        transmission: "Auto",
        price: 400,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7C4xcFMDMp-8tqMxOgAl7xsjicjGne2fcQ&s"
    },
    {
        id: 19,
        brand: "Hyundai",
        model: "Accent",
        year: 2025,
        fuel: "Essence",
        transmission: "Auto",
        price: 400,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7C4xcFMDMp-8tqMxOgAl7xsjicjGne2fcQ&s"
    },
    {
        id: 20,
        brand: "Hyundai",
        model: "Accent",
        year: 2025,
        fuel: "Essence",
        transmission: "Auto",
        price: 400,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7C4xcFMDMp-8tqMxOgAl7xsjicjGne2fcQ&s"
    },

    // Hyundai Tucson
    {
        id: 21,
        brand: "Hyundai",
        model: "Tucson",
        year: 2023,
        fuel: "Diesel",
        transmission: "Auto",
        price: 500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTiqP91UG1RKvozS1cORfs8PVembx28Zu2fw&s"
    },
    {
        id: 22,
        brand: "Hyundai",
        model: "Tucson",
        year: 2026,
        fuel: "Diesel",
        transmission: "Auto",
        price: 500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTiqP91UG1RKvozS1cORfs8PVembx28Zu2fw&s"
    },

    // Renault Clio 5
    {
        id: 23,
        brand: "Renault",
        model: "Clio 5",
        year: 2023,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp"
    },
    {
        id: 24,
        brand: "Renault",
        model: "Clio 5",
        year: 2024,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp"
    },
    {
        id: 25,
        brand: "Renault",
        model: "Clio 5",
        year: 2024,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp"
    },
    {
        id: 26,
        brand: "Renault",
        model: "Clio 5",
        year: 2024,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp"
    },
    {
        id: 27,
        brand: "Renault",
        model: "Clio 5",
        year: 2025,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp"
    },
    {
        id: 28,
        brand: "Renault",
        model: "Clio 5",
        year: 2025,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp"
    },
    {
        id: 29,
        brand: "Renault",
        model: "Clio 5",
        year: 2025,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp"
    },
    {
        id: 30,
        brand: "Renault",
        model: "Clio 5",
        year: 2025,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp"
    },
    {
        id: 31,
        brand: "Renault",
        model: "Clio 5",
        year: 2025,
        fuel: "Essence",
        transmission: "Auto",
        price: 300,
        image: "https://media.renault.com/wp-content/uploads/2025/10/ddf2c7696f2f63b149fb96ba42561271-l.jpg.webp"
    },

    // Renault Clio 4
    {
        id: 32,
        brand: "Renault",
        model: "Clio 4",
        year: 2020,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJNJ74E2krHGMpCkqFImfBOVBMBRevRdiag&s"
    },

    // Peugeot 208
    {
        id: 33,
        brand: "Peugeot",
        model: "208",
        year: 2024,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s"
    },
    {
        id: 34,
        brand: "Peugeot",
        model: "208",
        year: 2024,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s"
    },
    {
        id: 35,
        brand: "Peugeot",
        model: "208",
        year: 2025,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s"
    },
    {
        id: 36,
        brand: "Peugeot",
        model: "208",
        year: 2025,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s"
    },
    {
        id: 37,
        brand: "Peugeot",
        model: "208",
        year: 2025,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s"
    },
    {
        id: 38,
        brand: "Peugeot",
        model: "208",
        year: 2025,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s"
    },
    {
        id: 39,
        brand: "Peugeot",
        model: "208",
        year: 2025,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s"
    },
    {
        id: 40,
        brand: "Peugeot",
        model: "208",
        year: 2025,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s"
    },
    {
        id: 41,
        brand: "Peugeot",
        model: "208",
        year: 2025,
        fuel: "Essence Hybrid",
        transmission: "Auto",
        price: 300,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s"
    },
    {
        id: 42,
        brand: "Peugeot",
        model: "208",
        year: 2025,
        fuel: "Essence Hybrid",
        transmission: "Auto",
        price: 300,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC4TDk62nSaHBRT0cAxqcVfZLCq0FsTy78g&s"
    },

    // Dacia Logan
    {
        id: 43,
        brand: "Dacia",
        model: "Logan",
        year: 2022,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://motorsactu.com/wp-content/uploads/2024/06/Dacia-Logan-2024.jpg"
    },
    {
        id: 44,
        brand: "Dacia",
        model: "Logan",
        year: 2025,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://motorsactu.com/wp-content/uploads/2024/06/Dacia-Logan-2024.jpg"
    },
    {
        id: 45,
        brand: "Dacia",
        model: "Logan",
        year: 2025,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://motorsactu.com/wp-content/uploads/2024/06/Dacia-Logan-2024.jpg"
    },
    {
        id: 46,
        brand: "Dacia",
        model: "Logan",
        year: 2025,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://motorsactu.com/wp-content/uploads/2024/06/Dacia-Logan-2024.jpg"
    },
    {
        id: 47,
        brand: "Dacia",
        model: "Logan",
        year: 2025,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 300,
        image: "https://motorsactu.com/wp-content/uploads/2024/06/Dacia-Logan-2024.jpg"
    },

    // Dacia Duster
    {
        id: 48,
        brand: "Dacia",
        model: "Duster",
        year: 2025,
        fuel: "Diesel",
        transmission: "Manuel",
        price: 400,
        image: "https://cdn2.gcdata.gr/c3/p_1920_1811024.webp"
    }
];

// ===================================
// Translations for Cars Page
// ===================================
const carsTranslations = {
    en: {
        navCars: "Our Cars",
        carsPageTitle: "Our Cars",
        carsPageSubtitle: "Browse our complete collection of rental vehicles",
        searchLabel: "Search",
        searchPlaceholder: "Search by brand or model...",
        brandLabel: "Brand",
        allBrands: "All Brands",
        fuelLabel: "Fuel Type",
        allFuels: "All Types",
        diesel: "Diesel",
        essence: "Essence",
        hybrid: "Hybrid",
        transmissionLabel: "Transmission",
        allTransmissions: "All Types",
        automatic: "Automatic",
        manual: "Manual",
        resetFilters: "Reset Filters",
        showing: "Showing",
        vehicles: "vehicles",
        noResultsTitle: "No vehicles found",
        noResultsText: "Try adjusting your filters or search terms",
        year: "Year",
        fuelType: "Fuel",
        transmissionType: "Transmission",
        bookNow: "Book Now",
        ctaTitle: "Ready to Rent a Car?",
        ctaText: "Contact us now to book your preferred vehicle. We're available 24/7 to assist you.",
        btnWhatsApp: "WhatsApp"
    },
    fr: {
        navCars: "Nos Voitures",
        carsPageTitle: "Nos Voitures",
        carsPageSubtitle: "Parcourez notre collection complète de véhicules de location",
        searchLabel: "Rechercher",
        searchPlaceholder: "Rechercher par marque ou modèle...",
        brandLabel: "Marque",
        allBrands: "Toutes les Marques",
        fuelLabel: "Type de Carburant",
        allFuels: "Tous les Types",
        diesel: "Diesel",
        essence: "Essence",
        hybrid: "Hybride",
        transmissionLabel: "Transmission",
        allTransmissions: "Tous les Types",
        automatic: "Automatique",
        manual: "Manuelle",
        resetFilters: "Réinitialiser les Filtres",
        showing: "Affichage de",
        vehicles: "véhicules",
        noResultsTitle: "Aucun véhicule trouvé",
        noResultsText: "Essayez d'ajuster vos filtres ou termes de recherche",
        year: "Année",
        fuelType: "Carburant",
        transmissionType: "Transmission",
        bookNow: "Réserver",
        ctaTitle: "Prêt à Louer une Voiture?",
        ctaText: "Contactez-nous maintenant pour réserver votre véhicule préféré. Nous sommes disponibles 24h/24 pour vous aider.",
        btnWhatsApp: "WhatsApp"
    },
    ar: {
        navCars: "سياراتنا",
        carsPageTitle: "سياراتنا",
        carsPageSubtitle: "تصفح مجموعتنا الكاملة من مركبات التأجير",
        searchLabel: "بحث",
        searchPlaceholder: "البحث حسب العلامة التجارية أو الطراز...",
        brandLabel: "العلامة التجارية",
        allBrands: "جميع العلامات التجارية",
        fuelLabel: "نوع الوقود",
        allFuels: "جميع الأنواع",
        diesel: "ديزل",
        essence: "بنزين",
        hybrid: "هجين",
        transmissionLabel: "ناقل الحركة",
        allTransmissions: "جميع الأنواع",
        automatic: "أوتوماتيك",
        manual: "يدوي",
        resetFilters: "إعادة تعيين الفلاتر",
        showing: "عرض",
        vehicles: "مركبات",
        noResultsTitle: "لم يتم العثور على مركبات",
        noResultsText: "حاول تعديل الفلاتر أو مصطلحات البحث",
        year: "السنة",
        fuelType: "الوقود",
        transmissionType: "ناقل الحركة",
        bookNow: "احجز الآن",
        ctaTitle: "هل أنت مستعد لاستئجار سيارة؟",
        ctaText: "اتصل بنا الآن لحجز سيارتك المفضلة. نحن متاحون على مدار الساعة لمساعدتك.",
        btnWhatsApp: "واتساب"
    }
};

// Merge cars translations with main translations
if (typeof translations !== 'undefined') {
    Object.keys(carsTranslations).forEach(lang => {
        if (translations[lang]) {
            Object.assign(translations[lang], carsTranslations[lang]);
        }
    });
}

// ===================================
// Filter and Display Functions
// ===================================
let filteredCars = [...carsData];

function renderCars(cars) {
    const carsGrid = document.getElementById('carsGrid');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');

    if (cars.length === 0) {
        carsGrid.innerHTML = '';
        noResults.style.display = 'block';
        resultsCount.textContent = '0';
        return;
    }

    noResults.style.display = 'none';
    resultsCount.textContent = cars.length;

    carsGrid.innerHTML = cars.map(car => `
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="car-card">
                <div class="car-image">
                    <img src="${car.image}" alt="${car.brand} ${car.model}" loading="lazy">
                    <div class="car-badge">${car.year}</div>
                </div>
                <div class="car-details">
                    <h5 class="car-title">${car.brand} ${car.model}</h5>
                    <div class="car-specs">
                        ${car.price ? `<div class="spec-item">
                            <i class="fas fa-money-bill-wave" style="color: #dc3545;"></i>
                            <span><strong>${car.price} DH</strong><span data-translate="perDay">/jour</span></span>
                        </div>` : ''}
                        <div class="spec-item">
                            <i class="fas fa-calendar"></i>
                            <span><span data-translate="year">Year</span>: ${car.year}</span>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-gas-pump"></i>
                            <span><span data-translate="fuelType">Fuel</span>: ${car.fuel}</span>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-cog"></i>
                            <span><span data-translate="transmissionType">Transmission</span>: ${car.transmission}</span>
                        </div>
                    </div>
                    <div class="car-actions">
                        <a href="tel:+212661841971" class="btn btn-primary btn-sm w-100 mb-2">
                            <i class="fas fa-phone"></i> <span data-translate="bookNow">Book Now</span>
                        </a>
                        <a href="https://wa.me/212661841971?text=I'm interested in ${car.brand} ${car.model} ${car.year}" 
                           class="btn btn-success btn-sm w-100" target="_blank">
                            <i class="fab fa-whatsapp"></i> <span data-translate="btnWhatsApp">WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('')

    // Re-apply translations to newly rendered content
    if (typeof setLanguage === 'function' && typeof currentLang !== 'undefined') {
        setLanguage(currentLang);
    }
}

function filterCars() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const brandFilter = document.getElementById('brandFilter').value;
    const fuelFilter = document.getElementById('fuelFilter').value;
    const transmissionFilter = document.getElementById('transmissionFilter').value;

    filteredCars = carsData.filter(car => {
        const matchesSearch = car.brand.toLowerCase().includes(searchTerm) ||
            car.model.toLowerCase().includes(searchTerm);
        const matchesBrand = brandFilter === 'all' || car.brand === brandFilter;
        const matchesFuel = fuelFilter === 'all' || car.fuel.includes(fuelFilter);
        const matchesTransmission = transmissionFilter === 'all' || car.transmission === transmissionFilter;

        return matchesSearch && matchesBrand && matchesFuel && matchesTransmission;
    });

    renderCars(filteredCars);
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('brandFilter').value = 'all';
    document.getElementById('fuelFilter').value = 'all';
    document.getElementById('transmissionFilter').value = 'all';
    filterCars();
}

// ===================================
// Initialize Cars Page
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    // Initial render
    renderCars(carsData);

    // Event listeners for filters
    document.getElementById('searchInput').addEventListener('input', filterCars);
    document.getElementById('brandFilter').addEventListener('change', filterCars);
    document.getElementById('fuelFilter').addEventListener('change', filterCars);
    document.getElementById('transmissionFilter').addEventListener('change', filterCars);
    document.getElementById('resetFilters').addEventListener('click', resetFilters);

    // Smooth scroll for breadcrumb
    document.querySelectorAll('.breadcrumb a').forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
