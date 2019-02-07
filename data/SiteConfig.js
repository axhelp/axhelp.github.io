module.exports = {
  blogPostDir: 'posts', // The name of directory that contains your posts.
  lessonsDir: 'lessons', // The name of the directory that contains lessons or docs.
  siteTitle: 'AX Help', // Site title.
  siteTitleAlt: 'AX Help Community Documentation', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://axhelp.ru', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'Community Documentation', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  // googleAnalyticsID: 'UA- ', // GA tracking ID.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  userName: 'Phoenix Contact', // Username to display in the author segment.
  copyright: 'Phoenix Contact',
  userTwitter: 'PhoenixContactR', // Optionally renders "Follow Me" in the UserInfo segment.
  userDescription: 'Phoenix Contact Automation Systems', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/axhelp',
      iconClassName: 'fa fa-github'
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/PhoenixContactR',
      iconClassName: 'fa fa-twitter'
    },
    {
      label: 'Telegram',
      url: 'https://t.me/axhelp',
      iconClassName: 'fa fa-telegram'
    },
    {
      label: 'Email',
      url: 'mailto:ax@phoenixcontact.ru',
      iconClassName: 'fa fa-envelope'
    }
  ],
  // copyright: 'Copyright © 2017. Advanced User', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#0098a1', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
  // TODO: Move this literally anywhere better.
  toCChapters: ['', 'Chapter 1', 'Chapter 2'] // Used to generate the Table Of Contents. Index 0 should be blank.
}
