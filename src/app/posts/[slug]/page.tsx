'use client'
import React from "react";
import Image from "next/image";

const posts = [
    {
        id: "1",
        title: "!Maya Bay In Thailand: The Beach Is Open! (Phi Phi Leh)",
        image: "/images/thailandbeach.jpg",
        title1: "Maya Bay In Thailand",
        description: `The beach at Maya Bay is one of the most famous and photogenic places in Thailand, and it,s the main thing responsible for bringing travelers to the Phi Phi islands. In fact, it,s now one of the most famous white sand beaches in the world.Maya Bay is open again for 2025! It was temporarily closed for conservation from August 1 to September 30, 2024, but it reopened for tourists on October 1, so now is a great time to plan a visit!  The entire beach is surrounded by tall limestone cliffs, with clear turquoise water, baby sharks swimming around, and sand that,s white as snow. Everything about it looks perfect. Yep, this is paradise!
Of course, the beauty of Maya Bay has attracted the tourist hordes, just like any of the amazing places in the world, but if you plan your visit right you can still enjoy the beach without too many people.This travel guide will explain how to visit Maya Bay in Thailand, what to see there, and how to know when it,s open or closed!`,
        image1: "/images/thailand.jpg",
        title2: "Visiting Maya Bay: What To Expect",
        moreDescription: "Maya Bay is accessed by landing a boat at Loh Samay Bay (on the back side of Phi Phi Leh island), and then doing a short and easy shaded walk through the jungle to get to the beach. The walk is flat and takes about 5 minutes.In the past, boats could go inside of Maya Bay and land directly on the beach, but they don,t do that anymore. The Thai government has spent the last several years working on conservation, so the only way to get to the beach now is to walk to it from the back side of the island.I think this change was a good idea because it keeps the bay clear of boats, although I do miss those perfect postcard photos of Thai longtail boats sitting on the beach at Maya Bay.The main beach is incredibly photogenic. It,s about 250 meters long, and the end of the beach has a shallow cave that,s nice for photos. If you want to escape the crowds, there are usually less people at the far end of the beach."
    },
    {
    id: "2",
    title: "Climbing Mount Karangetang Volcano In Siau, Sulawesi",
    image: "/images/image1.jpg",
    title1: "Mountain Karangetang",
    description: "Mount Karangetang is an awesome Jurassic Park-looking volcano that dominates the remote island of Siau in North Sulawesi, Indonesia.You can,t go anywhere on tiny Siau island without seeing this majestic volcano and its twin smoking craters. If you,re lucky, you may even get to see it spouting molten lava and rock bombs at night, which it does pretty often.In this guide, I,ll share my experience hiking the Karangetang volcano in 2021, and I,ll give some tips in case you plan to climb it yourself.",
    image1: "/images/image1..jpg",
    title2: "Is It Safe?",
    moreDescription: "First of all, let,s talk about safety. Karangetang is a highly active volcano — probably one of the most active volcanoes in the world.The local guides are knowledgeable and any seismic activity is monitored by the Indonesian government, but there,s still plenty of risk involved in climbing this mountain. It may erupt at any time.You can climb to the top of Karangetang if you,re feeling extra crazy, but to be safe most people only hike partway up this mountain and peep at the smoking craters from a distance (and even that is a bit risky).Climbing any active volcano carries some danger obviously, but this one is unusually active, so proceed at your own risk."
},
{
    id: "3",
    title: "Samet Nangshe Viewpoint: Best Sunrise Spot In Thailand",
    image: "/images/sunrise.jpg",
    title1: "Best Sunrise Spot In Thailand",
    description: "The Samet Nangshe viewpoint in Thailand is one of the most beautiful places I,ve ever seen in my travels. It,s also fairly easy to get there by driving from the tourist island of Phuket.This viewpoint overlooks the spectacular Phang Nga Bay, a Thai national park with dozens of small islands. The sunrise at Samet Nangshe is especially nice because the sun rises directly over the bay!You can visit Samet Nangshe viewpoint on a day trip from Phuket and go back in the same day, or you can stay a night or two at the Samet Nangshe Boutique hotel, which has a pool and rooms that overlook the same wonderful scenery.This travel guide will explain how to get to Samet Nangshe viewpoint with or without a tour, where to stay, and everything else you need to know before you go!",
    image1: "/images/sunrise1.jpg",
    title2: "Samet Nangshe Viewpoint: What To Expect",
    moreDescription: "The incredible sunrise at Samet Nangshe viewpoint Samet Nangshe Viewpoint: What To ExpectThere are two different places in Phang Nga province where you can enjoy the stunning view of the bay: you can go to Samet Nangshe viewpoint, or you can see a nearly identical view from the Samet Nangshe Boutique hotel, which has multiple vantage points at different levels on the hill.Most of the pictures in this blog post were taken at the boutique hotel, but the view is essentially the same in either place. It,s a marvelous view, with lots of small islands in the bay, and one big karst island that towers above the rest. It looks like a fantasy landscape.Want To Save This Article?Enter your email below and we'll send it straight to your inbox so you can come back to it later.I consent to receiving emails and personalized ads.Drones are allowed at the viewpoint, and you can take some pretty amazing photos of the bay from above. They also allow drones at the hotel, but they asked us to do it at the parking lot so we wouldn,t disturb anyone at the hotel, which is fair and to be expected."
},
{
    id: "4",
    title: "10 Best Hikes In Aruba: Family Friendly Trails",
    image: "/images/Aruba.jpg",
    title1: "Hikes In Aruba",
    description: " Even though Aruba is mainly known for its beaches and other fun activities, there are also some easy and family friendly hikes on the island where you can see natural pools, rock arches, and desert landscapes at the Arikok National Park.Don,t expect anything truly mind blowing like the scenery you might see in the U.S. national parks, but hiking in Aruba can still be a good way to get away from the crowds and enjoy the coastline while burning some calories.This is our guide to some of the best hikes in Aruba! If you have any other favorites, let me know in the comments at the end of the blog post.",
    image1: "/images/Aruba1.jpg",
    title2: " Seroe Colorado Natural Bridge",
    moreDescription: "Aruba is home to several rock bridges formed by sea erosion over the years, and the most popular one is the natural bridge at Andicuri Bay, which is visited by many day tours now.However, the best rock bridge in Aruba is actually a bit harder to find, and it,s not really visited by tours yet. I,m talking about the Seroe Colorado natural bridge, which is located on the southern corner of Aruba island. You can find it on the map here.The Seroe Colorado is an amazing bridge, and it almost looks like a picture frame for the ocean! You can visit it by driving to San Nicolas with your own vehicle and then doing a short (but tricky) 10 minute hike down the rocks.The route to this natural bridge is unmarked and the path is a bit treacherous, with sharp rocks and a steep downhill walk. I,d only recommend it for surefooted people with good footwear, but the effort is well worth it!"
},
{
    id: "5",
    title: "Labengki Island Guide: Beach Hut Paradise In Sulawesi Indonesia",
    image: "/images/island.jpg",
    title1: "Labengki Island Guide",
    description: "Labengki island (and its exotic neighbor Sombori) might be one of Indonesia,s best kept secrets. This untouched tropical paradise in Sulawesi is impossibly beautiful. It,s one of the most enchanting places we,ve visited in our travels.You can see all kinds of things here, including heart shaped lakes, green lagoons, a reddish orange beach, a lighthouse, and lots of white sand beaches. There are also some great things to see in nearby Sombori.English documentation for these places is still virtually non-existent on the web, and we half expected to see dinosaurs as we explored these islands.This travel guide will explain how to get to Labengki, where to stay, what to do there, and everything else you need to know about how to experience this gem of Indonesia yourself!.",
    image1: "/images/island1.jpg",
    title2: " Where Is Labengki Island?",
    moreDescription: "Labengki is located in Southeast Sulawesi, Indonesia.There,s actually two islands: Labengki Kecil (small) and Labengki Besar (big). Most of the population is in a fishing village on Kecil.Labengki,s main tourist sights are on Besar, but it,s a mountainous island with steep cliffs so it,s virtually impossible to settle (check it out in the picture below)!Tours to Labengki also include some time spent in Sombori, a nearby group of islands and lagoons with some of the same spectacular scenery.Sombori actually sits on the edge of Central Sulawesi province, but it can be visited pretty easily on a day trip from Labengki."
},
{
    id: "6",
    title: "Angkor Wat Travel Guide For Cambodia",
    image: "/images/watGuide.jpg",
    title1: "Travel Guide For Cambodia",
    description: "No traveler,s bucket list would be complete without a visit to the world famous Angkor Wat Cambodia temple. It,s a profound and heavy experience.Exploring Angkor feels a bit like stepping into The Jungle Book. These massive Hindu temple ruins are almost 1,000 years old, and you can tell it.Everywhere you look, the once fantastic buildings have been shaped by time and nature — with broken walls, caved in ceilings, and huge tree roots and jungle foliage slowly consuming the temples.his travel guide for Angkor Wat temple will explain how to get there, where to stay, and how to see the best temples on the Angkor Wat circuits, along with an Angkor Wat map and everything else you need to know before you go!",
    image1: "/images/watGuide1.jpg",
    title2: " Where Is Labengki Island?",
    moreDescription: "The Angkor Wat was a group of temples built by the Khmer empire in the 12th century.Angkor Wat means temple city, and the name fits, because its one of the biggest religious monuments in the world, covering more than 160 hectares (400 acres).Building the temple (in what is now the country of Cambodia) took more than 30 years, and involved 300,000 workers and more than 6,000 elephants!Angkor originally started as a Hindu temple, but was later transformed into a Buddhist temple near the end of the 12th century.It was neglected and then eventually rediscovered in the 1800s by a French explorer, who described it like this:One of these temples, a rival to that of Solomon, and erected by some ancient Michelangelo, might take an honorable place beside our most beautiful buildings.It is grander than anything left to us by Greece or Rome, and presents a sad contrast to the state of barbarism in which the nation is now plunged."
},


    
];

