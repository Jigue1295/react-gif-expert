import { useEffect, useState } from "react";
import { GifItem } from "../components/GifItem";
import useFetchGifs from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category )

    console.log( { isLoading} )
    
    return (
    <>
      <h3>{category}</h3>
      {
        isLoading && ( <h2>Cargando...</h2>) 
      }

      <div className="card-grid">
        {
            images.map( ( image ) => (
                <GifItem 
                key={image.id} 
                { ...image }
                />
            ) )
        }
      </div>
      
    </>
  );
};

