-- CreateTable
CREATE TABLE "Poem" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" TEXT,

    CONSTRAINT "Poem_pkey" PRIMARY KEY ("id")
);
