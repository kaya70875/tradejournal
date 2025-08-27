import CTASection from '@/components/landing/CTASection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import Footer from '@/components/landing/Footer'
import HeroSection from '@/components/landing/HeroSection'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </>
  )
}
