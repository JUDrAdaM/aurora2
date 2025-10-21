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
import ArrowIcon from '../../components/ArrowIcon';
import CustomImage from '../../components/CustomImage';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
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
      <Header name={globalData.name} />
      <article className="px-6 md:px-0 relative z-10" data-sb-object-id={`posts/${slug}.mdx`}>
        <header className="mb-12">
          <h1
            className="mb-8 text-3xl text-center md:text-5xl font-bold neon-text"
            data-sb-field-path="title"
          >
            {frontMatter.title}
          </h1>
          {frontMatter.description && (
            <p className="mb-4 text-xl text-center text-purple-200/80 max-w-3xl mx-auto" data-sb-field-path="description">
              {frontMatter.description}
            </p>
          )}
        </header>
        <main>
          <article
            className="glass-card p-8 lg:p-12 prose prose-lg prose-purple dark:prose-invert max-w-none prose-headings:neon-text prose-a:text-purple-300 prose-a:no-underline hover:prose-a:text-purple-100 prose-strong:text-purple-100 prose-code:text-purple-200 prose-code:bg-purple-900/30 prose-pre:glass-card prose-pre:border prose-pre:border-purple-500/30"
            data-sb-field-path="markdown_content"
          >
            <MDXRemote {...source} components={components} />
          </article>
        </main>
        <div className="grid mt-12 md:grid-cols-2 gap-4 lg:-mx-24">
          {prevPost && (
            <Link
              href={`/posts/${prevPost.slug}`}
              className="glass-card flex flex-col px-10 py-8 text-center transition md:text-right hover:neon-glow"
            >
              <p className="mb-4 text-purple-300 uppercase text-sm tracking-wider">
                Previous
              </p>
              <h4 className="mb-6 text-2xl text-purple-50 font-semibold">
                {prevPost.title}
              </h4>
              <ArrowIcon className="mx-auto mt-auto transform rotate-180 md:mr-0 text-purple-300" />
            </Link>
          )}
          {nextPost && (
            <Link
              href={`/posts/${nextPost.slug}`}
              className="glass-card flex flex-col px-10 py-8 text-center transition md:text-left hover:neon-glow"
            >
              <p className="mb-4 text-purple-300 uppercase text-sm tracking-wider">
                Next
              </p>
              <h4 className="mb-6 text-2xl text-purple-50 font-semibold">
                {nextPost.title}
              </h4>
              <ArrowIcon className="mx-auto mt-auto md:ml-0 text-purple-300" />
            </Link>
          )}
        </div>
      </article>
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
