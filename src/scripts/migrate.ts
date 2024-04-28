import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { db } from "@/db/drizzle";

async function main() {
  await migrate(db, {
    migrationsFolder: "./drizzle",
  });
}

main()