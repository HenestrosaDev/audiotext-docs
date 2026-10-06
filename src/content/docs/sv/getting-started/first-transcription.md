---
title: Din första transkribering
description: En rundtur i Audiotexts fönster och stegen för att transkribera en ljud- eller videofil.
sidebar:
  order: 2
---

## Fönstret

Audiotexts fönster har tre delar:

- **Det övre fältet**: knapparna för att starta en **Ny transkribering** från en **Fil**, en **URL**, **Mikrofonen** eller en **Mapp**, appens status och kugghjulet som öppnar [Inställningar](/sv/reference/preferences/). Knappen till vänster visar eller döljer historiken.
- **Historiken**, till vänster: alla dina transkriberingar, som du kan söka i, fästa, gruppera och byta namn på. Se [Historik](/sv/guides/history/).
- **Huvudområdet**: källan du ställer in, förloppet för en transkribering eller transkriberingen du har valt i historiken.

![Delarna av Audiotext-fönstret: det övre fältet, historiken och huvudområdet](/screenshots/window.png)

När du öppnar appen frågar huvudområdet **Vad vill du transkribera?** och visar ett kort för varje typ av källa.

:::tip
Släpp en fil eller mapp var som helst i fönstret för att transkribera den.
:::

## Transkribera en fil

1. Klicka på **Fil** i det övre fältet (eller tryck `Ctrl+O`, `⌘O` på macOS) och välj en ljud- eller videofil, eller släpp den i fönstret. Klicka sedan på **Fortsätt**.
2. Granska inställningarna. Standardvärdena fungerar bra för de flesta inspelningar:
   - **Motor**: WhisperX, som körs på din dator. Välj en mindre **Modell** (som `small`) om datorn är långsam.
   - **Språk**: **Ljudets språk** identifieras automatiskt. Välj det om du vet vilket det är, för att undvika fel. För att översätta väljer du ett annat **Transkriberingens språk**.
   - **Sammanhang** och **Alternativ**: valfria tips och funktioner, som att identifiera talarna.

   Se [Transkriberingsinställningar](/sv/guides/transcription-settings/) för alla inställningar.
3. Klicka på **Starta transkriberingen** (eller tryck `Ctrl+Enter`, `⌘↩` på macOS).

Medan den arbetar visas förloppet för varje steg (ladda modellen, transkribera, justera orden …). Du kan fortsätta använda Audiotext under tiden: resultatet sparas i historiken och öppnas när det är klart. För att avbryta klickar du på **Avbryt** eller trycker `Esc`.

Om en annan transkribering pågår blir knappen **Lägg till i kön**, och den nya startar när den nuvarande är klar.

## Läs och använd resultatet

När den är klar öppnas transkriberingen:

- Klicka på ett segment för att spela upp ljudet därifrån.
- Växla mellan **Transkript**, **Oformaterad text** och **Sammanfattning**.
- Använd **Översätt**, **Kopiera** och **Exportera** för att översätta, kopiera eller spara den som en fil.

Se [Transkriptet](/sv/guides/transcript/) för allt du kan göra med den.

## Kortkommandon

| Kortkommando | Åtgärd |
| --- | --- |
| `Ctrl+Enter` / `⌘↩` | Starta transkriberingen, eller starta och stoppa inspelningen |
| `Ctrl+O` / `⌘O` | Välja en fil (eller en mapp, för mappkällan) |
| `Ctrl+S` / `⌘S` | Exportera transkriberingen som visas |
| `Ctrl+F` / `⌘F` | Söka i transkriberingen |
| `Esc` | Avbryta den pågående transkriberingen |
| `Blanksteg` | Spela upp eller pausa ljudet |
| `←` / `→` | Gå 5 sekunder bakåt eller framåt |
