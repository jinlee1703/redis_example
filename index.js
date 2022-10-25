import readlineSync from "readline-sync";
import * as redis from "./lib/redis.lib.js";

(async () => {
  console.log(`Redis IO Program!!!`);

  const key = readlineSync.question("key \t: ");
  const value = readlineSync.question("value \t: ");
  await redis.setValue(key, value);

  const search_key = readlineSync.question("search key \t: ");
  await redis.getValue(search_key);

  process.exit();
})();
