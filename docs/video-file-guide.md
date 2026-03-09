# Guide : Partage et gestion des fichiers vidéo

Ce guide explique comment partager ou référencer des vidéos (ex. : fichiers MP4 issus de Moodle) sans les téléverser directement dans l'environnement de chat, comment stocker des artefacts vidéo dans le dépôt si nécessaire, et comment transformer une vidéo en transcription pour les besoins d'un travail académique.

---

## Table des matières

1. [Pourquoi je ne peux pas téléverser une vidéo directement ?](#1-pourquoi-je-ne-peux-pas-téléverser-une-vidéo-directement-)
2. [Alternatives au téléversement](#2-alternatives-au-téléversement)
3. [Stocker une vidéo dans le dépôt avec Git LFS ou un stockage externe](#3-stocker-une-vidéo-dans-le-dépôt-avec-git-lfs-ou-un-stockage-externe)
4. [Comprimer une vidéo et vérifier la taille](#4-comprimer-une-vidéo-et-vérifier-la-taille)
5. [Convertir une vidéo en transcription (workflow recommandé)](#5-convertir-une-vidéo-en-transcription-workflow-recommandé)
6. [Respecter les droits d'auteur](#6-respecter-les-droits-dauteur)

---

## 1. Pourquoi je ne peux pas téléverser une vidéo directement ?

Les environnements de chat (assistants IA, plateformes de collaboration) imposent des **limites de taille de fichier** (souvent 25 Mo ou moins) et n'acceptent généralement pas les formats vidéo (`.mp4`, `.mov`, `.avi`, etc.) comme pièces jointes directes.

Les fichiers MP4 provenant de Moodle peuvent également être protégés par des restrictions de diffusion, ce qui rend leur redistribution problématique d'un point de vue légal.

---

## 2. Alternatives au téléversement

### 2.1 Partager un lien vers la vidéo

La solution la plus simple est de partager le lien direct vers la vidéo sur la plateforme d'hébergement :

| Source | Méthode |
|---|---|
| Moodle | Copier l'URL du cours ou de la ressource vidéo dans Moodle |
| YouTube / Vimeo | Copier l'URL de la vidéo depuis la barre d'adresse |
| Google Drive / OneDrive | Générer un lien de partage (avec les bonnes permissions) |
| Panopto / MediaSite | Utiliser la fonction « Partager » de la plateforme |

**Exemple :**
```
https://moodle.votre-etablissement.fr/mod/resource/view.php?id=12345
```

### 2.2 Prendre des captures d'écran des moments clés

Si vous souhaitez illustrer un contenu spécifique de la vidéo :

1. Mettre la vidéo en pause sur le moment souhaité.
2. Prendre une capture d'écran (`Win + Maj + S` sous Windows, `Cmd + Maj + 4` sous macOS).
3. Annoter la capture si nécessaire (avec un outil comme Paint, Preview ou Snagit).
4. Partager la capture d'écran (format PNG ou JPEG, taille généralement < 1 Mo).

> **Attention :** Veillez à ne pas reproduire de contenu protégé au-delà de ce que le droit de citation permet (voir la section [Respecter les droits d'auteur](#6-respecter-les-droits-dauteur)).

### 2.3 Rédiger des notes ou un résumé

Regardez la vidéo et prenez des notes structurées :

- Notez les points clés (horodatage + résumé en 1-2 phrases).
- Reformulez le contenu avec vos propres mots.
- Partagez vos notes dans l'environnement de chat sous forme de texte.

**Exemple de format de notes :**
```
00:00 – Introduction au sujet
03:45 – Définition du concept X : ...
08:12 – Exemple pratique : ...
15:30 – Conclusion et recommandations
```

---

## 3. Stocker une vidéo dans le dépôt avec Git LFS ou un stockage externe

> **À utiliser uniquement si vous disposez des droits nécessaires sur le fichier vidéo.**

### 3.1 Git LFS (Large File Storage)

Git LFS est une extension de Git qui remplace les fichiers volumineux par des pointeurs légers dans le dépôt, tout en stockant le contenu réel sur un serveur séparé.

**Installation et configuration :**

```bash
# 1. Installer Git LFS (une seule fois par machine)
git lfs install

# 2. Déclarer le suivi des fichiers MP4 dans ce dépôt
git lfs track "*.mp4"
git lfs track "*.mov"
git lfs track "*.avi"

# 3. Ajouter le fichier .gitattributes généré au dépôt
git add .gitattributes
git commit -m "chore: configure Git LFS for video files"

# 4. Ajouter et pousser la vidéo normalement
git add chemin/vers/video.mp4
git commit -m "docs: add course video"
git push
```

**Limites à vérifier :**

| Hébergeur | Quota LFS gratuit |
|---|---|
| GitHub | 1 Go de stockage + 1 Go de bande passante / mois |
| GitLab | 5 Go de stockage LFS par dépôt (selon le plan) |
| Bitbucket | 1 Go par dépôt |

Vérifiez les limites de votre plan avant d'ajouter des fichiers volumineux.

### 3.2 Stockage externe (recommandé pour les vidéos lourdes)

Pour les fichiers dépassant les quotas LFS, préférez un stockage externe et référencez-le dans le dépôt :

- **Google Drive / OneDrive / Dropbox** : partager un lien et l'ajouter dans un fichier `docs/resources.md`.
- **AWS S3 / Azure Blob / GCS** : stocker l'objet et utiliser une URL signée ou publique.
- **YouTube (non répertorié)** : mettre en ligne la vidéo en visibilité « Non répertoriée » et partager l'URL.

**Référencer dans le dépôt (exemple `docs/resources.md`) :**

```markdown
## Ressources vidéo

- [Cours - Introduction au sujet](https://drive.google.com/file/d/XXXX/view)
- [Démo technique](https://www.youtube.com/watch?v=YYYY)
```

---

## 4. Comprimer une vidéo et vérifier la taille

### 4.1 Vérifier la taille du fichier

```bash
# Linux / macOS
ls -lh chemin/vers/video.mp4

# Windows (PowerShell)
(Get-Item "chemin\vers\video.mp4").length / 1MB
```

### 4.2 Comprimer avec FFmpeg (outil libre et gratuit)

[FFmpeg](https://ffmpeg.org/) est l'outil de référence pour la conversion et la compression vidéo.

**Installation :**

```bash
# Ubuntu / Debian
sudo apt install ffmpeg

# macOS (avec Homebrew)
brew install ffmpeg

# Windows : télécharger depuis https://ffmpeg.org/download.html
```

**Commandes de compression :**

```bash
# Compression standard (bon compromis qualité/taille)
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset fast output_compressed.mp4

# Réduire la résolution (ex. : 1080p → 720p)
ffmpeg -i input.mp4 -vf scale=1280:720 -vcodec libx264 -crf 28 output_720p.mp4

# Extraire uniquement l'audio (pour transcription, voir section 5)
ffmpeg -i input.mp4 -q:a 0 -map a output_audio.mp3
```

| Paramètre | Description |
|---|---|
| `-crf 28` | Qualité (18 = haute, 28 = moyenne, 51 = très basse) |
| `-preset fast` | Vitesse d'encodage (plus rapide = fichier légèrement plus grand) |
| `scale=1280:720` | Résolution cible |

**Vérifier la taille après compression :**

```bash
ls -lh output_compressed.mp4
# Comparer avec la taille originale
```

### 4.3 Limites de taille courantes

| Plateforme | Limite de téléversement |
|---|---|
| GitHub (fichier unique) | 100 Mo (25 Mo recommandé) |
| GitHub LFS | 2 Go par fichier |
| Gmail (pièce jointe) | 25 Mo |
| Discord | 8 Mo (gratuit), 50 Mo (Nitro) |
| Moodle (selon config) | Variable (souvent 50–500 Mo) |

---

## 5. Convertir une vidéo en transcription (workflow recommandé)

Transformer une vidéo en texte est souvent la meilleure approche pour les travaux académiques : cela évite les problèmes de taille de fichier et de droits, et produit un document directement exploitable.

### Étape 1 – Extraire l'audio

```bash
ffmpeg -i cours.mp4 -q:a 0 -map a cours_audio.mp3
```

### Étape 2 – Transcrire l'audio

Plusieurs outils gratuits ou open source sont disponibles :

#### Option A : OpenAI Whisper (local, gratuit, open source)

```bash
# Installation
pip install openai-whisper

# Transcription (modèle « small » pour un bon équilibre vitesse/précision)
whisper cours_audio.mp3 --model small --language French --output_format txt

# Résultat : cours_audio.txt
```

Modèles disponibles : `tiny`, `base`, `small`, `medium`, `large` (du plus rapide au plus précis).

#### Option B : Service en ligne

| Service | Gratuit | Langues | Remarque |
|---|---|---|---|
| [otter.ai](https://otter.ai) | 600 min/mois | EN, FR | Import MP3/MP4 |
| [Whisper transcription (HuggingFace)](https://huggingface.co/spaces/openai/whisper) | Oui | 90+ | Interface web |
| [Happy Scribe](https://www.happyscribe.com) | Essai gratuit | FR + autres | Export SRT/TXT |

> **Conseil de confidentialité :** Pour des vidéos de cours sensibles, préférez un outil local comme Whisper plutôt qu'un service en ligne.

### Étape 3 – Nettoyer et structurer la transcription

Une fois le fichier `.txt` obtenu :

1. Relire et corriger les erreurs de transcription automatique.
2. Structurer avec des titres et horodatages.
3. Reformuler avec vos propres mots pour les travaux académiques (citer la source si nécessaire).

**Exemple de sortie structurée :**

```markdown
# Transcription – [Titre du cours]
Date : JJ/MM/AAAA | Source : Moodle – [Nom du cours]

## Introduction (00:00 – 03:45)
...

## Partie 1 – [Titre] (03:45 – 10:00)
...
```

---

## 6. Respecter les droits d'auteur

Les vidéos de cours publiées sur Moodle ou d'autres plateformes institutionnelles sont généralement protégées par le droit d'auteur de l'établissement ou de l'enseignant.

**À faire :**

- ✅ Regarder la vidéo sur la plateforme officielle.
- ✅ Prendre des notes personnelles et reformuler le contenu.
- ✅ Citer la source dans vos travaux (auteur, titre, plateforme, date d'accès).
- ✅ Partager uniquement un **lien** vers la vidéo originale, pas le fichier.
- ✅ Pour une transcription utilisée dans un devoir, indiquer qu'il s'agit d'une transcription d'une ressource pédagogique.

**À éviter :**

- ❌ Redistribuer ou publier le fichier vidéo original sans autorisation.
- ❌ Mettre en ligne la vidéo sur YouTube ou un dépôt public sans accord explicite.
- ❌ Utiliser des extraits vidéo dans un projet public sans vérifier la licence.

**Format de citation recommandé (APA 7) :**

```
Nom de l'auteur, P. (Année). Titre du cours ou de la vidéo [Vidéo]. Nom de la plateforme. URL
```

*Exemple :*
```
Dupont, M. (2024). Introduction aux bases de données [Vidéo]. Moodle – Université XY.
https://moodle.exemple.fr/mod/resource/view.php?id=12345
```

---

*Pour toute question relative à ce dépôt, consulter le [README principal](../README.md).*
