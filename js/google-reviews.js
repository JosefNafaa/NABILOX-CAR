// ===================================
// Google Reviews Dynamic Loader
// ===================================

class GoogleReviewsManager {
    constructor(config) {
        this.config = config;
        this.cache = {
            data: null,
            timestamp: null
        };
        this.isConfigValid = false;
    }

    // Initialiser le gestionnaire de reviews
    async init() {
        this.log('Initialisation du gestionnaire de reviews Google...');
        
        // Vérifier la configuration
        this.isConfigValid = validateConfig();
        
        // Charger les reviews depuis le cache ou l'API
        await this.loadReviews();
        
        // Mettre à jour l'interface
        this.updateUI();
        
        this.log('✅ Gestionnaire de reviews initialisé avec succès');
    }

    // Charger les reviews (cache ou API)
    async loadReviews() {
        // Vérifier le cache
        const cachedData = this.getCachedData();
        if (cachedData) {
            this.log('📦 Utilisation des données en cache');
            this.cache.data = cachedData;
            return;
        }

        // Si la configuration n'est pas valide, utiliser le fallback
        if (!this.isConfigValid) {
            this.log('⚠️ Configuration invalide, utilisation des données de fallback');
            this.cache.data = this.config.settings.fallback;
            return;
        }

        // Charger depuis l'API Google Places
        try {
            this.log('🌐 Chargement des reviews depuis Google Places API...');
            const data = await this.fetchFromGoogleAPI();
            this.cache.data = data;
            this.setCachedData(data);
            this.log('✅ Reviews chargées depuis l\'API');
        } catch (error) {
            this.log('❌ Erreur lors du chargement depuis l\'API:', error);
            this.log('⚠️ Utilisation des données de fallback');
            this.cache.data = this.config.settings.fallback;
        }
    }

