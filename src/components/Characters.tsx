
const Characters = () => {
  const characters = [
    {
      image: "/lovable-uploads/6946eb28-8311-4e7e-81fc-7e65a5678aa7.png",
      name: "Captain Wordsworth",
      description: "The wise leader of our word adventure crew"
    },
    {
      image: "/lovable-uploads/f927c075-bf63-437c-8d82-69f4a42f6637.png",
      name: "Explorer Pete",
      description: "Always ready for the next spelling adventure"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Meet the Characters
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {characters.map((character, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <img 
                  src={character.image} 
                  alt={character.name}
                  className="w-48 h-48 mx-auto mb-6 drop-shadow-lg"
                />
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{character.name}</h3>
                <p className="text-gray-600 text-lg">{character.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;
