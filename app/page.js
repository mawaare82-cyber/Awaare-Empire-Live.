// Koodhkan ku rid faylkaaga: app/page.js

export default function Home() {
  const businesses = [
    { name: "Awaare Empire Juice", path: "/juice", icon: "🥤" },
    { name: "Harqanka Dharka", path: "/tailoring", icon: "🧵" },
    { name: "Timajar", path: "/barbershop", icon: "✂️" },
    { name: "Marqaan", path: "/marqaan", icon: "☕" },
    { name: "Qalabka Baabuurta", path: "/car-parts", icon: "🚗" },
  ];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Awaare Empire Dashboard</h1>
      <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
        {businesses.map((biz) => (
          <a key={biz.name} href={biz.path} style={{ 
            padding: "20px", border: "1px solid #ccc", borderRadius: "10px", 
            textDecoration: "none", color: "black", fontSize: "20px" 
          }}>
            {biz.icon} {biz.name}
          </a>
        ))}
      </div>
      
      {/* Qaybta Caawinta (Contact Support) */}
      <div style={{ marginTop: "40px", padding: "20px", background: "#f9f9f9" }}>
        <h3>Qaybta Caawinta</h3>
        <p>Ma u baahan tahay gargaar? Nagala soo xiriir:</p>
        <a href="https://wa.me/YOUR_PHONE_NUMBER" style={{ margin: "10px" }}>WhatsApp</a>
        <a href="tel:YOUR_PHONE_NUMBER" style={{ margin: "10px" }}>Wacid</a>
      </div>
    </div>
  );
}
