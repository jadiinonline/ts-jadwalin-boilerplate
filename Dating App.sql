CREATE TYPE "GENDER_TYPE" AS ENUM (
  'MALE',
  'FEMALE'
);

CREATE TYPE "CONTENT_TYPE" AS ENUM (
  'PHOTO',
  'VIDEO'
);

CREATE TYPE "PURCHASE_TYPE" AS ENUM (
  'VERIFIED_PROFILE',
  'UNLIMITED_QUOTA'
);

CREATE TYPE "ACTIVITY_TYPE" AS ENUM (
  'PASS',
  'LIKED'
);

CREATE TABLE "users" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "email" varchar,
  "password" varchar,
  "password_salt" varchar,
  "verified_user" boolean,
  "premium_user" boolean,
  "total_quota" int,
  "unlimited_quota" boolean,
  "created_at" timestamp DEFAULT 'now()',
  "updated_at" timestamp DEFAULT 'now()'
);

CREATE TABLE "user_profile" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "user_id" uuid,
  "profile_picture" varchar,
  "bio" text,
  "work" varchar,
  "education" varchar,
  "gender" GENDER_TYPE,
  "location" varchar,
  "hometown" varchar,
  "created_at" timestamp DEFAULT 'now()',
  "updated_at" timestamp DEFAULT 'now()'
);

CREATE TABLE "user_photo_videos" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "user_id" uuid,
  "url_content" varchar,
  "content_type" CONTENT_TYPE,
  "set_as_preview" boolean,
  "created_at" timestamp DEFAULT 'now()',
  "updated_at" timestamp DEFAULT 'now()'
);

CREATE TABLE "transaction_history" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "user_id" uuid,
  "purchase_total" float,
  "purchase_type" PURCHASE_TYPE,
  "created_at" timestamp DEFAULT 'now()',
  "updated_at" timestamp DEFAULT 'now()'
);

CREATE TABLE "users_activity" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "user_logged_in" uuid,
  "user_interact" uuid,
  "activity_type" ACTIVITY_TYPE,
  "created_at" timestamp DEFAULT 'now()',
  "updated_at" timestamp DEFAULT 'now()'
);

ALTER TABLE "user_profile" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "user_photo_videos" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "transaction_history" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "users_activity" ADD FOREIGN KEY ("user_logged_in") REFERENCES "users" ("id");

ALTER TABLE "users_activity" ADD FOREIGN KEY ("user_interact") REFERENCES "users" ("id");
