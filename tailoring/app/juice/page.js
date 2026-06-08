export default function JuiceMenu() {
  const menu = [
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
    { name: "Sharaabka Kustar", price: "$1.5", type: "Blender" },
    { name: "Mixed Fruit Cocktail", price: "$1.5", type: "Blender" },
  ];

  const whatsappLink = "https://wa.me/252771461751?text=Salaam,%20waxaan%20rabaa%20inaan%20dalbado%20casiir.";

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">Awaare Empire Menu</h1>
      
      <div className="space-y-6">
        {menu.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center border border-gray-100">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-xs text-gray-500">{item.type}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-orange-600">{item.price}</p>
              <a href={whatsappLink} className="text-[10px] bg-green-500 text-white px-2 py-1 rounded">Dalbo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

