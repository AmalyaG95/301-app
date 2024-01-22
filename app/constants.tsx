'use client';

import { ButtonProps as ButtonBaseProps } from './components/common/Button';
import ourMissionIcon from '@/public/assets/icons/ourMission.svg?url';
import importantIcon from '@/public/assets/icons/important.svg?url';
import futureHypothesesIcon from '@/public/assets/icons/futureHypotheses.svg?url';
import ourProjectsIcon from '@/public/assets/icons/ourProjects.svg?url';
import ourEcosystemIcon from '@/public/assets/icons/ourEcosystem.svg?url';
import newsIcon from '@/public/assets/icons/news.svg?url';
import writeUsIcon from '@/public/assets/icons/writeUs.svg?url';
import sagesIcon from '@/public/assets/icons/sages.svg?url';
import club301Icon from '@/public/assets/icons/club301.svg?url';
import ambassadorsIcon from '@/public/assets/icons/ambassadors.svg?url';
import volunteersIcon from '@/public/assets/icons/volunteers.svg?url';
import expertsIcon from '@/public/assets/icons/experts.svg?url';
import partnersIcon from '@/public/assets/icons/partners.svg?url';
import foundationPartnersIcon from '@/public/assets/icons/foundationPartners.svg';
import article1 from '@/public/assets/article1.svg?url';
import article2 from '@/public/assets/article2.svg?url';
import article3 from '@/public/assets/article3.svg?url';
import article4 from '@/public/assets/article4.svg?url';
import article5 from '@/public/assets/article5.svg?url';
import article6 from '@/public/assets/article6.svg?url';
import article7 from '@/public/assets/article7.svg?url';
import bgOurMission from '../public/assets/bgOurMission.svg';
import bgImportant from '../public/assets/bgImportant.svg';
import newsPhoto1 from '../public/assets/newsPhoto1.svg';
import newsPhoto2 from '../public/assets/newsPhoto2.svg';
import newsPhoto3 from '../public/assets/newsPhoto3.svg';
import { SectionProps } from './components/Sections/Section';
import WriteUsForm from './components/WriteUsForm';
import CommonCardSlider from './components/CommonCardSlider';
import NewsCard, { NewsCardProps } from './components/NewsCard';
import { ArticleProps } from './components/Articles/Article';
import Articles from './components/Articles';

enum Colors {
  WHITE = '#fff',
  SQUID_INK = '#313a4b',
  EIGENGRAU = '#151c26',
  BRIGHT_PINK = '#dd264e',
  ELF_GREEN = '#189387',
  ORANGE = '#EE8842',
  LIGHT_GREEN = '#C5D92D',
  LIGHT_BLUE = '#42CFEE',
  MAGENTA = '#C12DD9',
  PURPLE = '#6442EE',
}

type TNavItem = {
  id: number;
  name: string;
  path: string;
};

const NAV_ITEMS: TNavItem[] = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Projects',
    path: '/',
  },
  {
    id: 3,
    name: 'Media',
    path: '/',
  },
  {
    id: 4,
    name: 'Calendar',
    path: '/',
  },
  {
    id: 5,
    name: 'About us',
    path: '/',
  },
  {
    id: 6,
    name: 'Contact',
    path: '/',
  },
];

type TButton = Omit<ButtonBaseProps, 'children'> & {
  id: number;
  name: string;
};

const BUTTONS: TButton[] = [
  {
    id: 1,
    name: 'Donate',
    onClick: () => {},
    style: {
      backgroundColor: Colors.BRIGHT_PINK,
      color: Colors.WHITE,
      boxShadow: `0px 26px 40px 0px rgba(191, 9, 48, 0.15)`,
    },
  },
  {
    id: 2,
    name: 'Sign in',
    onClick: () => {},
    style: {
      border: `1px solid ${Colors.BRIGHT_PINK}`,
    },
  },
];

type TArticle = ArticleProps & {
  id: number;
};

