export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://ufuksfk.com',
    title: 'Ufuk Safak',
    subtitle: 'Family guy, life long learner, embedded system engineer.',
    description: 'Personal story of mine.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Notes',
            href: 'notes.ufuksfk.com'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        /*{
            text: 'About',
            href: '/about'
        },*/
        {
            text: 'Contact',
            href: '/contact'
        },
        /*{
            text: 'Terms',
            href: '/terms'
        },*/
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/ufuksfk'
        },
        {
            text: 'Bluesky',
            href: 'https://bsky.app/profile/ufuksfk.com'
        },
        {
            text: 'Mastodon',
            href: 'https://mastodon.social/@ufuksfk'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/ufuksfk'
        },
        {
            text: 'Substack',
            href: 'https://substack.com/@ufuksfk'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/ufuksfk'
        },
    ],
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: "I'm **Ufuk Safak**, an embedded systems engineer exploring the intersection of hardware, design, and systems thinking. I'm drawn to ideas that blend creativity with practicality — whether it's building physical products, shaping thoughtful user flows, or asking better questions. I believe good design starts with curiosity and improves through iteration. You can check out some of my experiments on <a href='https://github.com/ufuksfk'>GitHub</a> or find me over on <a href='https://linkedin.com/in/ufuksfk'>Linkedin</a>.",
        /*image: {
        src: '/hero.jpeg',
        alt: 'A person sitting at a desk in front of a computer'
        },*/
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
