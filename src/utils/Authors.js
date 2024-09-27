export const getAllAuthors = async ()=> {
    let authors = [];
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            authors = data;
            // console.log(books);
        })
        .catch((error) => console.log("Error", error));
    return authors;
}

export const getAuthorById = async (id)=> {
    let author = {};
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
            author = data;
            // console.log(books);
        })
        .catch((error) => console.log("Error", error));
    return author;
}