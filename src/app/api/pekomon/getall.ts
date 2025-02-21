export async function fetchCardData(): Promise<any> {
    // Dynamically fetch all JSON file URLs from the repository
    const response = await fetch("https://api.tcgdex.net/v2/en/cards", {
        method: "GET",
    });
    const result = await response.json();

    return result;
}

export async function fetchCardInfo(id:string) : Promise<any> {
    // Dynamically fetch all JSON file URLs from the repository
    const response = await fetch(`https://api.tcgdex.net/v2/en/cards/${id}`, {
        method: "GET",
    });
    const result = await response.json();
    return result;
}