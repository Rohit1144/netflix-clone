import useBillBoard from "@/hooks/useBillBoard";
import React, { useCallback } from "react";

import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";
import useInfoModal from "@/hooks/useInfoModal";

const BillBoard = () => {
  const { data } = useBillBoard();
  const {openModal} = useInfoModal();

  const handleOpenModal = useCallback(() => {
    openModal(data?.id)
  }, [openModal, data?.id])



  return (
    <div className="relative h-[56.25vw]">
      <video
        src={data?.videoUrl}
        className="w-full
        h-[56.25vw]
        object-cover
        brightness-[60%]"
        autoPlay
        muted
        loop
        poster={data?.thumbnailUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="h-full text-1xl md:text-4xl font-bold text-white w-[50%] drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 lg:w-[50%] md:w-[80%] w-[90%] drop-shadow-xl">
          {data?.description}
        </p>
        <div className="flex flex-row items-center gap-3 mt-4 md:mt-8">
            <PlayButton movieId={data?.id}/>
            <button onClick={handleOpenModal} className="text-white bg-white bg-opacity-30 py-1 
                md:py-2 rounded-md px-2 md:px-4 flex flex-row items-center hover:bg-opacity-20">
                <AiOutlineInfoCircle className="mr-1"/>
                More info
            </button>
        </div>
      </div>
    </div>
  );
};

export default BillBoard;
