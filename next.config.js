/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en-US", "dk", "localhost"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en-US",
    localeDetection: false,
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: "kronborgcode.com",
        defaultLocale: "en-US",
      },
      {
        domain: "kronborgcode.dk",
        defaultLocale: "dk",
      },
    ],
  },
};

module.exports = nextConfig;
