---
title: Votre première transcription
description: Une visite de la fenêtre d’Audiotext et les étapes pour transcrire un fichier audio ou vidéo.
sidebar:
  order: 2
---

## La fenêtre

La fenêtre d’Audiotext comporte trois parties :

- **La barre supérieure** : les boutons pour lancer une **Nouvelle transcription** à partir d’un **Fichier**, d’une **URL**, du **Microphone** ou d’un **Dossier**, l’état de l’application et l’engrenage qui ouvre les [Préférences](/fr/reference/preferences/). Le bouton de gauche affiche ou masque l’historique.
- **L’historique**, à gauche : toutes vos transcriptions, que vous pouvez rechercher, épingler, regrouper et renommer. Consultez [Historique](/fr/guides/history/).
- **La zone principale** : la source que vous configurez, la progression d’une transcription ou la transcription sélectionnée dans l’historique.

![Les parties de la fenêtre d'Audiotext : la barre supérieure, l'historique et la zone principale](/screenshots/window.png)

À l’ouverture de l’application, la zone principale demande **Que voulez-vous transcrire ?** et affiche une carte pour chaque type de source.

:::tip
Déposez un fichier ou un dossier n’importe où dans la fenêtre pour le transcrire.
:::

## Transcrivez un fichier

1. Cliquez sur **Fichier** dans la barre supérieure (ou appuyez sur `Ctrl+O`, `⌘O` sous macOS) et choisissez un fichier audio ou vidéo, ou déposez-le dans la fenêtre. Cliquez ensuite sur **Continuer**.
2. Vérifiez les paramètres. Les valeurs par défaut conviennent à la plupart des audios :
   - **Moteur** : WhisperX, qui s’exécute sur votre ordinateur. Choisissez un **Modèle** plus petit (comme `small`) si votre ordinateur est lent.
   - **Langue** : la **Langue de l’audio** est détectée automatiquement. Choisissez-la si vous la connaissez, pour éviter les erreurs. Pour traduire, choisissez une autre **Langue de la transcription**.
   - **Contexte** et **Options** : des indications et des fonctions facultatives, comme l’identification des locuteurs.

   Consultez [Paramètres de transcription](/fr/guides/transcription-settings/) pour tous les voir.
3. Cliquez sur **Lancer la transcription** (ou appuyez sur `Ctrl+Entrée`, `⌘↩` sous macOS).

La progression de chaque étape (chargement du modèle, transcription, alignement des mots…) s’affiche pendant le traitement. Vous pouvez continuer à utiliser Audiotext entre-temps : le résultat est enregistré dans votre historique et s’ouvre lorsqu’il est prêt. Pour l’annuler, cliquez sur **Annuler** ou appuyez sur `Échap`.

Si une autre transcription est en cours, le bouton devient **Ajouter à la file d’attente**, et la nouvelle démarre quand la transcription en cours se termine.

## Lisez et utilisez le résultat

Une fois terminée, la transcription s’ouvre :

- Cliquez sur un segment pour lire l’audio à partir de là.
- Passez de **Transcription** à **Texte brut** ou **Résumé**.
- Utilisez **Traduire**, **Copier** et **Exporter** pour la traduire, la copier ou l’enregistrer dans un fichier.

Consultez [La transcription](/fr/guides/transcript/) pour découvrir tout ce que vous pouvez en faire.

## Raccourcis clavier

| Raccourci | Action |
| --- | --- |
| `Ctrl+Entrée` / `⌘↩` | Lancer la transcription, ou démarrer et arrêter l’enregistrement |
| `Ctrl+O` / `⌘O` | Choisir un fichier (ou un dossier, dans la source Dossier) |
| `Ctrl+S` / `⌘S` | Exporter la transcription affichée |
| `Ctrl+F` / `⌘F` | Rechercher dans la transcription |
| `Échap` | Annuler la transcription en cours |
| `Espace` | Lire ou mettre en pause l’audio |
| `←` / `→` | Reculer ou avancer de 5 secondes |
