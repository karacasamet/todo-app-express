import { RequestHandler } from "express";
import prisma from "../../db";
import { CustomRequest } from "../../shared/models/customRequest.interface";

export const getTodos: RequestHandler = async (req: CustomRequest, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    include: { todos: true },
  });
  res.status(200).json({ data: user?.todos });
};

export const getOneTodo: RequestHandler = async (req: CustomRequest, res) => {
  const todo = await prisma.todo.findFirst({
    where: { id: req.params.id, userId: req.user.id },
  });
  res.status(200).json({ data: todo });
};

export const createTodo: RequestHandler = async (req: CustomRequest, res) => {
  const todo = await prisma.todo.create({
    data: { ...req.body, userId: req.user.id },
  });
  res.status(201).json({ data: todo });
};

export const updateTodo: RequestHandler = async (req: CustomRequest, res) => {
  const updatedTodo = await prisma.todo.update({
    where: {
      userId_id: {
        id: req.params.id,
        userId: req.user.id,
      },
    },
    data: req.body,
  });
  res.status(200).json({ data: updatedTodo });
};

export const deleteTodo: RequestHandler = async (req: CustomRequest, res) => {
  const todo = await prisma.todo.findFirst({
    where: { id: req.params.id, userId: req.user.id },
  });

  if (!todo) {
    return res.status(404).json();
  }
  const deleted = await prisma.todo.deleteMany({
    where: { id: req.params.id, userId: req.user.id },
  });
  res.status(200).json({ data: deleted });
};
