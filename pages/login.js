import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <SEO title="Login - Aurora" description="Login to your account" />
      <div className="min-h-screen flex items-center justify-center px-4 py-12 relative">
        <div className="absolute inset-0 gradient-bg opacity-30"></div>
        
        <div className="glass glass-hover max-w-md w-full rounded-2xl p-8 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold neon-text-cyan mb-2">Welcome Back</h1>
            <p className="text-gray-400">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-white placeholder-gray-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-300">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-white placeholder-gray-500"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-300">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link href="#" className="neon-text-pink hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full neon-btn neon-border-cyan neon-text-cyan"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="neon-text-pink hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="glass glass-hover px-4 py-3 rounded-lg text-white hover:text-cyan-400 transition-colors">
                Google
              </button>
              <button className="glass glass-hover px-4 py-3 rounded-lg text-white hover:text-pink-400 transition-colors">
                GitHub
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
    </Layout>
  );
}
