---
title: Résumé et traduction
description: Résumez et traduisez des transcriptions avec OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL ou Google Translate.
sidebar:
  order: 4
---

Une fois une transcription prête, Audiotext peut la résumer et la traduire avec un modèle de langage ou un service de traduction. Les deux sont conservés dans l’historique : ils ne sont générés qu’une seule fois.

## Résumé

Ouvrez le mode **Résumé** d’une transcription et cliquez sur **Générer un résumé**. Le modèle de langage écrit :

- Un **résumé** de la transcription.
- Ses **points clés**.
- Ses **chapitres**, si elle comporte des horodatages. Cliquez sur un chapitre pour lire l’audio à partir de son début.

**Régénérer** le réécrit (p. ex. après avoir choisi un autre modèle). **Copier** le copie, et les [exports](/fr/guides/transcript/#copiez-et-exportez) Markdown et Word l’incluent.

Si la clé API du fournisseur n’est pas configurée, le mode **Résumé** propose de la configurer. Les transcriptions très longues (environ trois heures de parole ou plus) ne sont résumées qu’à partir de leur début.

![Le résumé d'une transcription, avec ses points clés et ses chapitres](/screenshots/summary.png)

## Traduction

Cliquez sur **Traduire**, choisissez la langue dans **Traduire en** et le **Fournisseur**, puis confirmez. La traduction s’affiche dans un panneau à droite du texte original.

- Si la transcription comporte des horodatages, chaque segment est traduit séparément : la traduction commence avec les mêmes horodatages, surligne le segment en cours de lecture, et cliquer sur un segment le lit.
- Si vous avez modifié le texte brut, c’est le texte modifié qui est traduit, sans horodatage.
- Faites glisser la poignée entre les deux textes pour les redimensionner, ou double-cliquez dessus pour rétablir leurs tailles.
- Le bouton **Traduire** permet aussi de **Masquer la traduction**, de **Traduire dans une autre langue…** ou de **Supprimer la traduction**.

### Corrigez et recalez la traduction

Une traduction a souvent besoin d’un autre minutage que l’original, par ex. des sous-titres plus longs à lire. Faites un clic droit sur un segment de la traduction pour :

- **Modifier le texte…** : changer son texte.
- **Modifier le minutage…** : changer quand il commence et finit, à la milliseconde. Saisissez les temps sous la forme `00:01:05,900`, `01:05,9` ou `65.9`.
- **Ajouter un segment après…** : ajouter un segment qui, par défaut, remplit l’espace jusqu’au suivant.
- **Supprimer le segment**.

### Traduisez-la vous-même

Pour écrire la traduction vous-même, choisissez **Moi-même, à partir de zéro** comme **Fournisseur**. Aucune clé API n’est nécessaire. La traduction commence avec les horodatages de la transcription et des segments vides, affichés comme **Pas encore traduit**, et le panneau indique combien il en reste. Faites un clic droit sur l’un d’eux et choisissez **Traduire le texte…** : la boîte de dialogue montre le texte original dit pendant ce temps.

### Sous-titres et export

- Pour les transcriptions de vidéos, cochez **L’afficher comme sous-titres de la vidéo** dans le menu **Traduire** pour afficher la traduction en sous-titres. Le menu de la vidéo permet aussi de les changer. Voir [Regardez les vidéos avec sous-titres](/fr/guides/transcript/#regardez-les-vidéos-avec-sous-titres).
- Pour enregistrer la traduction dans un fichier, choisissez **Traduction** dans le menu **Exporter** ou cliquez sur le bouton d’export de la traduction. Elle est exportée dans les mêmes [formats](/fr/guides/transcript/#copiez-et-exportez) que la transcription, avec sa langue dans le nom du fichier (par ex. `video.es.srt`), si bien que les lecteurs vidéo la chargent avec la vidéo. Les segments pas encore traduits sont omis des sous-titres.

:::tip
Pour obtenir directement la transcription dans une autre langue, sans fournisseur, vous pouvez aussi traduire pendant la transcription. Consultez [Langue](/fr/guides/transcription-settings/#langue).
:::

## Fournisseurs

Les fournisseurs se choisissent dans **Préférences** → **IA**, séparément pour les résumés et les traductions.

| Fournisseur | Modèle par défaut | Clé API |
| --- | --- | --- |
| OpenAI (par défaut) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (local) | `llama3.2` | Inutile |

Laissez le **Modèle** vide pour utiliser le modèle par défaut du fournisseur, ou tapez le nom de n’importe quel autre modèle du fournisseur (p. ex. `claude-sonnet-5-5` ou `deepseek-reasoner`).

Les traductions peuvent aussi être faites par :

- **DeepL**, qui nécessite une [clé API DeepL](https://www.deepl.com/your-account/keys). Les clés de l’offre gratuite fonctionnent aussi.
- **Google Translate**, qui utilise la clé API Google avec la Cloud Translation API activée.

### Ollama

[Ollama](https://ollama.com) exécute les modèles sur votre ordinateur, sans clé API et sans envoyer le texte nulle part. Installez-le, téléchargez un modèle (p. ex. `ollama pull llama3.2`) et choisissez **Ollama** comme fournisseur. S’il ne tourne pas à l’adresse par défaut, modifiez l’**URL du serveur** dans **Préférences** → **IA** (`http://localhost:11434` par défaut).

:::note
Chaque fournisseur facture l’utilisation de son API, dont Audiotext n’est pas responsable. Les clés API sont conservées dans le gestionnaire d’identifiants de votre système. Consultez [Fichiers et données](/fr/reference/files-and-data/).
:::
