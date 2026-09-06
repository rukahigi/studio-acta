/**
 * Site-level settings shared by header, SEO tags, and feed generation.
 */
export interface SiteConfig {
  /**
   * Canonical production URL of this site.
   */
  siteUrl: string;
  /**
   * Global site title used in header and metadata.
   */
  siteTitle: string;
  /**
   * Optional suffix appended to browser/SEO page titles.
   */
  siteTitleSuffix: string;
  /**
   * Default site description used by index and RSS metadata.
   */
  siteDescription: string;
  /**
   * BCP-47 locale tag (for example: zh-CN, en-US).
   */
  locale: string;
  /**
   * Repository URL shown in the header action area.
   */
  headerGithubRepoUrl: string;
  /**
   * Global favicon ico path served from the public directory.
   */
  faviconIco: string;
}

export const siteConfig: SiteConfig = {
  siteUrl: 'https://studio-acta.collector-site.workers.dev/',
  siteTitle: 'Studio ACTA',
  siteTitleSuffix: '芥専門標本室',
  siteDescription: '拾い、集め、残しておく。Studio ACTAの記録。',
  locale: 'ja-JP',
  headerGithubRepoUrl: 'https://github.com/rukahigi/studio-acta',
  faviconIco: '/favicon.ico',
};

export const { siteUrl, siteTitle, siteTitleSuffix, siteDescription, locale, headerGithubRepoUrl, faviconIco } = siteConfig;
