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
  iconName?: string;
  description?: string;
  highlightColor?: string;
  isActive?: boolean;
  clicks?: number;
}

export const iconMap: Record<string, any> = {
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  github: GithubIcon,
  link: LinkIcon,
  briefcase: BriefcaseIcon,
};

export const links: LinkItem[] = [
  {
    id: 'instagram',
    title: '인스타그램 (Instagram)',
    url: 'https://instagram.com/username',
    iconName: 'instagram',
    description: '일상 및 개발 라이프스타일 공유',
    highlightColor: 'from-[#e1306c] via-[#fd1d1d] to-[#fcb045]',
    isActive: true,
    clicks: 0,
  },
  {
    id: 'youtube',
    title: '유튜브 (YouTube)',
    url: 'https://youtube.com/channel/username',
    iconName: 'youtube',
    description: '프론트엔드 및 기술 튜토리얼 영상',
    highlightColor: 'from-[#ff0000] to-[#cc0000]',
    isActive: true,
    clicks: 0,
  },
  {
    id: 'blog',
    title: '기술 블로그 (Blog)',
    url: 'https://blog.naver.com/username',
    iconName: 'link',
    description: '기술 블로그 및 개발 회고록 기록',
    highlightColor: 'from-[#03cf5d] to-[#029e47]',
    isActive: true,
    clicks: 0,
  },
  {
    id: 'github',
    title: 'Github',
    url: 'https://github.com/username',
    iconName: 'github',
    description: '오픈소스 기여 및 개인 프로젝트 저장소',
    highlightColor: 'from-[#24292e] to-[#171a1d]',
    isActive: true,
    clicks: 0,
  },
  {
    id: 'portfolio',
    title: '포트폴리오 (Portfolio)',
    url: 'https://portfolio.username.dev',
    iconName: 'briefcase',
    description: '진행 프로젝트 및 약력 소개 페이지',
    highlightColor: 'from-[#4f46e5] to-[#3730a3]',
    isActive: true,
    clicks: 0,
  },
];

