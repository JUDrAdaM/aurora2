import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      
      <div className="relative min-h-screen">
        <div className="absolute inset-0 gradient-bg opacity-20"></div>
        
        <header className="relative z-10 py-8">
          <nav className="container mx-auto px-6 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold neon-text-cyan">
              Aurora
            </Link>
            <div className="flex gap-6 items-center">
              <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">
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
          <section className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text-purple">
              Welcome to Aurora
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the future of web design with stunning neon effects and glassmorphism
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/register" className="neon-btn neon-border-cyan neon-text-cyan">
                Get Started
              </Link>
              <Link href="/blog" className="neon-btn neon-border-pink neon-text-pink">
                Explore Blog
              </Link>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="glass glass-hover rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4 neon-text-cyan">✨</div>
              <h3 className="text-xl font-bold mb-3 neon-text-cyan">Modern Design</h3>
              <p className="text-gray-400">
                Sleek and contemporary interface with cutting-edge visual effects
              </p>
            </div>
            
            <div className="glass glass-hover rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4 neon-text-pink">🎨</div>
              <h3 className="text-xl font-bold mb-3 neon-text-pink">Glass Effects</h3>
              <p className="text-gray-400">
                Beautiful glassmorphism design that brings depth and elegance
              </p>
            </div>
            
            <div className="glass glass-hover rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4 neon-text-purple">⚡</div>
              <h3 className="text-xl font-bold mb-3 neon-text-purple">Neon Vibes</h3>
              <p className="text-gray-400">
                Vibrant neon accents that make your content stand out
              </p>
            </div>
          </section>

          <section className="glass rounded-2xl p-12 mb-20">
            <h2 className="text-4xl font-bold mb-8 text-center neon-text-cyan">
              Latest from the Blog
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(0, 3).map((post) => (
                <Link
                  key={post.filePath}
                  href={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                  className="glass glass-hover rounded-xl p-6 block"
                >
                  {post.data.date && (
                    <p className="text-sm text-cyan-400 mb-2 font-semibold">
                      {post.data.date}
                    </p>
                  )}
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {post.data.title}
                  </h3>
                  {post.data.description && (
                    <p className="text-gray-400 text-sm">
                      {post.data.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/blog" className="neon-btn neon-border-pink neon-text-pink">
                View All Posts
              </Link>
            </div>
          </section>

          <section className="text-center glass rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-4 neon-text-pink">
              Ready to Start?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users already using Aurora
            </p>
            <Link href="/register" className="neon-btn neon-border-cyan neon-text-cyan">
              Create Your Account
            </Link>
          </section>
        </main>

        <Footer copyrightText={globalData.footerText} />

        <div className="fixed top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="fixed bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
