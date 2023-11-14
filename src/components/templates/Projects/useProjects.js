import { useTranslation } from 'react-i18next';

const useProjects = () => {
  const { t } = useTranslation();

  return [
    {
      intlName: 'projects.emotion',
      technologies: [
        t('projects.technologies.typescript'),
        t('projects.technologies.next'),
        t('projects.technologies.react'),
        t('projects.technologies.sass'),
      ],
      links: [
        { href: 'https://emotion.miami/', text: t('projects.livePreview') },
      ],
    },
    {
      intlName: 'projects.winamp',
      technologies: [
        t('projects.technologies.typescript'),
        t('projects.technologies.vue'),
        t('projects.technologies.nuxt'),
        t('projects.technologies.pinia'),
      ],
      links: [
        { href: 'https://github.com/energywraith/winamp', text: t('projects.github') },
        { href: 'https://winamp.vercel.app', text: t('projects.livePreview') },
      ],
    },
    {
      intlName: 'projects.harmonia',
      technologies: [
        t('projects.technologies.typescript'),
        t('projects.technologies.next'),
        t('projects.technologies.react'),
        t('projects.technologies.tailwind'),
      ],
      links: [
        { href: 'https://github.com/energywraith/harmonia', text: t('projects.github') },
        { href: 'https://www.figma.com/file/RmhNGOgpAsbVAoiO3RUJGN/Harmonia', text: t('projects.figma') },
        { href: 'https://harmonia-orpin.vercel.app/', text: t('projects.livePreview') },
      ],
    },
  ];
};

export default useProjects;
