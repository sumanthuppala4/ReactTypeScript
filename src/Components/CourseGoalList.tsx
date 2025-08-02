import type { CourseGoalInterface } from "../App";
import CourseGoal from "./CourseGoal";

interface CourseGoalListProps {
  goalsList: CourseGoalInterface[];
  onDelete?: (id: number) => void;
}

export default function CourseGoalList({ goalsList, onDelete }: CourseGoalListProps) {
  return (
    <div>
      <h1>Course Goals</h1>

      <div className="goals-list">
        {goalsList.map((goal) => (
          <CourseGoal
            key={goal.id}
            title={goal.title}
            description={goal.description}
            id={goal.id}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
