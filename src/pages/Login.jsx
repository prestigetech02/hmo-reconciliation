import  { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate,useLocation, replace, Link } from 'react-router-dom';
import { useToast } from '@/Hooks/useToast';
import { Toast } from '@/components/Toast';
import { useLogine } from '@/Hooks/Usetest';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [data,setData] = useState({
        email: '',
        password: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const {isOpen,message,showToast,hideToast} = useToast()
    const navigate = useNavigate();
    const location = useLocation();
    const login = useLogine();


    const handleChange = (e) => {
        const {name,value} = e.target
        setData((prev) => ({
            ...prev,
            [name]:value
        }))
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        

        if(data.email === "" || data.password === ""){
            showToast({
                message: " Inputs Fields Must Not Be Empty",
                duration: 4000
            })
            return;

        }

        if(data.password < 8){
            showToast({
                message: " Enter The Correct Password",
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

        login.mutate(
            {email: data.email,password: data.password},
            {
                onSuccess: () => {
                    showToast({
                        message: "Login successful",
                        duration: 4000
                    })
                    setIsSubmitting(true)
                    navigate('dashboard')
                },
                onError: (err) => {
                    const mes = err?.response?.data?.message || "login failed"
                    showToast({
                        message: mes,
                        duration: 4000
                    })
                }
            }
        )
        //setIsSubmitting(true)



    }




    //avigate(from,{replace: true})

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
                Welcome back
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
                Sign in to your Pairly account to continue.
            </p>
            </div>

            {/* Form Action Field Stack */}
            <form onSubmit={handlesubmit} className="space-y-5">
            
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
                    value={data.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="pl-10 h-11 border-gray-200 rounded-lg text-sm text-slate-900 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#0A5C4A] focus-visible:border-[#0A5C4A] transition-colors"
                    //required
                />
                </div>
            </div>

            {/* Password Input Field Layer */}
            <div className="space-y-2">
                <Label htmlFor="password" className="text-xs font-semibold text-slate-800">
                Password
                </Label>
                <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name='password'
                    value={data.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 h-11 border-gray-200 rounded-lg text-sm text-slate-900 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#0A5C4A] focus-visible:border-[#0A5C4A] transition-colors"
                    //required
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-slate-600 transition-colors"
                >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                </div>
            </div>

            {/* Forgot Password Link Trigger */}
            <div className="flex justify-end pt-1">
                <Link 
                to="/forgot-password" 
                className="text-xs font-semibold text-[#25C27F] hover:text-[#0A5C4A] transition-colors"
                >
                Forgot password?
                </Link>
            </div>

            {/* Primary Action Sign In Control */}
            <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center h-11 mt-2 bg-[#0B5D4B] hover:bg-[#16A085] text-white text-sm font-semibold rounded-lg shadow-sm transition-all duration-200"
            >
                {isSubmitting 
                    ? (<Loader2 className="h-5 w-5 animate-spin text-white" />) 
                    : ('Sign in')
                } 
            </Button>
            </form>

        </div>
        </div>
        <Toast isOpen={isOpen} message={message} onClose={hideToast}/>
    </div>
    );
}

export default Login
