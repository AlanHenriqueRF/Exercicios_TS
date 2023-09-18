import db from "../database/connection";
import { Game, CreateGame } from "../protocols/game-protocol";

async function getGames() {
  return (await db.query<Game>(`SELECT * FROM games`)).rows
}

async function createGame(game: CreateGame) {
  return await db.query<CreateGame>('INSERT INTO games (title,platform) VALUES ($1,$2)',[game.title,game.platform])
}

 async function getGameByTitleAndPlatform(game: CreateGame) {
  const {title,platform} = game;

  const result = await db.query<Game>(`SELECT * FROM games WHERE title=$1 AND platform=$2`,[title,platform])

  return result.rows

}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;