"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react"; 

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <motion.div
        initial= {{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.5}}
        >
      <Button>Test Button
        <ArrowRight/>
      </Button>
       </motion.div>
    </main>
  );
}