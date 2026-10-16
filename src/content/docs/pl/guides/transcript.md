---
title: Transkrypcja
description: Odtwarzaj, przeszukuj, poprawiaj, sprawdzaj, kopiuj i eksportuj transkrypcję oraz oglądaj i eksportuj filmy z napisami.
sidebar:
  order: 3
---

Wybierz transkrypcję w [historii](/pl/guides/history/), aby ją otworzyć. Pasek narzędzi przełącza między czterema widokami, **Napisy**, **Zwykły tekst**, **Podsumowanie** i **Zapytaj**, i zawiera przycisk **Przetłumacz** oraz menu `⋯`.

Transkrypcja jest wyświetlana na karcie zatytułowanej jej językiem. Przyciski w nagłówku karty pozwalają znaleźć i zamienić w niej tekst, skopiować ją, wyeksportować i **Transkrybuj ponownie** (po potwierdzeniu, bo poprawki tekstu zostaną utracone).

## Napisy

Pokazuje transkrypcję podzieloną na napisy filmu, z początkiem i końcem każdego napisu oraz, jeśli rozpoznano mówców, z mówcą. Ich długość zależy od [preferencji napisów](/pl/reference/preferences/#napisy).

Domyślnie czasy są pokazywane z dokładnością do milisekundy, jak w napisach (`00:01:05,900 – 00:01:09,350`). Aby je uprościć (`01:05 – 01:09`), odznacz **Dokładne znaczniki czasu (HH:MM:SS,mmm)** w menu `⋯`.

Nad napisami wiersz podaje ich liczbę oraz, jeśli rozpoznano mówców, liczbę mówców (np. `Napisy: 120 · Mówcy: 3`). Długi segment podzielony na kilka napisów liczy się jako kilka.

Znaczniki czasu są dostępne tylko w **WhisperX** oraz w modelach `whisper-1` i `gpt-4o-transcribe-diarize` **API Whisper**. Bez nich transkrypcji nie da się odtwarzać napis po napisie; użyj wtedy widoku **Zwykły tekst**.

### Odtwarzaj nagranie

- **Kliknij napis**, aby odtworzyć nagranie od tego miejsca. Odtwarzany napis jest wyróżniony i utrzymywany na środku tekstu. Przy czasach słów wyróżniane jest też każde słowo.
- Pasek odtwarzacza pozwala odtwarzać, wstrzymywać, przechodzić do dowolnego miejsca i zmieniać **prędkość** od `0.5×` do `2×` bez zmiany wysokości głosu.
- Skróty klawiszowe: `Spacja` odtwarza lub wstrzymuje, a `←`/`→` cofają lub przewijają o 5 sekund.

Jeśli plik źródłowy został przeniesiony lub usunięty, nagranie jest niedostępne, ale tekst pozostaje. Nagrania z mikrofonu Audiotext przechowuje sam, więc zawsze można je odtworzyć.

![Odtwarzana transkrypcja z wyróżnionym bieżącym segmentem](/screenshots/transcript.png)

### Oglądaj filmy z napisami

Transkrypcje filmów pokazują film nad tekstem. Jego menu pozwala **Pokazuj napisy na filmie** i wybrać ich **Rozmiar** (mały, średni lub duży), **Położenie** (na dole lub na górze) i **Styl** (ciemne tło lub obrys). Jeśli transkrypcja ma [tłumaczenia](/pl/guides/summary-and-translation/#tłumaczenie), w menu można też wybrać, czy napisy pokazują **Transkrypcję**, czy **Tłumaczenie** na dany język. Przycisk **Napisy** na pasku odtwarzacza też je pokazuje lub ukrywa, a strzałka obok otwiera to samo menu.

## Znajdź i zamień

Naciśnij `Ctrl+F` (`⌘F` w macOS) lub kliknij lupę w nagłówku, aby otworzyć okno wyszukiwania i zamiany w tekście, nad którym pracujesz: w transkrypcji lub jej tłumaczeniu. Znajduje tekst już podczas pisania (znaczniki czasu i mówcy nie są przeszukiwani) i pokazuje liczbę wyników.

- `Enter` i `Shift+Enter` lub strzałki przechodzą do następnego i poprzedniego wyniku.
- **Zamień** zamienia bieżący wynik, a **Zamień wszystko** wszystkie, np. błędnie zapisane nazwisko. Zaznacz **Uwzględniaj wielkość liter**, aby znaleźć tylko tekst o tej samej wielkości liter.
- Okno nie jest modalne, więc możesz czytać i odtwarzać tekst, gdy jest otwarte. **Zawsze na wierzchu** utrzymuje je nad głównym oknem.
- `Esc` je zamyka.

W widoku **Zwykły tekst** okno tylko wyszukuje (**Znajdź w transkrypcji**), bo dopasowania w nim nie da się powiązać z napisem. Aby zastępować, wróć do widoku **Napisy**.

## Poprawianie transkrypcji

Aby poprawić transkrypcję, zachowując znaczniki czasu (używane przez napisy i odtwarzanie), użyj okna [Znajdź i zamień](#znajdź-i-zamień) lub kliknij napis prawym przyciskiem myszy:

- **Odtwórz od tego miejsca**: odtwarza go.
- **Kopiuj**: kopiuje jego tekst.
- **Edytuj tekst…**: zmienia jego tekst.
- **Zmień nazwy mówców…**: nadaje nazwę każdemu mówcy (`SPEAKER_00` → `Anna`). Nadanie dwóm mówcom tej samej nazwy łączy ich. Jest też w menu `⋯`.

Słowa, które się nie zmieniają, zachowują swoje czasy, więc nadal są wyróżniane podczas odtwarzania.

## Sprawdzanie słów o niskiej pewności

Słowa, których silnik jest najmniej pewny, są podkreślane, żebyś wiedział, co sprawdzić najpierw. WhisperX ocenia każde słowo, gdy ustala jego czasy (**Czasy poszczególnych słów**, domyślnie włączone), a model `whisper-1` API Whisper ocenia każdy segment, więc jego segmenty są podkreślane w całości.

Pasek nad tekstem pokazuje, ile słów zostało do sprawdzenia (np. `3 z 12 do sprawdzenia`):

- Jego strzałki lub `Ctrl+J` i `Shift+Ctrl+J` (`⌘J` i `⇧⌘J` w macOS) przechodzą do następnego i poprzedniego słowa i przesuwają do niego odtwarzacz. Przy **Odtwarzaj automatycznie** każde słowo jest odtwarzane z krótkim fragmentem wokół.
- `Enter` akceptuje bieżące słowo bez zmian i przechodzi do następnego. **Zaakceptuj pozostałe** akceptuje wszystkie pozostałe słowa, a **Cofnij** cofa ostatnie sprawdzenie.
- Kliknij słowo, aby je poprawić na miejscu: wpisz poprawny tekst i naciśnij `Enter` (lub **Zaakceptuj** bez zmian). **Odtwórz ponownie** (`Ctrl+R`, `⌘R` w macOS) odtwarza je jeszcze raz, a `Esc` zamyka.
- **Tylko oznaczone** pokazuje tylko napisy ze słowami do sprawdzenia.
- Słowa są też zaznaczone pod pozycją nagrania. Kliknij znacznik, aby przejść do jego słowa.

Gdy wszystkie są sprawdzone, **Sprawdź ponownie zaakceptowane słowa** przywraca zaakceptowane słowa. Poprawione słowa pozostają sprawdzone.

Słowa są podkreślane, gdy ich ocena jest niższa niż 40%. Wybierz inny próg, od 20% do 70%, w `⋯` → **Próg niskiej pewności** lub przyciskiem **Dostosuj próg** na pasku. Aby przestać je podkreślać i ukryć pasek, odznacz **Wyróżniaj słowa o niskiej pewności** w menu `⋯`.

Jeśli transkrypcja nie ma ocen, menu `⋯` podaje powód: **Włącz „Czasy poszczególnych słów” i przetranskrybuj ponownie**, **Brak modelu wyrównania dla tego języka**, **Przetranskrybuj ponownie, aby ocenić słowa** (powstała, zanim słowa były oceniane) lub **Słowa oceniają tylko WhisperX i whisper-1**.

## Zwykły tekst

Widok **Zwykły tekst** pokazuje tekst transkrypcji bez znaczników czasu. Jest budowany z napisów, więc jest tylko do odczytu, jak mówi uwaga obok widoków: aby go zmienić, [popraw napisy](#poprawianie-transkrypcji), a zwykły tekst za nimi podąży. Dzięki temu wszystkie eksporty i tłumaczenia używają tego samego tekstu.

Transkrypcje bez znaczników czasu (np. z API Google) nie mają napisów, więc ich zwykły tekst można swobodnie edytować, jak w edytorze tekstu. Zmiany zapisują się automatycznie.

:::note
Wcześniejsze wersje pozwalały edytować zwykły tekst transkrypcji z napisami. Po otwarciu takiej transkrypcji (lub tłumaczenia) jej zwykły tekst jest budowany od nowa z napisów, więc te zmiany zostają zastąpione.
:::

## Kopiowanie i eksport

Przycisk kopiowania w nagłówku kopiuje tekst transkrypcji.

Przycisk eksportu (lub `Ctrl+S`, `⌘S` w macOS) zapisuje ją jako:

| Format | Zawartość |
| --- | --- |
| Dokument Word (`.docx`) | To samo co Markdown, gotowe do edycji lub druku |
| JSON (`.json`) | Tekst, segmenty ze znacznikami czasu, słowami i mówcami oraz podsumowanie, jeśli istnieje |
| Markdown (`.md`) | Podsumowanie, jeśli istnieje, i tekst w akapitach ze znacznikiem czasu i mówcą każdego z nich |
| Napisy (`.srt`) | Napisy do odtwarzaczy wideo |
| Napisy internetowe (`.vtt`) | Napisy do stron internetowych |
| Napisy ze stylem (`.ass`) | Napisy z kolorem dla każdego mówcy, do odtwarzaczy i edytorów wideo |
| Tabela (`.tsv`) | Jeden wiersz na segment, z początkiem i końcem (w milisekundach) oraz tekstem |
| Zwykły tekst (`.txt`) | Tekst |

Napisy i tabela wymagają znaczników czasu. [Tłumaczenia](/pl/guides/summary-and-translation/#napisy-i-eksport) i [podsumowanie](/pl/guides/summary-and-translation/#podsumowanie) eksportuje się z ich własnych paneli.

### Eksport filmu z napisami

Aby udostępnić film tam, gdzie nie można wczytać plików napisów (np. w serwisie społecznościowym), wybierz **Wideo z napisami (.mp4)…** w menu eksportu transkrypcji lub tłumaczenia. Audiotext tworzy kopię filmu z wtopionymi napisami, takimi jak w aplikacji: z ich rozmiarem, położeniem i stylem (zobacz [Oglądaj filmy z napisami](#oglądaj-filmy-z-napisami)).

Kopia powstaje w tle, a pasek stanu pokazuje postęp. Aby ją anulować, wybierz **Przerwij dodawanie napisów do wideo** w tym samym menu. Kopia to plik MP4 (wideo H.264 i dźwięk AAC), a oryginalny film się nie zmienia.

Jeśli żadna czcionka w systemie nie zawiera niektórych znaków napisów, są one rysowane jako kwadraty, a Audiotext wymienia je po zakończeniu. Zobacz [Rozwiązywanie problemów](/pl/help/troubleshooting/#film-z-napisami-pokazuje-kwadraty).

## Nazwy, etykiety i notatki

Nagłówek transkrypcji pokazuje jej nazwę, źródło, datę i etykietę. Kliknij dwukrotnie nazwę, aby ją zmienić, kliknij etykietę, aby ją edytować, lub kliknij **Dodaj notatkę**, aby napisać notatkę. Kliknij notatkę lub jej ołówek, aby ją edytować, a jej kosz, aby ją usunąć.

Menu `⋯` też ma te opcje i otwiera folder pliku źródłowego lub **folder zapisanych plików**. Więcej opcji znajdziesz w [historii](/pl/guides/history/).
