module.exports = {
    base: "/KnowledgeBase/",

    plugins: [
        '@vuepress/plugin-search',
    ],

    themeConfig: {
        navbar: [
            {text: 'Главная', link: '/'},
            {text: 'Dev', children: [
                {text: 'Git', link: '/dev/git'}
            ]},
            {text: 'OS', children: [
                {text: 'Linux', children: [
                    {text: 'Common', link: '/linux/common'}
                ]}
            ]}
        ]
    }
}
