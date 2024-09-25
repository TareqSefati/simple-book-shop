export const booksLoader = async () => {
    try {
      const response = await fetch("/data/books-data.json");
      if (!response.ok) {
        console.error(`Error fetching books: Status ${response.status}`);
        throw new Error("Failed to fetch data");
      }
  
      const books = await response.json();
      console.log("Fetched books:", books); // Check what data is being fetched
  
      if (!Array.isArray(books)) {
        throw new Error("Books data is not an array");
      }
  
      return { books };
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  };