/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production';
const repository = 'portfolio-next';

const nextConfig = {
  output: 'export',
  basePath: '/portfolio-next',
};
module.exports = nextConfig;
