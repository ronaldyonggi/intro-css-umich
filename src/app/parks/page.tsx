import Image from 'next/image';
import React from 'react';

const images = [
  {
    src: '/images/BaconGallupPark.jpg',
    alt: 'Brown Labradoodle sitting next to a statue.',
  },
  {
    src: '/images/bacon_in_the_woods.png',
    alt: 'brown labradoodle sitting near a stream in a wooded setting',
  },
  {
    src: '/images/bacon_near_the_fort.png',
    alt: 'brown labradoodle posing in front of a makeshift fort made of branches',
  },
  {
    src: '/images/downed_tree.png',
    alt: 'a downed tree crossign a stream',
  },
  {
    src: '/images/fort_in_woods.png',
    alt: 'a small fort made of branches',
  },
  {
    src: '/images/huron_river_cascades.jpg',
    alt: ' two people on a kayak approaching some small rapids',
  },
  {
    src: '/images/lake_view.jpg',
    alt: 'a glimpse of a child running along a lake obscured by branches',
  },
  {
    src: '/images/mist_over_huron_river.jpg',
    alt: 'the mist rising over a river in the morning',
  },
  {
    src: '/images/munising.jpg',
    alt: 'small waterfall',
  },
  {
    src: '/images/reflected_tree.jpg',
    alt: 'reflection of a lake and trees',
  },
];

export default function page() {
  return (
    <div>
      <h1>Michigan Parks</h1>
      <main id='main'>
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
