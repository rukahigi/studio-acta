import type { ImageMetadata } from 'astro';
import defaultAvatar from '../assets/profile.jpg';

/**
 * Allowed social entry keys in profile configuration.
 */
export type ProfileSocialKey = 'github' | 'x' | 'email' | 'website';

/**
 * One social link item rendered on `/about`.
 */
export const profileConfig: ProfileConfig = {
  avatar: defaultAvatar,
  name: '収集家（芥専門）',
  title: 'Studio ACTA',
  bio: '拾い、集め、残しておく。Studio ACTAの収集家。',
  githubProfileUrl: 'https://github.com/rukahigi',
  socials: [
    { key: 'github', label: 'GitHub', url: 'https://github.com/rukahigi' },
  ],
};
export const profileConfig: ProfileConfig = {
  avatar: defaultAvatar,
  name: 'Your Name',
  title: 'Your Role / Focus',
  bio: 'Write a short self-introduction here. This content is used in About and article schema.',
  location: 'Your City',
  email: 'you@example.com',
  githubProfileUrl: 'https://example.com',
  socials: [
    { key: 'github', label: 'GitHub', url: 'https://example.com' },
    { key: 'x', label: 'X', url: 'https://example.com' },
    { key: 'website', label: 'Website', url: 'https://example.com' },
  ],
};
