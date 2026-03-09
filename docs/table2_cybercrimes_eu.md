# Tableau 2 — Actualités Cybercriminalité dans l'UE

## Informations sur la vidéo

| Champ | Valeur |
|---|---|
| **Titre** | Cybercriminalité : l'UE dégaine son bouclier \| Arte Europe l'Hebdo |
| **Date de diffusion** | [À COMPLÉTER] |
| **Origine** | [À COMPLÉTER — ex. Arte.tv, Arte Europe l'Hebdo, diffusion France / Allemagne] |
| **Lien** | [À COMPLÉTER] |
| **Durée** | [À COMPLÉTER] |

---

## Attaques et incidents cybercriminels mentionnés

> **Instructions :** Les lignes ci-dessous correspondent à des cyberattaques notoires en Europe, pré-renseignées à titre indicatif d'après des sources publiques. Vérifie que chaque événement est bien mentionné dans la vidéo ; supprime ou ajuste les lignes qui ne correspondent pas, et **ajoute les événements supplémentaires évoqués dans le reportage**.

| # | Date de l'attaque | Pays / Zone attaqué(e) | Personnes / Structures ciblées | Auteurs / Nationalité | Motifs | Procédure d'attaque | Conséquences directes | Conséquences indirectes | Solutions de prévention |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Mai 2017 | Mondial (dont UE : UK, France, Espagne, Allemagne…) | Hôpitaux (NHS Royaume-Uni), entreprises, administrations | Groupe Lazarus (Corée du Nord présumée) | Profit financier / sabotage | Ransomware **WannaCry** exploitant la faille SMB EternalBlue (CVE-2017-0144) via email et réseau | Chiffrement de centaines de milliers de postes, perturbation du NHS, 300 $ de rançon Bitcoin demandés par poste | ~4 milliards $ de pertes mondiales, mise en lumière des systèmes non mis à jour, accélération des politiques de patch management | Application immédiate des correctifs Windows (MS17-010), désactivation de SMBv1, sauvegardes hors ligne, segmentation réseau |
| 2 | Juin 2017 | Ukraine, puis Europe (France, Danemark, Allemagne…) | Maersk, Saint-Gobain, Mondelez, gouvernement ukrainien | Sandworm / GRU (Russie présumée) | Sabotage géopolitique (Ukraine), dommages collatéraux en Europe | Ver destructeur **NotPetya** (wiper déguisé en ransomware) via le logiciel de comptabilité ukrainien M.E.Doc | Destruction irréversible de données, paralysie totale de Maersk (terminaux portuaires), impossibilité de déchiffrement | ~10 milliards $ de pertes, redéfinition du concept de cyberarme étatique, durcissement des exigences de cyber-résilience dans l'UE | Isolation des réseaux OT/IT, principe du moindre privilège, MFA, audits de la chaîne d'approvisionnement logicielle |
| 3 | 2019–2021 | Allemagne, Belgique, Pays-Bas, France | Hôpitaux, collectivités locales, PME | Groupes cybercriminels (ex. Ryuk/Conti, affiliés russophones présumés) | Profit financier (rançon) | Ransomware-as-a-Service (RaaS) : phishing initial → Emotet/TrickBot → déploiement de Ryuk | Chiffrement des données, arrêt des opérations hospitalières, demandes de rançon de plusieurs millions d'euros | Perturbation des soins médicaux, pression sur les assureurs cyber, renforcement de la directive NIS en NIS2 | Formation anti-phishing, EDR, sauvegardes testées régulièrement, plan de réponse aux incidents |
| 4 | Mars 2021 | UE et alliés (mondial) | Serveurs Microsoft Exchange (entreprises, gouvernements, ONG) | HAFNIUM (Chine présumée) | Espionnage, vol de données | Exploitation de 4 vulnérabilités zero-day dans Microsoft Exchange (CVE-2021-26855, 26857, 26858, 27065) → web shell | Accès non autorisé à des boîtes mail, installation de portes dérobées | Espionnage de masse, vol de propriété intellectuelle, pression sur les éditeurs pour le patch rapide | Patching d'urgence, audit des serveurs Exchange, surveillance des web shells, migration vers Exchange Online |
| 5 | Février 2022 | Ukraine, Allemagne, Europe centrale | Réseau satellite Viasat KA-SAT (éoliennes Enercon en Allemagne, armée ukrainienne) | Sandworm / GRU (Russie présumée) | Sabotage militaire (appui à l'invasion de l'Ukraine) | Wiper **AcidRain** sur modems SATCOM, exploitation d'une mauvaise configuration VPN | Coupure de ~40 000 modems en Europe, perturbation de 5 800 éoliennes Enercon en Allemagne | Mise en lumière de la vulnérabilité des infrastructures satellitaires civiles, accélération de la Cyber Resilience Act | Segmentation des réseaux SATCOM, authentification forte sur les interfaces de gestion, coordination ENISA |
| 6 | 2022–2024 | France, Allemagne, Italie, Espagne, Belgique | Hôpitaux (CHU de Corbeil-Essonnes, Versailles…), mairies, universités | Groupes ransomware (LockBit, ALPHV/BlackCat, Clop) | Profit financier (double extorsion : chiffrement + fuite de données) | Phishing ciblé (spear phishing) → latéralisation → exfiltration → chiffrement massif | Paralysie des établissements, fuite de données patients/citoyens, paiement de rançons | Pression réglementaire (RGPD, NIS2), coûts d'assurance cyber en hausse, remise en cause de la sécurité des hôpitaux | NIS2, RGPD (notification 72h), EDR, formation, exercices de crise (cyber range), compartimentalisation |
| 7 | Octobre 2023 | Europe (Allemagne, Pays-Bas, Belgique, France, Pologne) | Ports, aéroports, sites gouvernementaux | Killnet, NoName057(16) (hacktivistes pro-russes) | Hacktivisme pro-russe, déstabilisation politique | Attaques DDoS massives sur des sites institutionnels | Indisponibilité temporaire de sites web gouvernementaux et d'infrastructures | Impact psychologique, mise en doute de la capacité de résilience, coordination ENISA / CERT-EU renforcée | Scrubbing centers, plans de continuité d'activité, CERT-EU, coopération NIS2 |
| 8 | [À COMPLÉTER] | [À COMPLÉTER] | [À COMPLÉTER] | [À COMPLÉTER] | [À COMPLÉTER] | [À COMPLÉTER — préciser selon vidéo] | [À COMPLÉTER] | [À COMPLÉTER] | [À COMPLÉTER] |

---

## Mesures et initiatives de l'UE mentionnées dans la vidéo

| Initiative / Mesure | Description | Source (vidéo ou recherche) |
|---|---|---|
| **Directive NIS2** (Network and Information Security 2) | Élargit le champ d'application de NIS1 à davantage de secteurs critiques, impose des obligations de sécurité renforcées et une notification des incidents sous 24h/72h. Entrée en vigueur : octobre 2024. | Recherche Internet |
| **Cyber Resilience Act (CRA)** | Règlement imposant des exigences de cybersécurité pour les produits numériques mis sur le marché européen (IoT, logiciels…). | Recherche Internet |
| **ENISA** (Agence de l'UE pour la cybersécurité) | Coordonne la réponse aux incidents à l'échelle européenne, publie des rapports sur le paysage des menaces (ENISA Threat Landscape). | Recherche Internet |
| **CERT-EU** | Équipe de réponse aux urgences informatiques pour les institutions, organes et agences de l'UE. | Recherche Internet |
| **Europol / EC3** | Centre européen de lutte contre la cybercriminalité, coordonne les enquêtes transnationales. | Recherche Internet |
| [À COMPLÉTER — mesure citée dans la vidéo] | [À COMPLÉTER] | Vidéo Arte |
| [À COMPLÉTER — mesure citée dans la vidéo] | [À COMPLÉTER] | Vidéo Arte |

> **Instructions :** Complète les lignes `[À COMPLÉTER]` avec les initiatives, lois ou mesures spécifiquement mentionnées dans le reportage Arte.
