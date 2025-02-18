export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p className="mb-2">Have questions or need assistance? Reach out to us:</p>
                    <ul>
                        <li>Email: <a href="mailto:support@tcgmarketplace.com" className="text-blue-400">support@tcgmarketplace.com</a></li>
                        <li>Phone: <a href="tel:+1234567890" className="text-blue-400">+1 234 567 890</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Rules of Use</h3>
                    <ul className="list-disc list-inside">
                        <li>All users must comply with local laws and regulations.</li>
                        <li>Only authentic trading cards may be listed for sale.</li>
                        <li>Fraudulent activities will result in account suspension or termination.</li>
                        <li>Users are responsible for accurate card descriptions and images.</li>
                        <li>Transactions are conducted at the buyer's and seller's risk.</li>
                    </ul>
                    <p className="mt-4">For more details, see our <a href="/terms-and-conditions" className="text-blue-400 underline">Terms and Conditions</a>.</p>
                </div>
            </div>
            <div className="text-center mt-8 text-sm">
                &copy; 2025 TCG Marketplace. All rights reserved.
            </div>
        </footer>
    )
}