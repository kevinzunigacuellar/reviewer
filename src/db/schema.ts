import {
  boolean,
  pgTable,
  serial,
  text,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const WebTable = pgTable("webs", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  url: text("url").notNull().unique(),
  reviewed: boolean("reviewed").default(false).notNull(),
  version: integer("version").notNull().default(1),
  twich_id: text("twitch_id").notNull(),
  owner_twitch_id: text("owner_twitch_id").notNull(),
});

export const LinkedInTable = pgTable("linkedins", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  linkedin_id: text("linkedin_id").notNull().unique(),
  reviewed: boolean("reviewed").default(false).notNull(),
  version: integer("version").notNull().default(1),
  twich_id: text("twitch_id").notNull(),
  owner_twitch_id: text("owner_twitch_id").notNull(),
});

export type Web = InferSelectModel<typeof WebTable>;
export type NewWeb = InferInsertModel<typeof WebTable>;

export type LinkedIn = InferSelectModel<typeof LinkedInTable>;
export type NewLinkedIn = InferInsertModel<typeof LinkedInTable>;
