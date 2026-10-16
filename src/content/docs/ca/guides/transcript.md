---
title: La transcripció
description: Reprodueix, cerca, corregeix, revisa, copia i exporta una transcripció, i mira o exporta els vídeos amb els seus subtítols.
sidebar:
  order: 3
---

Selecciona una transcripció a l'[historial](/ca/guides/history/) per obrir-la. La barra d'eines canvia entre quatre modes, **Subtítols**, **Text pla**, **Resum** i **Pregunta**, i té el botó **Tradueix** i el menú `⋯`.

La transcripció es mostra en una targeta titulada amb el seu idioma. Els botons de la capçalera hi cerquen i substitueixen, la copien, l'exporten i la **Tornen a transcriure** (després de preguntar-t'ho, ja que es perden les correccions del text).

## Subtítols

Mostra la transcripció dividida en els subtítols del vídeo, amb quan comença i acaba cadascun i, si s'han identificat els parlants, el seu parlant. La llargada segueix les [preferències dels subtítols](/ca/reference/preferences/#subtítols).

Per defecte, els temps es mostren amb precisió de mil·lisegons, com als subtítols (`00:01:05,900 – 00:01:09,350`). Per simplificar-los (`01:05 – 01:09`), desmarca **Marques de temps precises (HH:MM:SS,mmm)** al menú `⋯`.

A sobre dels subtítols, una línia els compta i, si s'han identificat els parlants, també a ells (p. ex. `Subtítols: 120 · Parlants: 3`). Un segment llarg dividit en diversos subtítols compta com a diversos.

Les marques de temps només estan disponibles amb **WhisperX** i amb els models `whisper-1` i `gpt-4o-transcribe-diarize` de l'**API de Whisper**. Sense elles, la transcripció no es pot reproduir subtítol a subtítol; fes servir el mode **Text pla**.

### Reprodueix l'àudio

- **Fes clic en un subtítol** per reproduir l'àudio des d'aquell punt. El subtítol que es reprodueix es ressalta i es manté al centre del text. Amb els temps per paraula, també es ressalta cada paraula.
- Fes servir la barra del reproductor per reproduir, posar en pausa, moure't a qualsevol punt i canviar la **velocitat**, de `0.5×` a `2×`, mantenint el to de les veus.
- Dreceres de teclat: `Espai` reprodueix o posa en pausa, i `←`/`→` retrocedeixen o avancen 5 segons.

Si el fitxer d'origen s'ha mogut o eliminat, l'àudio no està disponible, però el text sí. Audiotext desa els enregistraments del micròfon, així que sempre es poden reproduir.

![Una transcripció en reproducció, amb el segment actual ressaltat](/screenshots/transcript.png)

### Mira vídeos amb subtítols

Les transcripcions de vídeos mostren el vídeo damunt del text. El seu menú et permet **Mostrar els subtítols al vídeo** i triar-ne la **Mida** (petita, mitjana o gran), la **Posició** (a baix o a dalt) i l'**Estil** (fons fosc o contorn). Si la transcripció té [traduccions](/ca/guides/summary-and-translation/#traducció), el menú també permet triar si els subtítols mostren la **Transcripció** o la **Traducció a l'idioma…** d'un idioma. El botó **Subtítols** de la barra del reproductor també els mostra o els amaga, i la fletxa del costat obre el mateix menú.

## Cerca i substitueix

Prem `Ctrl+F` (`⌘F` a macOS), o fes clic a la lupa de la capçalera, per obrir la finestra de cercar i substituir al text amb què treballes: la transcripció o la seva traducció. Cerca el text mentre l'escrius (no es cerquen les marques de temps ni els parlants) i mostra quantes coincidències hi ha.

- `Retorn` i `Maj+Retorn`, o les fletxes, van a la coincidència següent i anterior.
- **Substitueix** substitueix la coincidència actual, i **Substitueix-ho tot** totes, p. ex. un nom mal escrit. Marca **Distingeix majúscules** per trobar només el text amb les mateixes majúscules.
- La finestra no és modal, així que pots llegir i reproduir el text mentre és oberta. **Mantén-la al davant** la manté damunt de la finestra principal.
- `Esc` la tanca.

Al mode **Text pla**, la finestra només cerca (**Cerca a la transcripció**), ja que una coincidència allà no es pot relacionar amb un subtítol. Torna a **Subtítols** per reemplaçar.

## Corregeix la transcripció

