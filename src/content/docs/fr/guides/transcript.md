---
title: La transcription
description: Lisez, recherchez, corrigez, copiez et exportez une transcription, et regardez les vidéos avec leurs sous-titres.
sidebar:
  order: 3
---

Sélectionnez une transcription dans l’[historique](/fr/guides/history/) pour l’ouvrir. La barre d’outils alterne entre trois modes, **Transcription**, **Texte brut** et **Résumé**, et propose les boutons **Traduire**, **Copier** et **Exporter**.

## Transcription

Affiche chaque phrase avec son horodatage et, si les locuteurs ont été identifiés, son locuteur.

Les horodatages ne sont disponibles qu’avec **WhisperX** et les modèles `whisper-1` et `gpt-4o-transcribe-diarize` de l’**API Whisper**. Sans eux, la transcription ne peut pas être lue phrase par phrase ; utilisez plutôt le mode **Texte brut**.

### Lisez l’audio

- **Cliquez sur une phrase** pour lire l’audio à partir de là. La phrase en cours de lecture est surlignée, et le texte suit la lecture. Avec le minutage par mot, chaque mot est aussi surligné.
- Utilisez la barre du lecteur pour lire, mettre en pause, aller à n’importe quel endroit et changer la **vitesse**, de `0.5×` à `2×`, en conservant la hauteur des voix.
- Raccourcis clavier : `Espace` lit ou met en pause, et `←`/`→` reculent ou avancent de 5 secondes.

Si le fichier source a été déplacé ou supprimé, l’audio n’est pas disponible, mais le texte l’est. Les enregistrements du microphone sont conservés par Audiotext, ils peuvent donc toujours être lus.

![Une transcription en cours de lecture, avec la phrase actuelle surlignée](/screenshots/transcript.png)

### Regardez les vidéos avec sous-titres

Les transcriptions de vidéos affichent la vidéo au-dessus du texte. Son menu permet d’**Afficher les sous-titres sur la vidéo** et d’en choisir la **Taille** (petite, moyenne ou grande), la **Position** (en bas ou en haut) et le **Style** (fond sombre ou contour).

### Recherchez

Appuyez sur `Ctrl+F` (`⌘F` sous macOS) et tapez. `Entrée` et `Maj+Entrée` passent à l’occurrence suivante et précédente, et `Échap` efface la recherche.

## Corrigez la transcription

Pour corriger la transcription en conservant ses horodatages (utilisés par les sous-titres et la lecture), utilisez les options du menu `⋯` ou faites un clic droit sur une phrase :

- **Rechercher et remplacer…** : remplace un mot ou une expression dans toute la transcription, p. ex. un nom mal orthographié. Affiche le nombre d’occurrences avant de remplacer, et peut **Respecter la casse**.
- **Renommer les locuteurs…** : donne un nom à chaque locuteur (`SPEAKER_00` → `Anne`). Donner le même nom à deux locuteurs les fusionne.
- **Modifier le texte…** : faites un clic droit sur une phrase pour changer son texte.
- **Lire à partir d’ici** : faites un clic droit sur une phrase pour la lire.

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
| Tableau (`.tsv`) | Une ligne par phrase, avec son début et sa fin (en millisecondes) et son texte |
| JSON (`.json`) | Le texte, les segments avec leurs horodatages, mots et locuteurs, et le résumé, s’il existe |

Les sous-titres et le tableau nécessitent des horodatages.

## Renommez, étiquetez et ajoutez des notes

L’en-tête de la transcription affiche son nom, sa source, sa date et son étiquette. Double-cliquez sur le nom pour la renommer, cliquez sur l’étiquette pour la modifier ou cliquez sur **Ajouter une note** pour écrire une note. D’autres options se trouvent dans l’[historique](/fr/guides/history/).
