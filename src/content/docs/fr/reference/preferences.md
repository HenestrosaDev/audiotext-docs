---
title: Préférences
description: Tous les réglages de la fenêtre Préférences, onglet par onglet.
sidebar:
  order: 2
---

Les **Préférences** regroupent les réglages qui ne changent pas à chaque transcription. Ouvrez-les avec l’engrenage en haut à droite de la fenêtre. Les modifications sont enregistrées automatiquement.

## Général

- **Apparence** : **Système** (suit votre système), **Clair** ou **Sombre**.
- **Langue de l’interface** : la langue d’Audiotext, ou **Langue du système**. Elle peut être changée lorsqu’aucune transcription n’est en cours. Consultez les [langues disponibles](/fr/reference/formats-and-languages/#langues-de-linterface).
- **Notifications** : affiche une notification du système lorsqu’une transcription est prête (pour un dossier, lorsque tous ses fichiers le sont, et pour un dossier surveillé, chaque fois qu’un nouveau fichier l’est). Activé par défaut. Sur macOS, elles proviennent de **Éditeur de script** et sur Windows de **Windows PowerShell** : elles s’autorisent ou se désactivent pour ces applications dans les réglages du système. Sur Linux, elles nécessitent `notify-send` (le paquet `libnotify-bin` ou `libnotify`).

## IA

Les fournisseurs des [résumés et des traductions](/fr/guides/summary-and-translation/) :

- **Résumé** → **Fournisseur** et **Modèle**.
- **Traduction** → **Fournisseur** et **Modèle**. DeepL et Google Translate n’ont pas de modèle à choisir.
- **Ollama** → **URL du serveur** : l’adresse d’Ollama, `http://localhost:11434` par défaut.

Laissez le **Modèle** vide pour utiliser le modèle par défaut du fournisseur. Le bouton à côté du fournisseur configure sa clé API.

## Clés API

Les clés de chaque service. Cliquez sur **Configurer…** pour en saisir une, ou sur **Modifier…** pour la remplacer (laissez-la vide pour la supprimer). Elles sont conservées dans le gestionnaire d’identifiants de votre système.

| Clé | Utilisée pour |
| --- | --- |
| Clé API OpenAI | L’API Whisper, et résumer et traduire avec OpenAI |
| Clé API Anthropic | Résumer et traduire avec Claude |
| Clé API DeepSeek | Résumer et traduire avec DeepSeek |
| Clé API Gemini | Résumer et traduire avec Gemini (de Google AI Studio) |
| Clé API Mistral | Résumer et traduire avec Mistral |
| Clé API xAI | Résumer et traduire avec Grok |
| Clé API DeepL | Traduire avec DeepL (les clés de l’offre gratuite fonctionnent aussi) |
| Clé API Google | Google Speech-to-Text au-delà de l’offre gratuite, et Google Translate (Cloud Translation API) |
| Jeton Hugging Face | Identifier les locuteurs avec WhisperX |

:::caution
Chaque fournisseur facture l’utilisation de son API, dont Audiotext n’est pas responsable. Si OpenAI renvoie l’erreur `429` avec une nouvelle clé, consultez [Dépannage](/fr/help/troubleshooting/#lapi-whisper-renvoie-lerreur-429).
:::

## WhisperX

**Type de calcul**, **Taille de lot** et **Utiliser le CPU**. Consultez les [options avancées de WhisperX](/fr/reference/engines/#options-avancées).

## Sous-titres

Les options des fichiers `.srt` et `.vtt` enregistrés lors de la transcription d’un dossier avec WhisperX :

- **Surligner les mots** : souligne chaque mot au moment où il est prononcé. Désactivé par défaut.
- **Nb max. de lignes** : le nombre maximal de lignes de chaque sous-titre. `2` par défaut.
- **Nb max. de caractères par ligne** : le nombre maximal de caractères d’une ligne avant de la couper. `42` par défaut.

## API Whisper

**Température** et **Horodatage des mots**. Consultez les [options de l’API Whisper](/fr/reference/engines/#options).

## À propos

La version d’Audiotext et des liens vers cette documentation, le code source sur GitHub et la page de dons.
