'use server';

import { prisma } from "@/database";
import { revalidatePath } from "next/cache";
import { redirect } from "@/navigation";

export const addTask = async (prevState: any, data: FormData) => {
  const task = data.get('task') as string;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: 'pigga@gmail.com'
      }
    })
    const slug = task.toLowerCase().replaceAll(' ', '-')
    
    if (!user?.id) return { success: false }

    await prisma.task.create({
      data: {
        task,
        slug: slug, 
        userID: user.id
      }
    })

    revalidatePath('/');

    return {
      success: true
    }
  } catch {
    return {
      success: false
    }
  }
}

// Mark as complete / incomplete
export const toggleCompleted = async (id: string, completed: boolean) => {
  try {
    await prisma.task.update({
      where: {
        id
      },
      data: {
        completed
      }
    })

    revalidatePath('/')

    return {
      success: true
    }
  } catch {
    return {
      success: false
    }
  }
}

// Delete task
export const deleteTask = async (slug: string) => {
  try {
    await prisma.task.delete({
      where: {
        slug
      }
    })
  } catch (e) {
    return {
      success: false
    }
  }
  
  redirect('/')
}

// Filter
export const filterTasks = async (value: string) => {
  const filteredTasks = await prisma.task.findMany();
  
  return {
    tasks: filteredTasks
  }
}