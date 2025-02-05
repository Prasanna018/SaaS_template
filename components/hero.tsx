"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Our SaaS Platform</h1>
        <p className="text-xl mb-8 text-muted-foreground">Revolutionize your workflow with our cutting-edge solution</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

