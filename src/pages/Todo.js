import React, { useState, useEffect } from 'react';
import { Input, Button, List, Checkbox, Space } from 'antd';
import { DeleteOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';
import { dataGet, dataSet, dataEdit, dataDelete, logoutUser } from '../config/firebase/firebaseconfig';
import { auth } from '../config/firebase/FirebaseFunction';
import { Link } from 'react-router-dom';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");
  const userId = auth.currentUser?.uid;

  useEffect(() => {
    const fetchTasks = async () => {
      if (userId) {
        const tasksData = await dataGet('tasks', userId);
        setTasks(tasksData?.tasks || []);
      }
    };
    fetchTasks();
  }, [userId]);

  const saveTasks = async (updatedTasks) => {
    await dataSet('tasks', userId, { tasks: updatedTasks });
    setTasks(updatedTasks);
  };

  const handleAddTask = async () => {
    if (newTask.trim() === "") return;
    const newTaskObj = { id: Date.now(), text: newTask, completed: false };
    const updatedTasks = [...tasks, newTaskObj];
    await saveTasks(updatedTasks);
    setNewTask("");
  };

  const handleToggleCompletion = async (taskId) => {
    const updatedTasks = tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task);
    await dataEdit('tasks', userId, { tasks: updatedTasks });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = async (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    await dataSet('tasks', userId, { tasks: updatedTasks });
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId, taskText) => {
    setEditTaskId(taskId);
    setEditTaskText(taskText);
  };

  const handleSaveEditTask = async () => {
    const updatedTasks = tasks.map(task =>
      task.id === editTaskId ? { ...task, text: editTaskText } : task
    );
    await dataEdit('tasks', userId, { tasks: updatedTasks });
    setTasks(updatedTasks);
    setEditTaskId(null);
    setEditTaskText("");
  };

  const handleLogout = async () => {
    await logoutUser();
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-800 text-white">
        <h2 className="text-3xl font-bold">Todo Website</h2>
        <ul className="flex space-x-6">
          <li>
            {userId && (
              <Button type="link" onClick={handleLogout} className="text-lg text-red-500">
                Log Out
              </Button>
            )}
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center py-10 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Todo List</h1>
          
          <Space direction="vertical" className="mb-6 w-full">
            <Input
              placeholder="Add a new task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="rounded-lg border-gray-300 p-3"
            />
            <Button
              type="primary"
              onClick={handleAddTask}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Add Task
            </Button>
          </Space>

          <List
            bordered
            dataSource={tasks}
            renderItem={(task) => (
              <List.Item key={task.id} className="flex justify-between items-center p-3">
                <Space>
                  <Checkbox
                    checked={task.completed}
                    onChange={() => handleToggleCompletion(task.id)}
                  />
                  {editTaskId === task.id ? (
                    <Input
                      value={editTaskText}
                      onChange={(e) => setEditTaskText(e.target.value)}
                      onPressEnter={handleSaveEditTask}
                    />
                  ) : (
                    <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
                      {task.text}
                    </span>
                  )}
                </Space>

                <Space>
                  {editTaskId === task.id ? (
                    <Button
                      type="text"
                      icon={<SaveOutlined />}
                      onClick={handleSaveEditTask}
                      className="text-green-500"
                    />
                  ) : (
                    <Button
                      type="text"
                      icon={<EditOutlined />}
                      onClick={() => handleEditTask(task.id, task.text)}
                      className="text-blue-500"
                    />
                  )}
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    onClick={() => handleDeleteTask(task.id)}
                    className="text-red-500"
                  />
                </Space>
              </List.Item>
            )}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center p-4 bg-gray-800 text-white mt-auto">
        &copy; {new Date().getFullYear()} Todo Website. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Todo;
