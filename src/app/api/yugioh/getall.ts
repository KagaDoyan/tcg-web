import { openDB } from "idb";

const dbPromise = openDB("cardDatabase", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("cards")) {
      db.createObjectStore("cards", { keyPath: "id" });
    }
  },
});

export async function fetchCardData() {
  const cacheDuration = 24 * 60 * 60 * 1000; // 24 hours
  const db = await dbPromise;

  // Check the timestamp in IndexedDB
  const metadata = await db.get("cards", "metadata");
  const now = Date.now();

  if (metadata && now - metadata.timestamp < cacheDuration) {
    console.log("Using cached data from IndexedDB");
    return await db.getAll("cards");
  }

  console.log("Fetching fresh data from API");
  const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
  const result = await response.json();

  // Store fresh data in IndexedDB
  await db.clear("cards");
  for (const card of result.data) {
    await db.put("cards", card);
  }

  // Update the timestamp
  await db.put("cards", { id: "metadata", timestamp: now });

  return result.data;
}
