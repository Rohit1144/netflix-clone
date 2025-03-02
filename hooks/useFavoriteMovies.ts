import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useFavouriteMovies = () => {
    const {data, isLoading, error, mutate} = useSWR('/api/favorites', fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateIfStale: false
    })

    return {data, error, isLoading, mutate}
}

export default useFavouriteMovies

