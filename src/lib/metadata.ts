import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from '@/lib/constants'

export function getCanonicalUrl(path?: string): string {
  if (!path) return SITE_URL;

  return `${SITE_URL}${path}`;
}

export function getDescription(description?: string): string {
  if (!description) return SITE_DESCRIPTION;

  return description;
}

export function getTitle(title?: string, appendDefaultTitle = true, titleSuffix = ' - ') {
  if (title && appendDefaultTitle) {
    return `${title}${titleSuffix}${SITE_TITLE}`
  }

  return SITE_TITLE
}
