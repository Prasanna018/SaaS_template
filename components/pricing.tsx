"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19.99",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["All Features", "Priority Support", "Custom Integration"],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                className={`h-full flex flex-col ${plan.highlighted ? "border-primary shadow-lg" : ""} hover:shadow-xl transition-shadow duration-300`}
              >
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold">{plan.price}/month</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                    Choose Plan
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

