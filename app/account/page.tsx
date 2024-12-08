"use client";

import React from "react";
import Card from "@/components/ui/card"; // Adjust the import path according to your project structure

export default function AccountPage() {
  // Example data - in practice, you'd fetch or retrieve this from a web3 provider or API.
  const walletAddress = "0x1234...abcd";
  const nfts = [
    {
      id: "1",
      imageSrc: "https://via.placeholder.com/300",
      imageAlt: "NFT #1",
      href: "#",
      name: "NFT #1",
      color: "0x1234...abcd",
      price: "0.5 ETH",
    },
    {
      id: "2",
      imageSrc: "https://via.placeholder.com/300",
      imageAlt: "NFT #2",
      href: "#",
      name: "NFT #2",
      color: "0x1234...abcd",
      price: "0.8 ETH",
    },
    {
      id: "3",
      imageSrc: "https://via.placeholder.com/300",
      imageAlt: "NFT #3",
      href: "#",
      name: "NFT #3",
      color: "0x1234...abcd",
      price: "1.2 ETH",
    },
    {
      id: "4",
      imageSrc: "https://via.placeholder.com/300",
      imageAlt: "NFT #4",
      href: "#",
      name: "NFT #4",
      color: "0x1234...abcd",
      price: "0.9 ETH",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Account</h1>
          <p className="text-sm text-gray-700 mt-2">
            Wallet Address: <span className="font-medium">{walletAddress}</span>
          </p>
        </div>

        {/* NFT Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {nfts.map((nft) => (
            <Card key={nft.id} product={nft} />
          ))}
        </div>
      </div>
    </div>
  );
}
