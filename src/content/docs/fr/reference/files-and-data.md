---
title: Fichiers et données
description: Où Audiotext stocke ses réglages, son historique, ses enregistrements et ses clés API, et les variables d’environnement qu’il lit.
sidebar:
  order: 5
---

Audiotext conserve vos données sur votre ordinateur. Rien n’est envoyé nulle part, sauf si vous utilisez un moteur distant (l’API Whisper ou l’API Google) ou un fournisseur d’IA autre qu’Ollama.

## Dossier de configuration utilisateur

Les réglages, l’historique et les enregistrements sont stockés dans votre dossier de configuration utilisateur : ils sont donc conservés lors des mises à jour.

| Système | Dossier |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext` (ou `$XDG_CONFIG_HOME/audiotext`) |

Il contient :

- `config.ini` : vos réglages. Supprimez-le pour rétablir les valeurs par défaut.
- `history.json` : vos transcriptions, avec leurs résumés, traductions et corrections.
- `media/` : les enregistrements du microphone et l’audio téléchargé depuis des URL, pour pouvoir les réécouter plus tard. Ils sont supprimés lorsque leur transcription est supprimée de l’historique.

Pour utiliser un autre dossier, p. ex. pour une installation portable, définissez la variable d’environnement `AUDIOTEXT_CONFIG_DIR`.

:::note
Le fichier `config.ini` du dossier de l’application contient les réglages par défaut et n’est jamais modifié.
:::

## Clés API

Les clés API et le jeton Hugging Face sont conservés dans le gestionnaire d’identifiants de votre système :

- **macOS** : le Trousseau.
- **Windows** : le Gestionnaire d’identification.
- **Linux** : le Secret Service (p. ex. GNOME Keyring ou KWallet).

Si le système n’en a pas (p. ex. un serveur sans bureau), elles sont stockées dans un fichier `.env` du dossier de configuration, lisible uniquement par votre utilisateur. Les clés que les versions précédentes stockaient dans ce fichier sont déplacées vers le gestionnaire d’identifiants à la première ouverture de l’application.

Les clés ne servent **qu’à** envoyer des requêtes à l’API de chaque service.

## Variables d’environnement

Les variables d’environnement portant le nom des clés sont prioritaires sur celles configurées dans l’application :

| Variable | Service |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI (API Whisper, résumés, traductions) |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text et Google Translate |
| `HF_TOKEN` | Hugging Face (identification des locuteurs) |
| `AUDIOTEXT_CONFIG_DIR` | Le dossier des réglages et de l’historique |

## Modèles

Les modèles de WhisperX et de l’identification des locuteurs sont téléchargés lors de leur première utilisation et mis en cache par Hugging Face dans `~/.cache/huggingface` (ou `%USERPROFILE%\.cache\huggingface` sous Windows). Supprimez ce dossier pour libérer l’espace qu’ils occupent.
