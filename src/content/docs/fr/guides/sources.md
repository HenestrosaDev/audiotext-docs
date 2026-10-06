---
title: Sources audio
description: Transcrivez des fichiers, des vidéos YouTube et des liens, des enregistrements du microphone, des dossiers et des dossiers surveillés.
sidebar:
  order: 1
---

Audiotext transcrit à partir de quatre types de sources, que vous choisissez dans la barre supérieure, sous **Nouvelle transcription**.

## Fichier

Transcrit un fichier audio ou vidéo. Cliquez sur **Choisir un fichier…** ou déposez le fichier dans la fenêtre. L’explorateur de fichiers affiche **Tous les fichiers pris en charge** par défaut ; vous pouvez n’afficher que les **Fichiers audio** ou les **Fichiers vidéo**. Consultez [Formats et langues](/fr/reference/formats-and-languages/) pour connaître les formats pris en charge.

Un seul fichier peut être ajouté à la fois. Pour transcrire plusieurs fichiers, utilisez la source [Dossier](#dossier).

## URL

Transcrit une **vidéo YouTube** ou un **lien direct vers un fichier audio ou vidéo** (par exemple, l’épisode d’un podcast). Collez l’URL (avec **Coller** ou `Ctrl+V`) et cliquez sur **Continuer**. L’URL doit commencer par `http://` ou `https://`.

```text
https://youtu.be/dQw4w9WgXcQ
https://example.com/podcast/episode-12.mp3
```

L’audio est d’abord téléchargé : une connexion Internet est donc nécessaire.

## Microphone

Enregistre votre voix ou une réunion et la transcrit. L’enregistrement est conservé dans votre historique pour que vous puissiez le réécouter plus tard.

1. Choisissez le microphone dans la liste (cliquez sur le bouton d’actualisation si vous venez de le brancher).
2. Cliquez sur le bouton d’enregistrement (ou appuyez sur `Ctrl+Entrée`, `⌘↩` sous macOS) pour commencer à enregistrer. L’indicateur de niveau vous dit si le son est **Trop faible**, à un **Bon niveau** ou **Trop fort**.
3. Cliquez à nouveau dessus pour arrêter et transcrire.

### Texte en direct

Avec **WhisperX**, activez **Afficher le texte pendant l’enregistrement** dans la carte **Texte en direct** pour voir un brouillon du texte pendant que vous parlez. Le brouillon est écrit par un **Modèle en direct** rapide (`small` par défaut). À l’arrêt, l’enregistrement entier est transcrit à nouveau avec le modèle du moteur, plus précis, et le brouillon est remplacé.

![Le texte en direct pendant l'enregistrement au microphone](/screenshots/live-text.png)

:::caution
Votre système doit détecter un périphérique d’entrée et autoriser l’application à l’utiliser. Sinon, **Aucun microphone trouvé** s’affiche. Sous macOS, autorisez Audiotext dans **Réglages Système** → **Confidentialité et sécurité** → **Microphone**.
:::

### Enregistrer l'audio de votre ordinateur

Pour transcrire ce que votre ordinateur lit (un appel vidéo, un webinaire, une vidéo qui ne peut pas être téléchargée), enregistrez-le depuis un périphérique qui envoie le son des haut-parleurs vers une entrée. Configurez-le une fois, cliquez sur le bouton d'actualisation et choisissez-le dans la liste des microphones. Tout ce que l'ordinateur lit est enregistré, notifications comprises, mais pas votre voix.

- **Windows** : exécutez `mmsys.cpl` et, dans l'onglet **Enregistrement**, faites un clic droit sur la liste pour afficher les périphériques désactivés et activez **Mixage stéréo**. Si votre carte son ne l'a pas, installez [VB-CABLE](https://vb-audio.com/Cable/), définissez **CABLE Input** comme périphérique de sortie et choisissez **CABLE Output** dans Audiotext. Pour continuer à entendre le son, cochez **Écouter ce périphérique** dans les propriétés de **CABLE Output**.
- **macOS** : installez [BlackHole](https://existential.audio/blackhole/) (`brew install blackhole-2ch`) et choisissez **BlackHole 2ch** dans Audiotext. Pour continuer à entendre le son, créez un [périphérique à sortie multiple](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device) avec vos haut-parleurs et BlackHole, et définissez-le comme périphérique de sortie.
- **Linux** (PulseAudio ou PipeWire) : choisissez **pulse** dans Audiotext et lancez l'enregistrement. Puis, dans l'onglet **Enregistrement** de `pavucontrol`, remplacez la source d'Audiotext par le moniteur de vos haut-parleurs.

## Dossier

Transcrit tous les fichiers audio et vidéo d’un dossier **et de ses sous-dossiers**. Cliquez sur **Choisir un dossier…** ou déposez le dossier dans la fenêtre. Audiotext vous indique combien de fichiers il a trouvés.

La transcription de chaque fichier est enregistrée à côté de celui-ci (ou dans un autre dossier choisi dans la carte **Sortie**), avec le même nom et l’extension de chaque **type de fichier** sélectionné. Par exemple, avec `.txt` et `.vtt` :

```text
files-to-transcribe
├── paranoid-android.mp3
├── paranoid-android.txt
├── paranoid-android.vtt
└── movies
    ├── mulholland-dr.avi
    ├── mulholland-dr.txt
    └── mulholland-dr.vtt
```

Les fichiers qui ont déjà une transcription sont **ignorés**, sauf si vous activez **Écraser les fichiers existants**. Ainsi, si vous ajoutez un fichier au dossier et le transcrivez à nouveau, seul le nouveau fichier est transcrit.

Si un fichier ne peut pas être transcrit, les autres le sont quand même, et la vue du dossier indique lesquels ont échoué et pourquoi. **Transcrire à nouveau** relance le dossier, et le bouton de dossier ouvre le dossier des fichiers enregistrés.

### Surveillez un dossier

Activez **Surveiller le dossier** dans la carte **Dossier** pour continuer à transcrire les fichiers ajoutés au dossier (ou à ses sous-dossiers) jusqu’à ce que vous cliquiez sur **Arrêter la surveillance**. C’est pratique pour les enregistrements d’un dictaphone ou d’un outil de réunion copiés dans un dossier.

- Les fichiers que le dossier contient déjà sont ignorés. Pour les transcrire, transcrivez le dossier sans le surveiller.
- Un fichier est transcrit une fois entièrement copié (lorsque sa taille cesse de changer) : les gros fichiers ne sont donc pas transcrits à moitié.
- Les erreurs n’arrêtent pas la surveillance.

## La file d’attente

Vous pouvez configurer une nouvelle transcription pendant qu’une autre est en cours : le bouton devient **Ajouter à la file d’attente**, et elle démarre quand la transcription en cours se termine. Les transcriptions en attente et en cours apparaissent dans l’historique.
