import { useRef, type FormEvent } from "react";

type AddGoalProps = { onAddGoal: (title: string, description: string) => void };

export default function AddGoal({ onAddGoal }: AddGoalProps) {
  const handleAddGoal = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = titleRef.current!.value;
    const description = descriptionRef.current!.value;

    e.currentTarget.reset(); 
    onAddGoal(title, description);
  };

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h2>Add a New Goal</h2>
      <form onSubmit={handleAddGoal}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <label htmlFor="title">Title:</label>
          <input
            className="styled-input"
            type="text"
            name="title"
            id="title"
            ref={titleRef}
          />
          <label htmlFor="description" style={{ marginLeft: "1rem" }}>Description:</label>
          <input
            className="styled-input"
            type="text"
            name="description"
            id="description"
            ref={descriptionRef}
          />
        </div>
        <br />
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
}
