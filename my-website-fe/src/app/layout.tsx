import './globals.css'
import '@radix-ui/themes/styles.css';
import {Theme, ThemePanel} from '@radix-ui/themes';
import type { Metadata } from 'next'

import Header from '@/components/header/Header'
import Footer from "@/components/footer/Footer";
import React from "react";

export const metadata: Metadata = {
  title: 'BurakYAPICI-Portfolio',
  description: 'Developer portfolio website',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Theme>
        <Header/>
        <main className="">
            {children}
        </main>
        <Footer/>
      </Theme>
      </body>
    </html>
  )
}