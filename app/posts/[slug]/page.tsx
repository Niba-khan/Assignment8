import Image from "next/image";
import { client } from "../../../sanity/lib/client"
import { urlForImage } from "../../../sanity/lib/image"
import { PortableText } from "@portabletext/react";

export const revalidate = 60; // Revalidate every 60 seconds

// Generate static paths for blog posts
export async function generateStaticParams() {
  const query = `*[_type == 'post']{ "slug": slug.current }`;
  const slugs = await client.fetch(query);
  return slugs.map((item: { slug: string }) => ({ slug: item.slug }));
}

// Blog post page component
export default async function BlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Fetch the blog post data
  const query = `*[_type == 'post' && slug.current == $slug]{
    title, summary, image, content,
    author->{bio, image, name}
  }[0]`;
  const post = await client.fetch(query, { slug });

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <article className="mt-12 mb-24 px-4 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {post.title}
      </h1>

      {/* Featured Image */}
      <Image
        src={urlForImage(post.image)}
        width={800}
        height={500}
        alt={post.title}
        className="rounded"
      />

      {/* Summary */}
      <section>
        <h2 className="text-2xl font-bold uppercase text-accentDarkPrimary">Summary</h2>
        <p className="text-lg leading-relaxed text-dark/80 dark:text-light/80">
          {post.summary}
        </p>
      </section>

      {/* Author Section */}
      <section className="flex gap-4 items-center">
        <Image
          src={urlForImage(post.author.image)}
          width={50}
          height={50}
          alt={post.author.name}
          className="rounded-full"
        />
        <div>
          <h3 className="text-xl font-bold text-dark dark:text-light">{post.author.name}</h3>
          <p className="text-sm italic text-dark/80 dark:text-light/80">{post.author.bio}</p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="prose dark:prose-invert">
        <PortableText value={post.content} />
      </section>
    </article>
  );
}
