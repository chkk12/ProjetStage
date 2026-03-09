# Accéder aux vidéos MP4 hébergées sur Moodle (pluginfile.php)

Ce guide explique comment accéder, télécharger et exploiter les métadonnées des vidéos MP4 
fournies via une URL Moodle `pluginfile.php`, dans le cadre d'un travail de stage ou d'un 
devoir scolaire.

---

## 1. Comprendre l'URL Moodle `pluginfile.php`

Les vidéos hébergées sur une plateforme Moodle sont servies via un endpoint de la forme :

```
https://<domaine-moodle>/pluginfile.php/<contextid>/<component>/<filearea>/<itemid>/<nom-fichier>.mp4
```

**Exemple d'URL fournie :**

```
https://moodle.uco.fr/pluginfile.php/340089/mod_resource/content/1/D%C3%A9couvre%20les%20secrets%20des%20MALWARES%20-%20Exemple%20d%27Analyse%20avec%20ANY.RUN%20%21.mp4
```

> Cette URL correspond à la vidéo **"Découvre les secrets des MALWARES - Exemple d'Analyse avec ANY.RUN !"**
> disponible sur la plateforme Moodle de l'université.

---

## 2. Authentification requise

⚠️ **L'accès à ces ressources est protégé par authentification.**

Moodle vérifie que vous êtes connecté à la plateforme avant de vous donner accès au fichier.  
Si vous essayez d'ouvrir l'URL sans être connecté, Moodle vous redirigera vers la page de 
connexion ou retournera une erreur.

**Étapes préalables :**
1. Ouvrez votre navigateur et connectez-vous à votre espace Moodle habituel 
   (par ex. `https://moodle.uco.fr`).
2. Une fois connecté, la session est maintenue via un cookie de session dans le navigateur.
3. Vous pouvez alors accéder à l'URL `pluginfile.php` directement dans le même navigateur.

---

## 3. Télécharger la vidéo via le navigateur

Une fois authentifié, suivez ces étapes pour télécharger la vidéo :

### Méthode : Ouvrir dans un nouvel onglet et enregistrer

1. **Copiez l'URL** de la vidéo (ex. celle fournie en section 1).
2. **Ouvrez un nouvel onglet** dans votre navigateur (`Ctrl+T` ou `Cmd+T`).
3. **Collez l'URL** dans la barre d'adresse et appuyez sur `Entrée`.
4. Le navigateur lit la vidéo en streaming dans le lecteur intégré.
5. **Clic droit sur la vidéo** → choisissez **« Enregistrer la vidéo sous… »** 
   (ou « Save video as… » en anglais).
6. Choisissez l'emplacement de sauvegarde sur votre disque et validez.

> **Note :** Le nom de fichier peut être encodé en URL (espaces = `%20`, 
> apostrophes = `%27`, etc.). Le navigateur devrait le décoder automatiquement 
> lors de l'enregistrement.

---

## 4. Extraire les métadonnées de la vidéo (date et origine)

Pour renseigner la **date** et **l'origine** d'une vidéo dans un devoir, plusieurs méthodes 
permettent d'extraire ces informations.

### 4.1 Depuis la page du cours Moodle

La page du cours Moodle indique généralement :
- Le **titre** de la ressource
- La **date de mise à disposition** (visible dans les détails de l'activité ou du module)
- L'**auteur / source** si l'enseignant l'a renseigné dans la description

### 4.2 Depuis les propriétés du fichier téléchargé

Après téléchargement, faites un clic droit sur le fichier `.mp4` :
- **Windows** → *Propriétés* → onglet *Détails* : titre, auteur, date, encodeur
- **macOS** → *Lire les informations* (`Cmd+I`) : durée, format, date de modification

### 4.3 Depuis les métadonnées vidéo (ligne de commande)

Si `ffprobe` (inclus dans FFmpeg) est disponible :

```bash
ffprobe -v quiet -print_format json -show_format "nom-du-fichier.mp4"
```

Le champ `format.tags` peut contenir : `title`, `artist`, `date`, `comment`, `encoder`, etc.

### 4.4 Exemple de fiche de métadonnées à compléter

Pour le devoir, notez les informations suivantes :

| Champ             | Valeur                                                     |
|-------------------|------------------------------------------------------------|
| Titre             | Découvre les secrets des MALWARES - Exemple d'Analyse avec ANY.RUN ! |
| Source / Origine  | Plateforme Moodle — cours de cybersécurité                 |
| Date de publication | À compléter d'après la page du cours ou les métadonnées  |
| Durée             | À compléter                                                |
| URL d'accès       | URL pluginfile.php fournie (voir section 1)                |

---

## 5. Confidentialité et droits d'auteur — bonnes pratiques

> ⚠️ **Ne commitez jamais de fichiers vidéo protégés par droit d'auteur dans ce dépôt.**

### Pourquoi ?

- Les vidéos pédagogiques hébergées sur Moodle sont souvent protégées par le droit d'auteur 
  et sont réservées aux inscrits au cours.
- Publier ces fichiers dans un dépôt Git (même privé) peut constituer une violation des 
  conditions d'utilisation de la plateforme et du droit d'auteur.
- Les fichiers vidéo sont très volumineux et alourdissent inutilement l'historique Git.

### Ce qu'il faut faire à la place

✅ **Consignez des notes de visionnage** (résumés, points clés, citations courtes).  
✅ **Prenez des captures d'écran** illustrant les points importants (à usage pédagogique/personnel).  
✅ **Référencez l'URL** Moodle dans votre documentation (comme dans ce fichier).  
✅ **Décrivez les métadonnées** (titre, date, source) sans inclure le fichier lui-même.  

### Ce qu'il ne faut pas faire

❌ Ne pas committer de fichiers `.mp4`, `.mkv`, `.avi` ou tout autre fichier vidéo issu de 
   cours protégés.  
❌ Ne pas redistribuer le lien de téléchargement direct en dehors du cercle des personnes 
   inscrites au cours.  

---

## 6. Résumé rapide

| Étape | Action |
|-------|--------|
| 1 | Se connecter à Moodle dans le navigateur |
| 2 | Ouvrir l'URL `pluginfile.php` dans un nouvel onglet |
| 3 | Clic droit sur la vidéo → "Enregistrer la vidéo sous…" |
| 4 | Relever titre, date et source depuis la page du cours ou les métadonnées fichier |
| 5 | Ne committer que des notes/captures — jamais le fichier vidéo |
