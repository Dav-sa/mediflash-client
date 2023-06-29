# Mediflash test

TL:DR

Test technique réalisé par David Sabri dans le cadre du test technique pour Médiflash

1. La page d'accueil affiche les pokemons
2. Un utilisateur peut cliquer sur un pokemon pour avoir plus de détails
3. En bas de page, une pagination permet d'afficher les pokemons suivants

![image](https://github.com/Dav-sa/mediflash-client/assets/68847199/2a5834a0-26e3-491c-b872-5ab1d4cc8982)


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
https://mediflash-client-khctadopg-davsab.vercel.app/

## Question : Si 5 développeurs rejoignent mon équipe et que mon application est en cours de production, quelles sont les améliorations à apporter à l'environnement de dev et pourquoi ? 

Je vois trois grandes familles d'amélioration : 
- une dimension opérationnelle : faire en sorte que l'environnement de développement local soit en place le plus vite possible. Concrètement cela implique d'avoir un processus standardisé pour installer toutes les dépendances nécessaires : Linux, node git,une database etc. Idéalement ce processus devrait pouvoir être automatisé au moyen de script.
- une dimension organisationnelle : la gestion des versions doit être claire, avec un envrionnement de développement, un environnement de préprod et un environnement de prod. Chaque push sur une de ces branches doit déclencher une CI/CD afin de permettre aux développeurs d'avoir un retour immédiat sur leurs travail et donc de pouvoir avancer plus rapidement. Un solide écosystème de tests automatisés permettra d'avoir de la sérénité lorsque les 5 développeurs introduiront de nouveaux changements.  
- une dimension partage de connaissance : si on veut onboarder facilement il faut que le savoir soit facilemment accessible et transférable. Une documentation claire et à jour est donc essentielle. Par ailleurs des revues de code doivent être organisées afin que tout le monde se familiarise le plus vite possible avec le code existant et les décisions d'architectures.

Si je devais prioriser je dirais : 
1) la partie organisationnelle 
2) la partie partage de connaissance
3° la partie opérationnelle 
