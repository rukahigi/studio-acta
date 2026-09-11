import defaultBackground from '../assets/blog-placeholder-1.webp';

/**
 * Hero copy and background settings for one page.
 */
export interface HeroSectionConfig {
  /**
   * Main hero headline text.
   */
  text: string;
  /**
   * Optional hero subtitle text.
   */
  subtitle?: string;
  /**
   * Hero background image URL.
   */
  backgroundImage: string;
}

/**
 * Centralized hero configuration for all top-level pages and post fallback.
 */
export interface HeroConfig {
  home: HeroSectionConfig;
  blog: HeroSectionConfig;
  tags: HeroSectionConfig;
  about: HeroSectionConfig;
  /**
   * Default hero image shared by all article pages.
   */
  postDefaultBackground: string;
}

export const heroConfig: HeroConfig = {
  home: {
    text: 'Studio ACTA',
    subtitle: '拾い、集め、残しておく。',
    backgroundImage: defaultBackground.src,
  },
  blog: {
    text: '収集記録',
    subtitle: '拾い集めたものの記録。',
    backgroundImage: defaultBackground.src,
  },
  tags: {
    text: '分類',
    subtitle: '分類から記録を探す。',
    backgroundImage: defaultBackground.src,
  },
  about: {
    text: 'Studio ACTAについて',
    subtitle: '収集家（芥専門）と、この場所について。',
    backgroundImage: defaultBackground.src,
  },
  postDefaultBackground: defaultBackground.src,
};
