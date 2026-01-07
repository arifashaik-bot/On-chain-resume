"use client";

import { Button } from "@/components/ui/button";
import { Shield, Github, Globe, CheckCircle2, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function FeaturesPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Features</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Discover the powerful features that make On-Chain Resume the future of professional identity.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Verifiable Skills",
                desc: "Tokenize and prove your skills with cryptographic endorsements from peers and institutions.",
                icon: Shield
              },
              {
                title: "Work Proof",
                desc: "Link real-world projects, GitHub activity, or DAO contributions directly to your on-chain profile.",
                icon: Github
              },
              {
                title: "Universal & Portable",
                desc: "Your resume lives on the blockchain, making it accessible across any Web3 platform or job marketplace.",
                icon: Globe
              },
              {
                title: "Privacy Control",
                desc: "You own your data. Choose exactly what to share and what to keep private using zero-knowledge proofs.",
                icon: CheckCircle2
              }
            ].map((feature, i) => (
              <Card key={i} className="border-none bg-muted/50">
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
        </motion.div>
      </div>
    </div>
  );
}
