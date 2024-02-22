import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // Convertir newCategory y los elementos de categories a minúsculas
    const lowerNewCategory = newCategory.toLowerCase();
    const lowerCategories = categories.map((category) =>
      category.toLowerCase()
    );

    // Verificar si lowerNewCategory ya existe en lowerCategories
    if (lowerCategories.includes(lowerNewCategory)) return;

    // Si no existe, agregar newCategory a categories
    setCategories([newCategory, ...categories]);

    // if ( categories.includes( newCategory )) return ;

    // setCategories([newCategory, ...categories]);

    // setCategories([ ...categories, 'Valorant' ]);
    // console.log('Valorant');
  };

  return (
    <>
      {/*titulo*/}
      <h1>GifExpertApp</h1>

      {/* Input*/}
      <AddCategory
        //  setCategories={ setCategories }
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* Listado de gif */}
      {/* <button onClick={onAddCategory}>Agregar */}

      {/* </button> */}

        {
          categories.map((category) => 
          (<GifGrid 
            key={ category }
            category={ category } />)
          
        
        )}
      
    </>
  );
};
