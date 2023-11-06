import { Box, HStack, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const GameListSkeleton = () => {
  return (
    
        <SkeletonText paddingY={3} noOfLines={1} skeletonHeight="5">
        </SkeletonText>

    
  )
}

export default GameListSkeleton;