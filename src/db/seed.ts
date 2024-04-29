import {
  LinkedInTable,
  WebTable,
  type NewWeb,
  type NewLinkedIn,
} from "@/db/schema";
import { db } from "@/db/drizzle";

const webData: NewWeb[] = [
  {
    url: "https://www.kevinzunigacuellar.com",
    owner_twitch_id: "afor_digital",
    twich_id: "kevinzunigacuellar",
    version: 1,
  },
  {
    url: "unai.com",
    owner_twitch_id: "afor_digital",
    twich_id: "unai",
    version: 2,
  },
];

const linkedInData: NewLinkedIn[] = [
  {
    linkedin_id: "kevinzunigacuellar",
    owner_twitch_id: "afor_digital",
    twich_id: "kevinzunigacuellar",
    version: 1,
  },
  {
    linkedin_id: "unaicerdo",
    owner_twitch_id: "afor_digital",
    twich_id: "unai",
    version: 2,
  },
];

async function main() {
  try {
    console.log("Clearing data...");
    await db.delete(WebTable);
    await db.delete(LinkedInTable);

    console.log("Seeding database...");
    await db.insert(WebTable).values(webData);
    await db.insert(LinkedInTable).values(linkedInData);
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

main();
