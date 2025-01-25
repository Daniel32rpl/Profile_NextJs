import Link from 'next/link';
import { blogPosts } from '../../data/blog';

export default function Blog({ searchParams }: { searchParams: { category?: string } }) {
  const category = searchParams.category;

  // Filter posts berdasarkan kategori
  const filteredBlog = category
    ? blogPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
    : blogPosts;

  return (
    <main className="container mx-auto text-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 h-screen">
        <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>

        {/* Filter Links */}
        <div className="mt-4 mb-6 flex justify-center space-x-4 text-white">
          <Link href="/blog" className={`text-white font-bold ${!category ? 'font-bold' : ''}`}>
            All
          </Link>
          <Link
            href="/blog?category=FrontEnd"
            className={`text-white font-bold ${category === 'FrontEnd' ? 'font-bold' : ''}`}
          >
            Front End
          </Link>
          <Link
            href="/blog?category=BackEnd"
            className={`text-white font-bold ${category === 'BackEnd' ? 'font-bold' : ''}`}
          >
            Back End
          </Link>
        </div>

        {/* Blog List */}
        <div className="grid gap-6">
          {filteredBlog.map((post) => (
            <div key={post.id} className="border border-gray-200 p-4 mb-2 rounded-lg">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold mb-2 text-white hover:underline">{post.title}</h2>
              </Link>
              <p className="text-white text-sm font-semibold mb-2">{post.date}</p>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
