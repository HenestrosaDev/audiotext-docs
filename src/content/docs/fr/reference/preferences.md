---
title: Préférences
description: Tous les réglages de la fenêtre Préférences, onglet par onglet.
sidebar:
  order: 2
---

Les **Préférences** regroupent les réglages qui ne changent pas à chaque transcription. Ouvrez-les avec l’engrenage en haut à droite de la fenêtre. Les modifications sont enregistrées automatiquement.

## Général

- **Apparence** : **Système** (suit votre système), **Clair** ou **Sombre**.
- **Taille de l’interface** : la taille du texte et des commandes, de 80 % à 200 %. `100%` par défaut. Le changement s’applique immédiatement.
- **Langue de l’interface** : la langue d’Audiotext, ou **Langue du système**. Consultez les [langues disponibles](/fr/reference/formats-and-languages/#langues-de-linterface).
- **Format de la date** : comment les dates des transcriptions sont affichées, dans la langue de l’interface : court (`04/10/2026`), moyen (`4 oct. 2026`, par défaut), long (`4 octobre 2026`) ou ISO (`2026-10-04`). Le menu montre chaque format avec un exemple.
- **Format de l’heure** : **Automatique** (l’horloge de la langue de l’interface), sur 12 heures (`1:30 PM`) ou sur 24 heures (`13:30`).
- **Notifications** : affiche une notification du système lorsqu’une transcription est prête (pour un dossier, lorsque tous ses fichiers le sont, et pour un dossier surveillé, chaque fois qu’un nouveau fichier l’est). Activé par défaut. Sur macOS, elles proviennent de **Éditeur de script** et sur Windows de **Windows PowerShell** : elles s’autorisent ou se désactivent pour ces applications dans les réglages du système. Sur Linux, elles nécessitent `notify-send` (le paquet `libnotify-bin` ou `libnotify`).
- **Rechercher automatiquement des mises à jour** : vérifie si une nouvelle version est disponible à l’ouverture de l’application et, s’il y en a une, affiche dans la barre supérieure un bouton **La version … est disponible** qui ouvre sa page de téléchargement. Les préversions ne sont pas proposées. Activé par défaut.

## Fournisseurs

Les fournisseurs des [résumés, des questions et des traductions](/fr/guides/summary-and-translation/) :

- **Résumé** → **Fournisseur** et **Modèle**.
- **Demander** → **Fournisseur** et **Modèle** : ceux qui répondent aux questions sur les transcriptions. Ce sont ceux des résumés tant que vous ne les changez pas.
- **Traduction** → **Fournisseur** et **Modèle**. DeepL et Google Translate n’ont pas de modèle à choisir.
- **Ollama** → **URL du serveur** : l’adresse d’Ollama, `http://localhost:11434` par défaut.

Laissez le **Modèle** vide pour utiliser le modèle par défaut du fournisseur. Le bouton à côté du fournisseur configure sa clé API.

## Clés API

Les clés de chaque service. Cliquez sur **Configurer la clé API…** pour en saisir une, ou sur **Modifier la clé API…** pour la remplacer (laissez-la vide pour la supprimer). Elles sont conservées dans le gestionnaire d’identifiants de votre système. Elles sont regroupées selon leur usage, et celles qui sont définies affichent une coche.

| Groupe | Clé | Utilisée pour |
| --- | --- | --- |
| **Fournisseurs de LLM** | Clé API OpenAI | L’API Whisper, et résumer, interroger et traduire avec OpenAI |
| | Clé API Anthropic | Résumer, interroger et traduire avec Claude |
| | Clé API DeepSeek | Résumer, interroger et traduire avec DeepSeek |
| | Clé API Gemini | Résumer, interroger et traduire avec Gemini (de Google AI Studio) |
| | Clé API Mistral | Résumer, interroger et traduire avec Mistral |
| | Clé API xAI | Résumer, interroger et traduire avec Grok |
| **Traduction** | Clé API DeepL | Traduire avec DeepL (les clés de l’offre gratuite fonctionnent aussi) |
| | Clé API Google | Google Speech-to-Text au-delà de l’offre gratuite, et Google Translate (Cloud Translation API) |
| **Transcription** | Jeton Hugging Face | Identifier les locuteurs avec WhisperX |

:::caution
Chaque fournisseur facture l’utilisation de son API, dont Audiotext n’est pas responsable. Si OpenAI renvoie l’erreur `429` avec une nouvelle clé, consultez [Dépannage](/fr/help/troubleshooting/#lapi-whisper-renvoie-lerreur-429).
:::

## Transcription

Les options des moteurs, dans une section chacun.

### WhisperX

**Type de calcul**, **Taille de lot** et **Utiliser le CPU**. Consultez les [options avancées de WhisperX](/fr/reference/engines/#options-avancées). Sur un Mac avec Apple Silicon, WhisperX transcrit sur son GPU sauf si **Utiliser le CPU** est activé. Consultez [Sur un Mac](/fr/reference/engines/#sur-un-mac). Sur le GPU du Mac, les indications de **Type de calcul** et **Taille de lot** précisent qu’elles ne s’appliquent pas, et **Utiliser le CPU** renvoie vers les **Modèles compatibles**.

### API Whisper

**Température** et **Horodatage des mots**. Consultez les [options de l’API Whisper](/fr/reference/engines/#options).

## Sous-titres

Comment les sous-titres sont découpés : ceux affichés sur la vidéo et dans le mode **Sous-titres**, les fichiers de sous-titres exportés et les [vidéos avec sous-titres](/fr/guides/transcript/#exportez-la-vidéo-avec-ses-sous-titres). Chaque option a une valeur pour les vidéos horizontales et une autre pour les verticales (plus hautes que larges, p. ex. pour les téléphones), qui sont plus étroites :

| Option | Horizontale | Verticale |
| --- | :---: | :---: |
| **Nb max. de lignes par sous-titre** | `2` | `2` |
| **Nb max. de caractères par ligne** | `42` | `24` |
| **Chinois, japonais et coréen** : les caractères par ligne dans ces langues, dont les caractères sont environ deux fois plus larges que les caractères latins | `16` | `10` |

Les lignes d’un sous-titre sont équilibrées, et les langues écrites sans espaces sont coupées entre les caractères.

**Surligner les mots** souligne chaque mot au moment où il est prononcé dans les fichiers `.srt` et `.vtt`. Désactivé par défaut.

## À propos

La version d’Audiotext et des liens vers cette documentation, le code source sur GitHub et la page de dons. **Rechercher des mises à jour** vérifie immédiatement si une nouvelle version est disponible : s’il y en a une, le bouton devient **Télécharger** et ouvre sa page.
