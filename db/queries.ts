import { cache } from "react";

import { db } from "@/db/drizzle";

export const getCourses = cache(async () => {
  const courses = await db.query.courses.findMany();

  return courses;
});
