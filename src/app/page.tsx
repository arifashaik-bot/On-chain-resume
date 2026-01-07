"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Wallet, Menu, X, ChevronRight, CheckCircle2, Shield, Globe, Github, Twitter, MessageCircle, ArrowRight, Star, Verified, Search, Layout } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
            <Verified className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">On-Chain Resume</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="/features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
          <a href="/showcase" className="text-sm font-medium hover:text-primary transition-colors">Showcase</a>
          <a href="/employers" className="text-sm font-medium hover:text-primary transition-colors">For Employers</a>
          <div className="flex items-center gap-3 ml-4 border-l pl-8">
            <Button variant="ghost" size="sm" onClick={() => window.location.href = '/login'}>Log In</Button>
            <Button size="sm" onClick={() => window.location.href = '/signup'}>Sign Up</Button>
          </div>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
              <a href="/features" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
              <a href="/showcase" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Showcase</a>
              <a href="/employers" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>For Employers</a>
              <div className="flex flex-col gap-3 pt-4 border-t">
                <Button variant="outline" className="w-full" onClick={() => window.location.href = '/login'}>Log In</Button>
                <Button className="w-full" onClick={() => window.location.href = '/signup'}>Sign Up</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default function OnChainResume() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[128px]" />
        </div>
        
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
              On-Chain <span className="text-primary">Resume</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Your Verifiable, Decentralized Profile.
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10">
              Mint your skills, work history, and achievements as tamper-proof digital records. Own your professional identity, fully on-chain.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="rounded-full px-8 text-lg bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
                onClick={() => window.location.href = '/connect-wallet'}
              >
                <Wallet className="mr-2 w-4 h-4" />
                Connect Wallet
              </Button>
              <Button size="lg" className="rounded-full px-8 text-lg group" onClick={() => window.location.href = '/mint'}>
                Mint Your Resume
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-20 relative max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <div className="border rounded-2xl p-4 md:p-8 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden">
              <div className="flex items-center gap-4 mb-8 border-b pb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div className="text-left">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    Alex Rivers <Verified className="w-5 h-5 text-primary" />
                  </h3>
                  <p className="text-muted-foreground text-sm">Full-Stack Engineer | Solidity Expert</p>
                </div>
                <div className="ml-auto flex gap-2">
                  <Badge variant="outline">0x71C...4f2</Badge>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Verifiable Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Solidity", "TypeScript", "DeFi Architecture"].map((skill) => (
                      <div key={skill} className="px-3 py-1.5 rounded-lg border bg-background/50 flex items-center gap-2 text-sm">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Work Proof</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg border bg-background/50">
                      <Github className="w-5 h-5 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Contributed to Uniswap V4</p>
                        <p className="text-xs text-muted-foreground">Verified on-chain via GitHub Oracle</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">Your journey to a decentralized professional identity in 4 simple steps.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Wallet, title: "Connect Wallet", desc: "Link your Web3 wallet to start your profile." },
              { icon: Layout, title: "Add Skills", desc: "List your experience and professional milestones." },
              { icon: Shield, title: "Get Verified", desc: "Prove your skills through peers or on-chain data." },
              { icon: Star, title: "Showcase", desc: "Share your verifiable link with employers." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-background border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                {i < 3 && <ChevronRight className="hidden md:block absolute top-7 -right-4 text-muted-foreground/30" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Built for the future of work.</h2>
              <p className="text-muted-foreground text-lg">On-Chain Resume leverages blockchain technology to ensure your professional data is truly yours.</p>
            </div>
            <Button variant="link" className="text-primary font-bold group">
              Explore Documentation <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Verifiable Skills",
                desc: "Tokenize and prove your skills with cryptographic endorsements.",
                icon: Shield
              },
              {
                title: "Work Proof",
                desc: "Link real-world projects, GitHub activity, or DAO contributions directly.",
                icon: Github
              },
              {
                title: "Universal & Portable",
                desc: "Use your resume across any Web3 platform or job marketplace instantly.",
                icon: Globe
              },
              {
                title: "Privacy Control",
                desc: "Share only what you want; keep your private data encrypted in your wallet.",
                icon: CheckCircle2
              }
            ].map((feature, i) => (
              <Card key={i} className="border-none bg-muted/50 hover:bg-muted transition-colors">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employers Section */}
      <section id="employers" className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/20 skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Trustless Hiring for the Web3 Era.</h2>
              <ul className="space-y-6">
                {[
                  "Find pre-vetted talent with on-chain credentials.",
                  "Reduce credential fraud with cryptographic proof.",
                  "Streamline hiring with instant verification APIs.",
                  "Access a global pool of verified DAO contributors."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-primary-foreground/20 rounded-full p-1">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <p className="text-lg opacity-90">{item}</p>
                  </li>
                ))}
              </ul>
              <Button size="lg" variant="secondary" className="mt-10 rounded-full px-8">
                Partner with Us
              </Button>
            </div>
            <div className="relative">
              <div className="bg-background/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Recruiter Dashboard</h4>
                    <p className="text-sm opacity-70">Filtering verified contributors...</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 bg-white/5 rounded-xl flex items-center justify-between border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 opacity-50" />
                        <div className="h-4 w-24 bg-white/20 rounded" />
                      </div>
                      <div className="flex gap-2">
                        <div className="h-6 w-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                          <Verified className="w-3 h-3 text-emerald-400" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "What is an on-chain resume?", a: "An on-chain resume is a digital professional profile where your skills and experience are stored on a blockchain as verifiable attestations or NFTs." },
              { q: "How is it different from LinkedIn?", a: "Unlike LinkedIn, you own your data. It's tamper-proof, independently verifiable without a central authority, and can be used across any Web3 application." },
              { q: "What does it cost to mint?", a: "Minting costs vary depending on the blockchain network used. We're currently launching on Layer 2 networks to keep fees near zero." },
              { q: "Can I hide my personal information?", a: "Absolutely. You have full privacy control. You can choose to show only your verified skills while keeping your identity or specific work details private." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-lg font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA & Waitlist */}
      <section className="py-24 border-t">
        <div className="container mx-auto px-6">
          <div className="bg-card border rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join the waitlist for early access and be the first to mint your on-chain professional identity.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder="Enter your email" className="rounded-full h-12 px-6" required />
              <Button type="submit" size="lg" className="rounded-full px-8 h-12">
                Join Waitlist
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Verified className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold tracking-tight">On-Chain Resume</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                The future of professional identity. Verifiable, decentralized, and user-owned. Built for the decentralized workforce.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Links</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Community</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-background border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
            <p>© 2026 On-Chain Resume. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
