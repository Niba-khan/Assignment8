import BlogCard from "@/components/blogcard"
import React from "react"


export default function Blog(){
const posts=[
    {
        id:"1",
        title:"Maya Bay In Thailand: The Beach Is Open! (Phi Phi Leh)",
        description:"The beach at Maya Bay is one of the most famous and photogenic places in Thailand, and it,s the main thing responsible for bringing travelers to the…",
        date:"2-23-2024",
        imageUrl:"/images/thailandbeach.jpg"

    },
    {
        id:"2",
        title:"Climbing Mount Karangetang Volcano In Siau, Sulawesi",
        description:"Mount Karangetang is an awesome Jurassic Park-looking volcano that dominates the remote island of Siau in North Sulawesi, Indonesia. You can,t go anywhere on tiny Siau island…",
        date:"2-23-2024",
        imageUrl:"/images/image1.jpg"

    },
    {
        id:"3",
        title:"Samet Nangshe Viewpoint: Best Sunrise Spot In Thailand",
        description:"The Samet Nangshe viewpoint in Thailand is one of the most beautiful places I,ve ever seen in my travels. It,s also fairly easy to get there by…",
        date:"2-23-2024",
        imageUrl:"/images/sunrise.jpg"

    },
    {
        id:"4",
        title:"10 Best Hikes In Aruba: Family Friendly Trails",
        description:"Even though Aruba is mainly known for its beaches and other fun activities, there are also some easy and family friendly hikes on the island where you…",
        date:"2-23-2024",
        imageUrl:"/images/Aruba.jpg"

    },
    {
        id:"5",
        title:"Labengki Island Guide: Beach Hut Paradise In Sulawesi Indonesia",
        description:"Labengki island (and its exotic neighbor Sombori) might be one of Indonesia,s best kept secrets. This untouched tropical paradise in Sulawesi is impossibly beautiful. It,s one of….",
        date:"2-23-2024",
        imageUrl:"/images/island.jpg"

    },
    {
        id:"6",
        title:"Angkor Wat Travel Guide For Cambodia",
        description:"No travelers bucket list would be complete without a visit to the world famous Angkor Wat Cambodia temple. It,s a profound and heavy experience. Exploring Angkor feels…",
        date:"2-23-2024",
        imageUrl:"/images/watGuid.jpg"

    },

]

return(
    <div className="my-4">
        <h1 className="text-8xl font-bold text-center text-slate-50 ">
         Travel Blog
        </h1>

        <p className="text-white text-center text-2xl">Recent Travel Blog Posts</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {posts.map((post, index) => (
                <div className="fade-in " key={post.id}>
                   <div className="blog-card bg-white">
                    <BlogCard post={post} isDarkBackground={index % 2 === 0} />
                    
                    </div>  
                </div>
            ))}
        </div>
    </div>

    
)
}