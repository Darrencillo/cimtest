const siteConfig = {
  title: 'CIM', // Title for your website.
  tagline: 'Cloud Information Model',
  url: 'https://Darrencillo.github.io', // Your website URL
  baseUrl: '/cimtest/', // Base URL for your project */
  projectName: 'cimtest',
  organizationName: 'Darrencillo',

 

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {page: 'index', label: 'Inicio'},
    {page: 'help', label: 'Subjects Area'},
    {href: 'https://github.com/Darrencillo/cimtest.git', label: 'GitHub'},
   
  ],

  
  /* path to images for header/footer */
  headerIcon: 'img/logo_cim.svg',
  //footerIcon: 'img/logo_cim.svg',
  favicon: 'img/logo_cim.svg',

  /* Colors for website */
  colors: {
    primaryColor: '#534588',
    //secondaryColor: '#a25eb5',
    secondaryColor: '#65b2e8',
    terciaryColor: '#65b2e8',
  },

 

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} CIM (Cloud Information Model)`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  
  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

 
};

module.exports = siteConfig;
