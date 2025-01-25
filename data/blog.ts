export interface BlogPost {
  id: number;
  category: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "FrontEnd",
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    date: "2024-03-15",
    excerpt: "Learn the basics of Next.js and start building your first app.",
    content: `
      Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications.

      Key Features of Next.js:
      - Server-Side Rendering (SSR)
      - Static Site Generation (SSG)
      - File-based Routing
      - API Routes

      In this tutorial, we'll walk through the process of setting up a Next.js project and creating your first pages.
    `,
  },
  {
    id: 2,
    category: "FrontEnd",
    title: "CSS Tips and Tricks",
    slug: "css-tips-and-tricks",
    date: "2024-03-20",
    excerpt: "Improve your CSS skills with these handy tips and tricks.",
    content: `
      CSS is gaining powers with recent web evolution. And it is very clever with tricks that were long existing or that
      have emerged. Perhaps tricks shared here will school you with CSS tricks from the depths you were yet to explore.

      1. Draw a triangle using border
      2. Interchange background of an element
      3. Center an element
      4. Pill 💊 shape button
      5. Easily add beautiful loading indicators to your website
      6. Easy dark or light mode
      7. Truncate overflowing text with an ellipsis (...)
      8. Truncate long text to a number of lines
      9. Stop overworking yourself writing top, right, bottom, left
      10. Serve optimized images
    `,
  },
  {
    id: 3,
    category: "BackEnd",
    title: "Understanding Node.js Event Loop",
    slug: "understanding-nodejs-event-loop",
    date: "2024-03-25",
    excerpt: "Dive into the workings of the Node.js event loop and its role in asynchronous programming.",
    content: `
      The event loop is a fundamental part of Node.js that enables non-blocking I/O operations. It allows Node.js to perform 
      asynchronous tasks and handle multiple operations concurrently on a single thread.

      Key Concepts:
      - Callbacks
      - Promises and Async/Await
      - Phases of the Event Loop

      By understanding the event loop, you can write more efficient and optimized back-end applications using Node.js.
    `,
  },
  {
    id: 4,
    category: "BackEnd",
    title: "Building RESTful APIs with Express.js",
    slug: "building-restful-apis-with-expressjs",
    date: "2024-03-30",
    excerpt: "Learn how to create and structure RESTful APIs using the Express.js framework.",
    content: `
      Express.js is a fast and minimal web framework for Node.js, making it an excellent choice for building RESTful APIs.

      Steps to Build a RESTful API:
      1. Set up a Node.js project
      2. Install Express.js
      3. Define routes for CRUD operations
      4. Use middleware for request parsing and error handling
      5. Test API endpoints with tools like Postman

      In this tutorial, we'll cover each step and build a sample RESTful API for managing a collection of resources.
    `,
  },
];
