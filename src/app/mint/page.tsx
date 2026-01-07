"use client";

import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Verified, 
  User, 
  FileText, 
  Sparkles, 
  Briefcase, 
  GraduationCap, 
  Code, 
  FolderGit2, 
  Award, 
  Globe, 
  Link as LinkIcon, 
  Mail, 
  Trophy 
} from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function MintPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-24">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" className="mb-8" onClick={() => window.location.href = '/'}>
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
        </Button>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
              <Sparkles className="w-6 h-6" />
            </div>
            <h1 className="text-4xl font-bold">Mint Your Resume</h1>
          </div>
          
          <p className="text-muted-foreground mb-12 text-lg">
            Complete the form below to mint your professional identity as a soulbound token.
          </p>

          <form className="space-y-12">
            {/* 1. Basic Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <User className="w-5 h-5 text-primary" /> 1. Basic Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Professional Title</label>
                  <Input placeholder="Full Stack Developer" />
                </div>
              </div>
            </div>

            {/* 2. Contact Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" /> 2. Contact Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input placeholder="+1 (555) 000-0000" />
                </div>
              </div>
            </div>

            {/* 3. Professional Summary */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> 3. Professional Summary
              </h3>
              <Textarea placeholder="Write a compelling summary of your career and goals..." className="min-h-[120px]" />
            </div>

            {/* 4. Work Experience */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" /> 4. Work Experience
              </h3>
              <div className="space-y-4 p-4 border rounded-lg bg-card/50">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Company Name" />
                  <Input placeholder="Job Title" />
                </div>
                <Input placeholder="Duration (e.g. Jan 2022 - Present)" />
                <Textarea placeholder="Key responsibilities and achievements..." />
              </div>
            </div>

            {/* 5. Education */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" /> 5. Education
              </h3>
              <div className="space-y-4 p-4 border rounded-lg bg-card/50">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Institution Name" />
                  <Input placeholder="Degree / Field of Study" />
                </div>
                <Input placeholder="Graduation Year" />
              </div>
            </div>

            {/* 6. Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" /> 6. Skills
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Technical Skills</label>
                  <Input placeholder="React, TypeScript, Solidity, Node.js" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Soft Skills</label>
                  <Input placeholder="Leadership, Communication, Problem Solving" />
                </div>
              </div>
            </div>

            {/* 7. Projects */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <FolderGit2 className="w-5 h-5 text-primary" /> 7. Key Projects
              </h3>
              <div className="space-y-4 p-4 border rounded-lg bg-card/50">
                <Input placeholder="Project Name" />
                <Input placeholder="Project Link (GitHub/Live Demo)" />
                <Textarea placeholder="Brief description of the project and your role..." />
              </div>
            </div>

            {/* 8. Certifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" /> 8. Certifications
              </h3>
              <Input placeholder="AWS Certified Developer, Google UX Design, etc." />
            </div>

            {/* 9. Languages */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" /> 9. Languages
              </h3>
              <Input placeholder="English (Native), Spanish (Fluent), Mandarin (Basic)" />
            </div>

            {/* 10. Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <LinkIcon className="w-5 h-5 text-primary" /> 10. Social & Links
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="LinkedIn URL" />
                <Input placeholder="GitHub URL" />
                <Input placeholder="Twitter / X URL" />
                <Input placeholder="Portfolio URL" />
              </div>
            </div>

            {/* Achievements (Bonus/Optional but helpful for 10) */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" /> Awards & Achievements
              </h3>
              <Textarea placeholder="List any notable awards, hackathon wins, or honors..." />
            </div>

            <Button size="lg" className="w-full rounded-full h-14 text-lg gap-2 mt-8 shadow-lg shadow-primary/20">
              <Verified className="w-5 h-5" />
              Mint On-Chain Resume (Gas: 0.001 ETH)
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
