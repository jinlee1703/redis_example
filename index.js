import Redis from "ioredis";
import redisConfig from "./config/redis.config.js";

(() => {
  console.log(`Redis Connection Start!!!`);

  const redis = new Redis({
    host: redisConfig.host,
    port: redisConfig.port,
  });

  console.log(`Redis Connect Success!!! \n`);

  console.log("Redis IO Test START!!!");
  const key = "test_key";
  const value = "test_value";

  console.log(`set ${key}: ${value}`);
  redis.set(key, value);

  console.log(`get ${key}`);
  redis.get(key, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });
  process.exit();
})();
