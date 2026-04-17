import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(Date.now());

  // Update time every 1000ms
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 py-12 px-4 flex justify-center items-center">
      <article 
        data-testid="test-profile-card"
        className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl flex flex-col md:flex-row"
      >
        {/* Avatar Section */}
        <figure className="md:shrink-0 bg-indigo-500 p-6 flex justify-center">
          <img 
            data-testid="test-user-avatar"
            className="h-48 w-48 object-cover rounded-full border-4 border-white md:rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300" 
            alt="User profile avatar"
          />
        </figure>

        <div className="p-8">
          {/* Header & Name */}
          <header>
            <h2 
              data-testid="test-user-name"
              className="block mt-1 text-2xl leading-tight font-bold text-black"
            >
              John Doe
            </h2>
            <div className="mt-2 text-indigo-600 font-mono text-sm">
              Current Epoch: <span data-testid="test-user-time" aria-live="polite">{time}</span>
            </div>
          </header>

          {/* Bio */}
          <p 
            data-testid="test-user-bio"
            className="mt-4 text-slate-500 leading-relaxed"
          >
            Frontend developer based in the future. I love building testable components 
            and ensuring everyone can access the web, regardless of their hardware or ability.
          </p>

          {/* Hobbies & Dislikes */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <section>
              <h3 className="font-bold text-slate-700 text-sm uppercase">Hobbies</h3>
              <ul data-testid="test-user-hobbies" className="mt-2 list-disc list-inside text-slate-600 text-sm">
                <li>Coding</li>
                <li>Hiking</li>
                <li>Gaming</li>
              </ul>
            </section>
            <section>
              <h3 className="font-bold text-slate-700 text-sm uppercase">Dislikes</h3>
              <ul data-testid="test-user-dislikes" className="mt-2 list-disc list-inside text-slate-600 text-sm">
                <li>Bugs</li>
                <li>Slow Internet</li>
                <li>Unlabeled Buttons</li>
              </ul>
            </section>
          </div>

          {/* Social Links */}
          <nav className="mt-8 border-t pt-6">
            <ul data-testid="test-user-social-links" className="flex gap-4">
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-testid="test-user-social-twitter"
                  className="text-indigo-600 hover:text-indigo-800 font-medium underline underline-offset-4"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-testid="test-user-social-github"
                  className="text-indigo-600 hover:text-indigo-800 font-medium underline underline-offset-4"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </article>
    </main>
  );
}

export default App;