import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { cache } from "react";

import { db } from "@/db/drizzle";
import {
  challengeProgress,
  courses,
  lessons,
  units,
  userProgress,
} from "@/db/schema";

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();

  return data;
});

export const getCourseById = cache(async (courseId: number) => {
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
  });

  return data;
});

export const getCourseProgress = cache(async () => {
  const { userId } = await auth();

  const userProgress = await getUserProgress();

  if (!userId || !userProgress?.activeCourseId) {
    return null;
  }

  const unitsInActiveCourse = await db.query.units.findMany({
    where: eq(units.courseId, userProgress.activeCourseId),
    with: {
      lessons: {
        orderBy: (lessons, { asc }) => [asc(lessons.order)],
        with: {
          unit: true,
          challenges: {
            with: {
              challengeProgress: {
                where: eq(challengeProgress.userId, userId),
              },
            },
          },
        },
      },
    },
    orderBy: (units, { asc }) => [asc(units.order)],
  });

  const firstUncompletedLesson = unitsInActiveCourse
    .flatMap((unit) => unit.lessons)
    .find((lesson) =>
      lesson.challenges.some(
        (challenge) =>
          !challenge.challengeProgress ||
          challenge.challengeProgress.length === 0 ||
          challenge.challengeProgress.some(
            (progress) => progress.completed === false
          )
      )
    );

  const data = {
    activeLesson: firstUncompletedLesson,
    activeLessonId: firstUncompletedLesson?.id,
  };

  return data;
});

export const getUnits = cache(async () => {
  const { userId } = await auth();

  const userProgress = await getUserProgress();

  if (!userId || !userProgress?.activeCourseId) {
    return [];
  }

  const unitsWithLessonsWithChallenges = await db.query.units.findMany({
    where: eq(units.courseId, userProgress.activeCourseId),
    with: {
      lessons: {
        orderBy: (lessons, { asc }) => [asc(lessons.order)],
        with: {
          challenges: {
            orderBy: (challenges, { asc }) => [asc(challenges.order)],
            with: {
              challengeProgress: {
                where: eq(challengeProgress.userId, userId),
              },
            },
          },
        },
      },
    },
    orderBy: (units, { asc }) => [asc(units.order)],
  });

  const data = unitsWithLessonsWithChallenges.map((unit) => {
    const lessonsWithCompletedStatus = unit.lessons.map((lesson) => {
      if (lesson.challenges.length === 0) {
        return { ...lesson, completed: false };
      }

      const allCompletedChallenges = lesson.challenges.every((challenge) => {
        return (
          challenge.challengeProgress &&
          challenge.challengeProgress.length > 0 &&
          challenge.challengeProgress.every((progress) => progress.completed)
        );
      });

      return { ...lesson, completed: allCompletedChallenges };
    });

    return { ...unit, lessons: lessonsWithCompletedStatus };
  });

  return data;
});

export const getLesson = cache(async (id?: number) => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const courseProgress = await getCourseProgress();

  const lessonId = id || courseProgress?.activeLessonId;

  if (!lessonId) {
    return null;
  }

  const lessonsWithChallenges = await db.query.lessons.findFirst({
    where: eq(lessons.id, lessonId),
    with: {
      challenges: {
        with: {
          challengeOptions: true,
          challengeProgress: { where: eq(challengeProgress.userId, userId) },
        },
        orderBy: (challenges, { asc }) => [asc(challenges.order)],
      },
    },
  });

  if (!lessonsWithChallenges || !lessonsWithChallenges.challenges) {
    return null;
  }

  const normalizedChallenges = lessonsWithChallenges.challenges.map(
    (challenge) => ({
      ...challenge,
      completed:
        challenge.challengeProgress &&
        challenge.challengeProgress.length > 0 &&
        challenge.challengeProgress.every((progress) => progress.completed),
    })
  );

  const data = { ...lessonsWithChallenges, challenges: normalizedChallenges };

  return data;
});

export const getLessonPercentage = cache(async () => {
  const courseProgress = await getCourseProgress();

  if (!courseProgress?.activeLessonId) {
    return 0;
  }

  const lesson = await getLesson(courseProgress.activeLessonId);

  if (!lesson) {
    return 0;
  }

  const completedChallenges = lesson.challenges.filter(
    (challenge) => challenge.completed
  );

  const data = Math.round(
    (completedChallenges.length / lesson.challenges.length) * 100
  );

  return data;
});

export const getUserProgress = cache(async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: { activeCourse: true },
  });

  return data;
});
