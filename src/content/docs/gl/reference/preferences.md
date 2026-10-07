---
title: Preferencias
description: Todas as opcións da xanela de Preferencias, lapela por lapela.
sidebar:
  order: 2
---

As **Preferencias** conteñen a configuración que non cambia con cada transcrición. Ábreas coa roda dentada de arriba á dereita da xanela. Os cambios gárdanse automaticamente.

## Xeral

- **Aparencia**: **Sistema** (segue o teu sistema), **Claro** ou **Escuro**.
- **Idioma da interface**: o idioma de Audiotext, ou **Idioma do sistema**. Consulta os [idiomas dispoñibles](/gl/reference/formats-and-languages/#idiomas-da-interface).
- **Formato da data**: como se mostran as datas das transcricións, no idioma da interface: curto (`04/10/26`), medio (`4 de out. de 2026`, predeterminado), longo (`4 de outubro de 2026`) ou ISO (`2026-10-04`). O menú mostra cada formato cun exemplo.
- **Formato da hora**: **Automático** (o reloxo do idioma da interface), de 12 horas (`1:30 p.m.`) ou de 24 horas (`13:30`).
- **Notificacións**: mostra unha notificación do sistema cando unha transcrición está lista (nun cartafol, cando o están todos os seus ficheiros, e nun cartafol vixiado, cada vez que o está un ficheiro novo). Activado por defecto. En macOS proveñen de **Script Editor** e en Windows de **Windows PowerShell**, así que se permiten ou silencian para esas aplicacións na configuración do sistema. En Linux requiren `notify-send` (o paquete `libnotify-bin` ou `libnotify`).
- **Actualizacións**: comproba se hai unha versión nova ao abrir a aplicación e, se a hai, mostra un botón **A versión … está dispoñible** na barra superior que abre a súa páxina de descarga. Non se ofrecen as versións preliminares. Activado por defecto.

## IA

Os provedores dos [resumos e as traducións](/gl/guides/summary-and-translation/):

- **Resumo** → **Provedor** e **Modelo**.
- **Tradución** → **Provedor** e **Modelo**. DeepL e Google Translate non teñen modelos que escoller.
- **Ollama** → **URL do servidor**: o enderezo de Ollama, `http://localhost:11434` de forma predeterminada.

Deixa o **Modelo** baleiro para usar o modelo predeterminado do provedor. O botón xunto ao provedor configura a súa clave de API.

## Claves de API

As claves de cada servizo. Fai clic en **Configurar…** para introducir unha, ou en **Cambiar…** para substituíla (déixaa baleira para eliminala). Gárdanse no almacén de credenciais do teu sistema.

| Clave | Úsase para |
| --- | --- |
| Clave de API de OpenAI | A API de Whisper, e resumir e traducir con OpenAI |
| Clave de API de Anthropic | Resumir e traducir con Claude |
| Clave de API de DeepSeek | Resumir e traducir con DeepSeek |
| Clave de API de Gemini | Resumir e traducir con Gemini (de Google AI Studio) |
| Clave de API de Mistral | Resumir e traducir con Mistral |
| Clave de API de xAI | Resumir e traducir con Grok |
| Clave de API de DeepL | Traducir con DeepL (as claves do plan gratuíto tamén serven) |
| Clave de API de Google | Google Speech-to-Text máis alá do nivel gratuíto, e Google Translate (Cloud Translation API) |
| Token de Hugging Face | Identificar os falantes con WhisperX |

:::caution
Cada provedor cobra polo uso da súa API, do que Audiotext non se fai responsable. Se OpenAI devolve o erro `429` cunha clave nova, consulta [Solución de problemas](/gl/help/troubleshooting/#a-api-de-whisper-devolve-o-erro-429).
:::

## WhisperX

**Tipo de cálculo**, **Tamaño do lote** e **Usar a CPU**. Consulta as [opcións avanzadas de WhisperX](/gl/reference/engines/#opcións-avanzadas).

## Subtítulos

As opcións dos ficheiros `.srt` e `.vtt` que se gardan ao transcribir un cartafol con WhisperX:

- **Resaltar palabras**: subliña cada palabra mentres se di. Desactivado de forma predeterminada.
- **Máx. de liñas**: o número máximo de liñas de cada subtítulo. `2` de forma predeterminada.
- **Máx. de caracteres por liña**: o número máximo de caracteres dunha liña antes de partila. `42` de forma predeterminada.

## API de Whisper

**Temperatura** e **Marcas de tempo das palabras**. Consulta as [opcións da API de Whisper](/gl/reference/engines/#opcións).

## Acerca de

A versión de Audiotext e ligazóns a esta documentación, ao código fonte en GitHub e á páxina de doazóns. **Buscar actualizacións** comproba no momento se hai unha versión nova: se a hai, o botón convértese en **Descargar** e abre a súa páxina.
