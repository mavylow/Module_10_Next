import { Poppins } from "next/font/google"
import { Rubik } from "next/font/google"

export const poppins = Poppins({weight: ["100", "200" ,"400", "500", "700"], subsets: ['latin']})
export const rubik = Rubik({weight: [ "300" ,"400" , "500", "700"], subsets: ['cyrillic']})