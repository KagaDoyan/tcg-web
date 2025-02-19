import Image from "next/image";
import { Button } from "@/components/ui/button";
import image from '@/static/404.png'
import { redirect } from "next/navigation";

export default function ForgetPasswordPage() {
    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
                <div className="max-w-md w-full">
                    <h1 className="text-2xl font-bold text-center mb-6">Forgot Password</h1>
                    {/* Form */}
                    <form className="space-y-4">
                        <div className="flex-1">
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <Button className="flex-shrink-0 self-center">
                            Send Code
                        </Button>
                        <div className="mt-4">
                            <label htmlFor="verification-code" className="block text-sm font-medium">
                                Verification Code
                            </label>
                            <input
                                type="text"
                                id="verification-code"
                                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter the code"
                                required
                            />
                        </div>
                        <Button className="w-full" type="submit">
                            Verify Code
                        </Button>
                        <div className="flex justify-between text-sm mt-2">
                            <a href="/sign-in" className="hover:text-blue-700">
                                Remember your password? Sign In
                            </a>
                            <a href="/sign-up" className="hover:text-blue-700">
                                Don&apos;t have an account? Sign up
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="hidden md:flex w-1/2 bg-gray-200 relative">
                <Image
                    src={image} // Replace with your image path
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
}