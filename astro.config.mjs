// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { locales } from './src/locales.mjs';

/**
 * A sidebar group with the pages of a folder, ordered by `sidebar.order`.
 *
 * @param {string} label The label in English.
 * @param {string} directory The folder of the pages.
 * @param {Record<string, string>} translations The label in the other languages.
 */
const group = (label, directory, translations) => ({
	label,
	translations,
	items: [{ autogenerate: { directory } }],
});

export default defineConfig({
	site: 'https://getaudiotext.com',
	integrations: [
		starlight({
			title: 'Audiotext',
			description:
				'Transcribe audio and video files, YouTube videos and microphone recordings on your computer, then translate, summarize and subtitle them.',
			logo: {
				light: './src/assets/icon-light.png',
				dark: './src/assets/icon-dark.png',
			},
			favicon: '/favicon.png',
			customCss: ['./src/styles/custom.css'],
			defaultLocale: 'en',
			locales,
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/HenestrosaDev/audiotext-docs',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/HenestrosaDev/audiotext-docs/edit/main/',
			},
			lastUpdated: true,
			sidebar: [
				group('Getting started', 'getting-started', {
					ca: 'Primers passos',
					cs: 'Začínáme',
					de: 'Erste Schritte',
					es: 'Primeros pasos',
					fr: 'Prise en main',
					gl: 'Primeiros pasos',
					hi: 'शुरुआत करें',
					id: 'Memulai',
					it: 'Per iniziare',
					ja: 'はじめに',
					ko: '시작하기',
					nl: 'Aan de slag',
					pl: 'Pierwsze kroki',
					pt: 'Primeiros passos',
					ro: 'Primii pași',
					ru: 'Начало работы',
					sv: 'Kom igång',
					tr: 'Başlarken',
					uk: 'Початок роботи',
					vi: 'Bắt đầu',
					'zh-CN': '快速入门',
				}),
				group('Guides', 'guides', {
					ca: 'Guies',
					cs: 'Návody',
					de: 'Anleitungen',
					es: 'Guías',
					fr: 'Guides',
					gl: 'Guías',
					hi: 'गाइड',
					id: 'Panduan',
					it: 'Guide',
					ja: 'ガイド',
					ko: '가이드',
					nl: 'Handleidingen',
					pl: 'Poradniki',
					pt: 'Guias',
					ro: 'Ghiduri',
					ru: 'Руководства',
					sv: 'Guider',
					tr: 'Kılavuzlar',
					uk: 'Посібники',
					vi: 'Hướng dẫn',
					'zh-CN': '指南',
				}),
				group('Reference', 'reference', {
					ca: 'Referència',
					cs: 'Reference',
					de: 'Referenz',
					es: 'Referencia',
					fr: 'Référence',
					gl: 'Referencia',
					hi: 'संदर्भ',
					id: 'Referensi',
					it: 'Riferimento',
					ja: 'リファレンス',
					ko: '참조',
					nl: 'Naslag',
					pl: 'Dokumentacja',
					pt: 'Referência',
					ro: 'Referință',
					ru: 'Справочник',
					sv: 'Referens',
					tr: 'Başvuru',
					uk: 'Довідник',
					vi: 'Tham khảo',
					'zh-CN': '参考',
				}),
				group('Help', 'help', {
					ca: 'Ajuda',
					cs: 'Nápověda',
					de: 'Hilfe',
					es: 'Ayuda',
					fr: 'Aide',
					gl: 'Axuda',
					hi: 'सहायता',
					id: 'Bantuan',
					it: 'Aiuto',
					ja: 'ヘルプ',
					ko: '도움말',
					nl: 'Hulp',
					pl: 'Pomoc',
					pt: 'Ajuda',
					ro: 'Ajutor',
					ru: 'Помощь',
					sv: 'Hjälp',
					tr: 'Yardım',
					uk: 'Допомога',
					vi: 'Trợ giúp',
					'zh-CN': '帮助',
				}),
			],
		}),
	],
});
