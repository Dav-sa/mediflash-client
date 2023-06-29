# Mediflash test

TL:DR

Test technique réalisé par David Sabri dans le cadre du test technique pour Médiflash

1. La page d'accueil affiche les pokemons
2. Un utilisateur peut cliquer sur un pokemon pour avoir plus de détails
3. En bas de page, une pagination permet d'afficher les pokemons suivants

## La stack

- NextJS
- TypeScript
- TailwindCSS
- [Shadcn UI](https://ui.shadcn.com/) components
- React-query for data-fetching
- Cypress for the tests

## Details

### L'affichage des pokemons et la pagination

- On est dans le cadre d'un projet "master view" c'est à dire une vue principale et une vue détaillée.
- React-Query nous permet de faire la requête pour fetch les pokemons, le cache nous permet de ne pas refaire la requête à chaque fois.
- On passe le résultat a une fonction paginante, et on map sur ce résultat.

### Le front est déployé sur Vercel
