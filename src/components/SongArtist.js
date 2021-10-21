import { Button } from "@material-ui/core";
import { margin } from "@material-ui/system";

const styles = {
  Container: {
    right: "90px",
    top: "100px",
    maxWidth: 345,
    border: "4px solid #27CCDA ",
    boxShadow: "0 3px 6px 0 rgba(49, 196, 190, 0.75)",
    background: "rgb(0,0,0,0.6)",
  },
  media: {
    height: 200,
    right:"190px",
    
  },
  img:{
    
    paddingLeft:"60px"
  },
  cardBox: {
    width: "340px",
    height: "300px",
    overflow: "auto",
  },
  bioTitle: {
    color: "#fff",
    fontWeight: "bolder",
    paddingLeft:"100px"
  },
  bioInfo: {
    color: "#fff",
    fontFamily: "Nunito",
    fontSize:"17px",
  },
  infoTag: {
      color: "#1dc976",
      fontWeight: "bolder",
      margin:"15px",
  },
  linkWeb: {
    color: "inherit",
    
  },
  artistButton: {
    color: "#fff",
    textDecorator: "none",
    backgroundColor: "#1dc976",
    margin:"15px",
    
  },

  
};

const SongArtist = ({ artist }) => {
    return (
      <section style={styles.Container}>
        <section style={styles.img}>
        <img style={styles.media} src={artist.strArtistThumb} alt={artist.strArtist} />
        </section>
        <section style={styles.cardBox}>
        <h3 style={styles.bioTitle}>{artist.strArtist}</h3>
        <blockquote style={styles.bioInfo}>{artist.strBiographyEN}</blockquote>
        <p ></p>
        <p style={styles.infoTag}>
          {artist.intBornYear} - {artist.intDiedYear || "Presente"}
        </p>
        <p style={styles.infoTag}>{artist.strCountry}</p>
        <p style={styles.infoTag}>
          {artist.strGenre} - {artist.strStyle}
        </p>
        </section>
        

        <Button style={styles.artistButton} size="small">
        <a style={styles.linkWeb} href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">
          Sitio Web Oficial
        </a>
        </Button>
        
      </section>
    );
  };
  
  export default SongArtist;