export function resolveAbsoluteUrl(path: string) {
  /**
   * Returns absolute deployment URL, taking into consideration
   * local env and vercel preview environments.
   */
  const previewUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${process.env.PORT || 3000}`;
  const baseUrl =
    process.env.VERCEL_ENV === 'production'
      ? 'mpeyfuss.xyz'
      : previewUrl;

  return `${baseUrl}${path}`;
}
