import fetcher from "@/lib/fetcher";
import React from "react";
import useSWR from "swr";

const useBillBoard = () => {
    const {data, error, isLoading} = useSWR("/api/random", fetcher, {
        revalidateOnFocus: false,
        revalidateIfStale: false,
        revalidateOnReconnect: false
    })

    return {data, error, isLoading}
}

export default useBillBoard;