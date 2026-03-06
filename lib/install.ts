const DEFAULT_SITE_ORIGIN = "https://rckbrcls.github.io/uru-docs";

export const ADVANCED_INSTALL_COMMAND =
  "npx @polterware/polterbase@latest app install uru --platform macos";

export function getSiteOrigin(): string {
  const configuredOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN?.trim();
  return (configuredOrigin || DEFAULT_SITE_ORIGIN).replace(/\/$/, "");
}

export function getInstallScriptUrl(): string {
  return `${getSiteOrigin()}/install.sh`;
}

export function getPublicInstallCommand(): string {
  return `curl -fsSL ${getInstallScriptUrl()} | bash`;
}

export function getVersionedInstallCommand(version = "<version>"): string {
  return `${ADVANCED_INSTALL_COMMAND} --version ${version}`;
}
