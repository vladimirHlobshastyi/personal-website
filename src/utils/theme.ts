import {
  SYSTEM_DARK_MEDIA_QUERY,
  THEME_LEGACY_STORAGE_KEY,
  THEME_PREFERENCE_STORAGE_KEY,
} from '@/constants/theme.constants';

export function getThemeInitScript() {
  return `(function(){try{var key='${THEME_PREFERENCE_STORAGE_KEY}';var legacyKey='${THEME_LEGACY_STORAGE_KEY}';var darkQuery='${SYSTEM_DARK_MEDIA_QUERY}';var legacy=localStorage.getItem(legacyKey);var saved=localStorage.getItem(key)||((legacy==='light'||legacy==='dark')?legacy:null);if(saved==='light'||saved==='dark'){document.documentElement.setAttribute('data-theme',saved);return;}var dark=window.matchMedia&&window.matchMedia(darkQuery).matches;document.documentElement.setAttribute('data-theme',dark?'dark':'light');}catch(e){var dark=window.matchMedia&&window.matchMedia('${SYSTEM_DARK_MEDIA_QUERY}').matches;document.documentElement.setAttribute('data-theme',dark?'dark':'light');}})();`;
}
