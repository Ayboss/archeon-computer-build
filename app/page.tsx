export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Archeon</h1>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors">
            Get Started
          </button>
        </nav>
      </header>

      {/* Main Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Build Your Dream
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Desktop Setup
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Customize, design, and visualize your perfect desktop environment.
          From minimalist to maximalist, create a workspace that inspires you.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105">
            Start Building
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold backdrop-blur-sm transition-all hover:scale-105">
            View Gallery
          </button>
        </div>
      </section>

      {/* Featured Desktop Builds Gallery */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-white text-center mb-12">
          Featured Desktop Builds
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Build Card 1 - Minimalist Setup */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">
                    Minimalist Zen
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-2">
                Minimalist Zen
              </h4>
              <p className="text-gray-400 mb-4">
                Clean lines, maximum focus. Perfect for productivity.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  Minimal
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  Modern
                </span>
              </div>
            </div>
          </div>

          {/* Build Card 2 - Gaming Setup */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-red-500 to-orange-600 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">
                    Gaming Paradise
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-2">
                Gaming Paradise
              </h4>
              <p className="text-gray-400 mb-4">
                RGB everything. Built for performance and style.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">
                  Gaming
                </span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                  RGB
                </span>
              </div>
            </div>
          </div>

          {/* Build Card 3 - Creative Studio */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">
                    Creative Studio
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-2">
                Creative Studio
              </h4>
              <p className="text-gray-400 mb-4">
                Designed for artists, creators, and dreamers.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                  Creative
                </span>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                  Pro
                </span>
              </div>
            </div>
          </div>

          {/* Build Card 4 - Developer Den */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-indigo-500 to-blue-600 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">
                    Developer Den
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-2">
                Developer Den
              </h4>
              <p className="text-gray-400 mb-4">
                Multi-monitor mastery for coding marathons.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                  Code
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  Tech
                </span>
              </div>
            </div>
          </div>

          {/* Build Card 5 - Cyberpunk Vibes */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-pink-500 to-purple-600 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">
                    Cyberpunk Vibes
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-2">
                Cyberpunk Vibes
              </h4>
              <p className="text-gray-400 mb-4">
                Neon dreams and futuristic aesthetics.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                  Neon
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  Future
                </span>
              </div>
            </div>
          </div>

          {/* Build Card 6 - Nature Inspired */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-emerald-500 to-green-600 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">
                    Nature Inspired
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-2">
                Nature Inspired
              </h4>
              <p className="text-gray-400 mb-4">
                Bring the outdoors in with natural aesthetics.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                  Natural
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                  Calm
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Drag & Drop Builder
            </h4>
            <p className="text-gray-400">
              Easily customize your desktop layout with our intuitive builder.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Custom Themes</h4>
            <p className="text-gray-400">
              Choose from hundreds of themes or create your own unique style.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Community Sharing
            </h4>
            <p className="text-gray-400">
              Share your builds and get inspired by the community.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
          <h3 className="text-4xl font-bold text-white mb-4">
            Ready to Build Your Dream Setup?
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users creating amazing desktop experiences.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105">
            Start Building Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>&copy; 2026 Archeon. Build your perfect desktop.</p>
      </footer>
    </div>
  );
}
