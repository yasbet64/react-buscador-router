import SongTableRow from "./SongTableRow";

const styles = {
    table:{
      display: "block",
       width: "100%",
       margin: "10px 0",
       padding: "10px",
       backgroundColor: "#EFF7F9 ",
       transition: ".3s box-shadow",
       borderRadius: "13px",
    },
    title: {
        color: "#000",
        fontFamily: "Nunito",
        fontSize:"28px",
        marginLeft:"10px"
        
     },
    
  }
const SongTable  =({mySongs, handleDeleteSong })=> {
    
    return (
        <div>
            <h3 style={styles.title}>Mis Canciones favoritos</h3>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th colSpan="2">Artista</th>
                        <th>Cancion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {mySongs.length>0?(mySongs.map((el,index)=> 
                    <SongTableRow 
                    key={index} 
                    el={el} 
                    id={index} 
                    handleDeleteSong={handleDeleteSong}/>)
                    ):(
                        <tr>
                            <td colSpan="4">Sin canciones favoritas</td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    );
    
}
 
export default SongTable ;