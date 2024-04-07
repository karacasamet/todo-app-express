/*
  Warnings:

  - A unique constraint covering the columns `[userId,id]` on the table `Todo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Todo_userId_id_key" ON "Todo"("userId", "id");
