import React from 'react';
import { MessageSquare, Users, Settings, Plus } from 'lucide-react';

// Simple Layout Component (Internal for now)
const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center p-0 md:p-4 bg-background">
      <div className="w-full h-full md:max-w-6xl md:h-[90vh] bg-surface/30 backdrop-blur-xl border border-white/10 md:rounded-3xl shadow-2xl overflow-hidden flex relative">
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Layout>
      {/* Sidebar (Left) */}
      <div className="w-full md:w-80 h-full border-r border-white/5 flex flex-col bg-surface/20">
        
        {/* Sidebar Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-primary rounded-xl shadow-lg shadow-primary/20">
                    <MessageSquare size={20} className="text-white" />
                </div>
                <h1 className="font-bold text-xl tracking-tight text-white">PrivChat</h1>
            </div>
            <button className="p-2 hover:bg-white/5 rounded-lg transition">
                <Settings size={18} className="text-white/60" />
            </button>
        </div>

        {/* Chat List (Empty State for now) */}
        <div className="flex-1 p-4 flex flex-col items-center justify-center text-white/30 text-center gap-2">
            <Users size={32} />
            <p className="text-sm">No friends yet.</p>
        </div>

        {/* User Profile (Bottom) */}
        <div className="p-4 bg-black/20 border-t border-white/5">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent"></div>
                <div>
                    <p className="text-sm font-medium text-white">You</p>
                    <p className="text-xs text-white/50">Online</p>
                </div>
            </div>
        </div>
      </div>

      {/* Chat Area (Right) - Hidden on mobile initially */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-black/20 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="text-center space-y-4 relative z-10 p-8">
            <div className="w-20 h-20 bg-surface/50 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md border border-white/10">
                <MessageSquare size={32} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">Welcome to PrivChat</h2>
            <p className="text-white/40 max-w-sm mx-auto">
                Secure, private messaging with your friends. 
                Create a group or invite a friend to start.
            </p>
            <button className="px-6 py-3 bg-primary hover:bg-primary/90 rounded-full text-white font-medium transition shadow-lg shadow-primary/25 flex items-center gap-2 mx-auto">
                <Plus size={18} />
                Create New Chat
            </button>
        </div>
      </div>
    </Layout>
  );
}

export default App;
