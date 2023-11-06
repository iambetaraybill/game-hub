import { HStack, List, ListItem, Image, Text, Spinner, Button } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GameListSkeleton from './GameListSkeleton';

interface Props{
    onSelectedGenre : ( genre: Genre) => void;
    selectedGenre : Genre | null;
}

const GenreList = ({onSelectedGenre, selectedGenre}: Props) => {
    const {data, isLoading, error} = useGenres();
    const skeleton = [1, 2, 3, 4, 5, 6,7,8,9];
    if(error) return null;
    if(isLoading) return skeleton.map(ske => <GameListSkeleton key={ske}/>);
  return (
    <List>
       {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
        <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
            <Button fontWeight={genre.id === selectedGenre?.id ? 'extrabold' : 'normal'} onClick={() => onSelectedGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
        </HStack>
        </ListItem>)} 
    </List>
  )
}

export default GenreList;