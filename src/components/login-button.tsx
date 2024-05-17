
import Link from "next/link"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button";
 
export default function SignIn() {
  return(
    <Button variant={'ghost'}>
      Login
    </Button>
  )
}