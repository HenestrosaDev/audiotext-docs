---
title: Tu primera transcripción
description: Un recorrido por la ventana de Audiotext y los pasos para transcribir un archivo de audio o vídeo.
sidebar:
  order: 2
---

## La ventana

La ventana de Audiotext tiene tres partes:

- **La barra superior**: los botones para empezar una **Nueva transcripción** desde un **Archivo**, una **URL**, el **Micrófono** o una **Carpeta**, el estado de la aplicación y el engranaje que abre las [Preferencias](/es/reference/preferences/). El botón de la izquierda muestra u oculta el historial.
- **El historial**, a la izquierda: todas tus transcripciones, que puedes buscar, fijar, agrupar y renombrar. Consulta [Historial](/es/guides/history/).
- **El área principal**: el origen que estás configurando, el progreso de una transcripción o la transcripción que has seleccionado en el historial.

![Las partes de la ventana de Audiotext: la barra superior, el historial y el área principal](/screenshots/window.png)

Al abrir la aplicación, el área principal pregunta **¿Qué quieres transcribir?** y muestra una tarjeta para cada tipo de origen.

:::tip
Suelta un archivo o una carpeta en cualquier parte de la ventana para transcribirlo.
:::

## Transcribe un archivo

1. Haz clic en **Archivo** en la barra superior (o pulsa `Ctrl+O`, `⌘O` en macOS) y elige un archivo de audio o vídeo, o suéltalo en la ventana. Después, haz clic en **Continuar**.
2. Revisa los ajustes. Los valores por defecto funcionan bien para la mayoría de audios:
   - **Motor**: WhisperX, que se ejecuta en tu ordenador. Elige un **Modelo** más pequeño (como `small`) si tu ordenador es lento.
   - **Idioma**: el **Idioma del audio** se detecta automáticamente. Elígelo si lo conoces, para evitar errores. Para traducir, elige otro **Idioma de la transcripción**.
   - **Contexto** y **Opciones**: pistas y funciones opcionales, como identificar a los hablantes.

   Consulta [Ajustes de la transcripción](/es/guides/transcription-settings/) para verlos todos.
3. Haz clic en **Empezar la transcripción** (o pulsa `Ctrl+Enter`, `⌘↩` en macOS).

Mientras trabaja, se muestra el progreso de cada paso (cargar el modelo, transcribir, alinear las palabras…). Mientras tanto, puedes seguir usando Audiotext: el resultado se guarda en tu historial y se abre cuando está listo. Para cancelarla, haz clic en **Cancelar** o pulsa `Esc`.

Si hay otra transcripción en curso, el botón pasa a ser **Añadir a la cola**, y la nueva empieza cuando termina la actual.

## Lee y usa el resultado

Cuando termina, se abre la transcripción:

- Haz clic en un segmento para reproducir el audio desde ahí.
- Cambia entre **Transcripción**, **Texto plano** y **Resumen**.
- Usa **Traducir**, **Copiar** y **Exportar** para traducirla, copiarla o guardarla como archivo.

Consulta [La transcripción](/es/guides/transcript/) para saber todo lo que puedes hacer con ella.

## Atajos de teclado

| Atajo | Acción |
| --- | --- |
| `Ctrl+Enter` / `⌘↩` | Empezar la transcripción, o empezar y detener la grabación |
| `Ctrl+O` / `⌘O` | Elegir un archivo (o una carpeta, en el origen de carpeta) |
| `Ctrl+S` / `⌘S` | Exportar la transcripción que se muestra |
| `Ctrl+F` / `⌘F` | Buscar en la transcripción |
| `Esc` | Cancelar la transcripción en curso |
| `Espacio` | Reproducir o pausar el audio |
| `←` / `→` | Retroceder o avanzar 5 segundos |
