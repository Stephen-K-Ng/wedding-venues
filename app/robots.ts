import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots { return {rules:{userAgent:'*', allow:'/', disallow:'/api/'}, sitemap:'https://wedding-venues-one.vercel.app/sitemap.xml'}; }
