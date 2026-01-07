"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Search, Verified } from "lucide-react";
import { motion } from "framer-motion";

export default function EmployersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" className="mb-8" onClick={() => window.location.href = '/'}>
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
        </Button>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8">For Employers</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Hire with confidence using our trustless, blockchain-verified talent platform.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Trustless Hiring for the Web3 Era.</h2>
              <ul className="space-y-4">
                {[
                  "Find pre-vetted talent with on-chain credentials.",
                  "Reduce credential fraud with cryptographic proof.",
                  "Streamline hiring with instant verification APIs.",
                  "Access a global pool of verified DAO contributors."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <p className="text-lg opacity-90">{item}</p>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-8 rounded-full px-8">
                Partner with Us
              </Button>
            </div>
            
            <div className="bg-muted/50 border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Recruiter Dashboard</h4>
                  <p className="text-sm text-muted-foreground">Filtering verified contributors...</p>
                </div>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 bg-background/50 rounded-xl flex items-center justify-between border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 opacity-50" />
                      <div className="h-4 w-24 bg-muted rounded" />
                    </div>
                    <Verified className="w-4 h-4 text-emerald-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
