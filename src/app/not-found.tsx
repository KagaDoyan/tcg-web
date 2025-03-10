import image from '@/static/404.png'
import Image from 'next/image';
export default function NotFound() {

    return (
        <div className="h-screen flex flex-col items-center justify-center text-center">
            <Image 
                src={image} 
                alt="Not found" 
                className="mb-4 w-60 h-60 object-contain rounded-full"
            />
            <h2 className="text-2xl mb-2">Page not found</h2>
            <a 
                href="/"
                className="hover:underline cursor-pointer"
            >
                Go back to Home
            </a>
        </div>
    );
}
