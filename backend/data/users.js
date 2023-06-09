import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: await bcrypt.hash("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: await bcrypt.hash("123456", 10),
  },
  {
    name: "Jane User",
    email: "Jane@example.com",
    password: await bcrypt.hash("123456", 10),
  },
]

export default users
