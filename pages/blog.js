import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Blog({ posts, globalData }) {
  return (
    <Layout>
      <SEO title="Blog - Aurora" description="Read our latest articles and insights" />
      
      <div className="relative min-h-screen">
        <div className="absolute inset-0 gradient-bg opacity-20"></div>
        
        <header className="relative z-10 py-8">
          <nav className="container mx-auto px-6 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold neon-text-cyan">
              Aurora
            </Link>
            <div className="flex gap-6 items-center">
              <Link href="/blog" className="text-cyan-400 font-semibold">
                Blog
              </Link>
              <Link href="/login" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Login
              </Link>
              <Link href="/register" className="neon-btn neon-border-pink neon-text-pink text-sm">
                Sign Up
              </Link>
            </div>
          </nav>
        </header>

        <main className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text-purple">
              The Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Insights, tutorials, and stories from the Aurora community
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-6">
              {posts.map((post) => (
                <article
                  key={post.filePath}
                  className="glass glass-hover rounded-2xl overflow-hidden"
                  data-sb-object-id={`posts/${post.filePath}`}
                >
                  <Link
                    href={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                    className="block p-8 md:p-10"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      {post.data.date && (
                        <p
                          className="text-sm font-bold uppercase text-cyan-400 mb-2 md:mb-0"
                          data-sb-field-path="date"
                        >
                          {post.data.date}
                        </p>
                      )}
                      <span className="text-sm text-gray-400">5 min read</span>
                    </div>
                    
                    <h2 
                      className="text-3xl md:text-4xl font-bold mb-4 neon-text-cyan"
                      data-sb-field-path="title"
                    >
                      {post.data.title}
                    </h2>
                    
                    {post.data.description && (
                      <p
                        className="text-lg text-gray-300 mb-4"
                        data-sb-field-path="description"
                      >
                        {post.data.description}
                      </p>
                    )}
                    
                    <div className="flex items-center gap-4 mt-6">
                      <span className="text-pink-400 font-semibold hover:underline">
                        Read more →
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {posts.length === 0 && (
              <div className="glass rounded-2xl p-16 text-center">
                <p className="text-xl text-gray-400">No posts found. Check back soon!</p>
              </div>
            )}
          </div>

          <div className="mt-16 text-center">
            <div className="glass rounded-2xl p-12 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 neon-text-pink">
                Want to Contribute?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Share your knowledge and experiences with the Aurora community
              </p>
              <Link href="/register" className="neon-btn neon-border-cyan neon-text-cyan">
                Become a Writer
              </Link>
            </div>
          </div>
        </main>

        <Footer copyrightText={globalData.footerText} />

        <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="fixed bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
