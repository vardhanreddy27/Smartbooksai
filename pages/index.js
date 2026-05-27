import BankIntegration from '@/components/BankIntegration'
import ClientKindWordsSection from '@/components/ClientKindWordsSection'
import FeatureCardsSection from '@/components/FeatureCardsSection'
import FeaturesBentoSection from '@/components/FeaturesBentoSection'
import FeaturesSection from '@/components/FeaturesSection'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import PricingComparisonSection from '@/components/PricingComparisonSection'
import SmartBooksMainCTASection from '@/components/SmartBooksMainCTASection'
import SmartBooksFooter from '@/components/SmartBooksFooter'
import SmartBooksUseCaseHero from '@/components/SmartBooksUseCaseHero'
import SmartBooksPricingSection from '@/components/SmartBooksPricingSection'
import SocialProofSection from '@/components/SocialProofSection'
import React from 'react'

function index() {
  return (
    <>
      <Navbar />
      <SmartBooksMainCTASection />
      <HeroSection />
      <SocialProofSection />
      <BankIntegration /> 

      <FeaturesBentoSection />

      <SmartBooksUseCaseHero />

      <FeaturesSection />                       
       <FeatureCardsSection />
       <SmartBooksPricingSection />
       <PricingComparisonSection />
       <ClientKindWordsSection />
       <SmartBooksFooter />
       

    </>
  )
}

export default index
