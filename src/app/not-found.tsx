export default function NotFound() {

    return (
        <div className="h-screen flex flex-col items-center justify-center text-center">
            <img 
                src="https://ms.yugipedia.com//e/e9/WitchcrafterConfusionConfession-MADU-EN-VG-artwork.png" 
                alt="Not found" 
                className="mb-4 w-60 h-60 object-contain rounded-full"
            />
            <h2 className="text-2xl mb-2">Page not found</h2>
            <a 
                href="/"
                className="hover:underline cursor-default"
            >
                Go back to Home
            </a>
        </div>
    );
}
