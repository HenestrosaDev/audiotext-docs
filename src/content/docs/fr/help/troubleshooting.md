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

L’identification des locuteurs nécessite un jeton Hugging Face et l’acceptation des conditions du modèle. Vérifiez que :

- Vous avez accepté les conditions de [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) avec le même compte.
- Le jeton a le rôle `Read` et est configuré dans **Préférences** → **Clés API**.

Consultez [Identifiez les locuteurs](/fr/guides/transcription-settings/#identifiez-les-locuteurs).

## Aucun microphone n’est trouvé, ou rien n’est enregistré

- Vérifiez que le microphone est branché et cliquez sur le bouton d’actualisation à côté de la liste des microphones.
- Sous macOS, autorisez Audiotext dans **Réglages Système** → **Confidentialité et sécurité** → **Microphone**. Sous Windows, dans **Paramètres** → **Confidentialité** → **Microphone**.
- Si l’indicateur de niveau affiche **Aucun son**, choisissez un autre microphone dans la liste ou vérifiez qu’il n’est pas coupé.

## L’audio d’une transcription ne peut pas être lu

Le fichier source a été déplacé ou supprimé. Le texte est conservé, mais l’audio ne peut être lu qu’à partir du fichier d’origine. Les enregistrements du microphone et l’audio des URL sont conservés par Audiotext.

## Une vidéo YouTube ne peut pas être téléchargée

Vérifiez que l’URL est correcte et que la vidéo est publique. YouTube change souvent : si cela échoue encore, vérifiez s’il existe une version plus récente d’Audiotext.

## Un dossier ne transcrit aucun fichier

Les fichiers qui ont déjà une transcription sont ignorés. Activez **Écraser les fichiers existants** pour les transcrire à nouveau. Le dossier doit aussi contenir des [fichiers pris en charge](/fr/reference/formats-and-languages/).

## L’API Google demande la langue

L’API Google ne peut pas détecter la langue. Choisissez la **Langue de l’audio** dans les paramètres.

## Autre chose

Cherchez dans les [issues](https://github.com/HenestrosaDev/audiotext/issues) ou posez votre question dans les [discussions](https://github.com/HenestrosaDev/audiotext/discussions). Si vous trouvez un bug, [signalez-le](https://github.com/HenestrosaDev/audiotext/issues/new/choose) avec votre système, la version d’Audiotext et les étapes pour le reproduire.
