export default function JuiceMenu() {
  const menuItems = [
    { name: "Sprite Lemon Tea", price: "$1", type: "No Blender" },
    { name: "Classic Mint Mojito", price: "$1.5", type: "No Blender" },
    { name: "Blue Lagoon Mocktail", price: "$1.5", type: "No Blender" },
    { name: "Peach Iced Tea", price: "$1", type: "No Blender" },
    { name: "Iced Spanish Latte", price: "$1.5", type: "No Blender" },
    { name: "Casiirka Faantada iyo Cambaha", price: "$1.5", type: "No Blender" },
    { name: "Strawberry Smoothie", price: "$1.5", type: "Blender" },
    { name: "Chocolate Milkshake", price: "$1.5", type: "Blender" },
    { name: "Sharaabka Isbitaalka", price: "$1", type: "Blender" },
    { name: "Casiirka Liin Deenta", price: "$1", type: "Blender" },
    { name: "Sharaabka Qaraha", price: "$1", type: "Blender" },
    { name: "Sharaabka Kustar / Laben", price: "$1.5", type: "Blender" },
    { name: "Mixed Fruit Cocktail", price: "$1.5", type: "Blender" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-2">Awaare Empire</h1>
      <p className="text-center text-gray-500 mb-8">Cabitaannada ugu macaan magaalada Boosaaso</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 flex items-center justify-between transition hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="text-3xl">🥤</div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">{item.type}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-orange-600">{item.price}</p>
              <a 
                href={`https://wa.me/252771461751?text=Salaan,%20waxaan%20rabaa%20inaan%20dalbado:%20${item.name}`} 
                target="_blank"
                className="mt-2 block bg-green-500 text-white px-4 py-1 rounded-lg text-sm font-semibold hover:bg-green-600"
              >
                Dalbo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
