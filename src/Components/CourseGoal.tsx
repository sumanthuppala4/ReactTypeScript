import type { ReactNode } from "react";

type CourseGoalProps = {
  title: string;
  description: string;
  children?: ReactNode;
  id: number;
  onDelete?: (id: number) => void;
};

//Interface can also be used instead of type
// Uncomment the following lines to use an interface instead of a type
/* 
interface CourseGoalProps  {
  title: string;
  description: string;
}; */

export default function CourseGoal({
  title,
  description,
  id,
  onDelete = () => {},
  children,
}: CourseGoalProps) {
  return (
    <div className="course-goal">
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="goal-id">ID: {id}</p>
      {children}

      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete Goal
      </button>
    </div>
  );
}
