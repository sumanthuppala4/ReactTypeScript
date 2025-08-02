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
        <label>
          Title:
          <input type="text" name="title" ref={titleRef} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" name="description" ref={descriptionRef} />
        </label>
        <br />
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
}
