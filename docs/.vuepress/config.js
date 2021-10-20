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
                    {text: 'Debian', link: '/os/linux_debian'},
                    {text: 'Devuan', link: '/os/linux_devuan'},
                    {text: 'Slackware', link: '/os/linux_slackware'},
                    {text: 'Slax', link: '/os/linux_slax'},
                    {text: 'Alpine', link: '/os/linux_alpine'},
                ]},
                {text: 'Windows', children: [
                    {text: 'Windows', link: '/os/windows'},
                    {text: 'Windows Server', link: '/os/windows_server'},
                    {text: 'Software', link: '/os/windows_soft'},
                ]},
                {text: 'BSD', children: [
                    {text: 'FreeBSD', link: '/os/freebsd'},
                    {text: 'OpenBSD', link: '/os/openbsd'},
                    {text: 'OPNsense', link: '/os/opnsense'},
                    {text: 'XigmaNAS', link: '/os/xigmanas'},
                ]},
                {text: 'Other', children: [
                    {text: 'OpenWRT', link: '/os/openwrt'}
                ]},
            ]},
            {text: 'Сети', children: [
                {text: 'TCP', link: '/network/tcp'},
            ]},
            {text: 'Unsorted', link: '/other'},
            {text: 'Заметки', link: '/notes'}
        ]
    }
}
