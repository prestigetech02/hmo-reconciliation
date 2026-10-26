import React from 'react';
import { AlertCircle, X } from 'lucide-react';

export function Toast({ isOpen, message, onClose }) {
    if (!isOpen) return null;

    return (
        /* Absolute container tracking the bottom-right corner of the parent screen */
        <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:w-full sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="w-full flex items-center justify-between gap-3 bg-[#EF4444] text-white px-4 py-3 rounded-lg shadow-lg border border-red-600/20">
            
            {/* Left Side: Warning Icon & Message Core */}
            <div className="flex items-center gap-2.5">
            <AlertCircle className="h-4 w-4 shrink-0 text-white animate-pulse" />
            <p className="text-xs sm:text-sm font-medium tracking-wide">
                {message}
            </p>
            </div>

            {/* Right Side: Manual Dismiss Action Close Trigger */}
            <button 
            onClick={onClose}
            type="button"
            className="text-white/80 hover:text-white p-0.5 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Dismiss alert"
            >
            <X className="h-4 w-4" />
            </button>
        </div>
        </div>
    );
}
