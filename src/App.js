import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <img src="https://via.placeholder.com/150" alt="Interstellar Coin Logo" className="mx-auto mb-4 rounded-2xl" />
        <h1 className="text-4xl font-bold">INTERSTELLAR COIN</h1>
        <p className="text-lg mt-2">Are you ready to conquer the universe?</p>
      </header>
      <main className="flex flex-col items-center">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
        >
          <img src="https://via.placeholder.com/80" alt="Rocket" className="w-16 h-16" />
        </motion.div>
        <p className="text-xl mt-4">Blast off into space now!</p>
        <a
          href="https://pump.fun"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-800 rounded-2xl shadow-lg text-white text-lg"
        >
          Buy Coin
        </a>
      </main>
    </div>
  );
}
