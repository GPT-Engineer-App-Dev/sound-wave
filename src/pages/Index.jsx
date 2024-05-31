import { Box, Button, Container, Flex, Heading, HStack, IconButton, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text, VStack } from "@chakra-ui/react";
import { FaPause, FaPlay, FaStepForward, FaStepBackward, FaVolumeDown, FaVolumeUp } from "react-icons/fa";
import { useState } from "react";

const songs = [
  { title: "Song 1", artist: "Artist 1", duration: 240 },
  { title: "Song 2", artist: "Artist 2", duration: 180 },
  { title: "Song 3", artist: "Artist 3", duration: 210 },
];

const Index = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);

  const currentSong = songs[currentSongIndex];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
      setProgress(0);
    }
  };

  const handlePrevious = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
      setProgress(0);
    }
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
  };

  const handleProgressChange = (value) => {
    setProgress(value);
  };

  return (
    <Container p={4}>
      <Flex direction="column" align="center">
        <Heading as="h1" size="xl" mb={4}>
          Music Player
        </Heading>
        <Box w="full" maxW="800px">
          <VStack spacing={4}>
            <HStack spacing={4} w="full" justify="space-between" align="center">
              <Text>{currentSong.title} - {currentSong.artist}</Text>
              <Text>{Math.floor(progress / 60)}:{progress % 60 < 10 ? `0${progress % 60}` : progress % 60} / {Math.floor(currentSong.duration / 60)}:{currentSong.duration % 60 < 10 ? `0${currentSong.duration % 60}` : currentSong.duration % 60}</Text>
            </HStack>
            <Slider aria-label="progress" value={progress} max={currentSong.duration} onChangeEnd={handleProgressChange}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={6} />
            </Slider>
            <HStack spacing={4} w="full" justify="space-between" align="center">
              <Text>{volume}</Text>
              <Slider aria-label="volume" value={volume} onChangeEnd={handleVolumeChange}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb boxSize={6} />
              </Slider>
            </HStack>
            <HStack spacing={4} w="full" justify="center">
              <IconButton aria-label="Previous" icon={<FaStepBackward />} onClick={handlePrevious} />
              <IconButton aria-label={isPlaying ? "Pause" : "Play"} icon={isPlaying ? <FaPause /> : <FaPlay />} onClick={handlePlayPause} />
              <IconButton aria-label="Next" icon={<FaStepForward />} onClick={handleNext} />
            </HStack>
          </VStack>
        </Box>
        <VStack spacing={4} w="full" mt={8}>
          {songs.map((song, index) => (
            <Box key={index} w="full" p={2} borderWidth="1px" borderRadius="lg">
              <Text>{song.title} - {song.artist}</Text>
            </Box>
          ))}
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;