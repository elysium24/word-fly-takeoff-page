
const Gallery = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
          Game Preview
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              Soar Through Word Challenges
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join our feathered heroes as they fly through exciting levels filled with word puzzles, 
              spelling challenges, and treasure hunts. Each adventure brings new vocabulary to master 
              and friends to meet!
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-yellow-100 rounded-xl">
                <div className="text-2xl font-bold text-yellow-600">500+</div>
                <div className="text-yellow-700">Levels</div>
              </div>
              <div className="text-center p-4 bg-blue-100 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">20+</div>
                <div className="text-blue-700">Cities</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-purple-500 rounded-3xl p-8 transform rotate-3 shadow-2xl">
              <img 
                src="/lovable-uploads/9de83749-7591-47e9-83c4-bc1f5701e8e5.png" 
                alt="Word Fly Gameplay"
                className="w-full rounded-2xl shadow-xl transform -rotate-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
