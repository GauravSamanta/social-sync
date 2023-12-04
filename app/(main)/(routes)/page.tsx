import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";
export default function Home() {
  return(
   <div>
    <h1>Protected route</h1>
    <UserButton afterSignOutUrl="/"/>
    <ModeToggle/>
   </div>
  )
}
