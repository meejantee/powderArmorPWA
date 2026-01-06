
import React from 'react';
import { Footprints, Check } from 'lucide-react';

const Onboarding = ({ onSelectStance }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-950 text-center">
      <h1 className="text-3xl font-bold text-powder-400 mb-2">Powder Armor</h1>
      <p className="text-slate-400 mb-8">Select your snowboarding stance to customize your leg blasters.</p>

      <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
        <button
          onClick={() => onSelectStance('regular')}
          className="group relative p-6 bg-slate-900 border-2 border-slate-800 hover:border-powder-500 rounded-xl transition-all"
        >
          <div className="flex flex-col items-center">
            <Footprints className="w-12 h-12 text-slate-500 group-hover:text-powder-500 mb-3 rotate-[-15deg]" />
            <h3 className="text-xl font-bold text-white">Regular</h3>
            <p className="text-sm text-slate-500 mt-1">Left foot forward</p>
          </div>
        </button>

        <button
          onClick={() => onSelectStance('goofy')}
          className="group relative p-6 bg-slate-900 border-2 border-slate-800 hover:border-powder-500 rounded-xl transition-all"
        >
          <div className="flex flex-col items-center">
            <Footprints className="w-12 h-12 text-slate-500 group-hover:text-powder-500 mb-3 rotate-[15deg] scale-x-[-1]" />
            <h3 className="text-xl font-bold text-white">Goofy</h3>
            <p className="text-sm text-slate-500 mt-1">Right foot forward</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
