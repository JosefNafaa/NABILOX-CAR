// ===================================
// Google Places API Configuration
// ===================================

const GOOGLE_CONFIG = {
    // IMPORTANT: Remplacez ces valeurs par vos propres informations
    
    // Votre clé API Google Places
    // Pour obtenir une clé API:
    // 1. Allez sur https://console.cloud.google.com/
    // 2. Créez un nouveau projet ou sélectionnez un projet existant
    // 3. Activez "Places API" dans la bibliothèque d'API
    // 4. Créez des identifiants > Clé API
    // 5. Restreignez la clé (recommandé):
    //    - Restrictions d'application: Référents HTTP (sites web)
    //    - Ajoutez votre domaine (ex: yourdomain.com/*)
    //    - Restrictions d'API: Places API uniquement
    apiKey: 'VOTRE_CLE_API_ICI',
    
    // Votre Place ID Google
    // Place ID de Nabilox Car à Rabat
    placeId: 'ChIJ09bQBgZ2pw0RjTbM8i_fU4g',
    
    // Configuration des reviews
    settings: {
        // Nombre maximum de reviews à afficher
        maxReviews: 5,
        
        // Langue par défaut pour les reviews
        defaultLanguage: 'fr',
        
        // Durée du cache en millisecondes (24 heures)
        cacheDuration: 24 * 60 * 60 * 1000,
        
        // Activer le mode debug (affiche les logs dans la console)
        debug: true,
        
        // Données de fallback si l'API échoue
        fallback: {
            rating: 4.8,
            totalReviews: 17,
            reviews: [
                {
                    author_name: "Client Satisfait",
                    rating: 5,
                    text: "Très bon service, je recommande vivement… la meilleure agence de location au Maroc.",
                    time: Date.now() - (30 * 24 * 60 * 60 * 1000) // Il y a 30 jours
                },
                {
                    author_name: "Client Heureux",
                    rating: 5,
                    text: "Très bonne expérience, très bonne équipe.",
                    time: Date.now() - (45 * 24 * 60 * 60 * 1000) // Il y a 45 jours
                },
                {
                    author_name: "Client Recommandant",
                    rating: 5,
                    text: "Service excellent, très professionnel et respectueux.",
                    time: Date.now() - (60 * 24 * 60 * 60 * 1000) // Il y a 60 jours
                }
            ]
        }
    }
};

// Vérification de la configuration
function validateConfig() {
    const warnings = [];
    
    if (GOOGLE_CONFIG.apiKey === 'VOTRE_CLE_API_ICI') {
        warnings.push('⚠️ Clé API Google non configurée. Utilisation des données de fallback.');
    }
    
    if (GOOGLE_CONFIG.placeId === 'VOTRE_PLACE_ID_ICI') {
        warnings.push('⚠️ Place ID Google non configuré. Utilisation des données de fallback.');
    }
    
    if (warnings.length > 0 && GOOGLE_CONFIG.settings.debug) {
        console.warn('Configuration Google Places:');
        warnings.forEach(warning => console.warn(warning));
        console.info('📖 Consultez le fichier config.js pour les instructions de configuration.');
    }
    
    return warnings.length === 0;
}

// Export de la configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GOOGLE_CONFIG, validateConfig };
}
