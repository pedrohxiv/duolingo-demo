import { redirect } from "next/navigation";

import { getLesson, getUserProgress } from "@/db/queries";

import { Quiz } from "../_components/quiz";

interface LessonIdPageProps {
  params: {
    lessonId: number;
  };
}

const LessonIdPage = async ({ params }: LessonIdPageProps) => {
  const [lesson, userProgress] = await Promise.all([
    getLesson(params.lessonId),
    getUserProgress(),
  ]);

  if (!lesson || !userProgress) {
    return redirect("/learn");
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={undefined}
    />
  );
};

export default LessonIdPage;