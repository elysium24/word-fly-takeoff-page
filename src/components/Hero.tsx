
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-purple-500 to-blue-600"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Main game character */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/89f69d51-d75e-4360-9595-c62069be05a7.png" 
            alt="Word Fly Character" 
            className="w-64 h-64 mx-auto drop-shadow-2xl hover-scale"
          />
        </div>

        {/* Game title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Word Fly
          </span>
        </h1>

        {/* Subtitle and game description */}
        <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Embark on an epic word adventure with our feathered friends!
        </p>
        
        <p className="text-lg md:text-xl mb-8 opacity-80 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Challenge yourself with this exciting Trivia & Word game featuring hundreds of levels of brain-teasing fun!
        </p>

        {/* Download buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-4 text-lg rounded-full transform transition-all duration-200 hover:scale-105 shadow-xl flex items-center gap-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
            </svg>
            App Store
          </Button>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 text-lg rounded-full transform transition-all duration-200 hover:scale-105 shadow-xl flex items-center gap-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            Google Play
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
