'use server';

import { prisma } from "@/database";
import { revalidatePath } from "next/cache";
import bcrypt from 'bcrypt'

export const register = async (prevState: any, data: FormData) => {
  const password = data.get('password') as string
  const email = data.get('email') as string
  const emailUsed = await prisma.user.findMany({ where: { email } })
  const saltRounds = 10;

  // Check if email is used
  if (Array.isArray(emailUsed) && emailUsed.length !== 0) {
    return {
      message: 'Email is already in use',
      success: false,
      reload: Math.random()*10,
      reset: false
    }
  }
  
  // Check for errors
  if (!password || !email) {
    return {
      message: 'Please fill out the fields.',
      success: false,
      reload: Math.random()*10,
      reset: false
    }
  }

  // Check for password length
  if (password.length < 5) {
    return {
      message: 'Password must be longer than 4 characters',
      success: false,
      reload: Math.random()*10,
      reset: false
    }
  }

  // Add to database
  try {
    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    await prisma.user.create({
      data: {
        email,
        password: encryptedPassword
      }
    })
  
    // Revalidate cache and give back a message
    revalidatePath('/user')
  
    return {
      message: 'Successfully added a new user',
      success: true,
      reload: Math.random()*10, // Trigger useEffect to check every time its submitted
      reset: true
    }
  } catch {
    return {
      message: 'Something went wrong, try again.',
      success: false,
      reload: Math.random()*10,
      reset: false
    }
  }
}
