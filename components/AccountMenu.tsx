import { signOut } from "next-auth/react";


interface AccountProps {
    visible?: boolean
    user: any
}

const AccountMenu: React.FC<AccountProps> = ({visible, user}) => {

    if(!visible)
        return null;


    return (
        <div className="flex flex-col right-0 top-14 border-2 border-gray-800 py-5 w-56 absolute bg-black">
            <div className="flex flex-col gap-3">
                <div className="flex flex-row group/item gap-3 w-full items-center px-3">
                    <img className="w-8 rounded-md" src="/images/Netflix-avatar.png" alt="avatar" />
                    <p className="text-white text-sm group-hover/item:underline">
                        {user?.name}
                    </p>
                </div>
                <hr className="border-0 bg-gray-600 h-px my-4"/>
                <div onClick={() => signOut()} className="px-3 text-white text-sm hover:underline text-center">
                    Sign out of Netflix
                </div>
            </div>
        </div>
    )
}

export default AccountMenu;