---
title: Instalacja
description: Pobierz Audiotext na Windows, macOS lub Linuksa i uruchom go po raz pierwszy.
sidebar:
  order: 1
---

Audiotext to aplikacja na komputery z systemem **Windows**, **macOS** i **Linux**. Zamienia na tekst dźwięk z plików, filmów z YouTube i nagrań z mikrofonu, a także potrafi go przetłumaczyć, podsumować i zamienić w napisy.

## Pobierz aplikację

Pobierz plik dla swojego systemu z [najnowszej wersji](https://github.com/HenestrosaDev/audiotext/releases/latest) na GitHubie:

| System | Plik |
| --- | --- |
| Windows (64-bitowy) | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 lub nowszy (Apple Silicon) | `Audiotext-<version>-macos-arm64.dmg` |
| Linux (x86_64) | `Audiotext-<version>-linux-x86_64.tar.gz` |

Aplikacja zawiera wszystko, czego potrzebuje, łącznie z FFmpeg.

### Windows

Uruchom instalator i postępuj zgodnie z krokami. Nie wymaga uprawnień administratora. Jeśli masz kartę graficzną NVIDIA, zaznacz opcję użycia karty NVIDIA (CUDA): instalator pobierze wtedy dodatek GPU, który znacznie przyspiesza WhisperX. Instalator nie jest podpisany, więc Windows SmartScreen może wyświetlić ostrzeżenie: rozwiń dodatkowe informacje i wybierz uruchomienie mimo to.

### macOS

Otwórz plik `.dmg` i przeciągnij **Audiotext** do folderu **Aplikacje**. Aplikacja nie jest poświadczona przez Apple, więc macOS blokuje ją przy pierwszym otwarciu: przejdź do **Ustawienia systemowe** → **Prywatność i ochrona** i kliknij **Otwórz mimo to** obok komunikatu o Audiotext. W macOS WhisperX działa na procesorze, ponieważ CUDA nie jest dostępne. Komputery Mac z procesorem Intel nie są obsługiwane, ponieważ PyTorch już ich nie obsługuje.

### Linux

Rozpakuj archiwum i uruchom instalator w terminalu:

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

Instaluje Audiotext dla twojego użytkownika i dodaje go do menu aplikacji (można go też otworzyć poleceniem `audiotext`). Jeśli wykryje kartę NVIDIA, zaproponuje pobranie dodatku GPU. Uruchom `./install.sh --gpu` lub `./install.sh --cpu`, aby wybrać bez pytania, a `./install.sh --uninstall`, aby go odinstalować (ustawienia zostaną zachowane).

:::tip
Dodatek GPU to pobieranie około 2 GB w systemie Windows i 4 GB w systemie Linux, więc opłaca się tylko z kartą NVIDIA. Bez niego WhisperX działa na procesorze, a API Whisper i API Google działają tak samo. Aby później przełączyć się między wersją na procesor a wersją na GPU, zainstaluj aplikację ponownie i wybierz drugą opcję.
:::

:::note
Przy pierwszej transkrypcji za pomocą **WhisperX** (domyślnego silnika) pobierany jest jego model. Zajmuje od ~75 MB (`tiny`) do ~3 GB (`large-v2`), więc może to chwilę potrwać. Kolejne transkrypcje zaczynają się od razu.
:::

## Wymagania

- **WhisperX** działa na twoim komputerze. Działa na każdym procesorze, ale jest znacznie szybszy na karcie graficznej NVIDIA z CUDA. Zobacz [Silniki](/pl/reference/engines/), aby wybrać model dopasowany do sprzętu.
- **API Whisper** i **API Google** działają na zdalnych serwerach, więc wymagają połączenia z internetem, ale nie mocnego sprzętu.
- Aby transkrybować z mikrofonu, system musi wykrywać urządzenie wejściowe.
- Na Linuksie nagrywanie i odtwarzanie wymaga [PortAudio](https://www.portaudio.com/) (`sudo apt install libportaudio2` w Ubuntu lub Debianie).

## Zaktualizuj aplikację

Gdy pojawi się nowa wersja, Audiotext pokazuje na górnym pasku przycisk **Dostępna jest wersja …**. Kliknij go, aby otworzyć stronę wydania, pobierz plik dla swojego systemu i zainstaluj go tak jak za pierwszym razem: w systemie Windows uruchom nowy instalator, w macOS przeciągnij nową aplikację do folderu **Aplikacje**, a w Linuksie uruchom `install.sh` z nowego archiwum. Poprzednia wersja zostaje zastąpiona, a twoje ustawienia i historia są zachowane, ponieważ są przechowywane w [folderze konfiguracji użytkownika](/pl/reference/files-and-data/#folder-konfiguracji-użytkownika). Jeśli używasz dodatku GPU, wybierz go ponownie podczas instalacji.

Aby samodzielnie sprawdzić, czy jest nowa wersja, otwórz **Preferencje** → **O programie** → **Sprawdź aktualizacje**. Aby wyłączyć sprawdzanie przy otwieraniu aplikacji, wyłącz **Ogólne** → **Aktualizacje**.

## Zmień język interfejsu

Audiotext używa języka systemu, jeśli jest dostępny. Aby go zmienić, otwórz **Preferencje** (koło zębate w prawym górnym rogu) i wybierz język w **Ogólne** → **Język interfejsu**.

## Uruchom z kodu źródłowego

Jeśli chcesz uruchomić najnowszy kod lub pomóc w rozwoju, zobacz [Współtworzenie](/pl/help/contributing/), aby przygotować projekt w Pythonie.

## Następne kroki

- [Twoja pierwsza transkrypcja](/pl/getting-started/first-transcription/) wyjaśnia okno i kroki transkrypcji.