const ARTICLES: TArticle[] = [
  {
    id: 1,
    name: 'Мудрецы',
    titleIcon: sagesIcon,
    image: article1,
    mainText:
      'Мы видим два основный пути развития: с одной стороны — мудрое использовании потенциала, знаний и накопленного культурно-исторического опыта армянского народа; с другой — привлечение нестандартно мыслящих людей, как из Армении, так и из других стран, способных по-новому взглянуть на сложившуюся картину мира.  Поэтому мы интегрируем в свою экосистему всех, кто готов вместе с нами строить благополучное будущее Армении.',
    actionButtons: [
      {
        id: 1,
        name: 'Узнать больше',
        style: {
          border: `1px solid ${Colors.BRIGHT_PINK}`,
        },
      },
    ],
  },
  {
    id: 2,
    name: 'Клуб «301»',
    titleIcon: club301Icon,
    image: article2,
    mainText:
      'Фонд «301. Земля мудрости» — некоммерческая организация и осуществляет свою деятельность с помощью взносов участников клуба «301». Размер взноса составляет 301$ в месяц. Участником клуба может стать каждый, кто разделяет нашу миссию и ценности вне зависимости от географических границ.',
    actionButtons: [
      {
        id: 1,
        name: 'Become one of 301',
        style: {
          backgroundColor: Colors.ELF_GREEN,
          color: Colors.WHITE,
          boxShadow: '-9px 7px 13px 0px rgba(24, 147, 135, 0.23)',
        },
      },
      {
        id: 2,
        name: 'Узнать больше',
        style: {
          border: `1px solid ${Colors.ELF_GREEN}`,
        },
      },
    ],
  },
  {
    id: 3,
    name: 'Амбассадоры',
    titleIcon: ambassadorsIcon,
    image: article3,
    mainText:
      'Амбассадоры фонда являются официальными представителями нашего фонда в различных странах мира. Основная миссия наших амбассадоров — представлять интересы фонда в местах их проживания, доносить миссию и ценности фонда «301», искать и находить поддержку среди тех, кто разделяет наши взгляды.',
    actionButtons: [
      {
        id: 1,
        name: 'Стать амбассадором',
        style: {
          backgroundColor: Colors.ORANGE,
          color: Colors.WHITE,
          boxShadow: '-9px 7px 13px 0px rgba(238, 136, 66, 0.23)',
        },
      },
    ],
  },
  {
    id: 4,
    name: 'Волонтеры',
    titleIcon: volunteersIcon,
    image: article4,
    mainText:
      'Важной частью нашего фонда являются волонтеры, которые по своей личной инициативе помогают нам в проектах.  Наши волонтеры — неравнодушные люди, которые верят, что им по силам сделать мир лучше. Волонтером «301» может стать каждый, кто разделяет миссию и ценности фонда.',
    actionButtons: [
      {
        id: 1,
        name: 'Стать волонтером',
        style: {
          backgroundColor: Colors.LIGHT_GREEN,
          color: Colors.WHITE,
          boxShadow: '-9px 7px 13px 0px rgba(197, 217, 45, 0.23)',
        },
      },
    ],
  },
  {
    id: 5,
    name: 'Эксперты',
    titleIcon: expertsIcon,
    image: article5,
    mainText:
      'Компетентные специалисты в различных отраслях — важное звено экосистемы фонда «301». Эксперты подключаются к проектам на разных стадиях: помогают проверять гипотезы и реализовывать идеи мудрецов. В наших проектах активное участие принимают эксперты в области науки, культуры, образования, истории, искусства и многих других.',
    actionButtons: [
      {
        id: 1,
        name: 'Стать экспертом',
        style: {
          backgroundColor: Colors.LIGHT_BLUE,
          color: Colors.WHITE,
          boxShadow: '-9px 7px 13px 0px rgba(66, 207, 238, 0.23)',
        },
      },
    ],
  },
  {
    id: 6,
    name: 'Партнеры',
    titleIcon: partnersIcon,
    image: article6,
    mainText:
      'Нашими партнерами являются различные организации, а также отдельные личности, которые разделяют наши идеи. Наши партнеры поддерживают проекты фонда и оказывают содействие и в их реализации, предоставляя нам различные ресурсы.',
    actionButtons: [
      {
        id: 1,
        name: 'Стать партнером',
        style: {
          backgroundColor: Colors.MAGENTA,
          color: Colors.WHITE,
          boxShadow: '-9px 7px 13px 0px rgba(193, 45, 217, 0.23)',
        },
      },
      {
        id: 2,
        name: 'Все партнеры',
        style: {
          border: `1px solid ${Colors.MAGENTA}`,
        },
      },
    ],
  },
  {
    id: 7,
    name: 'Друзья фонда',
    titleIcon: foundationPartnersIcon,
    image: article7,
    mainText:
      'Друзьями фонда являются все, кто помогает: ресурсами, временем, поддержкой, идеями, и остается рядом.  Чужих не бывает.',
    actionButtons: [
      {
        id: 1,
        name: 'Стать другом фонда',
        style: {
          backgroundColor: Colors.PURPLE,
          color: Colors.WHITE,
          boxShadow: '-9px 7px 13px 0px rgba(100, 66, 238, 0.23)',
        },
      },
    ],
  },
];

type TNews = NewsCardProps & {
  id: number;
};

const NEWS_DATA: TNews[] = [
  {
    id: 1,
    photoURrl: newsPhoto1.src,
    title: 'Дети из Арцаха отметили новогодние праздники в фонде "301"',
    date: '23.03.2023',
    url: '/',
  },
  {
    id: 2,
    photoURrl: newsPhoto2.src,
    title: 'Дети из Арцаха отметили новогодние праздники в фонде "301"',
    date: '23.03.2023',
    url: '/',
  },
  {
    id: 3,
    photoURrl: newsPhoto3.src,
    title: 'Дети из Арцаха отметили новогодние праздники в фонде "301"',
    date: '23.03.2023',
    url: '/',
  },
];

