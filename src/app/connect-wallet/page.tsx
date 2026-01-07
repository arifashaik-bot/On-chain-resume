"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Wallet, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ConnectWalletPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-24">
      <div className="max-w-xl mx-auto">
        <Button variant="ghost" className="mb-8" onClick={() => window.location.href = '/'}>
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
        </Button>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Wallet className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Connect Your Wallet</h1>
          <p className="text-muted-foreground mb-12">
            Choose your preferred wallet to start managing your on-chain professional identity.
          </p>

            <div className="space-y-4 mb-8">
              {[
                { name: "MetaMask", icon: Cpu, color: "hover:border-orange-500" },
                { name: "Coinbase Wallet", icon: ShieldCheck, color: "hover:border-blue-600" },
                { name: "WalletConnect", icon: Wallet, color: "hover:border-blue-400" }
              ].map((wallet) => (
                <Button key={wallet.name} variant="outline" className={`w-full h-16 text-lg justify-start px-6 gap-4 border-2 transition-all ${wallet.color}`}>
                  <wallet.icon className="w-6 h-6" />
                  {wallet.name}
                </Button>
              ))}
            </div>

            <Button size="lg" className="w-full h-14 text-xl font-bold bg-blue-600 hover:bg-blue-700">
              Connect
            </Button>
          
          <p className="mt-8 text-sm text-muted-foreground">
            By connecting, you agree to our Terms of Service and Privacy Policy.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
