import { getGlobalData } from '../../utils/global-data';
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  getPostFilePaths,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import CustomImage from '../../components/CustomImage';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const components = {
  a: CustomLink,
  Head,
  img: CustomImage,
};

export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
  slug,
}) {
  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      
      <div className="relative min-h-screen">
        <div className="absolute inset-0 gradient-bg opacity-20"></div>
        
        <header className="relative z-10 py-8">
          <nav className="container mx-auto px-6 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold neon-text-cyan">
              Aurora
            </Link>
            <div className="flex gap-6 items-center">
              <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">
                ← Back to Blog
              </Link>
            </div>
          </nav>
        </header>

        <article className="relative z-10 container mx-auto px-6 py-12 max-w-4xl" data-sb-object-id={`posts/${slug}.mdx`}>
          <div className="glass rounded-2xl p-8 md:p-12 mb-8">
            <header className="mb-8">
              {frontMatter.date && (
                <p className="text-cyan-400 font-semibold mb-4" data-sb-field-path="date">
                  {frontMatter.date}
                </p>
              )}
              <h1
                className="text-4xl md:text-6xl font-bold mb-6 neon-text-purple"
                data-sb-field-path="title"
              >
                {frontMatter.title}
              </h1>
              {frontMatter.description && (
                <p className="text-xl text-gray-300" data-sb-field-path="description">
                  {frontMatter.description}
                </p>
              )}
            </header>
            
            <main>
              <article
                className="prose prose-lg prose-invert max-w-none"
                data-sb-field-path="markdown_content"
              >
                <MDXRemote {...source} components={components} />
              </article>
            </main>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {prevPost && (
              <Link
                href={`/posts/${prevPost.slug}`}
                className="glass glass-hover rounded-xl p-6 block text-center md:text-left"
              >
                <p className="text-sm text-gray-400 uppercase mb-2">
                  Previous
                </p>
                <h4 className="text-xl font-bold neon-text-cyan">
                  {prevPost.title}
                </h4>
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/posts/${nextPost.slug}`}
                className="glass glass-hover rounded-xl p-6 block text-center md:text-right"
              >
                <p className="text-sm text-gray-400 uppercase mb-2">
                  Next
                </p>
                <h4 className="text-xl font-bold neon-text-pink">
                  {nextPost.title}
                </h4>
              </Link>
            )}
          </div>
        </article>

        <Footer copyrightText={globalData.footerText} />

        <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="fixed bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      slug: params.slug,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getPostFilePaths()
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
