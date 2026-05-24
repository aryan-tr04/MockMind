// /** @type { import("drizzle-kit").Config } */
// export default { 
//   schema: "./utils/schema.js", 
//   dialect: 'postgresql', 
//   dbCredentials: { 
//   url:'postgresql://theblack:npg_TuPi4lYtOe9C@ep-silent-recipe-a1ziy1xc.ap-southeast-1.aws.neon.tech/AIMOCKER?sslmode=require', 
//   } 
//   };



// import { defineConfig } from "drizzle-kit";
// export default defineConfig({
//   dialect: "postgresql",
//   schema: "./utils/schema.js",
//   dbCredentials: {
//   url:process.env.DATABASE_URL,
//   }
// });

import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url:"postgresql://theblack:npg_TuPi4lYtOe9C@ep-silent-recipe-a1ziy1xc.ap-southeast-1.aws.neon.tech/AIMOCKER?sslmode=require",
  }
});
