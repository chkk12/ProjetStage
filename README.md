# ProjetStage — Countries React App

Application React/TypeScript permettant d'explorer des données sur les pays via une API GraphQL.

## Prérequis

- [Node.js](https://nodejs.org/) ≥ 18
- npm ≥ 9

## Installation

```bash
npm install
```

## Démarrage

```bash
npm run dev
```

L'application est accessible sur [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

## Stack technique

| Technologie | Version |
|---|---|
| React | 18 |
| TypeScript | 5 |
| Apollo Client | 3 |
| Vite | 4 |

---

## 📄 Partage de rapports PDF (Rapports de stage)

> **Question fréquente :** *"Puis-je joindre un fichier PDF ici ?"*

GitHub ne permet pas de joindre des fichiers PDF directement dans les issues, les pull requests ou les commentaires. Voici les méthodes recommandées pour partager vos rapports de stage au format PDF.

### Méthode 1 — Commit dans le dépôt (`docs/reports/`)

Pour les rapports hebdomadaires et les comptes-rendus de stage, committez vos fichiers PDF dans le dossier `docs/reports/` du dépôt :

```
docs/
└── reports/
    ├── rapport_semaine_01_2026-01-13_Prenom-Nom.pdf
    ├── rapport_semaine_02_2026-01-20_Prenom-Nom.pdf
    └── ...
```

**Convention de nommage :**
`rapport_semaine_<NN>_<YYYY-MM-DD>_<Prenom-Nom>.pdf`

⚠️ **Limite :** GitHub accepte les fichiers jusqu'à **100 Mo** par fichier. Pour les dépôts, il est conseillé de ne pas dépasser **50 Mo** par PDF.

### Méthode 2 — GitHub Releases

Pour les livrables importants (rapport final, rapport de mi-parcours), attachez le PDF à une **GitHub Release** :

1. Accédez à l'onglet **Releases** du dépôt.
2. Créez une nouvelle release (ex. `v1.0-rapport-final`).
3. Glissez-déposez votre PDF dans la section *Assets*.

GitHub Releases supporte des fichiers jusqu'à **2 Go**.

### Méthode 3 — Lien vers un stockage cloud

Si le fichier dépasse les limites ou contient des données sensibles, partagez un lien dans une issue ou une PR :

- [Google Drive](https://drive.google.com) (partagez avec les droits « Lecteur »)
- [OneDrive](https://onedrive.live.com)
- [Dropbox](https://www.dropbox.com)

Collez simplement l'URL du fichier dans le commentaire ou l'issue concernée.

---

Pour plus de détails sur les conventions et le processus de soumission des rapports, consultez [docs/REPORTS.md](docs/REPORTS.md).
