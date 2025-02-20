async function fetchJsonUrls(): Promise<string[]> {
    const repoApiUrl = "https://api.github.com/repos/CCondeluci/WeissSchwarz-ENG-DB/contents/DB";
    const response = await fetch(repoApiUrl);
    if (!response.ok) {
        throw new Error("Failed to fetch repository contents");
    }
    const files = await response.json();
    // Filter to include only JSON files and map to their raw download URLs
    const jsonUrls = files
        .filter((file: any) => file.name.endsWith(".json"))
        .map((file: any) => file.download_url);
    return jsonUrls;
}

// Main function to fetch card data with caching
export async function fetchCardData(): Promise<any> {
    // Dynamically fetch all JSON file URLs from the repository
    const jsonUrls = await fetchJsonUrls();

    const datalist = await Promise.all(
        jsonUrls.map(async (url) => {
            const res = await fetch(url);
            // Assuming the response is JSON; adjust if needed
            const data = await res.json();            
            return data;
        })
    );
    
    return datalist.flat();
}
