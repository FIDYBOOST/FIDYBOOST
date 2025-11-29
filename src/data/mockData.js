// src/data/mockData.js
export const CONFIG = {
  APP_NAME: "FIDY",
  APP_SUFFIX: "BOOST",
  LEVEL_CAP: 100 
};

export const getRandomDate = () => {
  const days = ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO", "DOMINGO"];
  const hours = ["09:00", "14:00", "18:30", "20:00", "10:00"];
  return `${days[Math.floor(Math.random() * days.length)]}, ${hours[Math.floor(Math.random() * hours.length)]}`;
};

export const INITIAL_DATA = {
  user: {
    name: "Admin",
    username: "fidyboost",
    level: "Nivel 5",
    xp: 65,
    avatar: "https://ui-avatars.com/api/?name=Gerardo&background=8FD1CC&color=fff&bold=true"
  },
  activities: [
    { id: 1, date: "SÁBADO, 10:00", title: "Torneo de Pádel", location: "Club Deportivo Central", description: "Torneo amateur. 3 partidos garantizados.", type: "joined", category: "Padel", img: "https://images.unsplash.com/photo-1626248312068-d62d7c0f1c99?auto=format&fit=crop&w=300&q=80" },
    { id: 2, date: "LUNES, 18:00", title: "Clase de Yoga", location: "Parque de la Ciudad", description: "Relajación y estiramientos al aire libre.", type: "saved", category: "Yoga", img: "https://images.unsplash.com/photo-1544367563-12123d896889?auto=format&fit=crop&w=300&q=80" },
  ],
  explore: Array.from({ length: 12 }, (_, i) => ({
    id: i + 100,
    title: ["Maratón Solidaria", "Spinning Extreme", "Fútbol 7", "Crossfit Open", "Ruta Senderismo", "Boxeo Principiantes"][i % 6],
    category: ["Running", "Gym", "Futbol", "Crossfit", "Outdoor", "Boxeo"][i % 6],
    location: ["Centro Ciudad", "Polideportivo Norte", "Playa San Juan", "Montaña Mágica"][i % 4],
    date: getRandomDate(),
    members: Math.floor(Math.random() * 30) + 5,
    description: "Únete a esta actividad, conoce gente y mejora tu forma física. Plazas limitadas.",
    img: `https://images.unsplash.com/photo-${['1517836357463-d25dfeac3438', '1574680096141-1cddd32e04ca', '1601422407692-ec4eeec1d9b3', '1526506118085-60ce8714f8c5'][i % 4]}?auto=format&fit=crop&w=300&q=80`
  })),
  groups: [
    { id: 901, nombre: "Los Madrugadores", actividad: "Gimnasio", horario: "L-X-V 07:00" },
    { id: 902, nombre: "Padel Weekend", actividad: "Padel", horario: "Sábados 10:00" }
  ],
  chat: [
    { id: 1, from: 'bot', text: '¡Hola Gerardo! Soy FidyBot 🤖. ¿Listo para entrenar hoy?' }
  ]
};