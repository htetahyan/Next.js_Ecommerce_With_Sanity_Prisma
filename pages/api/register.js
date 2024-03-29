
import prisma from '../../lib/prisma'


export default async function handler(req, res) {
  const { name, email, password } = req.body;


 
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email already exists. Please use a different email." });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    })
    res.status(201).json({ user });
  } catch (err) {

    res.status(400).json({ message: "Error creating user" });
  }
}