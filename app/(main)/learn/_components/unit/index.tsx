import { lessons, units } from "@/db/schema";

import { LessonButton } from "./lesson-button";
import { UnitBanner } from "./unit-banner";

interface UnitProps {
  id: number;
  order: number;
  description: string;
  title: string;
  lessons: (typeof lessons.$inferSelect & { completed: boolean })[];
  activeLesson:
    | (typeof lessons.$inferSelect & { unit: typeof units.$inferSelect })
    | undefined;
  activeLessonPercentage: number;
}

export const Unit = ({
  id,
  order,
  description,
  title,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: UnitProps) => {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, index) => (
          <LessonButton
            key={lesson.id}
            id={lesson.id}
            index={index}
            totalCount={lessons.length - 1}
            locked={!lesson.completed && !(lesson.id === activeLesson?.id)}
            current={lesson.id === activeLesson?.id}
            percentage={activeLessonPercentage}
          />
        ))}
      </div>
    </>
  );
};
