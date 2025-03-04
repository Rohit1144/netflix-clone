import { GetServerSidePropsContext} from "next";
import Navbar from "@/components/Navbar";
import BillBoard from "@/components/BillBoard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavouriteMovies from "@/hooks/useFavoriteMovies";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";






export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const session = await getServerSession(
      context.req,
      context.res,
      authOptions
    );

    if (session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}


export default function Home() {

  const{data: movies =[]} = useMovieList();
  const{data: favoriteMovies =[]} = useFavouriteMovies();
  const{isOpen, closeModal} = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal}/>
      <Navbar/>
      <BillBoard/>
      <div className="pb-40">
        <MovieList data={movies} title="Trending Now" />
        <MovieList data={favoriteMovies} title="My List" />
      </div>
    </>
  );
}
