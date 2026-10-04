---
title: A túa primeira transcrición
description: Un percorrido pola xanela de Audiotext e os pasos para transcribir un ficheiro de audio ou vídeo.
sidebar:
  order: 2
---

## A xanela

A xanela de Audiotext ten tres partes:

- **A barra superior**: os botóns para comezar unha **Nova transcrición** desde un **Ficheiro**, un **URL**, o **Micrófono** ou un **Cartafol**, o estado da aplicación e a roda dentada que abre as [Preferencias](/gl/reference/preferences/). O botón da esquerda mostra ou oculta o historial.
- **O historial**, á esquerda: todas as túas transcricións, que podes buscar, fixar, agrupar e renomear. Consulta [Historial](/gl/guides/history/).
- **A área principal**: a orixe que estás a configurar, o progreso dunha transcrición ou a transcrición que seleccionaches no historial.

![As partes da xanela de Audiotext: a barra superior, o historial e a área principal](/screenshots/window.png)

Ao abrir a aplicación, a área principal pregunta **Que queres transcribir?** e mostra unha tarxeta para cada tipo de orixe.

:::tip
Solta un ficheiro ou un cartafol en calquera parte da xanela para transcribilo.
:::

## Transcribe un ficheiro

1. Fai clic en **Ficheiro** na barra superior (ou preme `Ctrl+O`, `⌘O` en macOS) e escolle un ficheiro de audio ou vídeo, ou sóltao na xanela. Despois, fai clic en **Continuar**.
2. Revisa a configuración. Os valores predeterminados funcionan ben para a maioría dos audios:
   - **Motor**: WhisperX, que se executa no teu ordenador. Escolle un **Modelo** máis pequeno (como `small`) se o teu ordenador é lento.
   - **Idioma**: o **Idioma do audio** detéctase automaticamente. Escólleo se o coñeces, para evitar erros. Para traducir, escolle outro **Idioma da transcrición**.
   - **Contexto** e **Opcións**: pistas e funcións opcionais, como identificar os falantes.

   Consulta [Configuración da transcrición](/gl/guides/transcription-settings/) para velas todas.
3. Fai clic en **Comezar a transcrición** (ou preme `Ctrl+Enter`, `⌘↩` en macOS).

Mentres traballa, móstrase o progreso de cada paso (cargar o modelo, transcribir, aliñar as palabras…). Mentres tanto, podes seguir usando Audiotext: o resultado gárdase no teu historial e ábrese cando está listo. Para cancelala, fai clic en **Cancelar** ou preme `Esc`.

Se hai outra transcrición en curso, o botón pasa a ser **Engadir á cola**, e a nova comeza cando remata a actual.

## Le e usa o resultado

Cando remata, ábrese a transcrición:

- Fai clic nunha frase para reproducir o audio desde aí.
- Cambia entre **Transcrición**, **Texto plano** e **Resumo**.
- Usa **Traducir**, **Copiar** e **Exportar** para traducila, copiala ou gardala como ficheiro.

Consulta [A transcrición](/gl/guides/transcript/) para saber todo o que podes facer con ela.

## Atallos de teclado

| Atallo | Acción |
| --- | --- |
| `Ctrl+Enter` / `⌘↩` | Comezar a transcrición, ou comezar e deter a gravación |
| `Ctrl+O` / `⌘O` | Escoller un ficheiro (ou un cartafol, na orixe de cartafol) |
| `Ctrl+S` / `⌘S` | Exportar a transcrición que se mostra |
| `Ctrl+F` / `⌘F` | Buscar na transcrición |
| `Esc` | Cancelar a transcrición en curso |
| `Espazo` | Reproducir ou pausar o audio |
| `←` / `→` | Retroceder ou avanzar 5 segundos |
