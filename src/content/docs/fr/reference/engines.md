---
title: Moteurs
description: Comparez WhisperX, l’API Whisper et l’API Google, et choisissez leurs modèles et options avancées.
sidebar:
  order: 1
---

Audiotext transcrit avec l’un de trois moteurs, choisi dans la carte **Moteur** des [paramètres de transcription](/fr/guides/transcription-settings/#moteur).

| | WhisperX | API Whisper | API Google |
| --- | --- | --- | --- |
| S’exécute sur | Votre ordinateur | Serveurs d’OpenAI | Serveurs de Google |
| Internet | Seulement pour télécharger les modèles | Requis | Requis |
| Coût | Gratuit, illimité | Payant | Offre gratuite (60 min/mois), ou payant avec une clé API |
| Détecte la langue | ✓ | ✓ | ✗ |
| Traduit | ✓ | ✓ | ✗ |
| Horodatages | ✓ | Selon le modèle | ✗ |
| Identifie les locuteurs | ✓ (jeton Hugging Face) | `gpt-4o-transcribe-diarize` | ✗ |
| Minutage par mot | ✓ | `whisper-1` | ✗ |
| Texte en direct | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX) est une implémentation rapide de Whisper d’OpenAI qui s’exécute sur votre ordinateur : votre audio ne le quitte jamais. Il tourne sur le CPU ou, bien plus vite, sur un GPU NVIDIA avec CUDA.

### Modèle

Les modèles plus grands sont plus précis, mais plus lents et utilisent plus de mémoire. Le modèle est téléchargé lors de sa première utilisation.

| Modèle | Paramètres | VRAM requise |
| :---: | :---: | :---: |
| `tiny`, `tiny.en` | 39 M | ~1 Go |
| `base`, `base.en` | 74 M | ~1 Go |
| `small`, `small.en` | 244 M | ~2 Go |
| `distil-small.en` | 166 M | ~2 Go |
| `medium`, `medium.en` | 769 M | ~5 Go |
| `distil-medium.en` | 394 M | ~3 Go |
| `large-v1`, `large-v2`, `large-v3` | 1550 M | <8 Go |
| `large-v3-turbo` | 809 M | ~6 Go |
| `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5` | 756 M | ~5 Go |

- **`large-v2`** est le modèle par défaut, car `large-v3` a tendance à halluciner et à répéter du texte plus souvent, surtout dans certaines langues comme le japonais, et omet plus de ponctuation.
- **`large-v3-turbo`** est une version allégée de `large-v3`, bien plus rapide et presque aussi précise.
- Les modèles se terminant par **`.en`** (`tiny.en`, `base.en`, `small.en`, `medium.en`) et les modèles **distillés** (`distil-small.en`, `distil-medium.en`, `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5`) ne transcrivent que l’anglais. Ils sont plus rapides que les modèles multilingues de même taille.

:::tip
Pour essayer Audiotext rapidement, choisissez `tiny` ou `small`. Pour la meilleure qualité, utilisez `large-v2` ou `large-v3-turbo` sur un GPU.
:::

### Options avancées

Elles se trouvent dans **Préférences** → **WhisperX**. Ne les modifiez qu’en cas de problème ou si vous savez ce que vous faites : un GPU à court de mémoire peut figer votre système.

- **Type de calcul** : la précision des nombres du modèle. `float16` est plus rapide sur GPU (la valeur par défaut avec CUDA). `int8` utilise moins de mémoire et est la valeur par défaut sur CPU, car de nombreux CPU ne gèrent pas `float16` efficacement. `float32` est le plus précis, pour les GPU de plus de 8 Go de VRAM.
- **Taille de lot** : le nombre de parties de l’audio traitées à la fois (`8` par défaut). Elle ne change pas la qualité, seulement la vitesse. Réduisez-la si la mémoire manque ; jusqu’à `16` est recommandé.
- **Utiliser le CPU** : exécute WhisperX sur le CPU. Toujours activé si aucun GPU CUDA n’a été trouvé.

## API Whisper

Utilise l’[API de reconnaissance vocale d’OpenAI](https://platform.openai.com/docs/guides/speech-to-text). Elle est destinée aux ordinateurs qui ne peuvent pas faire tourner WhisperX correctement, et nécessite une clé API OpenAI (consultez [Clés API](/fr/reference/preferences/#clés-api)).

| Modèle | Horodatages | Locuteurs | Remarques |
| --- | :---: | :---: | --- |
| `whisper-1` (par défaut) | ✓ | ✗ | Peut être lu phrase par phrase et sous-titré. Traduit vers l’anglais. |
| `gpt-transcribe` | ✗ | ✗ | Plus précis, mais sans horodatage. |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | Identifie les locuteurs. N’utilise ni les mots-clés ni la description. |

Les traductions vers l’anglais sont toujours faites par `whisper-1`, le seul modèle qui traduit.

Les audios longs sont découpés en morceaux de 10 minutes maximum, coupés sur un silence pour ne couper aucun mot, car l’API refuse les fichiers de plus de 25 Mo. Avec `whisper-1`, la fin de chaque morceau est fournie comme contexte au suivant ; avec `gpt-4o-transcribe-diarize`, un échantillon de la voix de chaque locuteur est envoyé avec les morceaux suivants, pour qu’ils conservent leurs libellés.

### Options

- **Format de réponse** (carte Sortie, pour les dossiers) : `text` (par défaut), `json`, `verbose_json`, `srt` ou `vtt`. Les sous-titres et `verbose_json` nécessitent un modèle avec horodatage.
- **Température** (Préférences → API Whisper) : entre 0 et 1. Les valeurs élevées comme 0,8 rendent le résultat plus aléatoire, et les valeurs basses comme 0,2 plus ciblé. Avec 0 (par défaut), le modèle l’augmente automatiquement si nécessaire.
- **Horodatage des mots** (Préférences → API Whisper) : si `whisper-1` renvoie aussi l’horodatage de chaque mot, pour le surligner pendant la lecture. Plus long. Activé par défaut.

## API Google

Utilise l’[API Speech-to-Text de Google](https://cloud.google.com/speech-to-text). Elle ne ponctue pas les phrases (Audiotext ajoute la ponctuation), et sa qualité est inférieure à celle de Whisper : les transcriptions nécessitent donc souvent des corrections. Elle ne peut ni détecter la langue ni traduire, et renvoie du texte brut sans horodatage.

Sans clé API, l’offre gratuite est utilisée, limitée à 60 minutes par mois. Pour l’étendre, configurez une clé API Google. Google facture son utilisation, dont Audiotext n’est pas responsable.
