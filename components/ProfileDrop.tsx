// "use client";
// import { CreditCard,User as UserCopmponent} from "lucide-react"
  
//   import Button from './Button'
//   import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuGroup,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuPortal,
//     DropdownMenuSeparator,
//     DropdownMenuShortcut,
//     DropdownMenuSub,
//     DropdownMenuSubContent,
//     DropdownMenuSubTrigger,
//     DropdownMenuTrigger,
//   } from "@/components/ui/dropdown-menu"
// import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
// import { User } from "@supabase/auth-helpers-nextjs";
// import Link from "next/link";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import { useRouter } from 'next/navigation';
// import toast from 'react-hot-toast';
// import { useEffect } from "react";




// interface ProfileDropDownProps{
//     src?:string;
//     user?:User;
//     address?:string;
// }

// const ProfileDropDown:React.FC<ProfileDropDownProps> = ({
//     src="https://github.com/shadcn.png",
//     user,
//     address
// }) => {

//     console.log("user_name:  ",user?.user_metadata.user_name)
//     const supabaseClient = useSupabaseClient();
//     const router = useRouter();

//     const handleLogout = async () =>{
//         const {error} = await supabaseClient.auth.signOut();
//         router.refresh();

//         if(error){
//             toast.error(error.message)
//         }else{
//             toast.success("logged out!")
//         }
//     }

//     useEffect(()=>{
//         console.log("src from dropdown: ",src)
//     },[src])

// return (
//     <DropdownMenu>
//     <DropdownMenuTrigger asChild>
//         <Button className='border-2 rounded-medium border-white py-2 px-3 w-[35%] h-[40%] bg-black'  >
//             <Avatar>
//                 <AvatarImage src={`${src}`} alt="@shadcn"/>
//                 <AvatarFallback>CN</AvatarFallback>
//             </Avatar>
//         </Button>
//     </DropdownMenuTrigger>
//     <DropdownMenuContent className="w-56">
//         <DropdownMenuLabel>My Account</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//             {
//                 user?.user_metadata.user_name != undefined && (
//                     <Link href={`/${user?.user_metadata.user_name}`}>
//                         <DropdownMenuItem className="hover:cursor-pointer">
//                             <UserCopmponent className="mr-2 h-4 w-4" />
//                             <p >{user?.user_metadata.user_name}</p>
//                             <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
//                         </DropdownMenuItem>
//                     </Link>
                    
//                 )
//             }
//             {
//                 !address && (
//                     <DropdownMenuItem disabled> 
//                         <CreditCard className="mr-2 h-4 w-4" />
//                         <span>Billing</span>
//                         <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
//                     </DropdownMenuItem>
//                 )
//             }
//             {
//                 address && (
//                     <DropdownMenuItem disabled> 
//                         <CreditCard className="mr-2 h-4 w-4" />
//                         <span>{address}</span>
//                         <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
//                     </DropdownMenuItem>
//                 )
//             }
//         {/* <DropdownMenuItem>
//             <Settings className="mr-2 h-4 w-4" />
//             <span>Settings</span>
//             <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
//         </DropdownMenuItem>
//         <DropdownMenuItem>
//             <Keyboard className="mr-2 h-4 w-4" />
//             <span>Keyboard shortcuts</span>
//             <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
//         </DropdownMenuItem> */}
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//         <DropdownMenuItem>
//             {/* <CreditCard className="mr-2 h-4 w-4" /> */}
//             <Button className="bg-white border-2 border-black" onClick={handleLogout}>Logout</Button>
//         </DropdownMenuItem>
//         {/* <DropdownMenuItem>
//             <Users className="mr-2 h-4 w-4" />
//             <span>Team</span>
//         </DropdownMenuItem>
//         <DropdownMenuSub>
//             <DropdownMenuSubTrigger>
//             <UserPlus className="mr-2 h-4 w-4" />
//             <span>Invite users</span>
//             </DropdownMenuSubTrigger>
//             <DropdownMenuPortal>
//             <DropdownMenuSubContent>
//                 <DropdownMenuItem>
//                 <Mail className="mr-2 h-4 w-4" />
//                 <span>Email</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                 <MessageSquare className="mr-2 h-4 w-4" />
//                 <span>Message</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                 <PlusCircle className="mr-2 h-4 w-4" />
//                 <span>More...</span>
//                 </DropdownMenuItem>
//             </DropdownMenuSubContent>
//             </DropdownMenuPortal>
//         </DropdownMenuSub>
//         <DropdownMenuItem>
//             <Plus className="mr-2 h-4 w-4" />
//             <span>New Team</span>
//             <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
//         </DropdownMenuItem> */}
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         {/* <DropdownMenuItem>
//         <Github className="mr-2 h-4 w-4" />
//         <span>GitHub</span>
//         </DropdownMenuItem>
//         <DropdownMenuItem>
//         <LifeBuoy className="mr-2 h-4 w-4" />
//         <span>Support</span>
//         </DropdownMenuItem>
//         <DropdownMenuItem disabled>
//         <Cloud className="mr-2 h-4 w-4" />
//         <span>API</span>
//         </DropdownMenuItem>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem>
//         <LogOut className="mr-2 h-4 w-4" />
//         <span>Log out</span>
//         <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//         </DropdownMenuItem> */}
//     </DropdownMenuContent>
//     </DropdownMenu>
// )
// }


// export default ProfileDropDown;


import React from 'react'

const ProfileDropDown = () => {
  return (
    <div>ProfileDropDown</div>
  )
}

export default ProfileDropDown