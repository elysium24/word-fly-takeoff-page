
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
        <p className="text-xl mb-8 opacity-90">Download Word Fly today and begin your word-flying journey!</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg rounded-full transform transition-all duration-200 hover:scale-105 shadow-xl"
          >
            Download for iOS
          </Button>
          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 text-lg rounded-full transform transition-all duration-200 hover:scale-105 shadow-xl"
          >
            Download for Android
          </Button>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <p className="opacity-70">© 2024 Word Fly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
