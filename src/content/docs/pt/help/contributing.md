---
title: Contribuir
description: Execute o Audiotext a partir do código-fonte, rode os testes, traduza a interface e melhore esta documentação.
sidebar:
  order: 2
---

Contribuições são bem-vindas! Leia o [guia de contribuição](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) antes de abrir um pull request. Você também pode propor ideias nas [discussões](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) ou ver o [backlog do projeto](https://github.com/users/HenestrosaDev/projects/1).

## Prepare o projeto

É necessário o **Python 3.10 a 3.13**.

1. Instale o [FFmpeg](https://ffmpeg.org) e, no Linux, o [PortAudio](https://www.portaudio.com/):

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu ou Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Clone o repositório:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Crie e ative um ambiente virtual:

   ```bash
   python -m venv venv
   # macOS e Linux
   source venv/bin/activate
   # Windows
   . venv/Scripts/activate
   ```

4. Instale as dependências:

   ```bash
   pip install -r requirements.txt
   ```

   O `requirements.txt` instala o PyTorch com suporte a CUDA, que é um download grande no Linux e no Windows. Sem uma GPU NVIDIA, instale primeiro a versão para CPU:

   ```bash
   pip install torch==2.8.0 torchaudio==2.8.0 torchvision==0.23.0 --index-url https://download.pytorch.org/whl/cpu
   ```

   Com o [uv](https://docs.astral.sh/uv/), execute `uv pip install --index-strategy unsafe-best-match -r requirements.txt`.

5. Execute o aplicativo:

   ```bash
   python src/app.py
   ```

## Ferramentas de desenvolvimento

```bash
pip install -r requirements-dev.txt
pre-commit install   # verifica e formata o código antes de cada commit
pytest               # roda os testes
```

## Traduza a interface

A interface é traduzida com o [gettext](https://www.gnu.org/software/gettext/). Os textos ficam em `res/locales/audiotext.pot`, e as traduções de cada idioma em `res/locales/<idioma>/LC_MESSAGES/audiotext.po`.

Quando os textos do código mudarem, ou depois de editar um arquivo `.po` (ex.: com o [Poedit](https://poedit.net/)), execute este script. Ele extrai os textos, atualiza os catálogos, compila-os e lista os textos que ainda faltam traduzir ou revisar (marcados como `fuzzy`), que o aplicativo mostra em inglês até lá. Os testes falham enquanto houver um catálogo desatualizado.

```bash
python .github/scripts/update_translations.py
```

Para adicionar um idioma, crie o catálogo dele, traduza-o, compile-o e adicione-o a `UI_LANGUAGES` em `src/utils/i18n.py`:

```bash
pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <código>
python .github/scripts/update_translations.py
```

## Melhore esta documentação

Este site é feito com o [Starlight](https://starlight.astro.build) e fica no repositório [audiotext-docs](https://github.com/HenestrosaDev/audiotext-docs). Cada idioma tem a sua própria pasta em `src/content/docs` (o inglês fica em `en`).

```bash
git clone https://github.com/HenestrosaDev/audiotext-docs.git
cd audiotext-docs
npm install
npm run dev     # serve o site em http://localhost:4321
npm run build   # gera o site em dist
```

Cada página tem um link **Editar página** no final que a abre no GitHub.
