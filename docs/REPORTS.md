# Guide de soumission des rapports PDF

Ce document explique aux stagiaires comment soumettre leurs rapports hebdomadaires et leurs livrables au format PDF.

---

## 📁 Où stocker les rapports ?

Tous les rapports PDF doivent être déposés dans le dossier **`docs/reports/`** du dépôt.

```
docs/
└── reports/
    ├── rapport_semaine_01_2026-01-13_Marie-Dupont.pdf
    ├── rapport_semaine_02_2026-01-20_Marie-Dupont.pdf
    └── rapport_final_2026-03-28_Marie-Dupont.pdf
```

> Si le dossier `docs/reports/` n'existe pas encore, créez-le en même temps que votre premier commit.

---

## 🏷️ Convention de nommage

| Type de rapport | Format du nom de fichier |
|---|---|
| Rapport hebdomadaire | `rapport_semaine_<NN>_<YYYY-MM-DD>_<Prenom-Nom>.pdf` |
| Rapport de mi-parcours | `rapport_mi-parcours_<YYYY-MM-DD>_<Prenom-Nom>.pdf` |
| Rapport final | `rapport_final_<YYYY-MM-DD>_<Prenom-Nom>.pdf` |

**Exemples :**

```
rapport_semaine_03_2026-01-27_Jean-Martin.pdf
rapport_mi-parcours_2026-02-14_Jean-Martin.pdf
rapport_final_2026-03-28_Jean-Martin.pdf
```

**Règles :**
- Utilisez des **tirets** (`-`) pour séparer les mots du prénom/nom.
- Utilisez des **underscores** (`_`) comme séparateur entre les différentes parties du nom.
- La date correspond au **lundi de la semaine** couverte par le rapport (ou la date de remise pour les livrables).
- N'utilisez pas d'espaces ni de caractères spéciaux (accents, apostrophes, etc.) dans le nom du fichier.

---

## 📤 Comment soumettre un rapport

### Option A — Via Git (méthode recommandée)

1. Placez votre fichier PDF dans `docs/reports/` en respectant la convention de nommage.
2. Committez et poussez sur votre branche :

   ```bash
   git add docs/reports/rapport_semaine_01_2026-01-13_Prenom-Nom.pdf
   git commit -m "docs: ajout rapport semaine 01 - Prenom Nom"
   git push
   ```

3. Ouvrez une **Pull Request** ou signalez-le dans l'issue correspondante.

### Option B — Via GitHub Releases (livrables importants)

Pour le rapport final ou le rapport de mi-parcours, vous pouvez également attacher le PDF à une GitHub Release :

1. Accédez à l'onglet **Releases** du dépôt.
2. Cliquez sur **Draft a new release**.
3. Créez un tag (ex. `rapport-final-v1`), ajoutez un titre descriptif.
4. Glissez-déposez le PDF dans la zone **Attach binaries**.
5. Publiez la release.

### Option C — Lien externe (si le fichier est trop volumineux)

Si votre PDF dépasse 50 Mo (rapport avec beaucoup de captures d'écran, par exemple) :

1. Déposez le fichier sur **Google Drive**, **OneDrive** ou **Dropbox**.
2. Partagez-le avec les droits **« Lecteur »** (lecture seule).
3. Collez le lien dans l'issue ou la PR dédiée au rapport de la semaine.

---

## ⚖️ Limites de taille

| Méthode | Limite |
|---|---|
| Commit dans le dépôt | 100 Mo par fichier (recommandé : < 50 Mo) |
| GitHub Releases | 2 Go par asset |
| Lien cloud | Aucune limite côté GitHub |

> **Bonne pratique :** optimisez la taille de vos PDFs avant de les committer (compression des images, suppression des polices embarquées inutiles). Des outils comme [Smallpdf](https://smallpdf.com/compress-pdf) ou [iLovePDF](https://www.ilovepdf.com/compress_pdf) permettent de réduire la taille sans perte de qualité visible.

---

## 💬 Puis-je joindre un PDF directement dans une issue ou un commentaire GitHub ?

**Non.** GitHub ne supporte pas les pièces jointes PDF dans les issues, pull requests ou commentaires. Seules les **images** (PNG, GIF, JPEG, WebP) peuvent être glissées-déposées directement.

Pour partager un PDF, utilisez l'une des trois méthodes décrites ci-dessus.

---

## 📅 Fréquence et délais

- **Rapport hebdomadaire** : à soumettre chaque **vendredi avant 18h**.
- **Rapport de mi-parcours** : à la moitié du stage (voir planning avec votre tuteur).
- **Rapport final** : à soumettre au plus tard **48h avant la soutenance**.

---

## ✅ Checklist avant soumission

- [ ] Le fichier respecte la convention de nommage
- [ ] Le PDF est dans `docs/reports/` (ou dans une Release / lien cloud si trop volumineux)
- [ ] La taille du fichier est inférieure à 50 Mo (pour un commit dans le dépôt)
- [ ] Un commit ou une issue référence la soumission du rapport
- [ ] Le tuteur a été notifié (mention `@tuteur` dans l'issue ou la PR)
