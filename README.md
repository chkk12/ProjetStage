# Pays – Projet Stage

Application React + TypeScript qui interroge l'API GraphQL [Countries](https://countries.trevorblades.com/) et affiche la liste des pays avec filtrage par nom et par continent.

## Fonctionnalités

- Recherche de pays par nom
- Filtrage par continent (avec libellés en français)
- Affichage d'une fiche détaillée par pays (drapeau emoji, capitale, devise)

## Prérequis

- [Node.js](https://nodejs.org/) ≥ 18
- npm ≥ 9

## Installation et lancement

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```

## Structure du projet

```
ProjetStage/
├── docs/
│   └── video-file-guide.md   # Guide de gestion des fichiers vidéo
├── src/
│   ├── App.tsx               # Composant principal
│   └── main.tsx              # Point d'entrée React
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Documentation

| Guide | Description |
|---|---|
| [Gestion des fichiers vidéo](docs/video-file-guide.md) | Alternatives au téléversement, Git LFS, compression, transcription, droits d'auteur |

## Ressources

- [API Countries (GraphQL)](https://countries.trevorblades.com/)
- [Documentation Apollo Client](https://www.apollographql.com/docs/react/)
- [Documentation Vite](https://vitejs.dev/)
