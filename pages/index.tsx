import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar";
import BillBoard from "@/components/BillBoard";






export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if(!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}


export default function Home() {

  const {data: user} = useCurrentUser();

  return (
    <>
      <Navbar/>
      <BillBoard/>
    </>
  );
}
