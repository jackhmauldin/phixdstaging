"use client";

import React from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import BlogPostCard from "@/components/blog-post-card";

let seeme =
  "I am a technician at Chloe's Auto Repair located at 4750 Alabama Rd Ste 100, Roswell, GA 30075";

const BLOG_POSTS = [
  {
    img: "/image/blogs/ase.png",
    title: "ASE",
    desc: "The ASE, or National Institute for Automotive Service Excellence, is a non-profit organization that certifies automotive professionals in the United States. Earning ASE certification demonstrates a technician's competence, experience, and commitment to excellence in automotive repair and service.",
    link: "https://ase.com/",
  },
  {
    img: "/image/blogs/cti.jfif",
    title: "CTI",
    desc: "CTI, or Carquest Technical Institute, is a professional training program offered by Carquest to help automotive technicians advance their skills and stay current with modern vehicle technologies. CTI provides in-depth courses on diagnostics, repair procedures, and emerging systems, combining hands-on and online learning to support ongoing technician development.",
    link: "https://ctionline.com/",
  },
  {
    img: "/image/blogs/hunter.webp",
    title: "Hunter",
    desc: "Hunter University is the training division of Hunter Engineering Company, offering comprehensive education on the use and maintenance of Hunter’s advanced automotive service equipment. Through online courses and in-person training, Hunter University helps technicians build expertise in wheel alignment, tire service, and diagnostic tools to improve accuracy and efficiency in the shop.",
    link: "https://www.hunter.com/en-ca/training/hunter-university/?srsltid=AfmBOopXKP8WTcT7efPKd-YXivYOVg_m8Mqmc_wpgwnjPLehb-FD04cb",
  },
];

export function LatestBlogPosts() {
  return (
    <section className="py-40 px-8">
      <div className="container mx-auto mb-12 mt-64 sm:mt-24 md:mt-0">
        <Typography variant="h3" color="blue-gray">
          Check my training and certifications
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {BLOG_POSTS.map((props, idx) => (
          <BlogPostCard key={idx} {...props} />
        ))}
        <Card
          className="relative grid h-full w-full place-items-center overflow-hidden
            bg-black"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography variant="h3" className="mt-4" color="white">
              Come see me!
            </Typography>
            <Typography color="white" className="py-4 font-normal">
              {seeme}
            </Typography>
            <a href="https://g.co/kgs/stScw2s">
              <Button
                variant="text"
                color="white"
                className="flex items-center gap-2"
              >
                Directions
                <ArrowRightIcon
                  strokeWidth={3}
                  className="h-3.5 w-3.5 text-white"
                />
              </Button>
            </a>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default LatestBlogPosts;
