import { db } from "./auth";

/**
 * Checks and increments rate limit for a user/IP.
 * @param identifier User ID or IP address
 * @param limit Max allowed requests per day
 * @returns boolean: true if allowed, false if limit exceeded
 */
export async function checkRateLimit(identifier: string, limit: number): Promise<boolean> {
  const collection = db.collection("rate_limits");
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const docId = `${identifier}_${today}`;

  const result = await collection.findOneAndUpdate(
    { _id: docId as any },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  const count = result?.count || 1;
  return count <= limit;
}