    // Récupérer les données depuis l'API Google Places
    async fetchFromGoogleAPI() {
        return new Promise((resolve, reject) => {
            // Vérifier si l'API Google Maps est chargée
            if (typeof google === 'undefined' || !google.maps || !google.maps.places) {
                reject(new Error('Google Maps API non chargée'));
                return;
            }

            // Créer un élément temporaire pour le service
            const service = new google.maps.places.PlacesService(
                document.createElement('div')
            );

            // Requête pour obtenir les détails du lieu
            const request = {
                placeId: this.config.placeId,
                fields: ['name', 'rating', 'user_ratings_total', 'reviews']
            };

            service.getDetails(request, (place, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    const data = {
                        rating: place.rating || this.config.settings.fallback.rating,
                        totalReviews: place.user_ratings_total || this.config.settings.fallback.totalReviews,
                        reviews: place.reviews || this.config.settings.fallback.reviews
                    };
                    resolve(data);
                } else {
                    reject(new Error(`Places API status: ${status}`));
                }
            });
        });
    }

    // Obtenir les données du cache localStorage
    getCachedData() {
        try {
            const cached = localStorage.getItem('googleReviewsCache');
            if (!cached) return null;

            const { data, timestamp } = JSON.parse(cached);
            const now = Date.now();
            const age = now - timestamp;

            // Vérifier si le cache est encore valide
            if (age < this.config.settings.cacheDuration) {
                this.log(`📦 Cache valide (âge: ${Math.round(age / 1000 / 60)} minutes)`);
                return data;
            } else {
                this.log('🗑️ Cache expiré, suppression...');
                localStorage.removeItem('googleReviewsCache');
                return null;
            }
        } catch (error) {
            this.log('❌ Erreur lors de la lecture du cache:', error);
            return null;
        }
    }

    // Sauvegarder les données dans le cache
    setCachedData(data) {
        try {
            const cacheObject = {
                data: data,
                timestamp: Date.now()
            };
            localStorage.setItem('googleReviewsCache', JSON.stringify(cacheObject));
            this.log('💾 Données sauvegardées dans le cache');
        } catch (error) {
            this.log('❌ Erreur lors de la sauvegarde du cache:', error);
        }
    }

    // Mettre à jour l'interface utilisateur
    updateUI() {
        if (!this.cache.data) {
            this.log('❌ Aucune donnée à afficher');
            return;
        }

        const { rating, totalReviews, reviews } = this.cache.data;

        // Mettre à jour le rating et le nombre de reviews
        this.updateRatingDisplay(rating, totalReviews);

        // Mettre à jour les cartes de reviews
        this.updateReviewCards(reviews);

        // Mettre à jour les statistiques
        this.updateStats(rating, totalReviews);

        this.log('🎨 Interface mise à jour avec succès');
    }

    // Mettre à jour l'affichage du rating
    updateRatingDisplay(rating, totalReviews) {
        // Rating dans le hero badge
        const heroBadge = document.querySelector('.rating-badge span');
        if (heroBadge) {
            heroBadge.textContent = rating.toFixed(1) + '/5';
        }

        const heroBadgeSmall = document.querySelector('.rating-badge small');
        if (heroBadgeSmall) {
            const currentLang = document.documentElement.getAttribute('lang') || 'en';
            const text = currentLang === 'fr' ? `(Basé sur ${totalReviews} avis Google)` :
                        currentLang === 'ar' ? `(بناءً على ${totalReviews} تقييم على جوجل)` :
                        `(Based on ${totalReviews} Google Reviews)`;
            heroBadgeSmall.textContent = text;
        }

        // Rating dans la section reviews
        const ratingNumber = document.querySelector('.google-rating .rating-number');
        if (ratingNumber) {
            ratingNumber.textContent = rating.toFixed(1);
        }

        const ratingText = document.querySelector('.google-rating p');
        if (ratingText) {
            const currentLang = document.documentElement.getAttribute('lang') || 'en';
            const text = currentLang === 'fr' ? `(Basé sur ${totalReviews} avis Google)` :
                        currentLang === 'ar' ? `(بناءً على ${totalReviews} تقييم على جوجل)` :
                        `(Based on ${totalReviews} Google Reviews)`;
            ratingText.textContent = text;
        }

        // Mettre à jour les étoiles
        this.updateStars('.google-rating .stars', rating);
    }

    // Mettre à jour les cartes de reviews
    updateReviewCards(reviews) {
        const reviewsContainer = document.querySelector('.reviews-section .row');
        if (!reviewsContainer) return;

        // Limiter le nombre de reviews affichées
        const displayReviews = reviews.slice(0, this.config.settings.maxReviews);

        // Trouver les cartes de reviews existantes
        const reviewCards = reviewsContainer.querySelectorAll('.col-md-4');
        
        displayReviews.forEach((review, index) => {
            if (index < reviewCards.length) {
                const card = reviewCards[index];
                
                // Mettre à jour les étoiles
                const starsContainer = card.querySelector('.stars');
                if (starsContainer) {
                    this.updateStars(starsContainer, review.rating);
                }

                // Mettre à jour le texte de la review
                const reviewText = card.querySelector('.review-text');
                if (reviewText) {
                    reviewText.textContent = review.text || review.review || '';
                }

                // Mettre à jour le nom du reviewer
                const reviewerName = card.querySelector('.reviewer span');
                if (reviewerName) {
                    reviewerName.textContent = review.author_name || 'Client';
                }
            }
        });
    }

    // Mettre à jour les statistiques
    updateStats(rating, totalReviews) {
        // Mettre à jour le rating dans les stats
        const statRating = document.querySelector('.about-stats .stat-box h3');
        if (statRating && statRating.textContent.includes('.')) {
            statRating.textContent = rating.toFixed(1);
        }

        // Mettre à jour le nombre de reviews dans les stats
        const statReviews = Array.from(document.querySelectorAll('.about-stats .stat-box h3'))
            .find(el => el.textContent.includes('+'));
        if (statReviews) {
            statReviews.textContent = totalReviews + '+';
        }

        // Mettre à jour dans la section contact
        const contactRating = document.querySelector('.contact-info-box .info-item p');
        if (contactRating && contactRating.textContent.includes('/5')) {
            const currentLang = document.documentElement.getAttribute('lang') || 'en';
            const text = currentLang === 'fr' ? `${rating.toFixed(1)}/5 (Basé sur ${totalReviews} avis Google)` :
                        currentLang === 'ar' ? `${rating.toFixed(1)}/5 (بناءً على ${totalReviews} تقييم على جوجل)` :
                        `${rating.toFixed(1)}/5 (Based on ${totalReviews} Google Reviews)`;
            contactRating.innerHTML = text;
        }
    }

    // Mettre à jour l'affichage des étoiles
    updateStars(container, rating) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }
        
        if (!container) return;

        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        let starsHTML = '';
        
        // Étoiles pleines
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }
        
        // Demi-étoile
        if (hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        
        // Étoiles vides
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star"></i>';
        }

        container.innerHTML = starsHTML;
    }

    // Forcer le rechargement des reviews
    async forceRefresh() {
        this.log('🔄 Rechargement forcé des reviews...');
        localStorage.removeItem('googleReviewsCache');
        await this.loadReviews();
        this.updateUI();
    }

    // Logger avec option debug
    log(...args) {
        if (this.config.settings.debug) {
            console.log('[GoogleReviews]', ...args);
        }
    }
}

// ===================================
// Initialisation automatique
// ===================================
let reviewsManager = null;

// Fonction d'initialisation appelée après le chargement de Google Maps API
function initGoogleReviews() {
    if (typeof GOOGLE_CONFIG === 'undefined') {
        console.error('❌ Configuration Google non trouvée. Assurez-vous que config.js est chargé.');
        return;
    }

    reviewsManager = new GoogleReviewsManager(GOOGLE_CONFIG);
    reviewsManager.init();
}

// Initialiser quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Attendre que Google Maps API soit chargée
        setTimeout(initGoogleReviews, 1000);
    });
} else {
    setTimeout(initGoogleReviews, 1000);
}

// Exposer la fonction de rafraîchissement globalement
window.refreshGoogleReviews = function() {
    if (reviewsManager) {
        reviewsManager.forceRefresh();
    } else {
        console.warn('⚠️ Le gestionnaire de reviews n\'est pas encore initialisé');
    }
};

// Export pour utilisation en module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GoogleReviewsManager, initGoogleReviews };
}
