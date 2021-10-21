import { fontSize } from "@material-ui/system";
import React, { useState, useEffect } from "react";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import Error404 from "../pages/Error404";
import SongPage from "../pages/SongPage";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import SongTable from "./SongTable";

const styles = {
  title: {
    color: "#fafafa",
    fontFamily: "Nunito",
    fontSize:"35px"
},
 menu:{
  color: "#000",
  fontFamily: "Nunito",
  fontSize:"25px",
 },
 men:{
   marginBottom:"20px"
 }
}

let mySongsinit= JSON.parse(localStorage.getItem("mySongs"))||[];
const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsinit);


  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      //console.log(artistUrl, songUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      //console.log(artistRes, songRes);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();
    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [search,mySongs]);

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };

  const handleSaveSong=()=>{
    alert("Guardar canciones en favoritos");
    let currentSong={
      search,
      lyric,
      bio
    }

    let songs=[...mySongs,currentSong]

    setMySongs(songs);
    setSearch(null);
    localStorage.setItem("mySongs",JSON.stringify(songs));
  };

  const handleDeleteSong=(id,s)=>{
    
    let isDelete=window.confirm(`¿Estas seguro de eliminar la cancion ${s}`);

    if(isDelete){
      let songs= mySongs.filter((el,index)=>index !==id);
      setMySongs(songs);
      localStorage.setItem("mySongs",JSON.stringify(songs));
    }
  };

  return (
    <div className="app">
      
      <HashRouter basename="canciones">
        <header>
        <h2 style={styles.title} >Busca tus canciones favoritas</h2>
        <section style={styles.men}>
        <Link className="link" style={styles.menu} to="/">Home</Link>
        </section>
        </header>
        {loading && <Loader />}
        <article className="grid-1-2">
          <Switch>
            <Route exact path="/">
            <SongForm handleSearch={handleSearch} handleSaveSong={handleSaveSong} />
            
            <SongTable mySongs={mySongs} handleDeleteSong={handleDeleteSong} />
              {search && !loading && (
                <SongDetails search={search} lyric={lyric} bio={bio} />
              )}
            </Route>
            <Route exact path="/:id" children={<SongPage mySongs={mySongs}/>}/>
            <Route path="*"children={<Error404/> }></Route>
          </Switch>
        </article>
      </HashRouter>
    </div>
  );
};

export default SongSearch;