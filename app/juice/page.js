export default function JuiceMenu() {
  const noBlender = [
    "Sprite Lemon Tea", "Classic Mint Mojito", "Blue Lagoon Mocktail", 
    "Peach Iced Tea", "Iced Spanish Latte", "Casiirka Faantada iyo Cambaha"
  ];
  
  const blenderJuices = [
    "Strawberry Smoothie", "Chocolate Milkshake", "Sharaabka Isbitaalka", 
    "Casiirka Liin Deenta", "Sharaabka Qaraha / Xabxabka", "Sharaabka Kustar / Laben"
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>🥤 Awaare Empire Juice Menu</h1>
      
      <h2>1. Kuwa Tooska ah (No Blender)</h2>
      <ul>{noBlender.map(item => <li key={item}>{item}</li>)}</ul>
      
      <h2>2. Kuwa la Shiidayo (Blender Juices)</h2>
      <ul>{blenderJuices.map(item => <li key={item}>{item}</li>)}</ul>
      
      <div style={{ marginTop: "30px" }}>
        <a href="https://wa.me/YOUR_PHONE_NUMBER" style={{ 
          background: "#25D366", color: "white", padding: "10px 20px", 
          borderRadius: "5px", textDecoration: "none" 
        }}>Dalbo Hadda (WhatsApp)</a>
      </div>
    </div>
  );
}

