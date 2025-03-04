import { NextPageContext } from "next";
import { getSession} from "next-auth/react";
import Navbar from "@/components/Navbar";
import BillBoard from "@/components/BillBoard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavouriteMovies from "@/hooks/useFavoriteMovies";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";






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
