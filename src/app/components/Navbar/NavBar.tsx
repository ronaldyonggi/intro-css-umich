import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/neighborhood', label: 'Neighborhood Walks' },
  { href: '/parks', label: 'Walks in the Park' },
];

export default function NavBar() {
  return (
    <>
      <div>
        <a href='#main'>Skip to main content</a>
      </div>
      <div>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <Image
          src={'/images/BaconGallupPark.jpg'}
          alt='Brown Labradoodle sitting next to a statue.'
          width={100}
          height={100}
        />
      </div>
    </>
  );
}
