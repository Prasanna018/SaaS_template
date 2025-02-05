"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Code, Cloud, BarChart, Lock } from "lucide-react"

const services = [
  {
    title: "Custom Development",
    description: "Tailored solutions to meet your specific business needs.",
    icon: Code,
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure for your applications.",
    icon: Cloud,
  },
  {
    title: "Data Analytics",
    description: "Unlock insights from your data with advanced analytics.",
    icon: BarChart,
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with our robust security measures.",
    icon: Lock,
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <service.icon className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="#" className="text-primary hover:underline">
                    Learn more
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

