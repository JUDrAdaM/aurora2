import { useState } from 'react';
import Link from 'next/link';
import Layout, { GradientBackground } from '../components/Layout';
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
      <SEO title="Register" description="Create a new account" />
      <div className="min-h-screen flex items-center justify-center px-4 py-12 relative z-10">
        <div className="glass-card w-full max-w-md p-8 lg:p-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold neon-text mb-4">
              Create Account
            </h1>
            <p className="text-purple-200/70">
              Join us and start your journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-glass w-full px-4 py-3 rounded-lg text-purple-50 placeholder-purple-300/50"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-glass w-full px-4 py-3 rounded-lg text-purple-50 placeholder-purple-300/50"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-purple-200 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-glass w-full px-4 py-3 rounded-lg text-purple-50 placeholder-purple-300/50"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-purple-200 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-glass w-full px-4 py-3 rounded-lg text-purple-50 placeholder-purple-300/50"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 mr-2 w-4 h-4 rounded border-purple-400 bg-purple-900/20 text-purple-500 focus:ring-purple-500"
                required
              />
              <label htmlFor="terms" className="text-sm text-purple-200">
                I agree to the{' '}
                <Link href="#" className="text-purple-300 hover:text-purple-100 transition">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="#" className="text-purple-300 hover:text-purple-100 transition">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="btn-neon w-full py-3 rounded-lg font-semibold text-white text-lg"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-purple-200/70">
              Already have an account?{' '}
              <Link href="/login" className="text-purple-300 hover:text-purple-100 font-semibold transition">
                Login here
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-purple-500/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-purple-300">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="glass-card py-3 px-4 rounded-lg hover:bg-purple-500/20 transition flex items-center justify-center">
                <span className="text-purple-100 font-medium">Google</span>
              </button>
              <button className="glass-card py-3 px-4 rounded-lg hover:bg-purple-500/20 transition flex items-center justify-center">
                <span className="text-purple-100 font-medium">GitHub</span>
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="text-purple-300 hover:text-purple-100 text-sm transition">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
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
