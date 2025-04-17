import TodoForm from "./_components/TodoForm";
import TodoList from "./_components/TodoList";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">할 일 목록</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
