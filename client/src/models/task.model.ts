export interface ITask {
  // id: number;
  title: string;
  description: string;
  priority: number;
  category: string;
  due_date: string;
  time: string;
  completed: boolean;
  subtasks: ISubtask[];
  status: string;
  reminder: number;
}

export interface ISubtask {
  id: number;
  title: string;
  completed: boolean;
  description: string;
  due_date: string;
  status: string;
}
