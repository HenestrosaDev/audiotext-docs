---
title: Solución de problemas
description: Solucións aos problemas máis habituais de Audiotext.
sidebar:
  order: 1
---

## A primeira transcrición con WhisperX tarda moito

A primeira vez que se usa un modelo, descárgase, o que pode tardar varios minutos segundo a túa conexión e o tamaño do modelo (ata ~3 GB). O progreso indica cando se está a cargar. O modelo queda na memoria mentres as súas opcións non cambien, así que as seguintes transcricións comezan ao momento.

## WhisperX falla con `CUDA out of memory`

A túa GPU non ten memoria dabondo para a configuración. Proba, nesta orde:

1. Baixa o **Tamaño do lote** (p. ex. `4`) en **Preferencias** → **WhisperX**.
2. Usa un modelo máis pequeno (p. ex. `small` ou `base`).
3. Usa un **Tipo de cálculo** máis lixeiro (p. ex. `int8`).

Os dous últimos poden reducir a calidade. Consulta [Motores](/gl/reference/engines/#modelo) para ver a memoria que precisa cada modelo.

## Transcribir tarda demasiado

A velocidade de WhisperX depende do teu hardware, así que non esperes resultados instantáneos en CPU modestas. Proba un modelo máis pequeno, como `small`, ou `large-v3-turbo` nunha GPU, ou o tipo de cálculo `int8`. Tamén podes usar a **API de Whisper** ou a **API de Google**, que se executan en servidores remotos.

## A API de Whisper devolve o erro `429`

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

A túa conta de OpenAI quedou sen créditos, ou tes que engadir fondos antes de usar a API por primeira vez (aínda que teñas créditos gratuítos). Compra créditos na sección [Billing](https://platform.openai.com/settings/organization/billing/overview) da túa conta de OpenAI. A túa conta pode tardar ata 10 minutos en activarse.

Se creaches a clave de API antes de engadir fondos por primeira vez e o erro persiste despois de 10 minutos, crea unha clave nova e configúraa en **Preferencias** → **Claves de API**.

## Non se poden identificar os falantes

Se a transcrición falla con **Para identificar falantes precísase un token de Hugging Face.** ou **Non se puido descargar o modelo de identificación de falantes.**, o token falta, non é válido ou non pode acceder ao modelo.

Identificar os falantes require un token de Hugging Face e aceptar as condicións do modelo. Comproba que:

- Aceptaches as condicións de [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) coa mesma conta.
- O token ten o rol `Read` e está configurado en **Preferencias** → **Claves de API**.

Consulta [Identifica os falantes](/gl/guides/transcription-settings/#identifica-os-falantes).

## Non se atopa ningún micrófono, ou non se grava nada

- Comproba que o micrófono está conectado e fai clic no botón de actualizar xunto á lista de micrófonos.
- En macOS, permite o acceso a Audiotext en **Configuración do Sistema** → **Privacidade e seguranza** → **Micrófono**. En Windows, en **Configuración** → **Privacidade** → **Micrófono**.
- Se o medidor de nivel mostra **Non hai son**, escolle outro micrófono da lista ou comproba que non está silenciado.
- Se se mostra **Non se gravou ningún audio.**, a gravación rematou antes de que o micrófono enviase ningún son. Volve gravar ou escolle outro micrófono.

## Non se mostra o texto en directo

Se se mostra **O texto non se pode mostrar mentres se grava.** mentres gravas, non se puido cargar o **Modelo en directo**: por exemplo, descárgase a primeira vez que se usa, o que require conexión a Internet, ou non hai memoria abonda. A gravación non se ve afectada e transcríbese como sempre ao detela. Escolle un **Modelo en directo** máis pequeno (p. ex. `tiny` ou `base`) na tarxeta **Texto en directo**.

## Non se pode reproducir o audio dunha transcrición

O ficheiro de orixe moveuse ou eliminouse. O texto consérvase, pero o audio só se pode reproducir desde o ficheiro orixinal. Audiotext garda as gravacións do micrófono e o audio dos URL.

## Non se pode descargar un vídeo de YouTube

Asegúrate de que o URL é correcto e de que o vídeo é público. YouTube cambia a miúdo, así que, se segue fallando, comproba se hai unha versión máis recente de Audiotext.

Se no seu lugar se mostra **O vídeo de YouTube non ten pista de audio.**, o vídeo non ten son que transcribir.

## Non se pode transcribir unha ligazón

- **O URL non apunta a un ficheiro de audio ou vídeo.**: a ligazón abre unha páxina web, non un ficheiro. Só funcionan as ligazóns de vídeos de YouTube e as ligazóns directas a ficheiros de audio ou vídeo. Busca na páxina a ligazón que descarga o ficheiro (p. ex. o episodio dun podcast) e úsaa, ou descarga o ficheiro e transcríbeo coa fonte **Ficheiro**.
- **Non se puido descargar o ficheiro: …**: non se puido acceder ao ficheiro. Comproba que a ligazón se abre no teu navegador e que tes conexión a Internet. As ligazóns que requiren iniciar sesión non se poden descargar: descarga o ficheiro ti mesmo e usa a fonte **Ficheiro**.

## Un cartafol non transcribe ningún ficheiro

Os ficheiros que xa teñen unha transcrición omítense. Activa **Sobrescribir os ficheiros existentes** para volver transcribilos. O cartafol tamén debe conter [ficheiros compatibles](/gl/reference/formats-and-languages/).

## A API de Google pide o idioma

A API de Google non pode detectar o idioma. Escolle o **Idioma do audio** na configuración.

## Falla un resumo ou unha tradución

- **DeepL non pode traducir ao idioma ….**: DeepL non admite ese idioma. Escolle outro provedor, como un modelo de linguaxe.
- **A resposta do modelo era demasiado longa.**, **O modelo non devolveu un resumo válido.** ou **O modelo non devolveu unha tradución válida.**: o modelo non escribiu o resumo ou a tradución co formato esperado. Téntao de novo ou escolle un modelo máis grande en **Preferencias** → **IA**. Os modelos pequenos de Ollama fallan máis a miúdo.
- Para calquera outro erro, comproba que a clave de API do provedor está configurada en **Preferencias** → **Claves de API** e que a túa conta ten saldo.

## Non se poden buscar actualizacións

**Non se puido comprobar se hai actualizacións.** significa que Audiotext non puido conectar con GitHub. Comproba a túa conexión a Internet ou se un devasa ou un proxy a bloquea. Sempre podes descargar a última versión desde a [páxina de versións](https://github.com/HenestrosaDev/audiotext/releases/latest).

## Outro problema

Busca nas [incidencias](https://github.com/HenestrosaDev/audiotext/issues) ou pregunta nas [discusións](https://github.com/HenestrosaDev/audiotext/discussions). Se atopas un erro, [infórmao](https://github.com/HenestrosaDev/audiotext/issues/new/choose) co teu sistema, a versión de Audiotext e os pasos para reproducilo.
