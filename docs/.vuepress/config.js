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
                {text: 'Python', link: '/dev/python'},
                {text: 'Git', link: '/dev/git'},
                {text: 'JavaScript', link: '/dev/java_script'},
                {text: 'SQL', link: '/dev/sql'},
                {text: 'PHP', link: '/dev/php'},
            ]},
            {text: 'OS', children: [
                {text: 'Linux', children: [
                    {text: 'Common', link: '/os/linux_common'},
                    {text: 'Common YUM', link: '/os/linux/yum'},
                    {text: 'Debian', link: '/os/linux_debian'},
                    {text: 'Devuan', link: '/os/linux_devuan'},
                    {text: 'Slackware', link: '/os/linux_slackware'},
                    {text: 'Slax', link: '/os/linux_slax'},
                    {text: 'Alpine', link: '/os/linux_alpine'},
                    {text: 'armbian', link: '/os/linux/armbian'},
                    {text: 'CentOS', link: '/os/linux/centos'},
                ]},
                {text: 'Windows', children: [
                    {text: 'Windows', link: '/os/windows'},
                    {text: 'Windows Server', link: '/os/windows_server'},
                    {text: 'Software', link: '/os/windows_soft'},
                ]},
                {text: 'BSD', children: [
                    {text: 'FreeBSD', link: '/os/bsd_freebsd'},
                    {text: 'OpenBSD', link: '/os/bsd_openbsd'},
                    {text: 'OPNsense', link: '/os/bsd_opnsense'},
                    {text: 'XigmaNAS', link: '/os/bsd_xigmanas'},
                ]},
                {text: 'Other', children: [
                    {text: 'OpenWRT', link: '/os/openwrt'}
                ]},
            ]},
            {text: 'Сети', children: [
                {text: 'TCP', link: '/network/tcp'},
            ]},
            {text: 'Unsorted', children: [
                {text: 'AWX', link: '/unsorted/awx'},
                {text: 'Остальное', link: '/unsorted/other'},
                {text: 'Scylla DB', link: '/unsorted/scylladb'},
                {text: 'Zabbix', link: '/unsorted/zabbix'},
                {text: 'SEO', link: '/unsorted/seo'},
                {text: 'SMM', link: '/unsorted/smm'},
                {text: 'Mikrotik', link: '/unsorted/mikrotik'},
                {text: 'Электрокомпоненты', link: '/unsorted/electrocomponents'}
            ]},
            {text: 'Заметки', link: '/notes'},
            {text: 'Путешествия', children: [
                {text: 'Москва', link: '/travel/moscow'},
                {text: 'Челябинск', link: '/travel/chelyabinsk'},
            ]}, 
            {text: 'Финансы', children: [
                {text: 'Инвестирование', link: '/finance/investing'}
            ]},
            {text: 'Hardware', children: [
                {text: 'OrangePi PC', link: '/hardware/orangepi_pc'}
            ]}
        ]
    }
}
