import { fontSize, height } from "@material-ui/system";

const styles = {
  Container: {
    left: "90px",
    top: "90px",
    right: "90px",
    maxWidth: 345,
    border: "4px solid #27CCDA ",
    boxShadow: "0 3px 6px 0 rgba(49, 196, 190, 0.75)",
    background: "rgb(0,0,0,0.6)",
    
  },
  cardBox: {
    width: "340px",
    height: "500px",
    overflow: "auto",
  },
  lyricsStyle: {
    fontWeight: "bold",
    fontFamily: "Nunito"
  },
  lyricsTitle: {
      color: "#fff",
      paddingLeft:"80px"
  },
  lyricsText: {
      color: "#fff",
      whiteSpace: "pre-wrap",
    fontFamily: "Nunito",
    fontSize:"17px",
}
};

const SongLyric = ({ title, lyrics }) => {

    return (
      <section style={styles.Container} >
        <h3 style={styles.lyricsTitle}>{title}</h3>
        <section style={styles.cardBox}>
        <blockquote style={styles.lyricsText}>{lyrics}</blockquote>
        </section>
      </section>
    );
  };
  
  export default SongLyric;