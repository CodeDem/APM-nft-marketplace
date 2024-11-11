import { Core } from '@walletconnect/core'
import { WalletKit } from '@reown/walletkit'

const core = new Core({
  projectId: process.env.PROJECT_ID
})

export const walletKit = await WalletKit.init({
  core, // <- pass the shared `core` instance
  metadata: {
    name: 'NFT Adda marketplace',
    description: 'NFT marketplace for NFT Adda',
    url: 'https://apm-nft-marketplace.vercel.app/',
    icons: []
  }
})