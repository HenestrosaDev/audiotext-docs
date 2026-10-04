---
title: Solución de problemas
description: Soluciones a los problemas más comunes de Audiotext.
sidebar:
  order: 1
---

## La primera transcripción con WhisperX tarda mucho

La primera vez que se usa un modelo, se descarga, lo que puede tardar varios minutos según tu conexión y el tamaño del modelo (hasta ~3 GB). El progreso indica cuándo se está cargando. El modelo se queda en memoria mientras sus opciones no cambien, así que las siguientes transcripciones empiezan al momento.

## WhisperX falla con `CUDA out of memory`

Tu GPU no tiene memoria suficiente para los ajustes. Prueba, en este orden:

1. Baja el **Tamaño de lote** (p. ej. `4`) en **Preferencias** → **WhisperX**.
2. Usa un modelo más pequeño (p. ej. `small` o `base`).
3. Usa un **Tipo de cómputo** más ligero (p. ej. `int8`).

Los dos últimos pueden reducir la calidad. Consulta [Motores](/es/reference/engines/#modelo) para ver la memoria que necesita cada modelo.

## Transcribir tarda demasiado

La velocidad de WhisperX depende de tu hardware, así que no esperes resultados instantáneos en CPU modestas. Prueba un modelo más pequeño, como `small`, o `large-v3-turbo` en una GPU, o el tipo de cómputo `int8`. También puedes usar la **API de Whisper** o la **API de Google**, que se ejecutan en servidores remotos.

## La API de Whisper devuelve el error `429`

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

Tu cuenta de OpenAI se ha quedado sin créditos, o tienes que añadir fondos antes de usar la API por primera vez (aunque tengas créditos gratuitos). Compra créditos en la sección [Billing](https://platform.openai.com/settings/organization/billing/overview) de tu cuenta de OpenAI. Tu cuenta puede tardar hasta 10 minutos en activarse.

Si creaste la clave de API antes de añadir fondos por primera vez y el error persiste después de 10 minutos, crea una clave nueva y configúrala en **Preferencias** → **Claves de API**.

## No se pueden identificar los hablantes

Identificar a los hablantes requiere un token de Hugging Face y aceptar las condiciones del modelo. Comprueba que:

- Has aceptado las condiciones de [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) con la misma cuenta.
- El token tiene el rol `Read` y está configurado en **Preferencias** → **Claves de API**.

Consulta [Identifica a los hablantes](/es/guides/transcription-settings/#identifica-a-los-hablantes).

## No se encuentra ningún micrófono, o no se graba nada

- Comprueba que el micrófono está conectado y haz clic en el botón de actualizar junto a la lista de micrófonos.
- En macOS, permite el acceso a Audiotext en **Ajustes del Sistema** → **Privacidad y seguridad** → **Micrófono**. En Windows, en **Configuración** → **Privacidad** → **Micrófono**.
- Si el medidor de nivel muestra **No hay sonido**, elige otro micrófono de la lista o comprueba que no está silenciado.

## No se puede reproducir el audio de una transcripción

El archivo de origen se ha movido o eliminado. El texto se conserva, pero el audio solo se puede reproducir desde el archivo original. Audiotext guarda las grabaciones del micrófono y el audio de las URL.

## No se puede descargar un vídeo de YouTube

Asegúrate de que la URL es correcta y de que el vídeo es público. YouTube cambia a menudo, así que, si sigue fallando, comprueba si hay una versión más reciente de Audiotext.

## Una carpeta no transcribe ningún archivo

Los archivos que ya tienen una transcripción se omiten. Activa **Sobrescribir archivos existentes** para volver a transcribirlos. La carpeta también debe contener [archivos compatibles](/es/reference/formats-and-languages/).

## La API de Google pide el idioma

La API de Google no puede detectar el idioma. Elige el **Idioma del audio** en los ajustes.

## Otro problema

Busca en las [incidencias](https://github.com/HenestrosaDev/audiotext/issues) o pregunta en las [discusiones](https://github.com/HenestrosaDev/audiotext/discussions). Si encuentras un error, [infórmalo](https://github.com/HenestrosaDev/audiotext/issues/new/choose) con tu sistema, la versión de Audiotext y los pasos para reproducirlo.
