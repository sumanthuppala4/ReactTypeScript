import { useState } from "react";
import "./App.css";
import CourseGoalList from "./Components/CourseGoalList";
import Header from "./Components/Header";
import globalImage from "./assets/react.svg";
import AddGoal from "./Components/AddGoal";

export interface CourseGoalInterface {
  id: number;
  title: string;
  description: string;
}

function App() {
  const [goalsList, setGoalsList] = useState<CourseGoalInterface[]>([]);

  const handleAddGoal = (title: string, description: string) => {
    const newGoal: CourseGoalInterface = {
      id: Date.now(), // Using timestamp as a unique ID
      title: title,
      description: description,
    };
    setGoalsList((prevGoals) => [...prevGoals, newGoal]);
  };

  const handleDeleteGoal = (id: number) => {
    setGoalsList((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };
  return (
    <>
      <Header img={{ src: globalImage, alt: "Global Image" }}>
        <p>This is the header content.</p>
      </Header>
      <h1>Course Goals</h1>
      <p>Manage your course goals effectively.</p>
      <div>
        <AddGoal onAddGoal={handleAddGoal} />
        <CourseGoalList goalsList={goalsList} onDelete={handleDeleteGoal} />
      </div>
    </>
  );
}

export default App;
