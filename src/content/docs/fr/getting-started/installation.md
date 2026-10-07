---
title: Installation
description: Téléchargez Audiotext pour Windows, macOS ou Linux et ouvrez-le pour la première fois.
sidebar:
  order: 1
---

Audiotext est une application de bureau pour **Windows**, **macOS** et **Linux**. Elle transcrit en texte l’audio de fichiers, de vidéos YouTube et d’enregistrements du microphone, et peut le traduire, le résumer et le sous-titrer.

## Téléchargez l’application

Téléchargez le fichier correspondant à votre système depuis la [dernière version](https://github.com/HenestrosaDev/audiotext/releases/latest) sur GitHub :

| Système | Fichier |
| --- | --- |
| Windows (64 bits) | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 ou ultérieur (Apple Silicon) | `Audiotext-<version>-macos-arm64.dmg` |
| Linux (x86_64) | `Audiotext-<version>-linux-x86_64.tar.gz` |

L’application inclut tout ce dont elle a besoin, FFmpeg compris.

### Windows

Lancez le programme d’installation et suivez les étapes. Il ne nécessite pas de droits d’administrateur. Si vous avez un GPU NVIDIA, cochez l’option d’utilisation du GPU NVIDIA (CUDA) : le programme d’installation télécharge alors le module GPU, qui rend WhisperX bien plus rapide. Le programme d’installation n’est pas signé : Windows SmartScreen peut donc afficher un avertissement. Affichez les informations complémentaires, puis choisissez de l’exécuter quand même.

### macOS

Ouvrez le fichier `.dmg` et faites glisser **Audiotext** dans le dossier **Applications**. L’application n’est pas notarisée par Apple : macOS la bloque donc à la première ouverture. Allez dans **Réglages Système** → **Confidentialité et sécurité** et cliquez sur **Ouvrir quand même** à côté du message concernant Audiotext. Sous macOS, WhisperX s’exécute sur le CPU, car CUDA n’y est pas disponible. Les Mac Intel ne sont pas pris en charge, car PyTorch ne les prend plus en charge.

### Linux

Extrayez l’archive et lancez le programme d’installation depuis un terminal :

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

Il installe Audiotext pour votre utilisateur et l’ajoute au menu des applications (il peut aussi être lancé avec la commande `audiotext`). S’il détecte un GPU NVIDIA, il propose de télécharger le module GPU. Lancez `./install.sh --gpu` ou `./install.sh --cpu` pour choisir sans question, et `./install.sh --uninstall` pour le désinstaller (vos réglages sont conservés).

:::tip
Le module GPU pèse environ 2 Go sous Windows et 4 Go sous Linux : il n’est utile qu’avec un GPU NVIDIA. Sans lui, WhisperX s’exécute sur le CPU, et l’API Whisper et l’API Google fonctionnent de la même façon. Pour passer plus tard de la version CPU à la version GPU, ou inversement, réinstallez l’application et choisissez l’autre option.
:::

:::note
La première fois que vous transcrivez avec **WhisperX** (le moteur par défaut), son modèle est téléchargé. Il pèse de ~75 Mo pour `tiny` à ~3 Go pour `large-v2`, cela peut donc prendre un moment. Les transcriptions suivantes démarrent immédiatement.
:::

## Configuration requise

- **WhisperX** s’exécute sur votre ordinateur. Il fonctionne sur n’importe quel CPU, mais il est bien plus rapide sur un GPU NVIDIA avec CUDA. Consultez [Moteurs](/fr/reference/engines/) pour choisir un modèle adapté à votre matériel.
- L’**API Whisper** et l’**API Google** s’exécutent sur des serveurs distants : elles nécessitent une connexion Internet, mais pas de matériel puissant.
- Pour transcrire depuis le microphone, votre système doit détecter un périphérique d’entrée.
- Sous Linux, l’enregistrement et la lecture audio nécessitent [PortAudio](https://www.portaudio.com/) (`sudo apt install libportaudio2` sous Ubuntu ou Debian).

## Mettez à jour l’application

Lorsqu’une nouvelle version sort, Audiotext affiche un bouton **La version … est disponible** dans la barre supérieure. Cliquez dessus pour ouvrir la page de la version, téléchargez le fichier de votre système et installez-le comme la première fois : lancez le nouvel installateur sous Windows, faites glisser la nouvelle application dans le dossier **Applications** sous macOS, ou lancez le `install.sh` de la nouvelle archive sous Linux. La version précédente est remplacée, et vos réglages et votre historique sont conservés, car ils sont enregistrés dans votre [dossier de configuration utilisateur](/fr/reference/files-and-data/#dossier-de-configuration-utilisateur). Si vous utilisez le module GPU, choisissez-le de nouveau lors de l’installation.

Pour vérifier vous-même s’il existe une nouvelle version, ouvrez **Préférences** → **À propos** → **Rechercher des mises à jour**. Pour ne plus vérifier à l’ouverture de l’application, désactivez **Général** → **Mises à jour**.

## Désinstallez l’application

- **Windows** : désinstallez-la depuis **Paramètres** → **Applications**, comme toute autre application.
- **macOS** : faites glisser **Audiotext** du dossier **Applications** vers la Corbeille.
- **Linux** : lancez `./install.sh --uninstall` depuis le dossier de l’archive. Si vous ne l’avez plus, supprimez `~/.local/share/audiotext`, `~/.local/bin/audiotext` et `~/.local/share/applications/audiotext.desktop`.

Vos réglages, votre historique et vos enregistrements sont conservés, ils seront donc toujours là si vous la réinstallez. Pour tout supprimer :

1. Avant de la désinstaller, supprimez vos clés API dans **Préférences** → **Clés API** (cliquez sur **Modifier…** et laissez le champ vide), car elles sont conservées dans le gestionnaire d’identifiants de votre système.
2. Supprimez votre [dossier de configuration utilisateur](/fr/reference/files-and-data/#dossier-de-configuration-utilisateur).
3. Supprimez les [modèles](/fr/reference/files-and-data/#modèles) téléchargés.

## Changez la langue de l’interface

Audiotext utilise la langue de votre système si elle est disponible. Pour la changer, ouvrez les **Préférences** (l’engrenage en haut à droite) et choisissez une langue dans **Général** → **Langue de l’interface**.

## Exécutez-le depuis le code source

Si vous voulez exécuter le code le plus récent ou contribuer, consultez [Contribuer](/fr/help/contributing/) pour préparer le projet avec Python.

## Étapes suivantes

- [Votre première transcription](/fr/getting-started/first-transcription/) présente la fenêtre et les étapes pour transcrire.
