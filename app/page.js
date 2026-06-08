export default function Page() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-8 tracking-tight">
        Awaare Empire Menu
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Modern Drinks Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
          <h2 className="text-2xl font-bold mb-4 text-blue-700 border-b pb-2">Modern Drinks</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-lg">🧊 Classic Mint Mojito</li>
            <li className="flex items-center text-lg">🍓 Strawberry Smoothie</li>
            <li className="flex items-center text-lg">🧋 Iced Spanish Latte</li>
            <li className="flex items-center text-lg">🍫 Chocolate Milkshake</li>
            <li className="flex items-center text-lg">💎 Blue Lagoon Mocktail</li>
            <li className="flex items-center text-lg">🍑 Peach Iced Tea</li>
          </ul>
        </div>

        {/* Traditional Juices Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
          <h2 className="text-2xl font-bold mb-4 text-green-700 border-b pb-2">Traditional Juices</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-lg">🥭 Mango Papaya (Isbitaal)</li>
            <li className="flex items-center text-lg">🍋 Lemon Mint</li>
            <li className="flex items-center text-lg">🍉 Fresh Watermelon</li>
            <li className="flex items-center text-lg">🍮 Creamy Custard</li>
            <li className="flex items-center text-lg">🍊 Mango Float</li>
            <li className="flex items-center text-lg">🍌 Mixed Fruit Cocktail</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
