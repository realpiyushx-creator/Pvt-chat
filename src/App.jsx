import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700">
        <h1 className="text-3xl font-bold text-indigo-400 mb-2">It Works! 🎉</h1>
        <p className="text-slate-300">
          The white screen is gone. Now we can safely add the fancy design back.
        </p>
        <button className="mt-6 w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition">
          Let's go
        </button>
      </div>
    </div>
  );
}

export default App;
