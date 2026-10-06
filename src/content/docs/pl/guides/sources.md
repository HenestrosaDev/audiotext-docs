---
title: Źródła dźwięku
description: Transkrybuj pliki, filmy z YouTube i linki, nagrania z mikrofonu, foldery i obserwowane foldery.
sidebar:
  order: 1
---

Audiotext transkrybuje z czterech rodzajów źródeł, które wybierasz na górnym pasku, w sekcji **Nowa transkrypcja**.

## Plik

Transkrybuje plik audio lub wideo. Kliknij **Wybierz plik…** lub upuść plik w oknie. Okno wyboru plików domyślnie pokazuje **Wszystkie obsługiwane pliki**; możesz pokazać tylko **Pliki audio** lub **Pliki wideo**. Obsługiwane formaty znajdziesz w sekcji [Formaty i języki](/pl/reference/formats-and-languages/).

Naraz można dodać tylko jeden plik. Aby transkrybować wiele plików, użyj źródła [Folder](#folder).

## URL

Transkrybuje **film z YouTube** lub **bezpośredni link do pliku audio lub wideo** (np. odcinek podcastu). Wklej adres URL (przyciskiem **Wklej** lub `Ctrl+V`) i kliknij **Kontynuuj**. Adres musi zaczynać się od `http://` lub `https://`.

```text
https://youtu.be/dQw4w9WgXcQ
https://example.com/podcast/episode-12.mp3
```

Najpierw pobierany jest dźwięk, więc potrzebne jest połączenie z internetem.

## Mikrofon

Nagrywa twój głos lub spotkanie i je transkrybuje. Nagranie zostaje w historii, więc możesz je później odtworzyć.

1. Wybierz mikrofon z listy (kliknij przycisk odświeżania, jeśli właśnie go podłączyłeś).
2. Kliknij przycisk nagrywania (lub naciśnij `Ctrl+Enter`, `⌘↩` w macOS), aby zacząć nagrywać. Miernik poziomu pokazuje, czy dźwięk jest **Za cicho**, ma **Dobry poziom** czy jest **Za głośno**.
3. Kliknij ponownie, aby zatrzymać i transkrybować.

### Tekst na żywo

Z **WhisperX** włącz **Pokazuj tekst podczas nagrywania** na karcie **Tekst na żywo**, aby widzieć szkic tekstu w trakcie mówienia. Szkic pisze szybki **Model na żywo** (domyślnie `small`). Po zatrzymaniu całe nagranie jest ponownie transkrybowane dokładniejszym modelem silnika, a szkic zostaje zastąpiony.

![Tekst na żywo podczas nagrywania z mikrofonu](/screenshots/live-text.png)

:::caution
System musi wykrywać urządzenie wejściowe i pozwalać aplikacji z niego korzystać. W przeciwnym razie pojawi się komunikat **Nie znaleziono mikrofonu**. W macOS zezwól Audiotext na dostęp w **Ustawienia systemowe** → **Prywatność i ochrona** → **Mikrofon**.
:::

### Nagrywanie dźwięku komputera

Aby przetranskrybować to, co odtwarza komputer (rozmowę wideo, webinar, film, którego nie da się pobrać), nagraj to z urządzenia, które przesyła dźwięk głośników na wejście. Skonfiguruj je raz, kliknij przycisk odświeżania i wybierz je z listy mikrofonów. Nagrywane jest wszystko, co odtwarza komputer, także powiadomienia, ale nie Twój głos.

- **Windows**: uruchom `mmsys.cpl` i na karcie **Nagrywanie** kliknij listę prawym przyciskiem myszy, aby pokazać wyłączone urządzenia, a następnie włącz **Miks stereo**. Jeśli Twoja karta dźwiękowa go nie ma, zainstaluj [VB-CABLE](https://vb-audio.com/Cable/), ustaw **CABLE Input** jako urządzenie wyjściowe i wybierz **CABLE Output** w Audiotext. Aby nadal słyszeć dźwięk, zaznacz **Słuchaj tego urządzenia** we właściwościach **CABLE Output**.
- **macOS**: zainstaluj [BlackHole](https://existential.audio/blackhole/) (`brew install blackhole-2ch`) i wybierz **BlackHole 2ch** w Audiotext. Aby nadal słyszeć dźwięk, utwórz [urządzenie z wieloma wyjściami](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device) z głośnikami i BlackHole i ustaw je jako urządzenie wyjściowe.
- **Linux** (PulseAudio lub PipeWire): wybierz **pulse** w Audiotext i zacznij nagrywać. Następnie na karcie **Nagrywanie** w `pavucontrol` zmień źródło Audiotext na monitor głośników.

## Folder

Transkrybuje wszystkie pliki audio i wideo z folderu **i jego podfolderów**. Kliknij **Wybierz folder…** lub upuść folder w oknie. Audiotext pokaże, ile plików znalazł.

Transkrypcja każdego pliku jest zapisywana obok niego (lub w innym folderze wybranym na karcie **Wynik**), z tą samą nazwą i rozszerzeniem każdego wybranego **typu pliku**. Na przykład z `.txt` i `.vtt`:

```text
files-to-transcribe
├── paranoid-android.mp3
├── paranoid-android.txt
├── paranoid-android.vtt
└── movies
    ├── mulholland-dr.avi
    ├── mulholland-dr.txt
    └── mulholland-dr.vtt
```

Pliki, które mają już transkrypcję, są **pomijane**, chyba że włączysz **Zastępuj istniejące pliki**. Jeśli więc dodasz plik do folderu i ponownie go transkrybujesz, transkrybowany będzie tylko nowy plik.

Jeśli którego pliku nie da się transkrybować, pozostałe i tak są transkrybowane, a widok folderu pokazuje, które się nie udały i dlaczego. **Transkrybuj ponownie** powtarza folder, a przycisk folderu otwiera folder z zapisanymi plikami.

### Obserwuj folder

Włącz **Obserwuj folder** na karcie **Folder**, aby transkrybować pliki dodawane do folderu (lub jego podfolderów), dopóki nie klikniesz **Zatrzymaj obserwowanie**. Przydaje się to przy nagraniach z dyktafonu lub narzędzia do spotkań kopiowanych do folderu.

- Pliki, które już są w folderze, są pomijane. Aby je transkrybować, transkrybuj folder bez obserwowania.
- Plik jest transkrybowany po całkowitym skopiowaniu (gdy jego rozmiar przestaje się zmieniać), więc duże pliki nie są transkrybowane w połowie.
- Błędy nie zatrzymują obserwowania.

## Kolejka

Możesz skonfigurować nową transkrypcję, gdy trwa inna: przycisk zmienia się na **Dodaj do kolejki**, a transkrypcja zaczyna się po zakończeniu bieżącej. Transkrypcje w kolejce i w toku są widoczne w historii.
