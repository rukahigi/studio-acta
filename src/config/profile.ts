import type { ImageMetadata } from 'astro';
import defaultAvatar from '../assets/profile.jpg';

/**
 * Allowed social entry keys in profile configuration.
 */
export type ProfileSocialKey = 'github' | 'x' | 'email' | 'website';

/**
 * One social link item rendered on `/about`.
 */
export interface ProfileSocialLink {
  key: ProfileSocialKey;
  label: string;
  url: string;
}

/**
 * Personal profile settings used by About page and article author schema.
 */
export interface ProfileConfig {
  /**
   * Optional avatar URL for About page and structured data.
   */
  avatar?: string | ImageMetadata;
  /**
   * Display name used across the site.
   */
  name: string;
  /**
   * Short headline/title shown on About page.
   */
  title: string;
  /**
   * Short bio text shown on About page and in schema.
   */
  bio: string;
  /**
   * Optional location text.
   */
  location?: string;
  /**
   * Optional contact email.
   */
  email?: string;
  /**
   * Personal GitHub profile URL (separate from repo URL).
   */
  githubProfileUrl: string;
  /**
   * Social links displayed in About page social row.
   */
  socials: ProfileSocialLink[];
}

export const profileConfig: ProfileConfig = {
  avatar: defaultAvatar,
  name: '収集家（芥専門）',
  title: 'Studio ACTA',
  bio: '1982年生まれ。  
グラフィックデザインを仕事にしながら、日々目に入ってくるものを拾っています。

芥（あくた）とは、古い言葉でゴミや塵、役に立たない小さなものや、
掃き捨てられたもののことです。

大きな出来事や、後世に残ると最初から分かっているものではなく、  
その時代にはありふれていて、わざわざ記録するほどでもないと思われているもの。

妙な広告、使われなくなりそうな言葉、流行、サービス、デザイン、技術、  
仕事の中で見かけたもの、街で拾ったもの、インターネットの片隅にあったもの。

価値があるかどうかは、いまはわからないけど、
「なんだこれは」と少し引っかかったものを拾います。

芥専門の収集家として、選んで、拾って、残しています。',
  githubProfileUrl: 'https://github.com/rukahigi',
  socials: [
    { key: 'github', label: 'GitHub', url: 'https://github.com/rukahigi' },
  ],
};
