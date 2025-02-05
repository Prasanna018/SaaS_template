"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Zap, Shield, BarChart } from "lucide-react"

const features = [
  {
    title: "Lightning Fast",
    description: "Our platform is optimized for speed, ensuring quick load times and responsive interactions.",
    icon: Zap,
  },
  {
    title: "Secure by Design",
    description: "We prioritize your data security with state-of-the-art encryption and protection measures.",
    icon: Shield,
  },
  {
    title: "Advanced Analytics",
    description: "Gain valuable insights with our comprehensive analytics and reporting tools.",
    icon: BarChart,
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

