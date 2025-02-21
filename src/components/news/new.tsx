interface PageProps {
    id: string
}

export default async function NewPage({ id }: PageProps) {
    return (
        <div className="mx-auto p-8 bg-gray-100">

            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Why You Need to Play Witchcrafter in Yu-Gi-Oh!</h1>
                <p className="text-lg text-gray-600 mt-2">Discover the magic and power behind the Witchcrafter archetype in Yu-Gi-Oh!</p>
            </div>

            <div className="mb-6 text-center">
                <img src="https://i.ytimg.com/vi/aKlXAsCQBEo/maxresdefault.jpg" alt="Witchcrafter Cards" className="w-full h-64 object-cover rounded-lg shadow-md" />
            </div>


            <div className="p-6">

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Witchcrafter?</h2>
                <p className="text-lg text-gray-700 mb-4">
                    The *Witchcrafter* archetype stands out for its unique blend of spell-based control and powerful monsters. If you’re a fan of Spellcaster decks or enjoy playing a strategic, spell-focused game, this archetype is a fantastic choice.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    One of the key strengths of *Witchcrafter* is its ability to manipulate spells in various ways. The monsters allow you to discard spells to trigger powerful effects, while many of the spell cards in the deck help you search or return important cards to your hand or graveyard.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    The deck also offers powerful boss monsters like *Witchcrafter Madame Verre*, which can shift the momentum of the game, giving you offense and defense at the same time.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    Finally, the deck has strategic depth. It may seem simple at first, but it requires smart resource management and timely spell activations. This makes it a rewarding deck for players who enjoy deeper strategy.
                </p>


                <h3 className="text-xl font-semibold text-gray-800 mb-4">How to Combo with Witchcrafter</h3>
                <p className="text-lg text-gray-700 mb-4">
                    A key aspect of playing *Witchcrafter* is knowing how to chain your spells and monsters for maximum advantage. Here's a simple combo:
                </p>
                <div className="p-4 rounded-lg mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">1. Setup Phase:</h4>
                    <p className="text-lg text-gray-600 mb-2">
                        Start by summoning a monster any Witchcrafter you have "schmietta" is a good option if you have her on hand. Use her effect to discard a spell card and set up your board for the next phase.
                    </p>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">2. Mid-Combo Phase:</h4>
                    <p className="text-lg text-gray-600">
                        Use *Witchcrafter Creation* to add a powerful monster like *Witchcrafter Madame Verre* to your hand. You can then perform a synchro summon or link summon to bring out your boss monster and disrupt your opponent.
                    </p>
                </div>


                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Cards to Play in Witchcrafter</h3>
                <div className="space-y-6">

                    <div className="flex items-cente p-4 rounded-lg shadow-md">
                        <div className="w-24 h-32 mr-4">
                            <img src="https://m.media-amazon.com/images/I/51vQyPks23L._AC_UF1000,1000_QL80_.jpg" alt="Witchcrafter Madame Verre" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-800">Witchcrafter Madame Verre</h4>
                            <p className="text-lg text-gray-600">
                                This powerful boss monster allows you to banish a spell card from your graveyard to negate an opponent's spell or trap, giving you control over their plays.
                            </p>
                        </div>
                    </div>

                    <div className="flex p-4 rounded-lg shadow-md">
                        <div className="w-24 h-32 mr-4">
                            <img src="https://images.ygoprodeck.com/images/cards/21744288.jpg" alt="Witchcrafter schmietta" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-800">Witchcrafter schmietta</h4>
                            <p className="text-lg text-gray-600">
                                Hanewata offers protection for your *Witchcrafter* monsters while also providing extra spell destruction to disrupt your opponent.
                            </p>
                        </div>
                    </div>

                    <div className="flex p-4 rounded-lg shadow-md">
                        <div className="w-24 h-32 mr-4">
                            <img src="https://static.wikia.nocookie.net/yugioh/images/e/e6/WitchcrafterGolemAruru-SDCH-EN-C-1E.png" alt="Witchcrafter Hanewata" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-800">Witchcrafter Golem Aruru</h4>
                            <p className="text-lg text-gray-600">
                                offers protection for your *Witchcrafter* monsters while also providing extra spell destruction to disrupt your opponent.
                            </p>
                        </div>
                    </div>

                    <div className="flex p-4 rounded-lg shadow-md">
                        <div className="w-24 h-32 mr-4">
                            <img src="https://ms.yugipedia.com//c/c8/WitchcrafterCollaboration-MP20-EN-R-1E.png" alt="Witchcrafter Creation" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-800">Witchcrafter Collaboration</h4>
                            <p className="text-lg text-gray-600">
                                Use *Witchcrafter Collaboration* to make a *Witchcrafter* monster you control perform an extra attack.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Conclusion</h3>
                <p className="text-lg text-gray-700">
                    *Witchcrafter* is an archetype full of depth and exciting combos. Whether you're new to the game or a seasoned player, this deck offers a unique and strategic playstyle with its spell recycling and powerful monsters. If you're looking for a fun and competitive deck to master, *Witchcrafter* might just be the perfect choice!
                </p>
            </div>
        </div>

    );
}