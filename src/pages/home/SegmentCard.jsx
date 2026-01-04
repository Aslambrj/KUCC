import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function SegmentCard({ title, description, icon: Icon, bgGradient, features = [], delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className={`h-2 w-full ${bgGradient}`} />
        <CardContent className="p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-xl text-white ${bgGradient}`}>
              <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">{description}</p>

          {/* Features list */}
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-gray-400" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
