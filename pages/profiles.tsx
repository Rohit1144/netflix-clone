import useCurrentUser from "@/hooks/useCurrentUser";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { useRouter } from "next/router";
import { authOptions } from "./api/auth/[...nextauth]";


export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions);
  
    if (!session) {
      return {
        redirect: {
          destination: "/auth",
          permanent: false,
        },
      };
    }
  
    return {
      props: {},
    };
  }

const Profiles = () => {

    const router = useRouter();
    const {data: user} = useCurrentUser();

    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col">
                <h1 className="text-white text-3xl md:text-6xl text-center">
                    Who is watching?
                </h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={() => router.push('/')}>
                        <div className="group flex-row w-44 mx-auto">
                            <div className="w-44 h-44 rounded-md flex justify-center items-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                                <img src="/images/Netflix-avatar.png" alt="Profile" />
                                
                            </div>
                            <div className="group-hover:text-white text-center mt-4 text-gray-400 text-2xl">
                                {user?.name}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Profiles;