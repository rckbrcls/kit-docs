import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <span className="font-mono">polterware/kit</span>,
    },
    githubUrl: 'https://github.com/polterware',
  };
}
