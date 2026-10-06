---
title: La transcripció
description: Reprodueix, cerca, corregeix, copia i exporta una transcripció, i mira els vídeos amb els seus subtítols.
sidebar:
  order: 3
---

Selecciona una transcripció a l'[historial](/ca/guides/history/) per obrir-la. La barra d'eines canvia entre tres modes, **Transcripció**, **Text pla** i **Resum**, i té els botons **Tradueix**, **Copia** i **Exporta**.

## Transcripció

Mostra cada segment de la transcripció (una frase o una part d'una frase llarga) amb quan comença i acaba i, si s'han identificat els parlants, el seu parlant.

Per defecte, els temps es mostren simplificats (`01:05 – 01:09`). Per veure'ls amb precisió de mil·lisegons, com als subtítols (`00:01:05,900 – 00:01:09,350`), marca **Marques de temps precises (00:00:01,000)** al menú `⋯`.

Les marques de temps només estan disponibles amb **WhisperX** i amb els models `whisper-1` i `gpt-4o-transcribe-diarize` de l'**API de Whisper**. Sense elles, la transcripció no es pot reproduir segment a segment; fes servir el mode **Text pla**.

### Reprodueix l'àudio

- **Fes clic en un segment** per reproduir l'àudio des d'aquell punt. El segment que es reprodueix es ressalta, i el text segueix la reproducció. Amb els temps per paraula, també es ressalta cada paraula.
- Fes servir la barra del reproductor per reproduir, posar en pausa, moure't a qualsevol punt i canviar la **velocitat**, de `0.5×` a `2×`, mantenint el to de les veus.
- Dreceres de teclat: `Espai` reprodueix o posa en pausa, i `←`/`→` retrocedeixen o avancen 5 segons.

Si el fitxer d'origen s'ha mogut o eliminat, l'àudio no està disponible, però el text sí. Audiotext desa els enregistraments del micròfon, així que sempre es poden reproduir.

![Una transcripció en reproducció, amb el segment actual ressaltat](/screenshots/transcript.png)

### Mira vídeos amb subtítols

Les transcripcions de vídeos mostren el vídeo damunt del text. El seu menú et permet **Mostrar els subtítols al vídeo** i triar-ne la **Mida** (petita, mitjana o gran), la **Posició** (a baix o a dalt) i l'**Estil** (fons fosc o contorn). Si la transcripció té una [traducció](/ca/guides/summary-and-translation/#traducció), el menú també permet triar si els subtítols mostren la **Transcripció** o la **Traducció a l'idioma…**.

### Cerca

Prem `Ctrl+F` (`⌘F` a macOS) i escriu. `Retorn` i `Maj+Retorn` van a la coincidència següent i anterior, i `Esc` esborra la cerca.

## Corregeix la transcripció

Per corregir la transcripció sense perdre les marques de temps (que fan servir els subtítols i la reproducció), fes servir les opcions del menú `⋯` o fes clic amb el botó dret en un segment:

- **Cerca i substitueix…**: substitueix una paraula o una frase a tota la transcripció, p. ex. un nom mal escrit. Mostra quantes vegades apareix el text abans de substituir-lo, i pot **Distingir majúscules**.
- **Canvia el nom dels parlants…**: dona un nom a cada parlant (`SPEAKER_00` → `Anna`). Donar el mateix nom a dos parlants els fusiona.
- **Edita el text…**: fes clic amb el botó dret en un segment per canviar-ne el text.
- **Reprodueix des d'aquí**: fes clic amb el botó dret en un segment per reproduir-lo.

Les paraules que no canvien mantenen els seus temps, així que es continuen ressaltant en reproduir.

## Text pla

El mode **Text pla** et permet editar el text lliurement, com en un editor de text. Els canvis es desen automàticament. La transcripció conserva el text original amb les marques de temps, així que els subtítols no fan servir els canvis del text pla.

## Copia i exporta

**Copia** copia el text del mode actual (la transcripció, el resum o la traducció).

**Exporta** (o `Ctrl+S`, `⌘S` a macOS) desa la transcripció com a:

| Format | Contingut |
| --- | --- |
| Text pla (`.txt`) | El text |
| Markdown (`.md`) | El resum, si n'hi ha, i el text en paràgrafs amb la marca de temps i el parlant de cadascun |
| Document de Word (`.docx`) | El mateix que Markdown, llest per editar o imprimir |
| Subtítols (`.srt`) | Subtítols per a reproductors de vídeo |
| Subtítols web (`.vtt`) | Subtítols per al web |
| Taula (`.tsv`) | Una fila per segment, amb l'inici i el final (en mil·lisegons) i el text |
| JSON (`.json`) | El text, els segments amb les marques de temps, les paraules i els parlants, i el resum, si n'hi ha |

Els subtítols i la taula necessiten marques de temps.

Si la transcripció té una traducció, tria **Traducció a l'idioma…** al mateix menú (o fes clic al botó d'exportar de la traducció) per exportar la traducció en els mateixos formats. El nom del fitxer inclou l'idioma (p. ex. `video.es.srt`), així els reproductors de vídeo el carreguen amb el vídeo.

## Canvia el nom, etiqueta i afegeix notes

La capçalera de la transcripció mostra el nom, l'origen, la data i l'etiqueta. Fes doble clic al nom per canviar-lo, fes clic a l'etiqueta per canviar-la o fes clic a **Afegeix una nota** per escriure'n una. Fes clic a la nota, o al seu llapis, per editar-la, i a la seva paperera per eliminar-la. Hi ha més opcions a l'[historial](/ca/guides/history/).