export default function Pages({ params }: { params: { id: string } }) {
    const { id } = params;
    const post = posts.find((p) => p.id === id);

    if (!post) {
        return (
            <h2 className="text-2xl font-bold text-center mt-10">Post not found</h2>
        );
    }

    const renderParagraphs = (text: string) => {
        return text.split("/n").map((para, index) => (
            <p key={index} className="mt-4 text-justify">
                {para.trim()}
            </p>
        ));
    };

    return (

        <div className="max-w-3xl mx-auto p-5 bg-white/75">
              <h1 className="md:text-4xl text-3xl font-black text-black text-center mt-6">
                {post.title}
            </h1>
         
            {post.image && (
                <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-md mt-4"
                />
            )}

          
            <h1 className="md:text-4xl text-3xl font-black text-black text-center mt-6">
                {post.title1}
            </h1>

            
            <div className="mt-6 text-2xl text-slate-600 font-[500] ">
                {renderParagraphs(post.description)}
            </div>

            
            {post.image1 && (
                <Image
                    src={post.image1}
                    alt={post.title}
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-md mt-4"
                />
            )}

<h1 className="md:text-4xl text-3xl font-bold text-black text-start mt-6">
                {post.title2}
            </h1>
            <div className="mt-6 text-2xl text-slate-600 font-[500]">
                {renderParagraphs(post.moreDescription || "")}
            </div>
        </div>
    );
}
