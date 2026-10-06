---
title: Transkrypcja
description: Odtwarzaj, przeszukuj, poprawiaj, kopiuj i eksportuj transkrypcję oraz oglądaj filmy z napisami.
sidebar:
  order: 3
---

Wybierz transkrypcję w [historii](/pl/guides/history/), aby ją otworzyć. Pasek narzędzi przełącza między trzema widokami, **Transkrypcja**, **Zwykły tekst** i **Podsumowanie**, i zawiera przyciski **Przetłumacz**, **Kopiuj** i **Eksportuj**.

## Widok transkrypcji

Pokazuje każdy segment transkrypcji (zdanie lub część długiego zdania) z jego początkiem i końcem oraz, jeśli rozpoznano mówców, z mówcą.

Domyślnie czasy są uproszczone (`01:05 – 01:09`). Aby widzieć je z dokładnością do milisekundy, jak w napisach (`00:01:05,900 – 00:01:09,350`), zaznacz **Dokładne znaczniki czasu (00:00:01,000)** w menu `⋯`.

Znaczniki czasu są dostępne tylko w **WhisperX** oraz w modelach `whisper-1` i `gpt-4o-transcribe-diarize` **API Whisper**. Bez nich transkrypcji nie da się odtwarzać segment po segmencie; użyj wtedy widoku **Zwykły tekst**.

### Odtwarzaj nagranie

- **Kliknij segment**, aby odtworzyć nagranie od tego miejsca. Odtwarzany segment jest wyróżniony, a tekst przewija się razem z odtwarzaniem. Przy czasach słów wyróżniane jest też każde słowo.
- Pasek odtwarzacza pozwala odtwarzać, wstrzymywać, przechodzić do dowolnego miejsca i zmieniać **prędkość** od `0.5×` do `2×` bez zmiany wysokości głosu.
- Skróty klawiszowe: `Spacja` odtwarza lub wstrzymuje, a `←`/`→` cofają lub przewijają o 5 sekund.

Jeśli plik źródłowy został przeniesiony lub usunięty, nagranie jest niedostępne, ale tekst pozostaje. Nagrania z mikrofonu Audiotext przechowuje sam, więc zawsze można je odtworzyć.

![Odtwarzana transkrypcja z wyróżnionym bieżącym segmentem](/screenshots/transcript.png)

### Oglądaj filmy z napisami

Transkrypcje filmów pokazują film nad tekstem. Jego menu pozwala **Pokazywać napisy na filmie** i wybrać ich **Rozmiar** (mały, średni lub duży), **Położenie** (na dole lub na górze) i **Styl** (ciemne tło lub obrys). Jeśli transkrypcja ma [tłumaczenie](/pl/guides/summary-and-translation/#tłumaczenie), w menu można też wybrać, czy napisy pokazują **Transkrypcję**, czy **Tłumaczenie**.

### Wyszukiwanie

Naciśnij `Ctrl+F` (`⌘F` w macOS) i wpisz tekst. `Enter` i `Shift+Enter` przechodzą do następnego i poprzedniego wyniku, a `Esc` czyści wyszukiwanie.

## Poprawianie transkrypcji

Aby poprawić transkrypcję, zachowując znaczniki czasu (używane przez napisy i odtwarzanie), użyj opcji menu `⋯` lub kliknij segment prawym przyciskiem myszy:

- **Znajdź i zamień…**: zamienia słowo lub frazę w całej transkrypcji, np. błędnie zapisane nazwisko. Przed zamianą pokazuje, ile razy tekst występuje, i może **Uwzględniać wielkość liter**.
- **Zmień nazwy mówców…**: nadaje nazwę każdemu mówcy (`SPEAKER_00` → `Anna`). Nadanie dwóm mówcom tej samej nazwy łączy ich.
- **Edytuj tekst…**: kliknij segment prawym przyciskiem, aby zmienić jego tekst.
- **Odtwórz od tego miejsca**: kliknij segment prawym przyciskiem, aby go odtworzyć.

Słowa, które się nie zmieniają, zachowują swoje czasy, więc nadal są wyróżniane podczas odtwarzania.

## Zwykły tekst

Widok **Zwykły tekst** pozwala swobodnie edytować tekst, jak w edytorze tekstu. Zmiany zapisują się automatycznie. Widok transkrypcji zachowuje oryginalny tekst ze znacznikami czasu, więc napisy nie korzystają z edycji zwykłego tekstu.

## Kopiowanie i eksport

**Kopiuj** kopiuje tekst bieżącego widoku (transkrypcję, podsumowanie lub tłumaczenie).

**Eksportuj** (lub `Ctrl+S`, `⌘S` w macOS) zapisuje transkrypcję jako:

| Format | Zawartość |
| --- | --- |
| Zwykły tekst (`.txt`) | Tekst |
| Markdown (`.md`) | Podsumowanie, jeśli istnieje, i tekst w akapitach ze znacznikiem czasu i mówcą każdego z nich |
| Dokument Word (`.docx`) | To samo co Markdown, gotowe do edycji lub druku |
| Napisy (`.srt`) | Napisy do odtwarzaczy wideo |
| Napisy internetowe (`.vtt`) | Napisy do stron internetowych |
| Tabela (`.tsv`) | Jeden wiersz na segment, z początkiem i końcem (w milisekundach) oraz tekstem |
| JSON (`.json`) | Tekst, segmenty ze znacznikami czasu, słowami i mówcami oraz podsumowanie, jeśli istnieje |

Napisy i tabela wymagają znaczników czasu.

Jeśli transkrypcja ma tłumaczenie, wybierz **Tłumaczenie** w tym samym menu (lub kliknij przycisk eksportu tłumaczenia), aby wyeksportować tłumaczenie w tych samych formatach. Nazwa pliku zawiera jego język (np. `video.es.srt`), więc odtwarzacze wideo wczytują go razem z filmem.

## Nazwy, etykiety i notatki

Nagłówek transkrypcji pokazuje jej nazwę, źródło, datę i etykietę. Kliknij dwukrotnie nazwę, aby ją zmienić, kliknij etykietę, aby ją edytować, lub kliknij **Dodaj notatkę**, aby napisać notatkę. Kliknij notatkę lub jej ołówek, aby ją edytować, a jej kosz, aby ją usunąć. Więcej opcji znajdziesz w [historii](/pl/guides/history/).
