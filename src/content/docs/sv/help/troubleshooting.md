---
title: Felsökning
description: Lösningar på de vanligaste problemen med Audiotext.
sidebar:
  order: 1
---

## Den första transkriberingen med WhisperX tar lång tid

Första gången en modell används laddas den ner, vilket kan ta flera minuter beroende på anslutningen och modellens storlek (upp till ~3 GB). Förloppet visar när den laddas. Modellen stannar i minnet så länge dess alternativ inte ändras, så nästa transkriberingar startar direkt.

## WhisperX misslyckas med `CUDA out of memory`

Grafikkortet har inte tillräckligt med minne för inställningarna. Prova i den här ordningen:

1. Sänk **Batchstorlek** (t.ex. `4`) under **Inställningar** → **Transkribering**.
2. Använd en mindre modell (t.ex. `small` eller `base`).
3. Använd en lättare **Beräkningstyp** (t.ex. `int8`).

De två sista kan sänka kvaliteten. Se [Motorer](/sv/reference/engines/#modell) för minnet som varje modell behöver.

## Transkriberingen tar för lång tid

WhisperX hastighet beror på hårdvaran, så förvänta dig inte omedelbara resultat på enkla processorer. Prova en mindre modell som `small`, `large-v3-turbo` på ett grafikkort eller beräkningstypen `int8`. På en Mac med Apple Silicon kontrollerar du att **Använd CPU** är av under **Inställningar** → **Transkribering**, så att den transkriberar på grafikprocessorn. Du kan också använda **Whisper-API:t** eller **Google-API:t**, som körs på fjärrservrar.

## Whisper-API:t returnerar felet `429`

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

Ditt OpenAI-konto har slut på krediter, eller så måste du sätta in pengar innan du använder API:t första gången (även om du har gratiskrediter). Köp krediter under [Billing](https://platform.openai.com/settings/organization/billing/overview) i ditt OpenAI-konto. Det kan ta upp till 10 minuter innan kontot aktiveras.

Om du skapade API-nyckeln innan du satte in pengar första gången och felet kvarstår efter 10 minuter skapar du en ny nyckel och anger den under **Inställningar** → **API-nycklar**.

## Talarna identifieras inte

Om transkriberingen misslyckas med **Talaridentifiering kräver en Hugging Face-token.** eller **Det gick inte att ladda ned modellen för talaridentifiering.** saknas token, är ogiltig eller har inte åtkomst till modellen.

Talaridentifiering kräver en Hugging Face-token och att du godkänt modellens villkor. Kontrollera att:

- Du har godkänt villkoren för [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) med samma konto.
- Token har rollen `Read` och är angiven under **Inställningar** → **API-nycklar**.

Se [Identifiera talarna](/sv/guides/transcription-settings/#identifiera-talarna).

## Ingen mikrofon hittas, eller inget spelas in

- Kontrollera att mikrofonen är ansluten och klicka på uppdateringsknappen bredvid mikrofonlistan.
- På macOS ger du Audiotext åtkomst under **Systeminställningar** → **Integritet och säkerhet** → **Mikrofon**. På Windows under **Inställningar** → **Sekretess** → **Mikrofon**.
- Om nivåmätaren visar **Inget ljud** väljer du en annan mikrofon i listan eller kontrollerar att den inte är avstängd.
- Om **Inget ljud spelades in.** visas avslutades inspelningen innan mikrofonen skickade något ljud. Spela in igen, eller välj en annan mikrofon.

## Livetexten visas inte

Om **Texten kan inte visas under inspelning.** visas under inspelningen kunde **Livemodell** inte läsas in: den laddas till exempel ned första gången den används, vilket kräver en internetanslutning, eller så räcker inte minnet. Inspelningen påverkas inte och transkriberas som vanligt när du stoppar. Välj en mindre **Livemodell** (t.ex. `tiny` eller `base`) i kortet **Livetext**.

## Ljudet i en transkribering kan inte spelas upp

Källfilen har flyttats eller tagits bort. Texten finns kvar, men ljudet kan bara spelas upp från originalfilen. Mikrofoninspelningar och ljud från URL:er sparas av Audiotext.

## En YouTube-video kan inte laddas ner

Kontrollera att URL:en är rätt och att videon är offentlig. YouTube ändras ofta, så om det fortfarande misslyckas, kontrollera om det finns en nyare version av Audiotext.

Om **YouTube-videon har inget ljudspår.** visas i stället har videon inget ljud att transkribera.

## En länk kan inte transkriberas

- **URL:en pekar inte på en ljud- eller videofil.**: länken öppnar en webbsida, inte en fil. Bara länkar till YouTube-videor och direktlänkar till ljud- eller videofiler fungerar. Leta på sidan efter länken som laddar ned filen (t.ex. avsnittet av en podcast) och använd den, eller ladda ned filen och transkribera den med källan **Fil**.
- **Det gick inte att ladda ned filen: …**: filen gick inte att nå. Kontrollera att länken öppnas i webbläsaren och att du är ansluten till internet. Länkar som kräver inloggning kan inte laddas ned: ladda ned filen själv och använd källan **Fil**.

## En mapp transkriberar inga filer

Filer som redan har en transkribering hoppas över, liksom dolda filer och filer som matchar **Hoppa över filer som matchar**. Använd **Transkribera alla igen…** i mappens `⋯`-meny för att transkribera dem igen, eller markera dem i dess [fillista](/sv/guides/sources/#filerna-i-en-mapp). Filerna i undermapparna transkriberas bara med **Inkludera undermappar**, och mappen måste innehålla [filer som stöds](/sv/reference/formats-and-languages/).

## Google-API:t frågar efter språket

Google-API:t kan inte identifiera språket. Välj **Ljudets språk** i inställningarna.

## En sammanfattning, ett svar eller en översättning misslyckas

- **DeepL kan inte översätta till ….**: DeepL stöder inte det språket. Välj en annan leverantör, till exempel en språkmodell.
- **Modellens svar var för långt.**, **Modellen returnerade ingen giltig sammanfattning.**, **Modellen returnerade inget giltigt svar.** eller **Modellen returnerade ingen giltig översättning.**: modellen skrev inte sammanfattningen, svaret eller översättningen i det förväntade formatet. Försök igen, eller välj en större modell under **Inställningar** → **Leverantörer**. Ollamas små modeller misslyckas oftare.
- Vid alla andra fel kontrollerar du att leverantörens API-nyckel är angiven under **Inställningar** → **API-nycklar** och att ditt konto har krediter.

## Ord med låg säkerhet stryks inte under

Kontrollera att **Markera ord med låg säkerhet** är på i transkriberingens meny `⋯`. Om transkriberingen saknar poäng säger menyn varför:

- **Slå på ”Tider per ord” och transkribera igen**: WhisperX poängsätter orden när det bestämmer deras tider.
- **Det finns ingen justeringsmodell för språket**: orden på det språket kan varken tidsbestämmas eller poängsättas.
- **Transkribera igen för att poängsätta orden**: den transkriberades innan orden poängsattes.
- **Bara WhisperX och whisper-1 poängsätter orden**: de andra motorerna och modellerna gör det inte.

Se [Granska ord med låg säkerhet](/sv/guides/transcript/#granska-ord-med-låg-säkerhet).

## Videon med undertexter visar rutor

Om **Exporterad till …, men inget typsnitt har de här tecknen, så de visas som rutor: …** visas efter att du [exporterat videon med undertexterna](/sv/guides/transcript/#exportera-videon-med-undertexterna), kan inget typsnitt i ditt system rita de tecknen. Installera ett typsnitt för den skriften (t.ex. [Noto](https://fonts.google.com/noto)) och exportera igen.

## Det går inte att söka efter uppdateringar

**Det gick inte att söka efter uppdateringar.** betyder att Audiotext inte kunde nå GitHub. Kontrollera din internetanslutning, eller om en brandvägg eller proxy blockerar den. Du kan alltid ladda ned den senaste versionen från [versionssidan](https://github.com/HenestrosaDev/audiotext/releases/latest).

## Något annat

Sök bland [issues](https://github.com/HenestrosaDev/audiotext/issues) eller fråga i [diskussionerna](https://github.com/HenestrosaDev/audiotext/discussions). Om du hittar en bugg, [rapportera den](https://github.com/HenestrosaDev/audiotext/issues/new/choose) med ditt system, Audiotexts version och stegen för att återskapa den.
