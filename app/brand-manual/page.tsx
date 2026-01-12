/**
 * INSPIRON TECH - Institutional Brand Manual v1.0
 * Engineered for: MD ABU HASAN
 * Standard: 0.1% Error Tolerance
 */

import React from 'react';
import { ShieldCheck, Zap, BarChart3, Copy, Download, MousePointer2, ExternalLink } from 'lucide-react';
import { InspironLogo, InspironIcon } from '@/components/Branding/Logo';
import { V121Factory } from '@/components/Branding/v121Factory';

const BRAND_COLORS = [
    { name: 'Oxford Navy', hex: '#002147', usage: 'Foundation & Trust', text: 'text-white' },
    { name: 'Electric Aqua', hex: '#00FFFF', usage: 'Technical Precision', text: 'text-navy' },
    { name: 'Standard Gold', hex: '#FFCC00', usage: 'High-Yield Returns', text: 'text-navy' },
    { name: 'Pure White', hex: '#FDFDFD', usage: 'Data Clarity', text: 'text-navy' },
];

export default function BrandManual() {
    return (
        <div className="min-h-screen bg-[#010409] text-white font-sans selection:bg-aqua selection:text-navy scroll-smooth">

            {/* 1. HERO: THE INSTITUTIONAL MISSION */}
            <section className="border-b border-white/10 py-32 px-6 bg-gradient-to-b from-navy/30 to-transparent relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #00ffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px w-12 bg-aqua"></div>
                        <span className="text-aqua font-black tracking-[0.5em] uppercase text-[10px]">Institutional Manual v1.0</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black mt-4 mb-10 tracking-tighter uppercase leading-[0.85] animate-pulse">
                        Stabilizing <br /> <span className="text-gold">Financial <br /> Gravity.</span>
                    </h1>
                    <p className="max-w-xl text-xl md:text-2xl text-gray-400 leading-relaxed font-medium">
                        INSPIRON TECH BD is an institutional engineering firm led by MD ABU HASAN.
                        We replace manual chaos with 0.1% error-tolerant automation for 100+ Crore enterprises.
                    </p>
                    <div className="mt-12 flex gap-6">
                        <a href="#factory" className="bg-aqua text-navy px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-[0_10px_40px_-10px_rgba(0,255,255,0.4)]">Access Factory</a>
                        <a href="#colors" className="border border-white/20 px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white/5 transition-all">Spec Sheet</a>
                    </div>
                </div>
            </section>

            {/* 2. LOGO ENGINEERING: GEOMETRIC PRECISION */}
            <section className="py-32 px-6 border-b border-white/10 relative">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-4xl font-black mb-10 flex items-center gap-4 uppercase tracking-tight">
                            <ShieldCheck className="text-aqua" size={40} /> Logo Engineering
                        </h2>
                        <div className="space-y-8 text-gray-400">
                            <p className="text-lg leading-relaxed text-gray-300">
                                The INSPIRON identity is not drawn; it is engineered. We utilize a strict 8px grid system to ensure perfect arithmetic scaling across global nodes.
                            </p>
                            <div className="grid gap-6">
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-aqua/50 transition-colors group">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="h-3 w-3 bg-aqua rounded-full shadow-[0_0_10px_#00ffff]"></div>
                                        <span className="font-black text-white uppercase text-xs tracking-widest">01. The Aqua Engine</span>
                                    </div>
                                    <p className="text-sm">Represents the fluid logic of our custom Meta API integrations and real-time data streaming.</p>
                                </div>

                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-gold/50 transition-colors">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="h-3 w-3 bg-gold rounded-full shadow-[0_0_10px_#ffcc00]"></div>
                                        <span className="font-black text-white uppercase text-xs tracking-widest">02. The Gold ROI Node</span>
                                    </div>
                                    <p className="text-sm">Positioned at the pinnacle to symbolize capital recovery. Verified Impact: ৳25L+ leakage stabilization.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-aqua/5 rounded-[40px] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="bg-navy p-16 rounded-[32px] border border-white/5 shadow-2xl relative">
                            <InspironLogo className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,255,255,0.2)]" />
                            <div className="absolute bottom-6 right-8 flex gap-2">
                                <div className="px-3 py-1 bg-black/40 rounded-full text-[8px] font-mono tracking-widest text-gray-400 border border-white/10 italic">VECTOR_PATH_VERIFIED</div>
                                <div className="px-3 py-1 bg-black/40 rounded-full text-[8px] font-mono tracking-widest text-aqua border border-aqua/20">0.0%_GEOMETRIC_DRIFT</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. COLOR LAB: CLICK-TO-COPY INTERFACE */}
            <section id="colors" className="py-32 px-6 bg-white/[0.01]">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
                        <div>
                            <h2 className="text-4xl font-black mb-4 flex items-center justify-center md:justify-start gap-4 uppercase tracking-tight">
                                <Zap className="text-gold" size={40} /> Technical Palette
                            </h2>
                            <p className="text-gray-500 uppercase tracking-[0.3em] text-xs font-bold">Hard-coded institutional values</p>
                        </div>
                        <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3 self-center md:self-end">
                            <MousePointer2 size={16} className="text-aqua animate-bounce" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Click Swatch to Inject Hex</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {BRAND_COLORS.map((color) => (
                            <div key={color.hex} className="group relative">
                                <button
                                    onClick={() => navigator.clipboard.writeText(color.hex)}
                                    className="w-full h-64 rounded-3xl flex items-end p-8 transition-all group-hover:scale-[1.03] group-hover:-translate-y-2 shadow-2xl relative overflow-hidden text-left"
                                    style={{ backgroundColor: color.hex }}
                                >
                                    <div className="absolute top-6 right-6 p-3 bg-black/10 rounded-full opacity-0 group-hover:opacity-100 transition backdrop-blur-md border border-white/10">
                                        <Copy size={20} className={color.text} />
                                    </div>
                                    <div className="relative z-10">
                                        <p className={`font-black uppercase tracking-tighter text-4xl ${color.text} mb-1 opacity-20`}>{color.name.split(' ')[1] || color.name}</p>
                                        <p className={`font-bold uppercase tracking-widest text-[10px] ${color.text} opacity-50 mb-2`}>{color.name}</p>
                                        <p className={`font-black text-2xl ${color.text} tracking-wider`}>{color.hex.toUpperCase()}</p>
                                    </div>
                                    {/* Decorative element */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rotate-45 translate-x-16 -translate-y-16 pointer-events-none"></div>
                                </button>
                                <div className="mt-6 flex flex-col gap-1">
                                    <p className="text-[10px] text-aqua font-black uppercase tracking-[0.2em]">{color.usage}</p>
                                    <div className="h-1 w-8 bg-white/10 group-hover:w-full group-hover:bg-aqua transition-all duration-700"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE EVIDENCE ENGINE: NOBIN AGRO CASE STUDY */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-aqua/5 skew-y-3 pointer-events-none origin-right"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="bg-gradient-to-br from-navy/80 to-black p-12 md:p-20 rounded-[40px] border border-white/10 shadow-3xl">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-8">
                                    <BarChart3 className="text-aqua" />
                                    <span className="text-aqua font-black uppercase tracking-[0.4em] text-[10px]">Verification Protocol</span>
                                </div>
                                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">The Proof of <br /><span className="text-white/40">Precision.</span></h2>
                                <p className="text-xl text-gray-400 max-w-lg italic font-medium leading-relaxed border-l-4 border-gold pl-8">
                                    "We recovered ৳25 Lakhs+ in annual capital leakage through logic migration for 29 active ponds at NOBIN Agro."
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-8 w-full lg:w-auto">
                                <div className="bg-white/5 border border-white/10 p-10 rounded-[32px] text-center md:min-w-[200px] hover:bg-aqua group transition-all duration-500">
                                    <p className="text-5xl font-black text-aqua group-hover:text-navy transition-colors mb-2 tracking-tighter">14,478</p>
                                    <p className="text-[10px] uppercase font-black text-gray-500 group-hover:text-navy/50 tracking-widest">Transactions Verified</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-10 rounded-[32px] text-center md:min-w-[200px] hover:bg-gold transition-all duration-500 group">
                                    <p className="text-5xl font-black text-gold group-hover:text-navy transition-colors mb-2 tracking-tighter">0.0%</p>
                                    <p className="text-[10px] uppercase font-black text-gray-500 group-hover:text-navy/50 tracking-widest">Error Tolerance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. INTEGRATED TOOLS: v12.1 ASSET FACTORY */}
            <section id="factory" className="py-32 px-6 border-t border-white/10 bg-navy/10 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black mb-4 uppercase tracking-[0.2em]">Institutional Factory</h2>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Command Node v12.1 Embedded</p>
                        <div className="h-1 w-24 bg-aqua mx-auto mt-6"></div>
                    </div>

                    <V121Factory />

                    <div className="mt-16 text-center">
                        <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.4em] mb-8">Authorized usage only: MD ABU HASAN</p>
                        <button className="text-white/20 hover:text-aqua transition-colors flex items-center gap-2 mx-auto uppercase text-[10px] font-black tracking-widest underline decoration-white/10 underline-offset-8">
                            Open Discrete Terminal <ExternalLink size={12} />
                        </button>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-20 px-6 border-t border-white/5 text-center bg-black">
                <InspironIcon className="w-12 h-12 mx-auto mb-10 opacity-20 hover:opacity-100 transition-opacity cursor-crosshair" />
                <p className="text-[10px] text-white/20 uppercase tracking-[1em] font-black">MD ABU HASAN | INSPIRON TECH BD | Dhaka 2026</p>
                <div className="flex justify-center gap-8 mt-12 opacity-30">
                    <span className="text-[8px] font-mono tracking-widest">ENCRYPTION: AES-256</span>
                    <span className="text-[8px] font-mono tracking-widest">STATUS: OPERATIONAL</span>
                    <span className="text-[8px] font-mono tracking-widest">LATENCY: 14MS</span>
                </div>
            </footer>
        </div>
    );
}
