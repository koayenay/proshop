import mongoose from "mongoose"
import dotenv from "dotenv"
import colors from "colors"
import users from "../data/users"
import products from "../data/products"
import User from "./userModel"
import Product from "./productModel"
import Order from "./orderModel"
import connectDB from "../config/db"

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Products.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser, 4.48
      }
    })
  } catch (error) {}
}
