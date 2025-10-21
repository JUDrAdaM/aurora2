import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <SEO title="Register - Aurora" description="Create your account" />
      <div className="min-h-screen flex items-center justify-center px-4 py-12 relative">
        <div className="absolute inset-0 gradient-bg opacity-30"></div>
        
        <div className="glass glass-hover max-w-md w-full rounded-2xl p-8 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold neon-text-pink mb-2">Create Account</h1>
            <p className="text-gray-400">Join us and start your journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all text-white placeholder-gray-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all text-white placeholder-gray-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all text-white placeholder-gray-500"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2 text-gray-300">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all text-white placeholder-gray-500"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                required
                className="mt-1 mr-2"
              />
              <label htmlFor="terms" className="text-sm text-gray-300">
                I agree to the{' '}
                <Link href="#" className="neon-text-cyan hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="#" className="neon-text-cyan hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full neon-btn neon-border-pink neon-text-pink"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="neon-text-cyan hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-gray-400">Or register with</span>
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
            <Link href="/" className="text-sm text-gray-400 hover:text-pink-400 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>

        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </Layout>
  );
}
