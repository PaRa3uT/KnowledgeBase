module.exports = {
    base: "/KnowledgeBase/",

    plugins: [
        '@vuepress/plugin-search',
    ],

    themeConfig: {
        navbar: [
            {text: 'Главная', link: '/'},
            {text: 'Ссылки', link: '/links'},
            {text: 'Dev', children: [
                {text: 'Git', link: '/dev/git'}
            ]},
            {text: 'OS', children: [
                {text: 'Linux', children: [
                    {text: 'Common', link: '/os/linux_common'}
                ]},
                {text: 'Windows', link: '/os/windows'},
                {text: 'Windows Server', link: '/os/windows_server'},
                {text: 'FreeBSD', link: '/os/freebsd'}
            ]},
            {text: 'Other', link: '/other'}
        ]
    }
}
