---
title: Resum, preguntes i traducció
description: Resumeix, pregunta sobre i tradueix transcripcions amb OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL o Google Translate.
sidebar:
  order: 4
---

Quan una transcripció està llesta, Audiotext la pot resumir, respondre preguntes sobre ella i traduir-la amb un model de llenguatge o un servei de traducció. Tot es desa a l'historial, així que només es genera una vegada.

## Resum

Obre el mode **Resum** d'una transcripció i fes clic a **Genera el resum**. El model de llenguatge escriu:

- Un **resum** de la transcripció.
- Els **punts clau**.
- Els **capítols**, si té marques de temps. Fes clic en un capítol per reproduir l'àudio des d'on comença.

Sota el títol, el plafó diu quin model l'ha generat i quan. Els botons de la capçalera:

- **Cerca** (`Ctrl+F`, `⌘F` a macOS): cerca un text al resum.
- **Copia**: el copia.
- **Exporta**: el desa per separat com a text pla, Markdown o document de Word, amb un nom com `video.summary.md` perquè no substitueixi la transcripció. Les [exportacions](/ca/guides/transcript/#copia-i-exporta) a Markdown i Word de la transcripció també l'inclouen.
- **Regenera resum**: el torna a escriure (p. ex. després de triar un altre model), després de preguntar-t'ho, ja que se substitueix l'actual.

Si la clau d'API del proveïdor no està configurada, el mode **Resum** ofereix configurar-la. Les transcripcions molt llargues (unes tres hores de parla o més) només es resumeixen des del principi.

![El resum d'una transcripció, amb els punts clau i els capítols](/screenshots/summary.png)

## Pregunta sobre la transcripció

Obre el mode **Pregunta**, escriu una pregunta a **Fes una pregunta sobre la transcripció…** (p. ex. què es va decidir, o qui va dir alguna cosa) i prem `Retorn` o fes clic a **Pregunta**.

- El model de llenguatge respon amb la transcripció, i amb les preguntes anteriors i les seves respostes, així que una pregunta s'hi pot referir (p. ex. «Per què?»).
- Si la transcripció té marques de temps, cada resposta enllaça amb les parts de la transcripció on es diu. Fes clic en una per reproduir l'àudio des d'aquell punt.
- Les preguntes i les respostes es desen a l'historial amb la transcripció. La paperera de la capçalera esborra la conversa, després de preguntar-t'ho.

Les preguntes les respon el proveïdor triat per a elles a **Preferències** → **Proveïdors** → **Pregunta**, que és el dels resums fins que el canviïs. Com en els resums, de les transcripcions molt llargues només se'n llegeix el començament.

## Traducció

Fes clic a **Tradueix**, tria l'idioma a **Tradueix a:** i el proveïdor a **Tradueix amb:**, i confirma. El diàleg diu què fa el proveïdor triat, i ofereix configurar-ne la clau d'API si falta. La traducció es mostra en un plafó a la dreta del text original.

- Si la transcripció té marques de temps, es tradueix frase a frase, amb el text que es diu abans i després de cada part com a context, així que la traducció comença amb les marques de temps de cada frase: ressalta la frase que es reprodueix, i en fer clic en una es reprodueix.
- Si la transcripció no té marques de temps, es tradueix tot el text d'una vegada.
- Els dos textos es desplacen junts, així que mostren la mateixa part de l'àudio. El botó rodó del separador entre ells ho activa i ho desactiva. Arrossega el separador per canviar-ne la mida, o fes-hi doble clic per restablir-la.

Els botons de la capçalera de la traducció hi cerquen i substitueixen, la copien, l'exporten, la **Tornen a traduir** (amb el mateix proveïdor i model) i l'amaguen (**Amaga traducció**). El botó **Tradueix** també et permet tornar-la a mostrar, **Traduir a un altre idioma…** o **Eliminar la traducció**.

### Diversos idiomes

Una transcripció es pot traduir a diversos idiomes, fins i tot alhora, i es desa cada traducció. El títol del plafó tria la que es mostra, diu quant està traduïda cadascuna i acaba amb l'opció de traduir a un altre idioma. Traduir a un idioma que ja té una traducció la substitueix, després de preguntar-t'ho, ja que se'n perden les correccions. El menú del títol mostra quants subtítols de cada traducció sense acabar estan traduïts (p. ex. `Anglès · 148/150`).

### Progrés de la traducció

El progrés es compta en subtítols: un està traduït quan té text. A sobre de la traducció, una línia mostra quants n'hi ha de traduïts (p. ex. `Traduït: 148/150 · 98 %`). El percentatge s'arrodoneix cap avall, així que `100 %` només apareix quan estan tots traduïts.

Mentre en quedin, les fletxes del costat van als subtítols anterior i següent **Encara no traduït**, ressaltant cadascun, i mostren en quin ets (p. ex. `1 de 2`). Passa el ratolí per sobre d'un per mostrar el botó **Tradueix text…** a la seva dreta, que obre el diàleg per traduir-lo.

### Corregeix i ajusta els temps de la traducció

Sovint una traducció necessita uns temps diferents dels de l'original, p. ex. subtítols que costen més de llegir. Fes clic amb el botó dret en un segment de la traducció per:

- **Edita text…**: canviar-ne el text.
- **Edita els temps…**: canviar quan comença i acaba, amb precisió de mil·lisegons. Escriu els temps com a `00:01:05,900`, `01:05,9` o `65.9`.
- **Afegeix un segment després…**: afegir un segment, que per defecte omple l'espai fins al següent.
- **Elimina el segment**.

### Tradueix-la tu mateix

Per escriure la traducció tu mateix, tria **Manual** a **Tradueix amb:**. No necessita cap clau d'API. La traducció comença amb un segment buit per cada subtítol de la transcripció, que es mostra com a **Encara no traduït**, i el plafó mostra quants en queden. Fes clic amb el botó dret en un i tria **Tradueix text…**: el diàleg mostra el text original que es diu en aquell moment. En passar el ratolí per sobre d'un apareix un botó **Tradueix text…** a la seva dreta, que obre el mateix diàleg.

### Subtítols i exportació

- A les transcripcions de vídeos, marca **Mostra-la com a subtítols del vídeo** al menú **Tradueix** per mostrar la traducció com a subtítols. El menú del vídeo també els canvia. Consulta [Mira vídeos amb subtítols](/ca/guides/transcript/#mira-vídeos-amb-subtítols).
- Per desar la traducció com a fitxer, fes clic al botó d'exportar del seu plafó. S'exporta en els mateixos [formats](/ca/guides/transcript/#copia-i-exporta) que la transcripció, amb l'idioma al nom del fitxer (p. ex. `video.es.srt`), així els reproductors de vídeo la carreguen amb el vídeo. Els segments que encara no s'han traduït no s'inclouen als subtítols. El mateix menú fa una [còpia del vídeo amb els seus subtítols](/ca/guides/transcript/#exporta-el-vídeo-amb-els-seus-subtítols).

:::tip
Per obtenir la transcripció directament en un altre idioma, sense proveïdor, també pots traduir mentre transcrius. Consulta [Idioma](/ca/guides/transcription-settings/#idioma).
:::

## Proveïdors

Els proveïdors es trien a **Preferències** → **Proveïdors**, per separat per als resums, les preguntes i les traduccions.

| Proveïdor | Model per defecte | Clau d'API |
| --- | --- | --- |
| OpenAI (per defecte) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (local) | `llama3.2` | No cal |

Deixa el **Model** buit per fer servir el model per defecte del proveïdor, o escriu el nom de qualsevol altre model del proveïdor (p. ex. `claude-sonnet-5-5` o `deepseek-reasoner`).

Les traduccions també es poden fer amb:

- **DeepL**, que requereix una [clau d'API de DeepL](https://www.deepl.com/your-account/keys). Les claus del pla gratuït també funcionen.
- **Google Translate**, que fa servir la clau d'API de Google amb la Cloud Translation API activada.

### Ollama

[Ollama](https://ollama.com) executa els models al teu ordinador, sense clau d'API i sense enviar el text enlloc. Instal·la'l, descarrega un model (p. ex. `ollama pull llama3.2`) i tria **Ollama** com a proveïdor. Si no s'executa a l'adreça per defecte, canvia l'**URL del servidor** a **Preferències** → **Proveïdors** (`http://localhost:11434` per defecte).

:::note
Cada proveïdor cobra per l'ús de la seva API, del qual Audiotext no es fa responsable. Les claus d'API es desen al magatzem de credencials del sistema. Consulta [Fitxers i dades](/ca/reference/files-and-data/).
:::
