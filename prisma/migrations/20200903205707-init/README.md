# Migration `20200903205707-init`

This migration has been generated by Bram Borggreve at 9/3/2020, 3:57:07 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Course" ADD COLUMN "authorId" integer

ALTER TABLE "public"."Course" ADD FOREIGN KEY ("authorId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200903000840-init..20200903205707-init
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -16,16 +16,19 @@
   email     String   @unique
   firstName String?
   lastName  String?
   password  String
+  courses   Course[]
 }
 model Course {
   id          Int      @default(autoincrement()) @id
   title       String
   description String?
   imageUrl    String?
   lessons     Lesson[]
+  author      User?    @relation(fields: [authorId], references: [id])
+  authorId    Int?
 }
 model Lesson {
   id          Int     @default(autoincrement()) @id
```
