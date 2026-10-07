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

Pokud přepis selže se zprávou **Rozpoznávání mluvčích vyžaduje token Hugging Face.** nebo **Model pro rozpoznávání mluvčích se nepodařilo stáhnout.**, token chybí, není platný nebo nemá k modelu přístup.

Rozpoznání mluvčích vyžaduje token Hugging Face a přijetí podmínek modelu. Zkontrolujte, že:

- Jste přijali podmínky [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) se stejným účtem.
- Token má roli `Read` a je nastaven v **Předvolby** → **Klíče API**.

Viz [Rozpoznání mluvčích](/cs/guides/transcription-settings/#rozpoznání-mluvčích).

## Nebyl nalezen mikrofon nebo se nic nenahrává

- Zkontrolujte, že je mikrofon připojený, a klikněte na tlačítko obnovení vedle seznamu mikrofonů.
- V macOS povolte Audiotextu přístup v **Nastavení systému** → **Soukromí a zabezpečení** → **Mikrofon**, ve Windows v **Nastavení** → **Ochrana osobních údajů** → **Mikrofon**.
- Pokud měřič úrovně ukazuje **Žádný zvuk**, vyberte v seznamu jiný mikrofon nebo zkontrolujte, že není ztlumený.
- Pokud se zobrazí **Nebyl nahrán žádný zvuk.**, nahrávání skončilo dřív, než mikrofon poslal jakýkoli zvuk. Nahrávejte znovu nebo zvolte jiný mikrofon.

## Živý text se nezobrazuje

Pokud se během nahrávání zobrazí **Text nelze během nahrávání zobrazit.**, nepodařilo se načíst **Živý model**: například se při prvním použití stahuje, k čemuž je potřeba připojení k internetu, nebo není dost paměti. Nahrávání to neovlivní a po zastavení se přepíše jako obvykle. Zvolte na kartě **Živý text** menší **Živý model** (např. `tiny` nebo `base`).

## Zvuk přepisu nelze přehrát

Zdrojový soubor byl přesunut nebo smazán. Text zůstává, ale zvuk lze přehrát jen z původního souboru. Nahrávky z mikrofonu a zvuk z URL si Audiotext uchovává sám.

## Video z YouTube nelze stáhnout

Zkontrolujte, že je URL správná a video veřejné. YouTube se často mění, takže pokud problém přetrvává, zkontrolujte, zda není k dispozici novější verze Audiotextu.

Pokud se místo toho zobrazí **Video na YouTube nemá zvukovou stopu.**, video nemá žádný zvuk k přepisu.

## Odkaz nelze přepsat

- **URL neodkazuje na zvukový ani video soubor.**: odkaz otevírá webovou stránku, ne soubor. Fungují jen odkazy na videa z YouTube a přímé odkazy na zvukové nebo video soubory. Najděte na stránce odkaz, který soubor stahuje (např. epizodu podcastu), a použijte ho, nebo soubor stáhněte a přepište ho pomocí zdroje **Soubor**.
- **Soubor se nepodařilo stáhnout: …**: soubor nebyl dostupný. Zkontrolujte, že se odkaz otevře v prohlížeči a že jste připojeni k internetu. Odkazy, které vyžadují přihlášení, stáhnout nelze: stáhněte soubor sami a použijte zdroj **Soubor**.

## Složka nepřepíše žádný soubor

Soubory, které už přepis mají, se přeskakují. Zapněte **Přepsat existující soubory**, chcete-li je přepsat znovu. Složka také musí obsahovat [podporované soubory](/cs/reference/formats-and-languages/).

## Google API žádá o jazyk

Google API neumí jazyk rozpoznat. V nastavení vyberte **Jazyk zvuku**.

## Shrnutí nebo překlad selže

- **DeepL nedokáže překládat do jazyka: ….**: DeepL tento jazyk nepodporuje. Zvolte jiného poskytovatele, například jazykový model.
- **Odpověď modelu byla příliš dlouhá.**, **Model nevrátil platné shrnutí.** nebo **Model nevrátil platný překlad.**: model nenapsal shrnutí nebo překlad v očekávaném formátu. Zkuste to znovu nebo zvolte větší model v **Předvolby** → **AI**. Malé modely Ollamy selhávají častěji.
- U jakékoli jiné chyby zkontrolujte, že je klíč API poskytovatele nastaven v **Předvolby** → **Klíče API** a že má váš účet kredit.

## Aktualizace nelze zkontrolovat

**Nepodařilo se zkontrolovat aktualizace.** znamená, že se Audiotext nemohl spojit s GitHubem. Zkontrolujte připojení k internetu a zda ho neblokuje firewall nebo proxy. Nejnovější verzi si vždy můžete stáhnout ze [stránky vydání](https://github.com/HenestrosaDev/audiotext/releases/latest).

## Něco jiného

Prohledejte [hlášení](https://github.com/HenestrosaDev/audiotext/issues) nebo se zeptejte v [diskuzích](https://github.com/HenestrosaDev/audiotext/discussions). Pokud najdete chybu, [nahlaste ji](https://github.com/HenestrosaDev/audiotext/issues/new/choose) se svým systémem, verzí Audiotextu a postupem, jak ji vyvolat.
