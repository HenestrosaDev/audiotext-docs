---
title: La transcription
description: Lisez, recherchez, corrigez, copiez et exportez une transcription, et regardez les vidéos avec leurs sous-titres.
sidebar:
  order: 3
---

Sélectionnez une transcription dans l’[historique](/fr/guides/history/) pour l’ouvrir. La barre d’outils alterne entre trois modes, **Transcription**, **Texte brut** et **Résumé**, et propose les boutons **Traduire**, **Copier** et **Exporter**.

## Transcription

Affiche chaque segment de la transcription (une phrase ou une partie d’une longue phrase) avec son début et sa fin et, si les locuteurs ont été identifiés, son locuteur.

Par défaut, les temps sont simplifiés (`01:05 – 01:09`). Pour les voir à la milliseconde, comme dans les sous-titres (`00:01:05,900 – 00:01:09,350`), cochez **Horodatages précis (00:00:01,000)** dans le menu `⋯`.

Les horodatages ne sont disponibles qu’avec **WhisperX** et les modèles `whisper-1` et `gpt-4o-transcribe-diarize` de l’**API Whisper**. Sans eux, la transcription ne peut pas être lue segment par segment ; utilisez plutôt le mode **Texte brut**.

### Lisez l’audio

- **Cliquez sur un segment** pour lire l’audio à partir de là. Le segment en cours de lecture est surligné, et le texte suit la lecture. Avec le minutage par mot, chaque mot est aussi surligné.
- Utilisez la barre du lecteur pour lire, mettre en pause, aller à n’importe quel endroit et changer la **vitesse**, de `0.5×` à `2×`, en conservant la hauteur des voix.
- Raccourcis clavier : `Espace` lit ou met en pause, et `←`/`→` reculent ou avancent de 5 secondes.

Si le fichier source a été déplacé ou supprimé, l’audio n’est pas disponible, mais le texte l’est. Les enregistrements du microphone sont conservés par Audiotext, ils peuvent donc toujours être lus.

![Une transcription en cours de lecture, avec le segment actuel surligné](/screenshots/transcript.png)

### Regardez les vidéos avec sous-titres

Les transcriptions de vidéos affichent la vidéo au-dessus du texte. Son menu permet d’**Afficher les sous-titres sur la vidéo** et d’en choisir la **Taille** (petite, moyenne ou grande), la **Position** (en bas ou en haut) et le **Style** (fond sombre ou contour). Si la transcription a une [traduction](/fr/guides/summary-and-translation/#traduction), le menu permet aussi de choisir si les sous-titres affichent la **Transcription** ou la **Traduction**.

### Recherchez

Appuyez sur `Ctrl+F` (`⌘F` sous macOS) et tapez. `Entrée` et `Maj+Entrée` passent à l’occurrence suivante et précédente, et `Échap` efface la recherche.

## Corrigez la transcription

Pour corriger la transcription en conservant ses horodatages (utilisés par les sous-titres et la lecture), utilisez les options du menu `⋯` ou faites un clic droit sur un segment :

- **Rechercher et remplacer…** : remplace un mot ou une expression dans toute la transcription, p. ex. un nom mal orthographié. Affiche le nombre d’occurrences avant de remplacer, et peut **Respecter la casse**.
- **Renommer les locuteurs…** : donne un nom à chaque locuteur (`SPEAKER_00` → `Anne`). Donner le même nom à deux locuteurs les fusionne.
- **Modifier le texte…** : faites un clic droit sur un segment pour changer son texte.
- **Lire à partir d’ici** : faites un clic droit sur un segment pour le lire.

Les mots qui ne changent pas conservent leur minutage, ils sont donc toujours surlignés pendant la lecture.

## Texte brut

Le mode **Texte brut** permet de modifier librement le texte, comme dans un éditeur de texte. Les modifications sont enregistrées automatiquement. La transcription conserve le texte original avec ses horodatages : les sous-titres n’utilisent donc pas les modifications du texte brut.

## Copiez et exportez

**Copier** copie le texte du mode actuel (la transcription, le résumé ou la traduction).

**Exporter** (ou `Ctrl+S`, `⌘S` sous macOS) enregistre la transcription au format :

| Format | Contenu |
| --- | --- |
| Texte brut (`.txt`) | Le texte |
| Markdown (`.md`) | Le résumé, s’il existe, et le texte en paragraphes avec l’horodatage et le locuteur de chacun |
| Document Word (`.docx`) | Comme le Markdown, prêt à modifier ou à imprimer |
| Sous-titres (`.srt`) | Sous-titres pour les lecteurs vidéo |
| Sous-titres web (`.vtt`) | Sous-titres pour le web |
| Tableau (`.tsv`) | Une ligne par segment, avec son début et sa fin (en millisecondes) et son texte |
| JSON (`.json`) | Le texte, les segments avec leurs horodatages, mots et locuteurs, et le résumé, s’il existe |

Les sous-titres et le tableau nécessitent des horodatages.

Si la transcription a une traduction, choisissez **Traduction** dans le même menu (ou cliquez sur le bouton d’export de la traduction) pour exporter la traduction dans les mêmes formats. Le nom du fichier inclut sa langue (par ex. `video.es.srt`), si bien que les lecteurs vidéo la chargent avec la vidéo.

## Renommez, étiquetez et ajoutez des notes

L’en-tête de la transcription affiche son nom, sa source, sa date et son étiquette. Double-cliquez sur le nom pour la renommer, cliquez sur l’étiquette pour la modifier ou cliquez sur **Ajouter une note** pour écrire une note. Cliquez sur la note, ou sur son crayon, pour la modifier, et sur sa corbeille pour la supprimer. D’autres options se trouvent dans l’[historique](/fr/guides/history/).
