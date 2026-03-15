🎨 Structure de code

Ne jamais mélanger HTML et CSS.

Ne jamais ajouter de styles en ligne (style="...") dans les templates.

Ne jamais utiliser d’attributs JavaScript dans les templates (onclick, onchange, etc.).
👉 Utiliser les bindings Angular comme (click)="method()".

Le style doit être dans un fichier .scss ou .css dédié.

Pas de logique métier dans les templates HTML. La logique doit être dans les fichiers .ts.

🧹 Bonnes pratiques Angular

Utiliser des services injectables pour les appels API.
👉 Aucun HttpClient directement dans les composants.

Privilégier RxJS + async pipe pour les données asynchrones.
👉 Éviter .subscribe() dans les templates.

Découper les composants trop longs (> 300 lignes).

Favoriser les composants spécialisés et réutilisables.

📦 Organisation des fichiers

Chaque composant doit contenir exactement 4 fichiers :

component.ts
component.html
component.scss (ou .css)
component.spec.ts


Organiser les fichiers par modules / features (pas tout dans app.module.ts).

Chaque service se trouve dans le dossier de sa feature ou core/services selon l’architecture.

🏷️ Conventions de nommage
Élément	Convention	Exemple
Composants / Classes	PascalCase	UserProfileComponent
Variables / Méthodes	camelCase	getUserData()
Services	Suffixe Service	AuthService
Sélecteurs de composants	Préfixe app- + kebab-case	<app-user-card>
🧱 Règles pour le template HTML

Utiliser *ngIf, *ngFor, ngSwitch, (click), etc.

Ne pas mettre de conditions complexes dans les templates.
👉 Les calculs vont dans le .ts.

Toujours utiliser trackBy pour les listes.

📌 Exemple valide :

<li *ngFor="let user of users; trackBy: trackById">
  {{ user.name }}
</li>

🌐 Appels API

Tous les appels HTTP doivent être faits via des services.

Les services doivent retourner des Observable<T>, jamais de Promise.

Dans les templates, utiliser async pipe lorsque possible.

📌 Exemple valide (HTML) :

<div *ngIf="users$ | async as users">
  ...
</div>

🛡️ Sécurité & Formulaires

Ne jamais utiliser innerHTML sans sanitisation.

Utiliser Reactive Forms pour les formulaires complexes.

La validation doit être dans les fichiers .ts, pas dans le HTML.

🧪 Tests

Chaque composant doit avoir un test minimal couvrant :

création du composant

interaction basique

mock de service si nécessaire

Ne pas générer de tests vides ou inutiles.

🚫 Interdictions strictes

❌ Aucun emoji (🔥, 😀, etc.) dans les logs, messages ou commentaires.

❌ Aucun console.log() en production.

❌ Aucun style inline (style="...").

❌ Aucun accès direct au DOM (document.querySelector, getElementById).
👉 Utiliser Renderer2 ou des bindings Angular.

🎨 Style CSS/SCSS

Utiliser des classes explicites pour le style.

Privilégier Flexbox / CSS Grid.

Ne pas saturer les composants avec trop de styles.
👉 Déplacer les styles globaux dans un fichier dédié (styles.scss, variables, mixins, etc.)

📝 Bonus — Code Format & Lisibilité

Indentation : 2 espaces

Commentaires utiles et concis uniquement.

Privilégier un code lisible plutôt qu’optimisé trop tôt.

Un fichier .ts ne doit pas dépasser 500 lignes. Au-delà : refactorer.
