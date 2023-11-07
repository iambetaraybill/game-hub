import { HStack, List, ListItem, Image, Text, Spinner, Button, Heading, Box } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GameListSkeleton from './GameListSkeleton';

interface Props{
    onSelectedGenre : ( genre: Genre) => void;
    selectedGenre : Genre | null;
}

const GenreList = ({onSelectedGenre, selectedGenre}: Props) => {
    const {data, isLoading, error} = useGenres();
    const skeleton = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12];
    if(error) return null;
    if(isLoading) return [<Box fontSize='2xl' marginBottom={10} key='veryUniqueKey3987654'/> ,...skeleton.map(ske => <GameListSkeleton key={ske}/>)];
  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
         {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
          <HStack>
              <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genre.image_background)}/>
              <Button whiteSpace={'normal'} textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'extrabold' : 'normal'} onClick={() => onSelectedGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
          </ListItem>)}
      </List>
    </>
  )
}

export default GenreList;