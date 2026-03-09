# Dossier Cybercriminalité — Guide étudiant

Ce dossier contient deux tableaux de synthèse à compléter dans le cadre du devoir vidéo sur la cybercriminalité.

---

## Structure du dossier

```
docs/
├── README.md                      ← Ce fichier (instructions)
├── table1_malwares.md             ← Tableau 1 : Malwares (Markdown)
├── table1_malwares.csv            ← Tableau 1 : Malwares (CSV)
├── table2_cybercrimes_eu.md       ← Tableau 2 : Cybercrimes UE (Markdown)
└── table2_cybercrimes_eu.csv      ← Tableau 2 : Cybercrimes UE (CSV)
```

---

## Tableau 1 — Malwares

**Vidéo source :** *Découvre les secrets des MALWARES - Exemple d'Analyse avec ANY.RUN !*

### Ce qu'il faut compléter

1. **En-tête vidéo** (ligne `[À COMPLÉTER]`) :
   - Renseigne la **date de publication** de la vidéo (format JJ/MM/AAAA).
   - Renseigne l'**origine / chaîne** (ex. : nom de la chaîne YouTube, auteur, etc.).

2. **Section Définition** :
   - Des informations générales issues de recherches Internet sont déjà pré-remplies.
   - Complète ou ajuste les cellules selon ce que la vidéo présente.

3. **Top 13 malwares** :
   - Le tableau liste 13 catégories de malwares avec des descriptions génériques.
   - Pour chaque malware mentionné dans la vidéo, complète :
     - La colonne **Méthode / Technique (objectif)** si la vidéo donne des précisions.
     - Les colonnes **Conséquences directes** et **Conséquences indirectes** si des exemples concrets sont donnés.
   - Si la vidéo mentionne un malware **absent** du tableau, ajoute une ligne supplémentaire.
   - Les cellules marquées `[Préciser selon vidéo]` sont prioritaires.

### Convention de remplissage

| Marqueur | Signification |
|---|---|
| `[À COMPLÉTER]` | Information manquante à saisir obligatoirement |
| `[Préciser selon vidéo]` | Information générique déjà présente — à affiner si la vidéo apporte des détails supplémentaires |

---

## Tableau 2 — Cybercrimes UE

**Vidéo source :** *Cybercriminalité : l'UE dégaine son bouclier | Arte Europe l'Hebdo*

### Ce qu'il faut compléter

1. **En-tête vidéo** (ligne `[À COMPLÉTER]`) :
   - Date de diffusion de l'épisode Arte.
   - Origine (Arte Europe l'Hebdo, Arte.tv, diffusion France/Allemagne, etc.).

2. **Tableau des attaques mentionnées** :
   - Chaque ligne correspond à une cyberattaque évoquée dans le reportage.
   - Des événements EU connus publiquement sont pré-renseignés à titre indicatif.
   - Complète les colonnes vides `[À COMPLÉTER]` avec les informations spécifiques citées dans la vidéo.
   - Si la vidéo mentionne une attaque **absente** du tableau, ajoute une nouvelle ligne.

3. **Colonnes prioritaires à vérifier** :
   - **Date de l'attaque** — parfois approximative (ex. "début 2024").
   - **Auteurs / Nationalité** — souvent des groupes APT ou États-nations.
   - **Procédure d'attaque** — type d'attaque (phishing, ransomware, DDoS…).
   - **Solutions de prévention** — mesures citées par l'UE ou les experts interviewés.

---

## Format des fichiers

- Les fichiers `.md` (Markdown) peuvent être visualisés directement sur GitHub ou dans VS Code.
- Les fichiers `.csv` peuvent être ouverts dans **Excel**, **LibreOffice Calc** ou **Google Sheets**.
  - Dans Excel : *Données > Obtenir des données > Depuis un fichier texte/CSV*, sélectionner la virgule comme séparateur.
  - Le caractère séparateur utilisé est la **virgule** (`,`).
  - Les guillemets (`"`) encadrent les champs contenant des virgules ou des retours à la ligne.

---

## Rendu final attendu

Une fois les deux tableaux complétés :

1. Supprime (ou commente) toutes les lignes encore marquées `[À COMPLÉTER]`.
2. Vérifie que chaque malware / attaque dispose d'au moins une conséquence directe et une conséquence indirecte.
3. Assure-toi que les **solutions de prévention** sont renseignées dans le Tableau 2.
4. Exporte les fichiers `.csv` depuis ton tableur pour t'assurer que le formatage est correct.
