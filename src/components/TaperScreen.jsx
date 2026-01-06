
import React from 'react';
import { Snowflake, CheckCircle, Droplets, BedDouble } from 'lucide-react';

const TaperScreen = ({ daysUntilTrip }) => {
  return (
    <div className="min-h-screen bg-slate-950 p-6 flex flex-col items-center justify-center text-center">
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-powder-500/20 blur-xl rounded-full"></div>
        <Snowflake className="w-24 h-24 text-powder-400 relative z-10 animate-pulse" />
      </div>

      <h1 className="text-4xl font-bold text-white mb-2">Program Complete!</h1>
      <p className="text-2xl text-powder-400 font-mono mb-8">{daysUntilTrip} Days until Powder</p>

      <div className="w-full max-w-md bg-slate-900 rounded-xl border border-slate-800 p-6 text-left">
        <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">Taper Checklist</h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Droplets className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
            <div>
              <p className="text-white font-medium">Hydrate</p>
              <p className="text-sm text-slate-400">Drink 3L of water daily. Hydrated muscles don't cramp.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
            <div>
              <p className="text-white font-medium">Light Mobility</p>
              <p className="text-sm text-slate-400">15 mins max. Keep joints oiled.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Snowflake className="w-6 h-6 text-white shrink-0 mt-1" />
            <div>
              <p className="text-white font-medium">Check Gear</p>
              <p className="text-sm text-slate-400">Wax board, check bindings, pack socks.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
            <BedDouble className="w-6 h-6 text-red-400 shrink-0 mt-1" />
            <div>
              <p className="text-red-400 font-bold">NO Heavy Workouts</p>
              <p className="text-sm text-red-200/80">Your work is done. Recovery is the priority now.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaperScreen;
