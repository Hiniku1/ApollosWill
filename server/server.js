import express from "express";
import mariadb from "mariadb";
import cors from "cors";

const pool = mariadb.createPool({
  host: "localhost",
  user: "hiniku",
  password: "obviousthings",
  database: "ApollosWill",
  connectionLimit: 5,
});

const app = express();
const PORT = 3011;

let isOnList;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

/* Login Things */

app.post("/login", async (req, res) => {
  const conn = await pool.getConnection();
  try {

    const checkLogin = await conn.query(
      "SELECT * from User WHERE login = ? AND password = ?",
      [req.body[0].login, req.body[0].password]
    );
    
    if (checkLogin[0] == undefined) {
      res.send(false);
    } else res.send(JSON.stringify(checkLogin[0].id));
  } catch (err) {
    console.log(err);
  } finally {
    if (conn) {
      conn.end();
    }
  }
});

app.post("/signUp", async (req, res) => {
  const conn = await pool.getConnection();
  try {
    console.log(req.body);

    const checkLogin = await conn.query(
      "INSERT INTO User (login, password) VALUES (?, ?)",
      [req.body[0].login, req.body[0].password]
    );


  } catch (err) {
    console.log(err);
  } finally {
    if (conn) {
      conn.end();
    }
  }
});

/* List Things */


/* Get All Anime From User List */

app.post("/getAnimeOnList", async (req, res) => {
  const conn = await pool.getConnection();
  try {

    const getList = await conn.query(
      "SELECT User_List.id_user, User_List.id_anime, User_List.anime_state, User_List.rating, User_List.episodes_watched, Anime.synopsis, Anime.en_jp_title FROM User_List INNER JOIN Anime ON User_List.id_anime = Anime.id WHERE id_user = ? ",
      [req.body[0].id]
    );


    res.send(getList);
  } catch (err) {
    console.log(err);
  } finally {
    if (conn) {
      conn.end();
    }
  }
});

/* Front Page */

/* Get Anime Info By Id */

app.post("/getAnimeInfo", async (req, res) => {
  const conn = await pool.getConnection();
  try {

    const animeInfo = await conn.query(
      "SELECT * from Anime WHERE id = ?",
      [req.body[0].id]
    );
    
    res.send(animeInfo[0])

  } catch (err) {
    console.log(err);
  } finally {
    if (conn) {
      conn.end();
    }
  }
});



/* Add Anime */

app.post("/addAnime", async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const insertList = await conn.query(
      "INSERT INTO User_List (id_user, id_anime, anime_state, rating, episodes_watched) VALUES(?,?,?,?,?)",
      [req.body.userId, req.body.id, "Plan To Watch", 0, 0]
    );

  } catch (err) {
    console.log(err);
  } finally {
    if (conn) {
      conn.end();
    }
  }
});

/* Remove Anime */

app.post("/removeAnime", async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const removeFromList = await conn.query(
      "DELETE FROM User_List WHERE (id_anime = ? AND id_user = ?)",
      [req.body.id, req.body.userId]
    );
  } catch (err) {
    console.log(err);
  } finally {
    if (conn) {
      conn.end();
    }
  }
});

/* Updating Anime data (anime state, episodes watched, rating) */

app.post("/postListData", async (req, res) => {
  const conn = await pool.getConnection();
  try {
    const updateListData = await conn.query(
      "UPDATE User_List SET anime_state = ?, rating = ?, episodes_watched = ? WHERE id_anime = ? AND id_user = ?",
      [
        req.body.animeState,
        req.body.score,
        req.body.episodesWatched,
        req.body.id,
        req.body.userId
      ]
    );
  } catch (err) {
    console.log(err);
  } finally {
    if (conn) {
      conn.end();
    }
  }
});

/* Search if the anime is on the list and Getting the List Data (anime state, episodes watched, rating)*/

app.post("/searchAnimeOnList", async (req, res) => {
  const conn = await pool.getConnection();

  console.log(req.body)

  let listData = [{
    isOnList: false,
    episodesWatched: 0,
    scoreGiven: 0,
    animeState: ""
  }]

  try {

    console.log(req.body.userId)

    const getList = await conn.query(
      "SELECT * FROM User_List WHERE (id_anime = ? AND id_user = ?)",
      [req.body.id, req.body.userId]
    );

    try {
      console.log(getList[0].id_anime);
      const episodeScoreData = await conn.query(
        "SELECT episodes_watched, rating, anime_state FROM User_List WHERE (id_anime = ? AND id_user = ?)",
        [req.body.id, req.body.userId]
      );
      
        listData = [{
          isOnList: true,
          episodesWatched: episodeScoreData[0].episodes_watched,
          scoreGiven: episodeScoreData[0].rating,
          animeState: episodeScoreData[0].anime_state
        }]

    } catch (err) {
      console.log("kk bro n tem");
      listData = [{
        isOnList: false,
        episodesWatched: 0,
        scoreGiven: 0,
        animeState: ""
      }]
    }

    res.send(listData[0]);
  } catch (err) {
    console.log(err);
  } finally {
    if (conn) {
      conn.end();
    }
  }
});

/* Searching anime on the Anime Search Page */
app.post("/searchAnime", async (req, res) => {
  const conn = await pool.getConnection();
  try {
    let anime = req.body.search + "%";

    const searchAnime = await conn.query(
      "SELECT * from Anime WHERE UPPER (en_title) LIKE ?",
      [anime]
    );

    res.send(searchAnime)

  } catch (err) {
    console.log(err);
  } finally {
    if (conn) {
      conn.end();
    }
  }
});

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));
