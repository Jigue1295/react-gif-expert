import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setinputValue] = useState('')

  const onInputChange = ( {target} ) => {
    setinputValue(target.value)
  }

  const onSubmit = ( event ) => {
    // console.log( event )
    // console.log( inputValue )

    event.preventDefault();
    
    if( inputValue.trim().length <= 1) return;
    
    onNewCategory( inputValue.trim() )

    // setCategories( categories => [ inputValue, ...categories ]);
    setinputValue('');

  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};


