# Améliorations Proposées pour AngularCV

Ce document récapitule les axes d'amélioration identifiés pour optimiser le projet AngularCV.

## 1. Centralisation de l'Authentification (Intercepteurs)
Actuellement, chaque service (ex: `SkillApiService`) injecte manuellement le `TokenService` pour construire les headers d'autorisation.
- **Action** : Créer un `AuthInterceptor` pour injecter automatiquement le token JWT dans les requêtes vers l'API.
- **Bénéfice** : Code plus propre et respect du principe DRY.

## 2. Gestion d'État Moderne avec les Signals
L'usage partiel des signaux (`input`, `output`) peut être étendu à la logique métier.
- **Action** : Migrer la gestion des listes de données (compétences, expériences) vers des `Signals` au sein des services.
- **Bénéfice** : Meilleures performances de détection de changement et code plus réactif.

## 3. Gestion Robuste des Erreurs HTTP
L'application manque d'une capture d'erreur centralisée.
- **Action** : Ajouter un intercepteur global de gestion d'erreurs pour notifier l'utilisateur via des `SnackBar` (Angular Material) en cas d'échec (401, 404, 500).
- **Bénéfice** : Meilleure expérience utilisateur (UX).

## 4. Optimisation Graphique (Canvas)
Le "Jeu de la Vie" utilise un `setInterval`.
- **Action** : Remplacer `setInterval` par `requestAnimationFrame` dans le `RenderService`.
- **Bénéfice** : Animations plus fluides et économie de ressources CPU.

## 5. Renforcement de la Sécurité (Guards)
Le `AdminGuard` doit être plus strict.
- **Action** : Utiliser `jwt-decode` dans le Guard pour vérifier non seulement la présence mais aussi l'expiration du token.
- **Bénéfice** : Sécurité accrue de la partie administrative.

## 6. Internationalisation (i18n)
Le contenu est actuellement figé.
- **Action** : Mettre en place `@angular/localize` ou `ngx-translate`.
- **Bénéfice** : Rendre le CV accessible à un public international (Anglais/Français).

## 7. Accessibilité et Accessibilité (A11y)
- **Action** : Ajouter des attributs ARIA et vérifier la navigation au clavier, surtout pour les menus personnalisés.
- **Bénéfice** : Meilleur référencement et inclusion.
