export default function Page() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">Awaare Empire | Menu</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Modern Drinks */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Modern Drinks</h2>
          <ul className="space-y-2">
            <li>🧊 Classic Mint Mojito</li>
            <li>🍓 Strawberry Smoothie</li>
            <li>🧋 Iced Spanish Latte</li>
            <li>🍦🍫 Chocolate Milkshake</li>
            <li>💎 Blue Lagoon Mocktail</li>
            <li>🍑 Peach Iced Tea</li>
          </ul>
        </div>

        {/* Traditional Juices */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-800">Traditional Juices</h2>
          <ul className="space-y-2">
            <li>🥭 Mango Papaya (Isbitaal)</li>
            <li>🍋 Lemon Mint</li>
            <li>🍉 Fresh Watermelon</li>
            <li>🍮 Creamy Custard</li>
            <li>🍊 Mango Float</li>
            <li>🍌 Mixed Fruit Cocktail</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
  
