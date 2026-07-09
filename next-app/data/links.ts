import {
  InstagramIcon,
  YoutubeIcon,
  LinkIcon,
  GithubIcon,
  BriefcaseIcon,
} from '@hugeicons/core-free-icons';

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon?: any;
}

export const links: LinkItem[] = [
  {
    id: 'instagram',
    title: '인스타그램',
    url: 'https://instagram.com/username',
    icon: InstagramIcon,
  },
  {
    id: 'youtube',
    title: '유튜브',
    url: 'https://youtube.com/channel/username',
    icon: YoutubeIcon,
  },
  {
    id: 'blog',
    title: '블로그',
    url: 'https://blog.naver.com/username',
    icon: LinkIcon,
  },
  {
    id: 'github',
    title: 'Github',
    url: 'https://github.com/username',
    icon: GithubIcon,
  },
  {
    id: 'portfolio',
    title: '포트폴리오',
    url: 'https://portfolio.username.dev',
    icon: BriefcaseIcon,
  },
];
