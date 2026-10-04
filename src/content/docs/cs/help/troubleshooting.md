---
title: Řešení problémů
description: Řešení nejčastějších problémů s Audiotextem.
sidebar:
  order: 1
---

## První přepis ve WhisperX trvá dlouho

Při prvním použití se model stáhne, což může podle připojení a velikosti modelu (až ~3 GB) trvat několik minut. Průběh ukazuje, kdy se model načítá. Model zůstává v paměti, dokud se jeho možnosti nezmění, takže další přepisy začínají okamžitě.

## WhisperX selže s chybou `CUDA out of memory`

Grafická karta nemá pro dané nastavení dost paměti. Zkuste v tomto pořadí:

1. Snižte **Velikost dávky** (např. `4`) v **Předvolby** → **WhisperX**.
2. Použijte menší model (např. `small` nebo `base`).
3. Použijte lehčí **Typ výpočtu** (např. `int8`).

Poslední dvě možnosti mohou snížit kvalitu. Kolik paměti potřebuje každý model, najdete v části [Nástroje](/cs/reference/engines/#model).

## Přepis trvá příliš dlouho

Rychlost WhisperX závisí na hardwaru, takže na slabších procesorech nečekejte okamžité výsledky. Zkuste menší model jako `small`, `large-v3-turbo` na grafické kartě nebo typ výpočtu `int8`. Případně použijte **Whisper API** nebo **Google API**, která běží na vzdálených serverech.

## Whisper API vrací chybu `429`

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

Na vašem účtu OpenAI došel kredit, nebo musíte před prvním použitím API dobít prostředky (i když máte bezplatný kredit). Kredit koupíte v části [Billing](https://platform.openai.com/settings/organization/billing/overview) účtu OpenAI. Aktivace účtu může trvat až 10 minut.

Pokud jste klíč API vytvořili před prvním dobitím a chyba přetrvává i po 10 minutách, vytvořte nový klíč a nastavte ho v **Předvolby** → **Klíče API**.

## Mluvčí nejsou rozpoznáni

Rozpoznání mluvčích vyžaduje token Hugging Face a přijetí podmínek modelu. Zkontrolujte, že:

- Jste přijali podmínky [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) se stejným účtem.
- Token má roli `Read` a je nastaven v **Předvolby** → **Klíče API**.

Viz [Rozpoznání mluvčích](/cs/guides/transcription-settings/#rozpoznání-mluvčích).

## Nebyl nalezen mikrofon nebo se nic nenahrává

- Zkontrolujte, že je mikrofon připojený, a klikněte na tlačítko obnovení vedle seznamu mikrofonů.
- V macOS povolte Audiotextu přístup v **Nastavení systému** → **Soukromí a zabezpečení** → **Mikrofon**, ve Windows v **Nastavení** → **Ochrana osobních údajů** → **Mikrofon**.
- Pokud měřič úrovně ukazuje **Žádný zvuk**, vyberte v seznamu jiný mikrofon nebo zkontrolujte, že není ztlumený.

## Zvuk přepisu nelze přehrát

Zdrojový soubor byl přesunut nebo smazán. Text zůstává, ale zvuk lze přehrát jen z původního souboru. Nahrávky z mikrofonu a zvuk z URL si Audiotext uchovává sám.

## Video z YouTube nelze stáhnout

Zkontrolujte, že je URL správná a video veřejné. YouTube se často mění, takže pokud problém přetrvává, zkontrolujte, zda není k dispozici novější verze Audiotextu.

## Složka nepřepíše žádný soubor

Soubory, které už přepis mají, se přeskakují. Zapněte **Přepsat existující soubory**, chcete-li je přepsat znovu. Složka také musí obsahovat [podporované soubory](/cs/reference/formats-and-languages/).

## Google API žádá o jazyk

Google API neumí jazyk rozpoznat. V nastavení vyberte **Jazyk zvuku**.

## Něco jiného

Prohledejte [hlášení](https://github.com/HenestrosaDev/audiotext/issues) nebo se zeptejte v [diskuzích](https://github.com/HenestrosaDev/audiotext/discussions). Pokud najdete chybu, [nahlaste ji](https://github.com/HenestrosaDev/audiotext/issues/new/choose) se svým systémem, verzí Audiotextu a postupem, jak ji vyvolat.
