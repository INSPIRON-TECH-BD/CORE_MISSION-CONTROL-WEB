import React from 'react';
import { InspironIcon, InspironLogo } from './Logo';

/**
 * AdaptiveHeaderLogo - The "Thinking" Header Component.
 * Automatically switches architectural geometry based on viewport width.
 * 
 * Strategy:
 * - Mobile (<768px): Deploys "Sentry Node" (Icon Only) to maximize screen real-estate.
 * - Desktop (>=768px): Deploys "Full Institutional Signature" for maximum authority.
 */
export default function AdaptiveHeaderLogo() {
    return (
        <div className="relative flex items-center">
            {/* MOBILE NODE: VISIBLE ON SMALL SCREENS */}
            <div className="block md:hidden">
                <InspironIcon className="w-12 h-12" /> {/* 48px Touch Target */}
            </div>

            {/* DESKTOP NODE: VISIBLE ON MEDIUM+ SCREENS */}
            <div className="hidden md:block">
                <InspironLogo size="240px" />
            </div>
        </div>
    );
}
