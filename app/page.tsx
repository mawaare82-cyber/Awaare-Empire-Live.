export default function Home() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">Awaare Empire | Menu</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Halkan ayaad ku dari kartaa liiska sharaabkaaga */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-orange-600">Modern Drinks</h2>
          <ul className="space-y-2">
            <li>🧊 Classic Mint Mojito</li>
            <li>🍓 Strawberry Smoothie</li>
            <li>🧋 Iced Spanish Latte</li>
          </ul>
        </div>
      </div>

      {/* Qaybta Wadahadalka */}
      <div className="mt-10 bg-blue-900 text-white p-6 rounded-xl text-center">
        <h2 className="text-lg font-bold">Ma u baahan tahay caawimaad?</h2>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-green-500 px-4 py-2 rounded">📞 Call</button>
          <button className="bg-white text-blue-900 px-4 py-2 rounded">💬 Chat</button>
        </div>
      </div>
    </div>
  );
}
