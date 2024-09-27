export const ROUTES = {
    HOME: "/",
    BOOKS: "/books",
    AUTHORS: "/authors",
    ABOUT: "/about",
    BLOG: "/blog",
    FAQ: "/faq",
    SINGLE_BOOK: {
        STATIC: "/book/:bookId",
        DYNAMIC: (bookId) => `/book/${bookId}`,
    },
    SINGLE_AUTHOR: {
        STATIC: "/author/:id",
        DYNAMIC: (id) => `/author/${id}`,
    },
  };
  