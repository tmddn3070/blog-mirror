import { siteConfig } from '../config'
import type I18nKey from './i18nKey'
import { ko } from "./languages/ko" 


export type Translation = {
  [K in I18nKey]: string
}

const defaultTranslation = ko

const map: { [key: string]: Translation } = {
  ko : ko
}

export function getTranslation(lang: string): Translation {
  return map[lang.toLowerCase()] || defaultTranslation
}

export function i18n(key: I18nKey): string {
  const lang = siteConfig.lang || 'ko'
  return getTranslation(lang)[key]
}
