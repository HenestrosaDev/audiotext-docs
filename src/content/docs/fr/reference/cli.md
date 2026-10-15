---
title: Interface en ligne de commande
description: Transcrivez des fichiers, des dossiers et des vidéos YouTube depuis des scripts avec la ligne de commande d’Audiotext.
sidebar:
  order: 3
---

Audiotext peut aussi s’utiliser en ligne de commande pour transcrire depuis des scripts, lorsque vous l’[exécutez depuis le code source](/fr/help/contributing/#préparez-le-projet). Il propose trois commandes :

- `transcribe` : transcrit un fichier, les fichiers d’un dossier ou une vidéo YouTube.
- `watch` : transcrit les fichiers ajoutés à un dossier jusqu’à l’arrêt avec `Ctrl+C`.
- `check-update` : vérifie si une nouvelle version est disponible et affiche le lien pour la télécharger.

Les options non indiquées prennent les valeurs configurées dans l’application. Les transcriptions sont toujours enregistrées à côté de chaque fichier transcrit, ou dans le dossier indiqué avec `--output-dir` (où les sous-dossiers d’un dossier transcrit sont recréés).

## Exemples

```bash
# Transcrire un fichier. Le texte est aussi affiché, il peut donc être redirigé
uv run src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# Transcrire les fichiers d’un dossier en identifiant les locuteurs
uv run src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transcrire une vidéo YouTube avec l’API Whisper
uv run src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transcrire une réunion avec l’API Whisper, avec ses mots-clés et son contexte
uv run src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Une réunion sur la prochaine version"

# Transcrire les fichiers ajoutés à un dossier jusqu’à l’arrêt avec Ctrl+C
uv run src/cli.py watch inbox/ --output-types srt
```

## Options

| Option | Description |
| --- | --- |
| `-m`, `--method` | Méthode de transcription : `whisperx`, `whisper-api` ou `google` |
| `-l`, `--language` | Langue de l’audio sous forme de code ISO 639-1 (p. ex. `fr`), ou `auto` pour la détecter (non pris en charge par Google) |
| `-o`, `--output-dir` | Dossier où les transcriptions sont enregistrées (par défaut : à côté de chaque fichier transcrit) |
| `--overwrite` | Écraser les transcriptions existantes |
| `-p`, `--prompt` | Le sujet de l’audio, comme son thème ou son cadre (non pris en charge par Google) |
| `-k`, `--keywords` | Noms, termes ou sigles prononcés dans l’audio, séparés par des virgules, pour qu’ils soient bien orthographiés (non pris en charge par Google) |
| `--translate` | Traduire l’audio en anglais (non pris en charge par Google) |
| `-q`, `--quiet` | N’afficher que les erreurs |
| `-v`, `--verbose` | Afficher les journaux pour déboguer les erreurs |

**Options de WhisperX**

| Option | Description |
| --- | --- |
| `-t`, `--output-types` | Types de fichiers de sortie séparés par des virgules (p. ex. `txt,srt`) |
| `--diarize` | Identifier les locuteurs |
| `--speakers` | Nombre de locuteurs lors de leur identification (`0` pour le détecter) |
| `--model-size` | Modèle, p. ex. `small` ou `large-v2` (consultez [Moteurs](/fr/reference/engines/#modèle)) |
| `--compute-type` | `int8`, `float16` ou `float32` |
| `--batch-size` | Taille de lot |
| `--cpu` | Exécuter sur le CPU |

**Options de l’API Whisper**

| Option | Description |
| --- | --- |
| `--openai-model` | Modèle de transcription : `whisper-1`, `gpt-transcribe` ou `gpt-4o-transcribe-diarize` |

Exécutez `uv run src/cli.py transcribe --help` pour voir toutes les options et leurs valeurs.

## Sortie et code de retour

La progression est affichée sur la sortie d’erreur standard (masquez-la avec `--quiet`), et le texte de la transcription d’un seul fichier sur la sortie standard. La commande se termine avec le code `1` si une transcription échoue.

Les clés API sont celles configurées dans l’application, ou les variables d’environnement `OPENAI_API_KEY`, `GOOGLE_API_KEY` et `HF_TOKEN` (pour identifier les locuteurs).
