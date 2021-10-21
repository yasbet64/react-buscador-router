import { margin } from "@material-ui/system";
import React, { useState } from "react";


const styles = {
  title: {
    color: "#000",
    fontFamily: "Nunito",
    fontSize:"30px",
    marginLeft:"10px"
    
 },
  input:{
    display: "block",
     width: "100%",
     margin: "10px 0",
     padding: "10px",
     backgroundColor: "#fafafa",
     border: "1px solid",
     borderRadius: "13px",
     transition: ".3s box-shadow",
  },
  buttonStyle: {
    border: "none",
    padding: "10px",
    color: "#096571",
    fontSize: "16px",
    fontWeight: "700",   
    outline: "none",
    background: "linear-gradient(to left, #40e495, #40e495)",
    boxShadow: "0 4px 15px 0 rgba(49, 196, 190, 0.75)",
    textArea: "",
 },
}

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch, handleSaveSong }) => {
  const [form, setForm] = useState(initialForm);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Datos Incompletos");
      setIsDisabled(true );
      return;
    };

    handleSearch(form);
    setForm(initialForm);
    setIsDisabled(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 style={styles.title}>Busca cualquier Canción</h2>
        <input 
          style={styles.input}
          type="text"
          name="artist"
          placeholder="Nombre del Intérprete"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          style={styles.input}
          type="text"
          name="song"
          placeholder="Nombre de la Canción"
          onChange={handleChange}
          value={form.song}
        />
        <input style={styles.buttonStyle}  type="submit" value="Buscar Canción" className="buttonStyle" />
        <input  type="button" onClick={handleSaveSong} value="Favorito" disabled={isDisabled && "disabled"}/>
        
      </form>
    </div>
  );
};

export default SongForm;