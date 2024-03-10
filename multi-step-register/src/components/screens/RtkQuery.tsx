import { TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useGetPokemonByNameQuery } from '../../features/api/apislice';

// import { PostAuthor } from './PostAuthor'
// import { TimeAgo } from './TimeAgo'
// import { ReactionButtons } from './ReactionButtons'




let RtkQuery = () => {
  const {data : pokemon} = useGetPokemonByNameQuery();
  const [searchName, setSearchName] = useState<string>('');
  
  
return (
  <>
    <TextInput value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder="Enter pokemon name" required />
    {pokemon && <div>
        <div>{pokemon?.count}</div>
        <div>{pokemon?.next}</div>
        <div className='flex flex-wrap gap-10 py-10 px-10 justify-evenly bg-gray-500 items-center text-white'>
        {pokemon?.results?.map((pokemon: any, index: any) => (
          <div key={index}>{pokemon.name}</div>
          ))}
          </div>
      </div>} 
  </>
)
}


export default RtkQuery;
