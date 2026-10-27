---
title: Twoja pierwsza transkrypcja
description: Przegląd okna Audiotext i kroki transkrypcji pliku audio lub wideo.
sidebar:
  order: 2
---

## Okno

Okno Audiotext składa się z trzech części:

- **Górny pasek**: przyciski do rozpoczęcia **Nowej transkrypcji** z **Pliku**, **URL**, **Mikrofonu** lub **Folderu**, stan aplikacji i koło zębate, które otwiera [Preferencje](/pl/reference/preferences/). Przycisk po lewej pokazuje lub ukrywa historię.
- **Historia** po lewej: wszystkie twoje transkrypcje, które możesz przeszukiwać, przypinać, grupować i zmieniać ich nazwy. Zobacz [Historia](/pl/guides/history/).
- **Główny obszar**: źródło, które konfigurujesz, postęp transkrypcji lub transkrypcja wybrana w historii.

![Części okna Audiotext: górny pasek, historia i obszar główny](/screenshots/window.png)

Po otwarciu aplikacji główny obszar pyta **Co chcesz transkrybować?** i pokazuje kartę dla każdego rodzaju źródła.

:::tip
Upuść plik lub folder w dowolnym miejscu okna, aby go transkrybować.
:::

## Transkrybuj plik

1. Kliknij **Plik** na górnym pasku (lub naciśnij `Ctrl+O`, `⌘O` w macOS) i wybierz plik audio lub wideo albo upuść go w oknie. Następnie kliknij **Kontynuuj**.
2. Sprawdź ustawienia. Wartości domyślne sprawdzają się w większości nagrań:
   - **Silnik**: WhisperX, który działa na twoim komputerze. Wybierz mniejszy **Model** (np. `small`), jeśli komputer jest wolny.
   - **Język**: **Język nagrania** jest wykrywany automatycznie. Wybierz go, jeśli go znasz, aby uniknąć błędów. Aby przetłumaczyć, wybierz inny **Język transkrypcji**.
   - **Kontekst** i **Opcje**: opcjonalne podpowiedzi i funkcje, np. rozpoznawanie mówców.

   Wszystkie znajdziesz w [Ustawieniach transkrypcji](/pl/guides/transcription-settings/).
3. Kliknij **Rozpocznij transkrypcję** (lub naciśnij `Ctrl+Enter`, `⌘↩` w macOS).

W trakcie pracy widać postęp każdego kroku (ładowanie modelu, transkrypcja, wyrównywanie słów…). W tym czasie możesz dalej korzystać z Audiotext: wynik zostanie zapisany w historii i otworzy się, gdy będzie gotowy. Aby ją anulować, kliknij **Anuluj** lub naciśnij `Esc`.

Jeśli trwa inna transkrypcja, przycisk zmienia się na **Dodaj do kolejki**, a nowa zaczyna się po zakończeniu bieżącej.

## Czytaj i używaj wyniku

Po zakończeniu otwiera się transkrypcja:

- Kliknij segment, aby odtworzyć nagranie od tego miejsca.
- Przełączaj między widokami **Napisy**, **Zwykły tekst**, **Podsumowanie** i **Zapytaj**, aby zadawać pytania o nią.
- Użyj przycisku **Przetłumacz**, aby ją przetłumaczyć, a przycisków w nagłówku transkrypcji, aby znaleźć i zamienić w niej tekst, skopiować ją lub zapisać jako plik.
- Sprawdź podkreślone słowa, których silnik jest najmniej pewny.

Zobacz [Transkrypcja](/pl/guides/transcript/), aby poznać wszystko, co możesz z nią zrobić.

## Skróty klawiszowe

| Skrót | Działanie |
| --- | --- |
| `Ctrl+Enter` / `⌘↩` | Rozpoczęcie transkrypcji albo rozpoczęcie i zatrzymanie nagrywania |
| `Ctrl+O` / `⌘O` | Wybór pliku (lub folderu w źródle Folder) |
| `Ctrl+S` / `⌘S` | Eksport tekstu, nad którym pracujesz: transkrypcji lub jej tłumaczenia |
| `Ctrl+F` / `⌘F` | Znajdowanie i zamiana w tekście, nad którym pracujesz (lub wyszukiwanie w podsumowaniu) |
| `Ctrl+J` / `⌘J` | Przejście do następnego słowa o niskiej pewności |
| `Shift+Ctrl+J` / `⇧⌘J` | Przejście do poprzedniego słowa o niskiej pewności |
| `Esc` | Anulować trwającą transkrypcję (lub wyczyścić zaznaczenie plików folderu) |
| `Ctrl+A` / `⌘A` | Zaznaczyć wszystkie wyświetlane pliki folderu |
| `Enter` | Otworzyć zaznaczony plik folderu |
| `Spacja` | Odtwarzanie lub wstrzymanie nagrania |
| `←` / `→` | Cofnięcie lub przewinięcie o 5 sekund |
