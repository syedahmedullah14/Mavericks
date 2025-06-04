import { Users, Lightbulb, LayoutGrid, Globe, UserCheck } from "lucide-react"

export default function WhatSetsUsApart() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "30+ Years Of Industry Experience",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Commitment To Innovation And Quality",
    },
    {
      icon: <LayoutGrid className="h-8 w-8 text-white" />,
      title: "Turnkey Project Capabilities",
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "Strong Network Of Global Technology Partners",
    },
    {
      icon: <UserCheck className="h-8 w-8 text-white" />,
      title: "A Team Of Skilled Engineers And Specialists",
    },
  ]

  return (
    <section
      className="py-20 text-white relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/what-sets-apart-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Sets Us Apart</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-[#e52222] rounded-full p-3 flex-shrink-0">{feature.icon}</div>
              <p className="font-medium text-lg">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
