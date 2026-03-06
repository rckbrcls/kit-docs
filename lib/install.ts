export const INSTALL_COMMAND =
  "npx @polterware/polterbase@latest app install ops";

export function getVersionedInstallCommand(version = "<version>"): string {
  return `${INSTALL_COMMAND} --version ${version}`;
}
