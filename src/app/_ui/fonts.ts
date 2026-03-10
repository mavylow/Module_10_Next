import { Poppins } from "next/font/google"
import { Rubik } from "next/font/google"

export const poppins = Poppins({weight: ["300" , "500", "700"], subsets: ['latin']})
export const rubik = Rubik({weight: ["300" , "500", "700"], subsets: ['cyrillic']})