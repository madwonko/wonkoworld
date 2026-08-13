export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const suffix = path.replace(/^\//, "");
  return suffix ? `${base}/${suffix}` : `${base}/`;
}
