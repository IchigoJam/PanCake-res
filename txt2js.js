import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("./sprites.csv");
data.forEach(i => {
  delete i.no;
  delete i.no_hex;
});
const s = `export const PANCAKE_SPRITES = ${JSON.stringify(data, null, 2)};`;
await Deno.writeTextFile("./PANCAKE_SPRITES.js", s);
