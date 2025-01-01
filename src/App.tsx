import React from 'react';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <div className="min-h-screen bg-[#100030] p-8">
      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
        Heat Pump Discount Calculator
      </h1>
      <div className="max-w-2xl mx-auto px-6 py-8 bg-[#33274d] rounded-xl">
        <Calculator />
      </div>
    </div>
  );
}

export default App;