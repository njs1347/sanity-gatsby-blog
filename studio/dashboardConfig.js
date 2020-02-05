export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3b4e1e8d6adf29c7edf7a1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-y2m1629s',
                  apiId: 'b0899bc6-4235-40ed-8393-e7bd43eccff0'
                },
                {
                  buildHookId: '5e3b4e1e5a34f84a441f4491',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-z482owad',
                  apiId: '50c315da-1868-4190-9d80-c016258eb71c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/njs1347/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-z482owad.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
