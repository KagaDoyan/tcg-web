import Image from "next/image";
import { Button } from "@/components/ui/button";
import image from '@/static/404.png'
import { redirect } from 'next/navigation'

interface PageProps {
    params: { auth: string };
}
export default function ResetPasswordPage({ params }: PageProps) {

    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
                <div className="max-w-md w-full">
                    <h1 className="text-2xl font-bold text-center mb-6">Forgot Password</h1>

                    {/* Form */}
                    <form className="space-y-4">
                        <div className="mt-4">
                            <label htmlFor="verification-code" className="block text-sm font-medium">
                                New Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter the code"
                                required
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="verification-code" className="block text-sm font-medium">
                                Confirm
                            </label>
                            <input
                                type="password"
                                id="confirm-password"
                                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter the code"
                                required
                            />
                        </div>
                        <Button className="w-full">
                            Save
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