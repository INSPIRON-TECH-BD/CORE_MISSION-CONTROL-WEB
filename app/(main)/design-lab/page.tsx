'use client';

import React from 'react';
// IMPORT FROM SUBMODULE
import { RefinedLogo } from "@brand/components/Branding/RefinedLogo";

export default function DesignLab() {
    return (
        <main className="min-h-screen bg-[#010409] text-white p-24">
            <h1 className="text-4xl font-bold mb-10">Design Laboratory (v2.0)</h1>

            <div className="grid grid-cols-2 gap-20">
                {/* 1. SOVEREIGN LOGO */}
                <section>
                    <h2 className="text-xl mb-4 text-[#FFD700]">Sovereign Logo Test</h2>
                    <RefinedLogo size={80} />
                </section>

                {/* 2. COLOR VARIANTS */}
                <section>
                    <h2 className="text-xl mb-4 text-[#00D2FF]">Color Application</h2>
                    <div className="p-10 bg-white rounded-xl">
                        {/* Note: RefinedLogo text color is currently locked to white/aqua in component definition */}
                        <RefinedLogo className="" size={80} />
                    </div>
                </section>

                {/* 3. SCALING */}
                <section className="col-span-2">
                    <h2 className="text-xl mb-4 text-purple-400">Scaling Physics</h2>
                    <RefinedLogo className="scale-150 transform origin-center" size={120} />
                </section>
            </div>
        </main>
    )
}
