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

Transcrit tous les fichiers audio et vidéo d’un dossier et, si **Inclure les sous-dossiers** est activé dans la carte **Dossier**, de ses sous-dossiers. Cliquez sur **Choisir un dossier…** ou déposez le dossier sur la fenêtre. Audiotext vous indique combien de fichiers il a trouvés. Pour exclure certains fichiers, saisissez leurs noms ou chemins, séparés par des virgules, dans **Ignorer les fichiers correspondant à** (par ex. `*.wav, drafts/*`). Les fichiers cachés sont toujours ignorés.

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

Si deux fichiers ont le même nom et une autre extension (par ex. `talk.mp3` et `talk.mp4`), leurs transcriptions gardent l’extension dans leur nom (`talk.mp3.txt` et `talk.mp4.txt`), pour qu’elles ne se remplacent pas.

Les fichiers qui ont déjà une transcription sont **ignorés** : un fichier n’est ignoré que s’il a tous les types de fichier sélectionnés, donc ajouter un type de fichier le transcrit à nouveau. Si un fichier ne peut pas être transcrit, les autres continuent de l’être.

### Les fichiers d’un dossier

La page d’un dossier dans l’historique liste ses fichiers, avec le statut, la durée et la taille de chacun et un aperçu de son texte. Recherchez-les, filtrez-les par statut (**Tous**, **Terminés**, **Échoués** ou **En attente**) et triez-les par nom, statut, durée ou taille. Les fichiers déplacés ou supprimés sont marqués **Fichier introuvable**.

- Cliquez sur un fichier pour ouvrir sa transcription, ou cliquez sur son bouton `⋯` (ou faites un clic droit dessus) pour copier son texte, l’ouvrir directement dans son export, son résumé ou sa traduction, l’afficher dans le gestionnaire de fichiers ou choisir **Retranscrire ce fichier**.
- Sélectionnez plusieurs fichiers avec `Ctrl`/`⌘` ou `Maj`, ou tous les fichiers affichés avec `Ctrl+A` / `⌘A`, et choisissez **Retranscrire**, **Exporter…** (pour les exporter ensemble dans un seul fichier TXT, Markdown ou Word) ou **Retirer de l’historique…**. `Entrée` ouvre le fichier sélectionné, et `Échap` efface la sélection.
- **Réessayer les échecs** transcrit à nouveau les fichiers en échec. **Analyser à nouveau le dossier** ne transcrit que les fichiers sans transcription, comme les nouveaux, et indique combien ont été ignorés parce qu’ils en avaient déjà une.
- Le menu `⋯` du dossier propose **Tout retranscrire…** (transcrit à nouveau tous ses fichiers, en remplaçant leurs transcriptions), **Tout exporter…** (dans un seul fichier), une option pour retirer de la liste les fichiers manquants, et les options pour ouvrir le dossier source ou le dossier des fichiers enregistrés.
- Lorsque vous modifiez les paramètres du dossier, les fichiers transcrits avec d’autres paramètres (moteur, modèle, langue…) sont indiqués, avec un bouton **Les retranscrire**.

L’en-tête indique où les fichiers sont enregistrés et renvoie au dossier source. **Modifier les paramètres** modifie les paramètres du dossier, et **Enregistrer et analyser à nouveau** transcrit avec eux les fichiers auxquels il manque une transcription.

### Surveillez un dossier

Activez **Surveiller le dossier** dans la carte **Dossier** pour continuer à transcrire les fichiers ajoutés au dossier (ou à ses sous-dossiers) jusqu’à ce que vous cliquiez sur **Arrêter la surveillance**. C’est pratique pour les enregistrements d’un dictaphone ou d’un outil de réunion copiés dans un dossier.

- Les fichiers que le dossier contient déjà sont ignorés, sauf si vous activez **Transcrire les fichiers déjà présents dans le dossier** : ceux sans transcription sont alors transcrits en premier.
- Un fichier est transcrit une fois entièrement copié (lorsque sa taille cesse de changer) : les gros fichiers ne sont donc pas transcrits à moitié.
- Les dossiers surveillés à la fermeture d’Audiotext sont de nouveau surveillés à son ouverture, en reprenant à partir des fichiers déjà vus. Les dossiers arrêtés peuvent être surveillés de nouveau avec **Reprendre la surveillance**.
- Si le dossier n’est pas disponible (par ex. sur un disque non connecté), Audiotext l’attend au lieu d’échouer.
- Pour transcrire autre chose ou enregistrer, le dossier est mis en pause (la nouvelle transcription indique **Démarrage…** jusqu’à ce qu’il le soit), puis il est de nouveau surveillé.
- Les erreurs n’arrêtent pas la surveillance, et les fichiers transcrits ensemble sont signalés dans une seule notification.

## La file d’attente

Vous pouvez configurer une nouvelle transcription pendant qu’une autre est en cours : le bouton devient **Ajouter à la file d’attente**, et elle démarre quand la transcription en cours se termine. Les transcriptions en attente et en cours apparaissent dans l’historique.
