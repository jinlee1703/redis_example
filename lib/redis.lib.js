import Redis from "ioredis";
import redisConfig from "../config/redis.config.js";

const redisOption = { host: redisConfig.host, port: redisConfig.port };

async function setValue(key, value) {
  const redis = new Redis(redisOption);

  await redis.set(key, value);
  console.log(`Store {"${key}": "${value}"}!!! \n`);
}

async function getValue(key) {
  const redis = new Redis(redisOption);

  const value = await redis.get(key);
  console.log(`The Value of ${key} is "${value}"!!! \n`);
  return value;
}

export { setValue, getValue };
