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
                {text: 'Git', link: '/dev/git'},
                {text: 'JavaScript', link: '/dev/java_script'},
                {text: 'SQL', link: '/dev/sql'},
            ]},
            {text: 'OS', children: [
                {text: 'Linux', children: [
                    {text: 'Common', link: '/os/linux_common'},
                    {text: 'Debian', link: '/os/linux_debian'}
                ]},
                {text: 'Windows', children: [
                    {text: 'Windows', link: '/os/windows'},
                    {text: 'Windows Server', link: '/os/windows_server'},
                ]},
                {text: 'BSD', children: [
                    {text: 'FreeBSD', link: '/os/freebsd'}
                ]},
                {text: 'Other', children: [
                    {text: 'OpenWRT', link: '/os/openwrt'}
                ]},
                {text: 'Заметки', link: '/notes'}
            ]},
            {text: 'Unsorted', link: '/other'}
        ]
    }
}
