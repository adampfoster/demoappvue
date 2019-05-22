const config = {
  name: 'Demo App',
  short_name: 'Demo App',
  does: 'a masterful tool to help you get the most out of the things to solve the problem that you need to solve',
  brand_primary: 'blue lighten-5',
  logo_path: '/img/logo.png',
  icons: [
    {
      src: './img/icons/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: './img/icons/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
  start_url: './index.html',
  display: 'standalone',
  background_color: '#ffffff',
  theme_color: '#ffffff',
};

export default config;
