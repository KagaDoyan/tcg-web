import Image from "next/image";
import { Button } from "@/components/ui/button";
import image from '@/static/sign-up.png'

export default function SignInPage() {
    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="hidden md:flex w-1/2 bg-gray-200 relative">
                <Image
                    src={image} // Replace with your image path
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
                <div className="max-w-md w-full">
                    <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

                    {/* Form */}
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div>
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
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirm-password"
                                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>
                        <Button className="w-full">
                            Sign Up
                        </Button>
                        <div className="flex justify-between text-sm mt-2">
                            <a href="/sign-in" className=" hover:text-blue-700">
                                Already have an account? Sign in
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}