---
title: योगदान
description: Audiotext को सोर्स कोड से चलाएँ, टेस्ट चलाएँ, इंटरफ़ेस का अनुवाद करें और इस दस्तावेज़ को बेहतर बनाएँ।
sidebar:
  order: 2
---

योगदान का स्वागत है! pull request खोलने से पहले [योगदान गाइड](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) पढ़ें। आप [चर्चाओं](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) में विचार भी सुझा सकते हैं या [प्रोजेक्ट बैकलॉग](https://github.com/users/HenestrosaDev/projects/1) देख सकते हैं।

## प्रोजेक्ट सेट करें

**Python 3.10 से 3.13** ज़रूरी है।

1. [FFmpeg](https://ffmpeg.org) और, Linux पर, [PortAudio](https://www.portaudio.com/) इंस्टॉल करें:

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu या Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. रिपॉज़िटरी क्लोन करें:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. वर्चुअल एनवायरनमेंट बनाएँ और सक्रिय करें:

   ```bash
   python -m venv venv
   # macOS और Linux
   source venv/bin/activate
   # Windows
   . venv/Scripts/activate
   ```

4. डिपेंडेंसी इंस्टॉल करें:

   ```bash
   pip install -r requirements.txt
   ```

   `requirements.txt` CUDA सपोर्ट वाला PyTorch इंस्टॉल करता है, जो Linux और Windows पर बड़ा डाउनलोड है। NVIDIA GPU न हो तो पहले CPU संस्करण इंस्टॉल करें:

   ```bash
   pip install torch==2.8.0 torchaudio==2.8.0 torchvision==0.23.0 --index-url https://download.pytorch.org/whl/cpu
   ```

   [uv](https://docs.astral.sh/uv/) के साथ `uv pip install --index-strategy unsafe-best-match -r requirements.txt` चलाएँ।

5. ऐप चलाएँ:

   ```bash
   python src/app.py
   ```

## डेवलपमेंट टूल

```bash
pip install -r requirements-dev.txt
pre-commit install   # हर commit से पहले कोड जाँचता और फ़ॉर्मेट करता है
pytest               # टेस्ट चलाता है
```

## इंटरफ़ेस का अनुवाद करें

इंटरफ़ेस का अनुवाद [gettext](https://www.gnu.org/software/gettext/) से होता है। टेक्स्ट `res/locales/audiotext.pot` में हैं, और हर भाषा के अनुवाद `res/locales/<भाषा>/LC_MESSAGES/audiotext.po` में।

जब कोड के टेक्स्ट बदलें, या किसी `.po` फ़ाइल को संपादित करने के बाद (जैसे [Poedit](https://poedit.net/) से), यह स्क्रिप्ट चलाएँ। यह टेक्स्ट निकालती है, कैटलॉग अपडेट करती है, उन्हें कंपाइल करती है और उन टेक्स्ट की सूची दिखाती है जिनका अनुवाद या समीक्षा अभी बाकी है (`fuzzy` चिह्नित); तब तक ऐप उन्हें अंग्रेज़ी में दिखाता है। जब तक कोई कैटलॉग पुराना है, टेस्ट विफल होते हैं।

```bash
python .github/scripts/update_translations.py
```

कोई भाषा जोड़ने के लिए उसका कैटलॉग बनाएँ, अनुवाद करें, कंपाइल करें और भाषा को `src/utils/i18n.py` के `UI_LANGUAGES` में जोड़ें:

```bash
pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <कोड>
python .github/scripts/update_translations.py
```

## इस दस्तावेज़ को बेहतर बनाएँ

यह वेबसाइट [Starlight](https://starlight.astro.build) से बनी है और [audiotext-docs](https://github.com/HenestrosaDev/audiotext-docs) रिपॉज़िटरी में है। हर भाषा का `src/content/docs` में अपना फ़ोल्डर है (अंग्रेज़ी `en` में है)।

```bash
git clone https://github.com/HenestrosaDev/audiotext-docs.git
cd audiotext-docs
npm install
npm run dev     # वेबसाइट को http://localhost:4321 पर चलाता है
npm run build   # वेबसाइट को dist में बनाता है
```

हर पेज के नीचे **पेज संपादित करें** लिंक है जो उसे GitHub पर खोलता है।
