import React from 'react'
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';


function Passwordsuccess() {
    return (
        <article className="w-full max-w-md space-y-8 z-10">
            
            {/* Header Mobile Brand & Text */}
            <div className="flex flex-col items-center text-center space-y-3">
            <div className="flex items-center gap-2 md:hidden mb-4">
                <img src="/Success checkmark.svg" alt="Pairly" className="h-20 w-auto" />
                
            </div>
            
            {/* Standard Form Header Stack */}
            <div className="p-3 bg-[#E6F4F0] rounded-2xl md:inline-flex hidden">
                <img src="/Success checkmark.svg" alt="Pairly Main Accent" className="h-30 w-auto" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 pt-2">
                Password Craeted Successfully!!
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
                You can now Sign in to your Pairly account with your new account
            </p>
            </div>

            <Button 
                type="button" 
                className="w-full flex items-center h-11 mt-2 bg-[#0B5D4B] hover:bg-[#16A085] text-white text-sm font-semibold rounded-lg shadow-sm transition-all duration-200"
            >
                <Link to={'/login'}>
                    Back to Login
                </Link>
            </Button>

        </article>
    )
}

export default Passwordsuccess