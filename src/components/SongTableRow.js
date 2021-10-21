import { useHistory } from "react-router";

const styles = {
    
    buttonStyle: {
      border: "none",
      padding: "10px",
      color: "#096571",
      fontSize: "16px",
      fontWeight: "700",   
      outline: "none",
      background: "linear-gradient(to left, #BCF6F7 , #BCF6F7)",
      boxShadow: "0 4px 15px 0 rgba(49, 196, 190, 0.75)",
      textArea: "",
   },
   
  }
const SongTableRow =({id, el, handleDeleteSong}) =>{
    let {bio,search}=el;
    let avatar=bio.artists[0].strArtistThumb;

    let avatarStyles={
        with:"auto",
        height:"50px",

    }

    let history=useHistory();
    return ( 
        <tr>
            <td><img style={avatarStyles} src={avatar} alt={search.artist}/></td>
            <td>{search.artist}</td>
            <td>{search.song}</td>
            <td>
                <button style={styles.buttonStyle} onClick={()=>history.push(`/${id}`)}>Ver</button>
                <button style={styles.buttonStyle} onClick={()=>handleDeleteSong(id,search.song)}>Eliminar</button>
            </td>
        </tr>
     );
}

export default SongTableRow ;