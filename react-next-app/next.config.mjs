/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: './', // Use relative paths for static assets during export
    basePath: '', 
    distDir: 'docs',  // Set the output folder to 'docs' -- for Github pages
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
};

export default nextConfig;
