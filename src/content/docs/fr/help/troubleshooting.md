---
title: Dépannage
description: Solutions aux problèmes les plus courants d’Audiotext.
sidebar:
  order: 1
---

## La première transcription avec WhisperX prend beaucoup de temps

Lors de sa première utilisation, un modèle est téléchargé, ce qui peut prendre plusieurs minutes selon votre connexion et la taille du modèle (jusqu’à ~3 Go). La progression indique quand il se charge. Le modèle reste en mémoire tant que ses options ne changent pas : les transcriptions suivantes démarrent donc immédiatement.

## WhisperX échoue avec `CUDA out of memory`

Votre GPU n’a pas assez de mémoire pour les réglages. Essayez, dans cet ordre :

1. Réduisez la **Taille de lot** (p. ex. `4`) dans **Préférences** → **WhisperX**.
2. Utilisez un modèle plus petit (p. ex. `small` ou `base`).
3. Utilisez un **Type de calcul** plus léger (p. ex. `int8`).

Les deux derniers peuvent réduire la qualité. Consultez [Moteurs](/fr/reference/engines/#modèle) pour connaître la mémoire nécessaire à chaque modèle.

## La transcription prend trop de temps

La vitesse de WhisperX dépend de votre matériel : n’attendez pas de résultats instantanés sur des CPU modestes. Essayez un modèle plus petit, comme `small`, ou `large-v3-turbo` sur un GPU, ou le type de calcul `int8`. Vous pouvez aussi utiliser l’**API Whisper** ou l’**API Google**, qui s’exécutent sur des serveurs distants.

## L’API Whisper renvoie l’erreur `429`

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

Votre compte OpenAI n’a plus de crédits, ou vous devez l’approvisionner avant d’utiliser l’API pour la première fois (même si vous avez des crédits gratuits). Achetez des crédits dans la section [Billing](https://platform.openai.com/settings/organization/billing/overview) de votre compte OpenAI. L’activation de votre compte peut prendre jusqu’à 10 minutes.

Si vous avez créé la clé API avant d’approvisionner votre compte pour la première fois et que l’erreur persiste après 10 minutes, créez une nouvelle clé et configurez-la dans **Préférences** → **Clés API**.

## Les locuteurs ne peuvent pas être identifiés

Si la transcription échoue avec **L'identification des locuteurs nécessite un jeton Hugging Face.** ou **Impossible de télécharger le modèle d'identification des locuteurs.**, le jeton est absent, n’est pas valide ou n’a pas accès au modèle.

L’identification des locuteurs nécessite un jeton Hugging Face et l’acceptation des conditions du modèle. Vérifiez que :

- Vous avez accepté les conditions de [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) avec le même compte.
- Le jeton a le rôle `Read` et est configuré dans **Préférences** → **Clés API**.

Consultez [Identifiez les locuteurs](/fr/guides/transcription-settings/#identifiez-les-locuteurs).

## Aucun microphone n’est trouvé, ou rien n’est enregistré

- Vérifiez que le microphone est branché et cliquez sur le bouton d’actualisation à côté de la liste des microphones.
- Sous macOS, autorisez Audiotext dans **Réglages Système** → **Confidentialité et sécurité** → **Microphone**. Sous Windows, dans **Paramètres** → **Confidentialité** → **Microphone**.
- Si l’indicateur de niveau affiche **Aucun son**, choisissez un autre microphone dans la liste ou vérifiez qu’il n’est pas coupé.
- Si **Aucun audio n’a été enregistré.** s’affiche, l’enregistrement s’est terminé avant que le microphone n’envoie le moindre son. Enregistrez de nouveau ou choisissez un autre microphone.

## Le texte en direct ne s’affiche pas

Si **Le texte ne peut pas être affiché pendant l’enregistrement.** s’affiche pendant l’enregistrement, le **Modèle en direct** n’a pas pu être chargé : par exemple, il est téléchargé lors de sa première utilisation, ce qui nécessite une connexion Internet, ou la mémoire est insuffisante. L’enregistrement n’est pas affecté et il est transcrit comme d’habitude lorsque vous l’arrêtez. Choisissez un **Modèle en direct** plus petit (p. ex. `tiny` ou `base`) dans la carte **Texte en direct**.

## L’audio d’une transcription ne peut pas être lu

Le fichier source a été déplacé ou supprimé. Le texte est conservé, mais l’audio ne peut être lu qu’à partir du fichier d’origine. Les enregistrements du microphone et l’audio des URL sont conservés par Audiotext.

## Une vidéo YouTube ne peut pas être téléchargée

Vérifiez que l’URL est correcte et que la vidéo est publique. YouTube change souvent : si cela échoue encore, vérifiez s’il existe une version plus récente d’Audiotext.

Si **La vidéo YouTube n’a pas de piste audio.** s’affiche à la place, la vidéo n’a pas de son à transcrire.

## Un lien ne peut pas être transcrit

- **L’URL ne pointe pas vers un fichier audio ou vidéo.** : le lien ouvre une page web, pas un fichier. Seuls les liens de vidéos YouTube et les liens directs vers des fichiers audio ou vidéo fonctionnent. Cherchez sur la page le lien qui télécharge le fichier (p. ex. l’épisode d’un podcast) et utilisez-le, ou téléchargez le fichier et transcrivez-le avec la source **Fichier**.
- **Impossible de télécharger le fichier : …** : le fichier n’a pas pu être atteint. Vérifiez que le lien s’ouvre dans votre navigateur et que vous êtes connecté à Internet. Les liens qui demandent une connexion à un compte ne peuvent pas être téléchargés : téléchargez le fichier vous-même et utilisez la source **Fichier**.

## Un dossier ne transcrit aucun fichier

Les fichiers qui ont déjà une transcription sont ignorés. Activez **Écraser les fichiers existants** pour les transcrire à nouveau. Le dossier doit aussi contenir des [fichiers pris en charge](/fr/reference/formats-and-languages/).

## L’API Google demande la langue

L’API Google ne peut pas détecter la langue. Choisissez la **Langue de l’audio** dans les paramètres.

## Un résumé ou une traduction échoue

- **DeepL ne peut pas traduire vers : ….** : DeepL ne prend pas en charge cette langue. Choisissez un autre fournisseur, comme un modèle de langage.
- **La réponse du modèle était trop longue.**, **Le modèle n’a pas renvoyé de résumé valide.** ou **Le modèle n’a pas renvoyé de traduction valide.** : le modèle n’a pas écrit le résumé ou la traduction au format attendu. Réessayez, ou choisissez un modèle plus grand dans **Préférences** → **IA**. Les petits modèles d’Ollama échouent plus souvent.
- Pour toute autre erreur, vérifiez que la clé API du fournisseur est définie dans **Préférences** → **Clés API** et que votre compte dispose de crédits.

## Les mises à jour ne peuvent pas être recherchées

**Impossible de rechercher des mises à jour.** signifie qu’Audiotext n’a pas pu joindre GitHub. Vérifiez votre connexion Internet, ou si un pare-feu ou un proxy la bloque. Vous pouvez toujours télécharger la dernière version depuis la [page des versions](https://github.com/HenestrosaDev/audiotext/releases/latest).

## Autre chose

Cherchez dans les [issues](https://github.com/HenestrosaDev/audiotext/issues) ou posez votre question dans les [discussions](https://github.com/HenestrosaDev/audiotext/discussions). Si vous trouvez un bug, [signalez-le](https://github.com/HenestrosaDev/audiotext/issues/new/choose) avec votre système, la version d’Audiotext et les étapes pour le reproduire.
