import BankIntegration from '@/components/BankIntegration'
import FeaturesBentoSection from '@/components/FeaturesBentoSection'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import SmartBooksUseCaseHero from '@/components/SmartBooksUseCaseHero'
import SocialProofSection from '@/components/SocialProofSection'
import React from 'react'

function index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <BankIntegration /> 
      <FeaturesBentoSection />
      <SmartBooksUseCaseHero />
    </>
  )
}

export default index
