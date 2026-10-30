
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  const [song, setSong] = useState(null);
  const [message, setMessage] = useState("");

  function selectSong(event) {
    const file = event.target.files[0];
    if (file) {
      setSong(file);
      setMessage("Canción cargada correctamente 🎵");
    }
  }

  return (
    <main className="app">
      <header>
        <h1>🎧 Voz & Beats</h1>
        <p>Tu música, separada con inteligencia artificial</p>
      </header>

      <section className="panel">
        <h2>Separador musical</h2>
        <p>Selecciona una canción de tu teléfono</p>

        <label className="upload">
          📁 Seleccionar canción
          <input
            type="file"
            accept="audio/*"
            onChange={selectSong}
            hidden
          />
        </label>

        {song && (
          <div className="song">
            <p>🎵 {song.name}</p>
            <audio
              controls
              src={URL.createObjectURL(song)}
            />
          </div>
        )}

        <button
          disabled={!song}
          onClick={() =>
            setMessage(
              "Canción lista. Próximo paso: conectar el motor de inteligencia artificial."
            )
          }
        >
          Separar voz e instrumentos
        </button>

        {message && <p className="message">{message}</p>}
      </section>

      <section className="tracks">
        <h2>Mis pistas</h2>
        <p>🎤 Voz</p>
        <p>🥁 Batería</p>
        <p>🎸 Bajo</p>
        <p>🎹 Otros instrumentos</p>
      </section>

      <footer>Voz & Beats © 2026</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
