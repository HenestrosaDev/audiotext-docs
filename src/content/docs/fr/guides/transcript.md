---
title: La transcription
description: Lisez, recherchez, corrigez, révisez, copiez et exportez une transcription, et regardez ou exportez les vidéos avec leurs sous-titres.
sidebar:
  order: 3
---

Sélectionnez une transcription dans l’[historique](/fr/guides/history/) pour l’ouvrir. La barre d’outils alterne entre quatre modes, **Sous-titres**, **Texte brut**, **Résumé** et **Demander**, et propose le bouton **Traduire** et le menu `⋯`.

La transcription s’affiche dans une carte titrée avec sa langue. Les boutons de son en-tête permettent d’y rechercher et remplacer, de la copier, de l’exporter et de la **Transcrire à nouveau** (après confirmation, car les corrections de son texte sont perdues).

## Sous-titres

Affiche la transcription découpée en sous-titres de la vidéo, avec le début et la fin de chacun et, si les locuteurs ont été identifiés, son locuteur. Leur longueur suit les [préférences des sous-titres](/fr/reference/preferences/#sous-titres).

Par défaut, les temps sont affichés à la milliseconde, comme dans les sous-titres (`00:01:05,900 – 00:01:09,350`). Pour les simplifier (`01:05 – 01:09`), décochez **Horodatages précis (HH:MM:SS,mmm)** dans le menu `⋯`.

Les horodatages ne sont disponibles qu’avec **WhisperX** et les modèles `whisper-1` et `gpt-4o-transcribe-diarize` de l’**API Whisper**. Sans eux, la transcription ne peut pas être lue sous-titre par sous-titre ; utilisez plutôt le mode **Texte brut**.

### Lisez l’audio

- **Cliquez sur un sous-titre** pour lire l’audio à partir de là. Le sous-titre en cours de lecture est surligné et maintenu au milieu du texte. Avec le minutage par mot, chaque mot est aussi surligné.
- Utilisez la barre du lecteur pour lire, mettre en pause, aller à n’importe quel endroit et changer la **vitesse**, de `0.5×` à `2×`, en conservant la hauteur des voix.
- Raccourcis clavier : `Espace` lit ou met en pause, et `←`/`→` reculent ou avancent de 5 secondes.

Si le fichier source a été déplacé ou supprimé, l’audio n’est pas disponible, mais le texte l’est. Les enregistrements du microphone sont conservés par Audiotext, ils peuvent donc toujours être lus.

![Une transcription en cours de lecture, avec le segment actuel surligné](/screenshots/transcript.png)

### Regardez les vidéos avec sous-titres

Les transcriptions de vidéos affichent la vidéo au-dessus du texte. Son menu permet d’**Afficher les sous-titres sur la vidéo** et d’en choisir la **Taille** (petite, moyenne ou grande), la **Position** (en bas ou en haut) et le **Style** (fond sombre ou contour). Si la transcription a des [traductions](/fr/guides/summary-and-translation/#traduction), le menu permet aussi de choisir si les sous-titres affichent la **Transcription** ou la **Traduction** dans une langue.

## Recherchez et remplacez

Appuyez sur `Ctrl+F` (`⌘F` sous macOS), ou cliquez sur la loupe de l’en-tête, pour ouvrir la fenêtre de recherche et de remplacement dans le texte sur lequel vous travaillez : la transcription ou sa traduction. Elle trouve le texte pendant que vous le tapez (les horodatages et les locuteurs ne sont pas recherchés) et indique le nombre d’occurrences.

- `Entrée` et `Maj+Entrée`, ou les flèches, passent à l’occurrence suivante et précédente.
- **Remplacer** remplace l’occurrence actuelle, et **Tout remplacer** toutes, p. ex. un nom mal orthographié. Cochez **Respecter la casse** pour ne trouver que le texte avec les mêmes majuscules.
- La fenêtre n’est pas modale : vous pouvez lire et écouter le texte pendant qu’elle est ouverte. **Garder au premier plan** la garde au-dessus de la fenêtre principale.
- `Échap` la ferme.

## Corrigez la transcription

Pour corriger la transcription en conservant ses horodatages (utilisés par les sous-titres et la lecture), utilisez la fenêtre [Rechercher et remplacer](#recherchez-et-remplacez) ou faites un clic droit sur un sous-titre :

- **Lire à partir d’ici** : le lit.
- **Copier** : copie son texte.
- **Modifier le texte…** : change son texte.
- **Renommer les locuteurs…** : donne un nom à chaque locuteur (`SPEAKER_00` → `Anne`). Donner le même nom à deux locuteurs les fusionne. Également dans le menu `⋯`.

Les mots qui ne changent pas conservent leur minutage, ils sont donc toujours surlignés pendant la lecture.

## Révisez les mots peu fiables

Les mots dont le moteur est le moins sûr sont soulignés, pour que vous sachiez où relire en premier. WhisperX note chaque mot lorsqu’il le minute (**Minutage par mot**, activé par défaut), et le modèle `whisper-1` de l’API Whisper note chaque segment : ses segments sont donc soulignés en entier.

Une barre au-dessus du texte indique combien de mots restent à revoir (p. ex. `3 sur 12 à revoir`) :

- Ses flèches, ou `Ctrl+J` et `Maj+Ctrl+J` (`⌘J` et `⇧⌘J` sous macOS), passent au mot suivant et précédent, et y déplacent le lecteur. Avec **Lecture automatique**, chaque mot est lu avec un peu de contexte autour.
- `Entrée` accepte tel quel le mot atteint et passe au suivant. **Accepter les restants** accepte tous les mots restants, et **Annuler** annule la dernière révision.
- Cliquez sur un mot pour le corriger sur place : tapez le bon texte et appuyez sur `Entrée` (ou **Accepter** sans le modifier). **Réécouter** (`Ctrl+R`, `⌘R` sous macOS) le relit, et `Échap` ferme.
- **Seulement les signalés** n’affiche que les sous-titres contenant des mots à revoir.
- Les mots sont aussi marqués sous la position de l’audio. Cliquez sur une marque pour aller à son mot.

Quand tous sont revus, **Revoir à nouveau les mots acceptés** fait revenir les mots que vous avez acceptés. Les mots corrigés restent revus.

Les mots sont soulignés quand leur note est inférieure à 40 %. Choisissez un autre seuil, de 20 % à 70 %, dans `⋯` → **Seuil de faible confiance**, ou avec **Ajuster le seuil** dans la barre. Pour ne plus les souligner et masquer la barre, décochez **Surligner les mots peu fiables** dans le menu `⋯`.

Si une transcription n’a pas de notes, le menu `⋯` indique pourquoi : **Activez « Minutage par mot » et retranscrivez-le**, **Aucun modèle d’alignement pour sa langue**, **Retranscrivez-le pour noter ses mots** (elle a été faite avant que les mots ne soient notés) ou **Seuls WhisperX et whisper-1 notent les mots**.

## Texte brut

Le mode **Texte brut** permet de modifier librement le texte, comme dans un éditeur de texte. Les modifications sont enregistrées automatiquement. La transcription conserve le texte original avec ses horodatages : les sous-titres n’utilisent donc pas les modifications du texte brut.

## Copiez et exportez

Le bouton de copie de l’en-tête copie le texte de la transcription.

Le bouton d’export (ou `Ctrl+S`, `⌘S` sous macOS) l’enregistre au format :

| Format | Contenu |
| --- | --- |
| Document Word (`.docx`) | Comme le Markdown, prêt à modifier ou à imprimer |
| JSON (`.json`) | Le texte, les segments avec leurs horodatages, mots et locuteurs, et le résumé, s’il existe |
| Markdown (`.md`) | Le résumé, s’il existe, et le texte en paragraphes avec l’horodatage et le locuteur de chacun |
| Sous-titres (`.srt`) | Sous-titres pour les lecteurs vidéo |
| Sous-titres stylisés (`.ass`) | Sous-titres avec une couleur par locuteur, pour les lecteurs et les éditeurs vidéo |
| Sous-titres web (`.vtt`) | Sous-titres pour le web |
| Tableau (`.tsv`) | Une ligne par segment, avec son début et sa fin (en millisecondes) et son texte |
| Texte brut (`.txt`) | Le texte |

Les sous-titres et le tableau nécessitent des horodatages. Les [traductions](/fr/guides/summary-and-translation/#sous-titres-et-export) et le [résumé](/fr/guides/summary-and-translation/#résumé) s’exportent depuis leurs propres panneaux.

### Exportez la vidéo avec ses sous-titres

Pour partager une vidéo là où les fichiers de sous-titres ne peuvent pas être chargés (p. ex. un réseau social), choisissez **Vidéo avec sous-titres (.mp4)…** dans le menu d’export de la transcription ou d’une traduction. Audiotext crée une copie de la vidéo avec les sous-titres dessinés dessus, tels qu’ils s’affichent dans l’application : avec leur taille, leur position et leur style (consultez [Regardez les vidéos avec sous-titres](#regardez-les-vidéos-avec-sous-titres)).

Elle est créée en arrière-plan, et l’état affiche sa progression. Pour l’annuler, choisissez **Arrêter l'ajout des sous-titres à la vidéo** dans le même menu. La copie est un fichier MP4 (vidéo H.264 et audio AAC), et la vidéo originale n’est pas modifiée.

Si aucune police de votre système ne contient certains caractères des sous-titres, ils sont dessinés sous forme de carrés, et Audiotext les liste à la fin. Consultez [Dépannage](/fr/help/troubleshooting/#la-vidéo-avec-sous-titres-affiche-des-carrés).

## Renommez, étiquetez et ajoutez des notes

L’en-tête de la transcription affiche son nom, sa source, sa date et son étiquette. Double-cliquez sur le nom pour la renommer, cliquez sur l’étiquette pour la modifier ou cliquez sur **Ajouter une note** pour écrire une note. Cliquez sur la note, ou sur son crayon, pour la modifier, et sur sa corbeille pour la supprimer.

Le menu `⋯` propose aussi ces options, et ouvre le dossier du fichier source ou le **dossier des fichiers enregistrés**. D’autres options se trouvent dans l’[historique](/fr/guides/history/).
