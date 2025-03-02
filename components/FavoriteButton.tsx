import useCurrentUser from "@/hooks/useCurrentUser";
import useFavoriteMovies from "@/hooks/useFavoriteMovies";
import axios from "axios";
import React, { useCallback, useMemo } from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

const FavoriteButton = ({ movieId }: { movieId: string }) => {
  const { mutate: mutateFavorites } = useFavoriteMovies();
  const { mutate, data: currentUser } = useCurrentUser();

  const isFavorite = useMemo(() => {

    const list = currentUser?.favouriteIds || []
    return list.includes(movieId);

  }, [currentUser, movieId]);

  const toggleFavorite = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await axios.delete("/api/favorite", { data: { movieId } });
    } else {
      response = await axios.post("/api/favorite", { movieId });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({
      ...currentUser,
      favouriteIds: updatedFavoriteIds,
    });

    mutateFavorites();
  }, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFavorite}
      className="
      cursor-pointer
      flex
      justify-center
      items-center
      rounded-full
      border-2
      border-white
      hover:border-neutral-300
      w-6
      h-6
      lg:w-10
      lg:h-10
      transition"
    >
      <Icon className="text-white" size={17} />
    </div>
  );
};

export default FavoriteButton;
