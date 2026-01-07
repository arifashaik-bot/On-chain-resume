"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Verified, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function ShowcasePage() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Showcase</h1>
          <p className="text-xl text-muted-foreground mb-12">
            See how top professionals are using On-Chain Resume to showcase their verified achievements.
          </p>

          <div className="grid gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-2xl p-6 md:p-8 bg-card/50 backdrop-blur-sm shadow-xl">
                <div className="flex items-center gap-4 mb-6 border-b pb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div className="text-left">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      Professional {i} <Verified className="w-5 h-5 text-primary" />
                    </h3>
                    <p className="text-muted-foreground text-sm">Blockchain Developer | Web3 Architect</p>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <Badge variant="outline">0x{i}aB...{i}f{i}</Badge>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider text-muted-foreground">Endorsed Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Solidity", "Rust", "EVM", "zk-Rollups"].map((skill) => (
                        <div key={skill} className="px-3 py-1 rounded-lg border bg-background/50 flex items-center gap-2 text-xs">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
