"use client";
import Card from "@/components/ui/card";
import { generateSeed } from "@/lib/utils";
const NFTs = [
  {
    id: "1",
    name: "NFT 1",
    imageAlt: `https://api.dicebear.com/9.x/bottts/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${generateSeed()}`,
    imageSrc: `https://api.dicebear.com/9.x/bottts/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${generateSeed()}`,
    href: "#",
    color: "Blue",
    price: "0.1 ETH",
  },
  {
    id: "2",
    name: "NFT 2",
    imageAlt: `https://api.dicebear.com/9.x/bottts/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${generateSeed()}`,
    imageSrc: `https://api.dicebear.com/9.x/bottts/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${generateSeed()}`,
    href: "#",
    color: "Blue",
    price: "0.1 ETH",
  },
  {
    id: "3",
    name: "NFT 3",
    imageAlt: `https://api.dicebear.com/9.x/bottts/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${generateSeed()}`,
    imageSrc: `https://api.dicebear.com/9.x/bottts/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${generateSeed()}`,
    href: "#",
    color: "Blue",
    price: "0.1 ETH",
  },
  {
    id: "4",
    name: "NFT 4",
    imageAlt: `https://api.dicebear.com/9.x/bottts/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${generateSeed()}`,
    imageSrc: `https://api.dicebear.com/9.x/bottts/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${generateSeed()}`,
    href: "#",
    color: "Blue",
    price: "0.1 ETH",
  },
  {
    id: "5",
    name: "NFT 5",
    imageAlt: `https://api.dicebear.com/9.x/bottts/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${generateSeed()}`,
    imageSrc: `https://api.dicebear.com/9.x/bottts/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${generateSeed()}`,
    href: "#",
    color: "Blue",
    price: "0.1 ETH",
  },
  {
    id: "6",
    name: "NFT 6",
    imageAlt: `https://api.dicebear.com/9.x/bottts/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${generateSeed()}`,
    imageSrc: `https://api.dicebear.com/9.x/bottts/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${generateSeed()}`,
    href: "#",
    color: "Blue",
    price: "0.1 ETH",
  },
  {
    id: "7",
    name: "NFT 7",
    imageAlt: `https://api.dicebear.com/9.x/bottts/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${generateSeed()}`,
    imageSrc: `https://api.dicebear.com/9.x/bottts/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${generateSeed()}`,
    href: "#",
    color: "Blue",
    price: "0.1 ETH",
  },
  {
    id: "8",
    name: "NFT 8",
    imageAlt: `https://api.dicebear.com/9.x/bottts/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${generateSeed()}`,
    imageSrc: `https://api.dicebear.com/9.x/bottts/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${generateSeed()}`,
    href: "#",
    color: "Blue",
    price: "0.1 ETH",
  },
];

export default function Dashboard() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {NFTs.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
}
