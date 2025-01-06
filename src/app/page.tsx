import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image"

export default async function Page() {
  const blogData = await client.fetch(`
    *[_type == 'blog']{
      title, description,
      "slug": slug.current,
      "imageUrl": image.asset->url
    }
  `);

  return (
    <main className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {blogData.map((post: any) => (
          <article
            key={post.slug}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform"
          >
            
            <Image
              src={urlForImage(post.image)}
              alt={post.title}
              width={720}
              height={400}
              className="w-full h-48 object-cover"
            />
            
           
            <div className="p-4">
              <h2 className="text-lg font-semibold text-[#D89F55] mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-400 mb-4">
                {post.description.slice(0, 170)}...
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="block text-center bg-[#D89F55] text-gray-900 font-medium py-2 px-4 rounded hover:bg-[#FEB47B]"
              >
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
