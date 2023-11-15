/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   i18n: {
      locales: ["uz", "ru", "tjk"],
      defaultLocale: "ru",
   },
};

module.exports = nextConfig;
