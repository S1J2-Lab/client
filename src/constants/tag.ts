<<<<<<< feat/result-page
export type TagVariant = 'primary' | 'safe' | 'caution' | 'danger';
=======
export type TagVariant = 'primary' | 'success' | 'warning' | 'danger';
>>>>>>> main

export const TAG_COLORS = {
  primary: {
    color: 'primaryDark',
    background: 'primaryLight',
  },
<<<<<<< feat/result-page
  safe: {
=======
  success: {
>>>>>>> main
    color: 'success',
    background: 'successBg',
  },
  caution: {
    color: 'warning',
    background: 'warningBg',
  },
  danger: {
    color: 'danger',
    background: 'dangerBg',
  },
} as const;
