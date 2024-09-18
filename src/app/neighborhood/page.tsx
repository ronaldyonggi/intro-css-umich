import Image from 'next/image';
import React from 'react';

const images = [
  {
    src: '/images/bend_in_the_road.png',
    alt: 'a purple tree stands in contrast to the green leaved trees along a bend in the road',
  },
  {
    src: '/images/pink_blossoms.png',
    alt: 'small pink blossoms on an otherwise green leaved tree',
  },
  {
    src: '/images/blooming_trees.png',
    alt: 'brown labradoodle sitting in front of white and purple blooming trees',
  },
  {
    src: '/images/falling_petals.png',
    alt: 'a purple tulip tree that is beginning to shed its petals',
  },
  {
    src: '/images/hanging_plants.png',
    alt: 'red and green plants in a decorative hanging basket',
  },
  {
    src: '/images/potted_plants.png',
    alt: 'a decorative planter with a variety of brightly colored plants',
  },
  {
    src: '/images/red_maple.png',
    alt: 'a small Japanese maple tree in front of a putple door',
  },
  {
    src: '/images/tree_with_white_blooms.png',
    alt: 'brown labradoodle sitting in front of tree blooming with white petals',
  },
  {
    src: '/images/tulips.png',
    alt: 'bright red tulips in front of a garden light',
  },
  {
    src: '/images/white_buds_on_tree.png',
    alt: 'artsy shot of white blooms on a green tree with a dark background',
  },
];

export default function Page() {
  return (
    <div>
      <h1>Neighborhood Walks</h1>
      <main>
        {images.map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width='100'
            height='100'
          />
        ))}
      </main>
    </div>
  );
}
