// Micro UI helper component to style the individual requirement lines
import { Lock, Eye, EyeOff, Check, Circle, Loader2 } from 'lucide-react';



export const  ValidationRow = ({ isMet, label }) => {
    return (
        <div className={`flex items-center gap-2 text-xs transition-colors duration-200 ${isMet ? 'text-[#25C27F]' : 'text-gray-400'}`}>
        {isMet ? (
            <Check className="h-3.5 w-3.5 stroke-[3px]" />
        ) : (
            <Circle className="h-3.5 w-3.5 stroke-[2px]" fill="currentColor" fillOpacity="0.05" />
        )}
        <span className={isMet ? "font-medium" : "font-normal"}>{label}</span>
        </div>
    );
    }