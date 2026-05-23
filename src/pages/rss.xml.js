import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  
  // Sort posts by date (most recent first)
  const sortedPosts = posts.sort((a, b) => 
    new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );
  
  return rss({
    title: 'grzybstagram',
    description: 'Niezależny blog o grzybach. Fakty, źródła, nauka i opinie bez cenzury.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: `/wpisy/${post.id}/`,
    })),
    customData: `<language>pl-PL</language>`,
  });
}
