export const INSTALL_COMMAND =
  "npx @polterware/polterbase@latest app install uru";

export function getVersionedInstallCommand(version = "<version>"): string {
  return `${INSTALL_COMMAND} --version ${version}`;
}
