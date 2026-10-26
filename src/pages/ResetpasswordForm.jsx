import { useState } from 'react';
import { Lock, Eye, EyeOff, Check, Circle, Loader2 } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ValidationRow } from '@/components/Validation';
import Passwordsuccess from '@/components/Passwordsuccess';

export default function ResetPasswordForm({ showToast }) {
    const [data, setData] = useState({
        password: "",
        confirmpassword: "",
    });
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [onSuccess, setOnSuccess] = useState(false)
    
    // This state controls whether to flash the red error message under the input fields
    const [showErrors, setShowErrors] = useState(false);

    // 1. Live Validation Logic Evaluators
    const requirements = {
        minLength: data.password.length >= 8,
        hasUpper: /[A-Z]/.test(data.password),
        hasLower: /[a-z]/.test(data.password),
        hasNumber: /[0-9]/.test(data.password),
        hasSpecial: /[^A-Za-z0-9]/.test(data.password),
    };

    // Check if every single requirement is met cleanly
    const isPasswordValid = Object.values(requirements).every(Boolean);

    const handleChange = (e) => {
        const { name,value} = e.target

        setData((prev) => ({
            ...prev,
            [name]:value
        }))

        if(showErrors) setShowErrors(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowErrors(true); // Turn on error display when user attempts to submit

        if (!isPasswordValid) {
        showToast({ message: "Password does not meet the necessary requirements." });
        return;
        }

        if (data.password !== data.confirmpassword) {
        showToast({ message: "Passwords do not match." });
        return;
        }

        // Process your Axios call securely here...
        setIsSubmitting(true);
        setTimeout(() => setIsSubmitting(false), 2000); // Simulated delay
    };

    return (
        <div className="w-full h-screen overflow-hidden grid grid-cols-1 md:grid-cols-2 font-sans bg-white select-none">
        
        {/* LEFT SIDE: BRAND PANEL - FULL SIZE IMAGE (Hidden on Mobile) */}
        <div className="hidden md:flex items-center justify-center w-full h-full bg-[#E6F4F0] p-8 overflow-hidden">
        <img 
            src="/Frame 2.svg" 
            alt="Design Banner" 
            className="w-full  object-fill object-center"
        />
        </div>

        {/* RIGHT SIDE: INTERACTIVE FORM PANEL */}
        <div className="flex flex-col justify-center items-center px-6 py-12 sm:px-12 md:px-16 lg:px-24 bg-white relative h-full">
        
        {/* Bottom Right Graphic Element seen in design */}
        <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none overflow-hidden hidden md:block">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://w3.org" className="absolute bottom-0 right-0 w-full h-full text-[#25C27F]/10">
            <path d="M200 100C150 100 100 150 100 200H200V100Z" fill="currentColor"/>
            <path d="M200 40C120 40 40 120 40 200H200V40Z" fill="currentColor" opacity="0.5"/>
            </svg>
        </div>

        {/* Outer Form Container */}
        {onSuccess 
            ? (<Passwordsuccess />) 
            :(
            <div className="w-full max-w-md space-y-6 z-10">
            {/* Header Block */}
            <div className="text-center space-y-2">
                <div className="flex items-center gap-2 md:hidden mb-4">
                    <img src="/Group.svg" alt="Pairly" className="h-20 w-auto" />
                    <span className="text-xl font-bold text-[#0A5C4A]">Pairly</span>
                </div>
                <div className="p-3 bg-[#E6F4F0] rounded-2xl md:inline-flex hidden">
                    <img src="/Group.svg" alt="Pairly Main Accent" className="h-30 w-auto" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900">
                Create new Password
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 max-w-xs mx-auto">
                Your new password must be different from your previous password.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* NEW PASSWORD INPUT FIELD CONTAINER */}
                <div className="space-y-1.5">
                <Label htmlFor="new-password" className="text-xs font-semibold text-slate-800">
                    New password
                </Label>
                <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                    id="new-password"
                    type={showPass ? "text" : "password"}
                    placeholder="Enter new password"
                    name='password'
                    value={data.password}
                    onChange={handleChange}
                    className={`pl-10 pr-10 h-12 sm:h-11 border-gray-200 rounded-lg text-base md:text-sm text-slate-900 focus-visible:ring-1 transition-colors ${
                        showErrors && !isPasswordValid 
                        ? 'border-red-500 focus-visible:ring-read-500 focus-visible:border-red-500' 
                        : 'focus-visible:ring-[#0A5C4A] focus-visible:border-[#0A5C4A]'
                    }`}
                    required
                    />
                    <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-slate-600"
                    >
                    {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                </div>
                
                {/* Failsafe Conditional Red Error String */}
                {showErrors && !isPasswordValid && (
                    <p className="text-xs font-medium text-red-500 animate-in fade-in slide-in-from-top-1 duration-200">
                    Password must fulfill all security criteria listed below.
                    </p>
                )}
                </div>

                {/* DYNAMIC CHECKBOX RULES TICKING STACK */}
                <div className="space-y-1.5 py-1">
                <ValidationRow isMet={requirements.minLength} label="At least 8 characters" />
                <ValidationRow isMet={requirements.hasUpper} label="One upper case letter" />
                <ValidationRow isMet={requirements.hasLower} label="One lowercase letter" />
                <ValidationRow isMet={requirements.hasNumber} label="One number" />
                <ValidationRow isMet={requirements.hasSpecial} label="One special character" />
                </div>

                {/* CONFIRM PASSWORD INPUT FIELD CONTAINER */}
                <div className="space-y-1.5">
                <Label htmlFor="confirm-password" className="text-xs font-semibold text-slate-800">
                    Confirm new password
                </Label>
                <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                    id="confirm-password"
                    type={showConfirmPass ? "text" : "password"}
                    placeholder="Confirm your password"
                    name="confirmpassword"
                    value={data.confirmpassword}
                    onChange={handleChange}
                    className={`pl-10 pr-10 h-12 sm:h-11 border-gray-200 rounded-lg text-base md:text-sm text-slate-900 focus-visible:ring-1 transition-colors ${
                        showErrors && data.password !== data.confirmpassword
                        ? 'border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500' 
                        : 'focus-visible:ring-[#0A5C4A] focus-visible:border-[#0A5C4A]'
                    }`}
                    required
                    />
                    <button
                    type="button"
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-slate-600"
                    >
                    {showConfirmPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                </div>
                
                {showErrors && data.password !== data.confirmpassword && (
                    <p className="text-xs font-medium text-red-500 animate-in fade-in slide-in-from-top-1 duration-200">
                    Passwords do not match.
                    </p>
                )}
                </div>

                {/* ACTION SUBMIT CONTROL BUTTON */}
                <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center justify-center h-11 mt-2 bg-[#0A5C4A] hover:bg-[#064235] text-white text-sm font-semibold rounded-lg shadow-sm transition-all duration-200"
                >
                {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin text-white" /> : 'Reset password'}
                </Button>

                <div className="text-center pt-1">
                <a href="/login" className="text-xs font-semibold text-gray-500 hover:text-[#0A5C4A] transition-colors">
                    Back to login
                </a>
                </div>
            </form>
            </div>
        )}
        </div>
        
    </div>
    );
    }

    
        