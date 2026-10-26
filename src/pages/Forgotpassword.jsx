
import { useState } from 'react';
import { Toast } from '@/components/Toast';
import { useToast } from '@/Hooks/useToast';
import { Eye, EyeOff, Mail, Lock, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from 'react-router-dom';
import SuccessfulEmail from '@/components/SuccessfulEmail';

function Forgotpassword() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccessful, setIsSuccessful] = useState(false)
    const { showToast,message,isOpen,hideToast} = useToast();
    const [email, setEmail] = useState('');

    const handleEmail = async(e) => {
        e.preventDefault();


        if(email === "" ){
            showToast({
                message: " Inputs Fields Must Not Be Empty",
                duration: 4000
            })
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(data.email)){
            showToast({
                message: " Please Enter a Valid Email Address",
                duration: 4000
            })
            return;
        }


    }
    return (
  /* Added h-screen and overflow-hidden to completely eliminate desktop scrolling */
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
        {isSuccessful ? (<SuccessfulEmail />) : (
            <div className="w-full max-w-md space-y-8 z-10">
                
                {/* Header Mobile Brand & Text */}
                <div className="flex flex-col items-center text-center space-y-3">
                    <div className="flex items-center gap-2 md:hidden mb-4">
                        <img src="/Group.svg" alt="Pairly" className="h-20 w-auto" />
                        <span className="text-xl font-bold text-[#0A5C4A]">Pairly</span>
                    </div>
                    
                    {/* Standard Form Header Stack */}
                    <div className="p-3 bg-[#E6F4F0] rounded-2xl md:inline-flex hidden">
                        <img src="/Group.svg" alt="Pairly Main Accent" className="h-30 w-auto" />
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 pt-2">
                        Forgot your Password?
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500">
                        Enter the Email associated with your account and we will send you an email with instructions to reset your password
                    </p>
                </div>

                {/* Form Action Field Stack */}
                <form onSubmit={handleEmail} className="space-y-5">
                
                {/* Email Input Field Layer */}
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-semibold text-slate-800">
                    Email address
                    </Label>
                    <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        id="email"
                        type="email"
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="pl-10 h-11 border-gray-200 rounded-lg text-sm text-slate-900 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#0A5C4A] focus-visible:border-[#0A5C4A] transition-colors"
                        //required
                    />
                    </div>
                </div>


                {/* Primary Action Sign In Control */}
                <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex items-center h-11 mt-2 bg-[#0B5D4B] hover:bg-[#16A085] text-white text-sm font-semibold rounded-lg shadow-sm transition-all duration-200"
                >
                    {isSubmitting 
                        ? (<Loader2 className="h-5 w-5 animate-spin text-white" />) 
                        : ('Send Email')
                    } 
                </Button>
                    <div className="flex justify-end pt-1">
                        <Link 
                        to="/login" 
                        className="text-md font-semibold text-[#080909]  transition-colors"
                        >
                        Remember your password?<span className='text-md font-semibold text-[#25C27F] hover:text-[#0A5C4A] transition-colors'>LOGIN</span> 
                        </Link>
                    </div>
                </form>

            </div>
        )}
        </div>
        <Toast isOpen={isOpen} message={message} onClose={hideToast}/>
    </div>
    );
}

export default Forgotpassword