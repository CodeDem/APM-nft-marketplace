import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Core } from "@walletconnect/core";
import { WalletKit } from "@reown/walletkit";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const core = new Core({
  projectId: process.env.PROJECT_ID,
});

export const walletKit = await WalletKit.init({
  core, // <- pass the shared `core` instance
  metadata: {
    name: "NFT Adda marketplace",
    description: "NFT marketplace for NFT Adda",
    url: "https://apm-nft-marketplace.vercel.app/",
    icons: [],
  },
});