Per corregir la transcripció sense perdre les marques de temps (que fan servir els subtítols i la reproducció), fes servir la finestra de [Cerca i substitueix](#cerca-i-substitueix) o fes clic amb el botó dret en un subtítol:

- **Reprodueix des d'aquí**: el reprodueix.
- **Copia**: en copia el text.
- **Edita text…**: en canvia el text.
- **Canvia el nom dels parlants…**: dona un nom a cada parlant (`SPEAKER_00` → `Anna`). Donar el mateix nom a dos parlants els fusiona. També és al menú `⋯`.

Les paraules que no canvien mantenen els seus temps, així que es continuen ressaltant en reproduir.

## Revisa les paraules de baixa confiança

Les paraules de què el motor està menys segur se subratllen, perquè sàpigues on revisar primer. WhisperX puntua cada paraula quan en calcula els temps (**Temps per paraula**, activat per defecte), i el model `whisper-1` de l'API de Whisper puntua cada segment, així que els seus segments se subratllen sencers.

Una barra damunt del text mostra quantes paraules queden per revisar (p. ex. `3 de 12 per revisar`):

- Les seves fletxes, o `Ctrl+J` i `Maj+Ctrl+J` (`⌘J` i `⇧⌘J` a macOS), van a la paraula següent i anterior, i hi mouen el reproductor. Amb **Reproducció automàtica**, cada paraula es reprodueix amb un moment al voltant.
- `Retorn` accepta tal com és la paraula on has anat, i passa a la següent. **Accepta les restants** accepta totes les que queden, i **Desfés** desfà l'última revisió.
- Fes clic en una paraula per corregir-la al seu lloc: escriu el text correcte i prem `Retorn` (o **Accepta**-la sense canvis). **Torna a reproduir** (`Ctrl+R`, `⌘R` a macOS) la torna a reproduir, i `Esc` la tanca.
- **Només les marcades** mostra només els subtítols amb paraules per revisar.
- Les paraules també es marquen sota la posició de l'àudio. Fes clic en una marca per anar a la seva paraula.

Quan estan totes revisades, **Revisa de nou les paraules acceptades** recupera les paraules que has acceptat. Les paraules corregides continuen revisades.

Les paraules se subratllen quan la seva puntuació és inferior al 40 %. Tria un altre llindar, del 20 % al 70 %, a `⋯` → **Llindar de baixa confiança**, o des d'**Ajusta el llindar** a la barra. Per deixar de subratllar-les i amagar la barra, desmarca **Ressalta les paraules de baixa confiança** al menú `⋯`.

Si una transcripció no té puntuacions, el menú `⋯` diu per què: **Activa «Temps per paraula» i torna-ho a transcriure**, **No hi ha cap model d'alineació per a la seva llengua**, **Torna-ho a transcriure per puntuar les paraules** (es va fer abans que es puntuessin les paraules) o **Només WhisperX i whisper-1 puntuen les paraules**.

## Text pla

El mode **Text pla** mostra el text de la transcripció sense marques de temps. Es construeix a partir dels subtítols, així que és només de lectura, com diu la nota al costat dels modes: per canviar-lo, [corregeix els subtítols](#corregeix-la-transcripció), i el text pla els segueix. Així, totes les exportacions i traduccions fan servir el mateix text.

Les transcripcions sense marques de temps (p. ex. de l'API de Google) no tenen subtítols, així que el seu text pla es pot editar lliurement, com en un editor de text. Els canvis es desen automàticament.

:::note
Les versions anteriors permetien editar el text pla de les transcripcions amb subtítols. En obrir una d'aquestes transcripcions (o traduccions), el seu text pla es torna a construir a partir dels subtítols, així que aquests canvis es reemplacen.
:::

## Copia i exporta

El botó de copiar de la capçalera copia el text de la transcripció.

El botó d'exportar (o `Ctrl+S`, `⌘S` a macOS) la desa com a:

| Format | Contingut |
| --- | --- |
| Document de Word (`.docx`) | El mateix que Markdown, llest per editar o imprimir |
| JSON (`.json`) | El text, els segments amb les marques de temps, les paraules i els parlants, i el resum, si n'hi ha |
| Markdown (`.md`) | El resum, si n'hi ha, i el text en paràgrafs amb la marca de temps i el parlant de cadascun |
| Subtítols (`.srt`) | Subtítols per a reproductors de vídeo |
| Subtítols amb estil (`.ass`) | Subtítols amb un color per a cada parlant, per a reproductors i editors de vídeo |
| Subtítols web (`.vtt`) | Subtítols per al web |
| Taula (`.tsv`) | Una fila per segment, amb l'inici i el final (en mil·lisegons) i el text |
| Text pla (`.txt`) | El text |

Els subtítols i la taula necessiten marques de temps. Les [traduccions](/ca/guides/summary-and-translation/#subtítols-i-exportació) i el [resum](/ca/guides/summary-and-translation/#resum) s'exporten des dels seus propis plafons.

### Exporta el vídeo amb els seus subtítols

Per compartir un vídeo on no es poden carregar fitxers de subtítols (p. ex. una xarxa social), tria **Vídeo amb subtítols (.mp4)…** al menú d'exportar de la transcripció, o d'una traducció. Audiotext fa una còpia del vídeo amb els subtítols dibuixats a sobre, tal com es mostren a l'aplicació: amb la seva mida, posició i estil (consulta [Mira vídeos amb subtítols](#mira-vídeos-amb-subtítols)).

Es fa en segon pla, i l'estat en mostra el progrés. Per cancel·lar-ho, tria **Deixa d'afegir els subtítols al vídeo** al mateix menú. La còpia és un fitxer MP4 (vídeo H.264 i àudio AAC), i el vídeo original no canvia.

Si cap tipus de lletra del sistema no té alguns caràcters dels subtítols, es dibuixen com a quadres, i Audiotext els enumera en acabar. Consulta [Resolució de problemes](/ca/help/troubleshooting/#el-vídeo-amb-subtítols-mostra-quadres).

## Canvia el nom, etiqueta i afegeix notes

La capçalera de la transcripció mostra el nom, l'origen, la data i l'etiqueta. Fes doble clic al nom per canviar-lo, fes clic a l'etiqueta per canviar-la o fes clic a **Afegeix una nota** per escriure'n una. Fes clic a la nota, o al seu llapis, per editar-la, i a la seva paperera per eliminar-la.

El menú `⋯` també té aquestes opcions, i obre la carpeta del fitxer d'origen o la **carpeta dels fitxers desats**. Hi ha més opcions a l'[historial](/ca/guides/history/).