type TSection = SectionProps & {
  id: number;
};

const SECTIONS: TSection[] = [
  {
    id: 1,
    name: 'НАША МИССИЯ',
    titleIcon: ourMissionIcon,
    importantNote:
      'Наша миссия — обеспечить онтологическую безопасность Армении.',
    mainText:
      'Мы запускаем научные проекты, реализовываем культурные инициативы, строим образовательную среду, формируем экспертное сообщество  — это актуализирует систему привычных ценностей и позволяет менять сценарий будущего. Мы верим, что именно такой подход сможет укрепить место армян как носителей уникального культурного кода в современном мире. Мы выстраиваем те границы Армении, которые никому не под силу нарушить. Мы создаем будущее, в котором армянская цивилизация уникальна и ценна для мира.',
    actionButton: {
      id: 1,
      name: 'Узнать больше',
      href: '/',
      style: {
        border: `1px solid ${Colors.BRIGHT_PINK}`,
      },
    },
    background: `url('${bgOurMission.src}') ${Colors.WHITE} no-repeat center center`,
  },
  {
    id: 2,
    name: 'ПОЧЕМУ ЭТО ВАЖНО?',
    titleIcon: importantIcon,
    mainText:
      'Можем ли мы назвать ныне живущих представителей армянской культуры, известных по всему миру? Нет — Армении нет на современной культурной карте. Многие армяне достигли успеха в области культуры в других странах, однако культура, которую они представляют — американская, французская, русская, но не армянская. В Армении также наблюдается кризис образования; отсутствие общественного договора и системы национальных ценностей, что может вести к необратимым последствиям — потере идентичности, а позже и государственности.  Мы верим, что выстраивание границ онтологической безопасности сможет этому противостоять. Для этого нужно определить, чем Армения уникальна для мира. Каким органом на теле планеты может стать наша страна: совестью, памятью, руками, голосом? А может быть быть нейронами или мозжечком?  Ответив на этот вопрос, армянская цивилизация сумеет сохранить себя и сможет стать важной большому миру.',
    background: `url(${bgImportant.src}) ${Colors.WHITE} no-repeat center center`,
  },
  {
    id: 3,
    name: 'ГИПОТЕЗЫ БУДУЩЕГО',
    titleIcon: futureHypothesesIcon,
    mainText:
      'Мы разработали четыре основные гипотезы, согласно которым Армения может развиваться и позиционировать себя на карте планеты.',
  },
  {
    id: 4,
    name: 'НАШИ ПРОЕКТЫ',
    titleIcon: ourProjectsIcon,
    mainText:
      'За несколько лет работы фонда «301. Земля мудрости» мы запустили ряд важных проектов по направлениям образования, культуры, науки и инноваций и целостного развития территории.',
    actionButton: {
      id: 1,
      name: 'Другие проекты',
      href: '/',
      style: {
        color: Colors.WHITE,
        backgroundColor: Colors.BRIGHT_PINK,
        boxShadow: '-9px 7px 13px 0px rgba(191, 9, 48, 0.23)',
      },
    },
  },
  {
    id: 5,
    name: 'НАША ЭКОСИСТЕМА',
    titleIcon: ourEcosystemIcon,
    mainText:
      'Мы видим два основный пути развития: с одной стороны — мудрое использовании потенциала, знаний и накопленного культурно-исторического опыта армянского народа; с другой — привлечение нестандартно мыслящих людей, как из Армении, так и из других стран, способных по-новому взглянуть на сложившуюся картину мира.  Поэтому мы интегрируем в свою экосистему всех, кто готов вместе с нами строить благополучное будущее Армении.',
    component: <Articles articles={ARTICLES} />,
  },
  {
    id: 6,
    name: 'Новости "301"',
    titleIcon: newsIcon,
    actionButton: {
      id: 1,
      name: 'Все новости',
      href: '/',
      style: {
        color: Colors.WHITE,
        backgroundColor: Colors.BRIGHT_PINK,
        boxShadow: '-21px 16px 38px 0px rgba(191, 9, 48, 0.21)',
      },
    },
    component: (
      <CommonCardSlider
        slides={NEWS_DATA}
        sliderPrefix="news"
        slideComponent={NewsCard}
      />
    ),
  },
  {
    id: 7,
    name: 'Напишите нам',
    titleIcon: writeUsIcon,
    actionButton: {
      id: 1,
      name: 'Send',
      href: '/',
      style: {
        color: Colors.WHITE,
        backgroundColor: Colors.BRIGHT_PINK,
        boxShadow: '-9px 7px 13px 0px rgba(191, 9, 48, 0.23)',
      },
    },
    component: <WriteUsForm />,
  },
];

export type { TNavItem, TButton, TSection, TArticle };

export { NAV_ITEMS, BUTTONS, SECTIONS, Colors };
