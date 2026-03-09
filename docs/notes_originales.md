# Notes originales de l'étudiant — Analyse des incohérences et version corrigée

## 1. Problème constaté dans les notes brutes

Les notes comportaient les incohérences de numérotation suivantes :

| N° dans les notes | Malware noté | Problème |
|:---:|---|---|
| 1 | Rançongiciel (Ransomware) | ✅ OK |
| 2 | Logiciel espion (Spyware) | ✅ OK |
| 3 | Cheval de Troie (Trojan) | ✅ OK |
| ~~4~~ | *(absent)* | ❌ **Rang 4 manquant** |
| 5 | Cryptomineur (Cryptominer) | ✅ OK |
| ~~6~~ | *(absent)* | ❌ **Rang 6 manquant** |
| **7** | Grattoir de mémoire (RAM Scraper) | ⚠️ Premier rang 7 |
| **7** | Réseau de machines zombies (Botnet) | ❌ **Rang 7 en double** |
| 8 | Cheval de Troie d'accès distant (RAT) | ⚠️ Rang déplacé (→ 4, voir correction) |
| 9 | Enregistreur de frappe (Keylogger) | ✅ OK |
| 10 | Rootkit | ✅ OK |
| 11 | Porte dérobée (Backdoor) | ✅ OK |
| 12 | Virus | ✅ OK |
| 13 | Ver (Worm) | ✅ OK |

> **Résumé des erreurs :** doublon au rang 7 (deux entrées numérotées « 7 »), rangs 4 et 6 absents.  
> Nombre d'entrées : 13 malwares (correct) mais numérotation incohérente (1, 2, 3, 5, 7, 7, 8, 9, 10, 11, 12, 13).

---

## 2. Principe de correction

Pour obtenir une liste cohérente de 13 rangs consécutifs, les décisions suivantes ont été prises :

1. **Le rang 7 est attribué au RAM Scraper** (première occurrence du doublon), car il constitue un type de malware distinct et spécialisé (ciblage des terminaux de paiement) qui mérite un rang propre.  
2. **Le Botnet, doublon du rang 7, est déplacé au rang 6** (rang manquant), ce qui comble la lacune n° 6.  
3. **Le RAT est déplacé du rang 8 au rang 4** (rang manquant) ; les entrées 9 à 13 sont décalées d'une position vers le bas (ex-rang 9 → rang 8, ex-rang 13 → rang 12) pour maintenir une numérotation consécutive.

---

## 3. Correspondance rang original → rang corrigé

| Rang original (notes brutes) | Malware | Rang corrigé (version finale) |
|:---:|---|:---:|
| 13 | Ver (Worm) | 12 |
| 12 | Virus | 11 |
| 11 | Porte dérobée (Backdoor) | 10 |
| 10 | Rootkit | 9 |
| 9 | Enregistreur de frappe (Keylogger) | 8 |
| **7 (1ʳᵉ occurrence)** | **Grattoir de mémoire (RAM Scraper)** | **7** |
| **7 (doublon)** | **Réseau de machines zombies (Botnet)** | **6** |
| 5 | Cryptomineur (Cryptominer) | 5 |
| 8 | Cheval de Troie d'accès distant (RAT) | 4 |
| 3 | Cheval de Troie (Trojan) | 3 |
| 2 | Logiciel espion (Spyware) | 2 |
| 1 | Rançongiciel (Ransomware) | 1 |
| *(absent)* | Adware *(ajouté pour compléter les 13 rangs)* | 13 |

> **Remarque :** L'Adware, absent des notes originales, est intégré au rang 13 (le moins critique)
> afin de compléter la liste à 13 entrées distinctes, conformément à l'intitulé du tableau
> « Top 13 des malwares ».

---

## 4. Version corrigée — Liste définitive (rang 13 → rang 1)

| Rang | Nom du malware |
|:---:|---|
| 13 | Adware |
| 12 | Ver (Worm) |
| 11 | Virus |
| 10 | Porte dérobée (Backdoor) |
| 9 | Rootkit |
| 8 | Enregistreur de frappe (Keylogger) |
| **7** | **Grattoir de mémoire (RAM Scraper)** — *ex. : violation Target, 2013* |
| 6 | Réseau de machines zombies (Botnet) |
| 5 | Cryptomineur (Cryptominer) |
| 4 | Cheval de Troie d'accès distant (RAT) |
| 3 | Cheval de Troie (Trojan) |
| 2 | Logiciel espion (Spyware) |
| **1** | **Rançongiciel (Ransomware)** — *malware le plus critique* |

Le tableau complet avec toutes les colonnes (technique/objectif, conséquences directes,
conséquences indirectes, exemple/contexte) est disponible dans les fichiers :

- [`top13_malwares.md`](top13_malwares.md) — version Markdown (affichage web / rapport)
- [`top13_malwares.csv`](top13_malwares.csv) — version CSV (séparateur `;`, compatible Excel français)
