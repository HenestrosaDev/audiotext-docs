---
title: Interface en ligne de commande
description: Transcrivez, résumez et traduisez des fichiers, des dossiers et des vidéos YouTube depuis des scripts avec la ligne de commande d’Audiotext.
sidebar:
  order: 3
---

Audiotext peut aussi s’utiliser en ligne de commande, p. ex. pour transcrire depuis des scripts. Il propose trois commandes :

- `transcribe` : transcrit un fichier, les fichiers d’un dossier ou une vidéo YouTube.
- `watch` : transcrit les fichiers ajoutés à un dossier jusqu’à l’arrêt avec `Ctrl+C`.
- `check-update` : vérifie si une nouvelle version est disponible et affiche le lien pour la télécharger.

Les options non indiquées prennent les valeurs configurées dans l’application. Les transcriptions sont toujours enregistrées à côté de chaque fichier transcrit, ou dans le dossier indiqué avec `--output-dir` (où les sous-dossiers d’un dossier transcrit sont recréés).

## Lancez-la

L’application installée exécute la ligne de commande lorsqu’elle reçoit l’une de ses commandes :

| Système | Commande |
| --- | --- |
| Linux | `audiotext` (installé dans `~/.local/bin` par `install.sh`) |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | `audiotext-cli.exe`, dans le dossier d’installation d’Audiotext (`%LOCALAPPDATA%\Programs\Audiotext` par défaut) |

Si vous l’[exécutez depuis le code source](/fr/help/contributing/#préparez-le-projet), lancez plutôt `uv run src/cli.py`.

## Exemples

```bash
# Transcrire un fichier. Le texte est aussi affiché, il peut donc être redirigé
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# Transcrire les fichiers d’un dossier en identifiant les locuteurs
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transcrire une vidéo YouTube avec l’API Whisper
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transcrire une réunion avec l’API Whisper, avec ses mots-clés et son contexte
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Une réunion sur la prochaine version"

# Enregistrer les sous-titres et un document Word, le résumer et le traduire en espagnol
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# Transcrire les fichiers ajoutés à un dossier jusqu’à l’arrêt avec Ctrl+C
audiotext watch inbox/ --output-types srt
```

## Options

| Option | Description |
| --- | --- |
| `-m`, `--method` | Méthode de transcription : `whisperx`, `whisper-api` ou `google` |
| `-l`, `--language` | Langue de l’audio sous forme de code ISO 639-1 (p. ex. `fr`), ou `auto` pour la détecter (non pris en charge par Google) |
| `-t`, `--output-types` | Types de fichiers de sortie séparés par des virgules, parmi `aud`, `json`, `srt`, `txt`, `tsv`, `vtt`, `md`, `docx` et `ass` (p. ex. `txt,srt,md`) |
| `-o`, `--output-dir` | Dossier où les transcriptions sont enregistrées (par défaut : à côté de chaque fichier transcrit) |
| `--overwrite` | Écraser les transcriptions existantes |
| `-p`, `--prompt` | Le sujet de l’audio, comme son thème ou son cadre (non pris en charge par Google) |
| `-k`, `--keywords` | Noms, termes ou sigles prononcés dans l’audio, séparés par des virgules, pour qu’ils soient bien orthographiés (non pris en charge par Google) |
| `--translate` | Traduire l’audio en anglais pendant la transcription (non pris en charge par Google). Consultez `--translate-to` pour d’autres langues |
| `-q`, `--quiet` | N’afficher que les erreurs |
| `-v`, `--verbose` | Afficher les journaux pour déboguer les erreurs |
| `--version` | Afficher la version d’Audiotext |

Les types de sortie que la méthode de transcription n’enregistre pas elle-même (p. ex. `md` ou `docx`) sont exportés à partir de son résultat, comme depuis l’application. `aud` n’est enregistré que par WhisperX.

**Options de résumé et de traduction**

| Option | Description |
| --- | --- |
| `--summarize` | Résumer chaque transcription, avec ses points clés et ses chapitres, dans un fichier `.summary.md` |
| `--summary-provider` | Fournisseur du modèle de langage qui résume : `openai`, `anthropic`, `deepseek`, `gemini`, `mistral`, `grok` ou `ollama` |
| `--summary-model` | Modèle de langage qui résume |
| `--translate-to` | Traduire chaque transcription dans une langue (un code ISO 639-1), enregistrée dans ses types de fichiers de sortie (p. ex. `talk.es.srt`) |
| `--translation-provider` | Fournisseur des traductions : ceux de `--summary-provider`, `deepl` ou `google` |
| `--translation-model` | Modèle de langage qui traduit, pour les fournisseurs de modèles de langage |

Les fournisseurs et les modèles sont ceux configurés dans l’application s’ils ne sont pas indiqués. Consultez [Fournisseurs](/fr/guides/summary-and-translation/#fournisseurs).

**Options de WhisperX**

| Option | Description |
| --- | --- |
| `--diarize` | Identifier les locuteurs |
| `--speakers` | Nombre de locuteurs lors de leur identification (`0` pour le détecter) |
| `--model-size` | Modèle, p. ex. `small` ou `large-v2` (consultez [Moteurs](/fr/reference/engines/#modèle)) |
| `--compute-type` | `int8`, `float16` ou `float32` |
| `--batch-size` | Taille de lot |
| `--cpu` | Exécuter sur le CPU, au lieu d’un GPU NVIDIA ou du GPU d’un Mac |

**Options de l’API Whisper**

| Option | Description |
| --- | --- |
| `--openai-model` | Modèle de transcription : `whisper-1`, `gpt-transcribe` ou `gpt-4o-transcribe-diarize` |

Exécutez `audiotext transcribe --help` pour voir toutes les options et leurs valeurs.

## Sortie et code de retour

La progression est affichée sur la sortie d’erreur standard (masquez-la avec `--quiet`), et le texte de la transcription d’un seul fichier sur la sortie standard. La commande se termine avec le code `1` si une transcription, un résumé ou une traduction échoue, et avec `130` si elle est arrêtée avec `Ctrl+C`.

Si la clé API du fournisseur de `--summarize` ou de `--translate-to` n’est pas définie, la commande s’arrête avant de transcrire. Un résumé ou une traduction qui échoue est signalé sans perdre la transcription, qui est enregistrée quand même.

Les clés API sont celles configurées dans l’application, ou leurs [variables d’environnement](/fr/reference/files-and-data/#variables-denvironnement), comme `OPENAI_API_KEY`, `GOOGLE_API_KEY` et `HF_TOKEN` (pour identifier les locuteurs).
