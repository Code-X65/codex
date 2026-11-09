import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { smoothScrollTo } from '../utils/scrollHelper'

import SidebarNav from '../components/replica/SidebarNav'
import HeroSection from '../components/replica/HeroSection'
import SelectedWorkSection from '../components/replica/SelectedWorkSection'
import CapabilitiesSection from '../components/replica/CapabilitiesSection'
import OpenSourceSection from '../components/replica/OpenSourceSection'
import WritingSection from '../components/replica/WritingSection'
import ContactSection from '../components/replica/ContactSection'
import ExperienceSection from '../components/replica/ExperienceSection'
import HireAndFAQSection from '../components/replica/HireAndFAQSection'
import NewsletterSection from '../components/replica/NewsletterSection'
import SiteFooter from '../components/replica/SiteFooter'
import PortfolioChatbot from '../components/replica/PortfolioChatbot'

gsap.registerPlugin(ScrollTrigger)

export default function ReplicaHome() {
  const mainRef = useRef(null)

  // Global smooth scroll for hash links
  useEffect(() => {
    const handleGlobalHashClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const href = link.getAttribute('href')
      if (href && href.length > 1 && !href.startsWith('#/')) {
        const target = document.querySelector(href)
        if (target) {
          e.preventDefault()
          smoothScrollTo(href, 70, 1)
        }
      }
    }

    document.addEventListener('click', handleGlobalHashClick)
    return () => document.removeEventListener('click', handleGlobalHashClick)
  }, [])

  // GSAP ScrollTrigger reveal animation (triggers on scroll down only, stays permanently visible)
  useEffect(() => {
    if (!mainRef.current) return

    const sections = mainRef.current.querySelectorAll('section')

    const ctx = gsap.context(() => {
      sections.forEach((section, index) => {
        const isHero = index === 0 || section.id === 'home'

        if (isHero) {
          gsap.fromTo(
            section,
            { opacity: 0.4, y: 15 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
          )
        } else {
          gsap.fromTo(
            section,
            {
              opacity: 0,
              y: 35,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 88%',
                once: true,
                toggleActions: 'play none none none',
              },
            }
          )
        }
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="tech-grid min-h-screen relative antialiased selection:bg-[#bbf451] selection:text-black md:pl-16 bg-[#07080a] text-[#e2e8f0] font-sans">
      <SidebarNav />
      <main ref={mainRef} className="max-w-[1300px] mx-auto px-4 sm:px-6 pt-12 md:pt-20">
        <HeroSection />
        <SelectedWorkSection />
        <CapabilitiesSection />
        <OpenSourceSection />
        <WritingSection />
        <ContactSection />
        <ExperienceSection />
        <HireAndFAQSection />
        <NewsletterSection />
      </main>
      <SiteFooter />
      <PortfolioChatbot />
    </div>
  )
}
