
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Epic Word Adventures",
      description: "Explore famous cities and real-world locations while building your vocabulary",
      icon: "🗺️",
    },
    {
      title: "Collect Treasures",
      description: "Find hidden treasures and unlock special rewards",
      icon: "💎",
    },
    {
      title: "Colorful Characters",
      description: "Meet amazing friends on your journey",
      icon: "🦜",
    },
    {
      title: "Brain Training",
      description: "Improve your spelling and word skills",
      icon: "🧠",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Game Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
