import { useState } from "react";
import "./App.css";
import CourseGoalList from "./Components/CourseGoalList";
import Header from "./Components/Header";
import globalImage from "./assets/react.svg";
import AddGoal from "./Components/AddGoal";
import Button from "./Components/Button";

export interface CourseGoalInterface {
  id: number;
  title: string;
  description: string;
}

function App() {
  const [goalsList, setGoalsList] = useState<CourseGoalInterface[]>([]);

  const handleAddGoal = (title: string, description: string) => {
    const newGoal: CourseGoalInterface = {
      id: Date.now(),
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
        <p>React TypeScript Course</p>
      </Header>

      <Button en="button" onClick={() => console.log("Button clicked!")}>
        Click Me
      </Button>
      <Button en={"link"} href={"https://www.google.com"}>
        Go to React
      </Button>

      <AddGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goalsList={goalsList} onDelete={handleDeleteGoal} />
    </>
  );
}

export default App;
