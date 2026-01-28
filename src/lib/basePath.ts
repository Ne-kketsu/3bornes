// No basePath needed with custom domain
const basePath = "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
