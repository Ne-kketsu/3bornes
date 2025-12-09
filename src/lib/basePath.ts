const basePath = process.env.NODE_ENV === "production" ? "/3bornes" : "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
