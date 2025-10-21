import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full relative z-10">
        <div className="text-center mb-16">
          <h1 className="mb-6 text-5xl lg:text-7xl font-bold neon-text">
            {globalData.blogTitle}
          </h1>
          <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
            Welcome to a modern digital experience with stunning purple neon aesthetics
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Link href="/login" className="btn-neon px-8 py-3 rounded-full font-semibold text-white">
              Login
            </Link>
            <Link href="/register" className="glass-card px-8 py-3 rounded-full font-semibold text-purple-100 hover:bg-purple-500/20 transition">
              Register
            </Link>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-purple-100 mb-6 neon-text">Latest Posts</h2>
        </div>
        
        <ul className="w-full space-y-6">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="glass-card transition-all hover:scale-[1.02] hover:neon-glow"
              data-sb-object-id={`posts/${post.filePath}`}
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
                className="block px-6 py-6 lg:py-10 lg:px-16 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
              >
                {post.data.date && (
                  <p
                    className="mb-3 font-bold uppercase text-purple-300 text-sm tracking-wider"
                    data-sb-field-path="date"
                  >
                    {post.data.date}
                  </p>
                )}
                <h2 className="text-2xl md:text-3xl font-bold text-purple-50" data-sb-field-path="title">
                  {post.data.title}
                </h2>
                {post.data.description && (
                  <p
                    className="mt-3 text-lg text-purple-200/70"
                    data-sb-field-path="description"
                  >
                    {post.data.description}
                  </p>
                )}
                <div className="flex items-center mt-4 text-purple-300">
                  <span className="mr-2">Read more</span>
                  <ArrowIcon className="w-5 h-5" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-30"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20"
      />
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-purple-600/20 pointer-events-none" />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
