---
title: Résumé, questions et traduction
description: Résumez, interrogez et traduisez des transcriptions avec OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL ou Google Translate.
sidebar:
  order: 4
---

Une fois une transcription prête, Audiotext peut la résumer, répondre à des questions à son sujet et la traduire avec un modèle de langage ou un service de traduction. Tout est conservé dans l’historique : rien n’est généré plus d’une fois.

## Résumé

Ouvrez le mode **Résumé** d’une transcription et cliquez sur **Générer un résumé**. Le modèle de langage écrit :

- Un **résumé** de la transcription.
- Ses **points clés**.
- Ses **chapitres**, si elle comporte des horodatages. Cliquez sur un chapitre pour lire l’audio à partir de son début.

Sous son titre, le panneau indique quel modèle l’a généré et quand. Les boutons de son en-tête :

- **Rechercher** (`Ctrl+F`, `⌘F` sous macOS) : recherche un texte dans le résumé.
- **Copier** : le copie.
- **Exporter** : l’enregistre seul en texte brut, Markdown ou document Word, sous un nom comme `video.summary.md` pour ne pas remplacer la transcription. Les [exports](/fr/guides/transcript/#copiez-et-exportez) Markdown et Word de la transcription l’incluent aussi.
- **Générer à nouveau le résumé** : le réécrit (p. ex. après avoir choisi un autre modèle), après confirmation, car le résumé actuel est remplacé.

Si la clé API du fournisseur n’est pas configurée, le mode **Résumé** propose de la configurer. Les transcriptions très longues (environ trois heures de parole ou plus) ne sont résumées qu’à partir de leur début.

![Le résumé d'une transcription, avec ses points clés et ses chapitres](/screenshots/summary.png)

## Interrogez la transcription

Ouvrez le mode **Demander**, tapez une question dans **Posez une question sur la transcription…** (p. ex. ce qui a été décidé, ou qui a dit quelque chose) et appuyez sur `Entrée` ou cliquez sur **Demander**.

- Le modèle de langage répond à partir de la transcription, ainsi que des questions précédentes et de leurs réponses : une question peut donc y faire référence (p. ex. « Pourquoi ? »).
- Si la transcription comporte des horodatages, chaque réponse renvoie aux passages de la transcription où cela est dit. Cliquez sur l’un d’eux pour lire l’audio à partir de là.
- Les questions et leurs réponses sont conservées dans l’historique avec la transcription. La corbeille de l’en-tête efface la conversation, après confirmation.

Les questions sont traitées par le fournisseur choisi pour elles dans **Préférences** → **Fournisseurs** → **Demander**, qui est celui des résumés tant que vous ne le changez pas. Comme pour les résumés, seul le début des transcriptions très longues est lu.

## Traduction

Cliquez sur **Traduire**, choisissez la langue dans **Traduire en :** et le fournisseur dans **Traduire avec :**, puis confirmez. La boîte de dialogue explique ce que fait le fournisseur choisi, et propose de configurer sa clé API si elle manque. La traduction s’affiche dans un panneau à droite du texte original.

- Si la transcription comporte des horodatages, elle est traduite phrase par phrase, avec le texte dit avant et après chaque partie comme contexte : la traduction commence avec les horodatages de chaque phrase, surligne la phrase en cours de lecture, et cliquer sur une phrase la lit.
- Si la transcription n’a pas d’horodatages, tout son texte est traduit en une fois.
- Les deux textes défilent ensemble, pour montrer le même passage de l’audio. Le bouton rond de la poignée entre eux active ou désactive ce défilement. Faites glisser la poignée pour les redimensionner, ou double-cliquez dessus pour rétablir leurs tailles.

Les boutons de l’en-tête de la traduction permettent d’y rechercher et remplacer, de la copier, de l’exporter, de la **Traduire à nouveau** (avec le même fournisseur et le même modèle) et de la masquer (**Masquer la traduction**). Le bouton **Traduire** permet aussi de l’afficher à nouveau, de **Traduire dans une autre langue…** ou de **Supprimer la traduction**.

### Plusieurs langues

Une transcription peut être traduite dans plusieurs langues, même en même temps, et chaque traduction est conservée. Le titre du panneau choisit celle qui est affichée, indique la part traduite de chacune et se termine par l’option de traduire dans une autre langue. Traduire dans une langue qui a déjà une traduction la remplace, après confirmation, car ses corrections sont perdues. Le menu du titre indique combien de sous-titres de chaque traduction inachevée sont traduits (p. ex. `Anglais · 148/150`).

### Progression de la traduction

La progression se compte en sous-titres : un sous-titre est traduit quand il a un texte. Au-dessus de la traduction, une ligne indique combien sont traduits (p. ex. `Traduit : 148/150 · 98 %`). Le pourcentage est arrondi à l’inférieur : `100 %` ne s’affiche donc que lorsque tous sont traduits.

Tant qu’il en reste, les flèches à côté vont aux sous-titres précédent et suivant **Pas encore traduit**, en surlignant chacun d’eux, et indiquent celui sur lequel vous êtes (p. ex. `1 sur 2`). Survolez-en un pour afficher le bouton **Traduire le texte…** à sa droite, qui ouvre la boîte de dialogue pour le traduire.

### Corrigez et recalez la traduction

Une traduction a souvent besoin d’un autre minutage que l’original, par ex. des sous-titres plus longs à lire. Faites un clic droit sur un segment de la traduction pour :

- **Modifier le texte…** : changer son texte.
- **Modifier le minutage…** : changer quand il commence et finit, à la milliseconde. Saisissez les temps sous la forme `00:01:05,900`, `01:05,9` ou `65.9`.
- **Ajouter un segment après…** : ajouter un segment qui, par défaut, remplit l’espace jusqu’au suivant.
- **Supprimer le segment**.

### Traduisez-la vous-même

Pour écrire la traduction vous-même, choisissez **Manuelle** dans **Traduire avec :**. Aucune clé API n’est nécessaire. La traduction commence avec un segment vide pour chaque sous-titre de la transcription, affiché comme **Pas encore traduit**, et le panneau indique combien il en reste. Faites un clic droit sur l’un d’eux et choisissez **Traduire le texte…** : la boîte de dialogue montre le texte original dit pendant ce temps. Survoler un segment affiche un bouton **Traduire le texte…** à sa droite, qui ouvre la même boîte de dialogue.

### Sous-titres et export

- Pour les transcriptions de vidéos, cochez **L’afficher comme sous-titres de la vidéo** dans le menu **Traduire** pour afficher la traduction en sous-titres. Le menu de la vidéo permet aussi de les changer. Voir [Regardez les vidéos avec sous-titres](/fr/guides/transcript/#regardez-les-vidéos-avec-sous-titres).
- Pour enregistrer la traduction dans un fichier, cliquez sur le bouton d’export de son panneau. Elle est exportée dans les mêmes [formats](/fr/guides/transcript/#copiez-et-exportez) que la transcription, avec sa langue dans le nom du fichier (par ex. `video.es.srt`), si bien que les lecteurs vidéo la chargent avec la vidéo. Les segments pas encore traduits sont omis des sous-titres. Le même menu crée une [copie de la vidéo avec ses sous-titres](/fr/guides/transcript/#exportez-la-vidéo-avec-ses-sous-titres).

:::tip
Pour obtenir directement la transcription dans une autre langue, sans fournisseur, vous pouvez aussi traduire pendant la transcription. Consultez [Langue](/fr/guides/transcription-settings/#langue).
:::

## Fournisseurs

Les fournisseurs se choisissent dans **Préférences** → **Fournisseurs**, séparément pour les résumés, les questions et les traductions.

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

[Ollama](https://ollama.com) exécute les modèles sur votre ordinateur, sans clé API et sans envoyer le texte nulle part. Installez-le, téléchargez un modèle (p. ex. `ollama pull llama3.2`) et choisissez **Ollama** comme fournisseur. S’il ne tourne pas à l’adresse par défaut, modifiez l’**URL du serveur** dans **Préférences** → **Fournisseurs** (`http://localhost:11434` par défaut).

:::note
Chaque fournisseur facture l’utilisation de son API, dont Audiotext n’est pas responsable. Les clés API sont conservées dans le gestionnaire d’identifiants de votre système. Consultez [Fichiers et données](/fr/reference/files-and-data/).
:::
