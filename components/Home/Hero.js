import SectionLayout from "@/components/Shared/SectionLayout";
import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const heroTexts = ["campaigns", "events", "photos", "videos"];
  const [heroTextIndex, setHeroTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroTextIndex((prev) =>
        prev === heroTexts.length - 1 ? 0 : prev + 1
      );
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionLayout>
      <Grid
        alignItems='center'
        px='8px'
        py='40px'
        gridTemplateColumns='1fr 1fr'
        columnGap='80px'
      >
        <Box>
          <Text fontWeight='normal'>
            HERE AT <strong>BLINK</strong> CREATIVE STUDIO
          </Text>
          <Heading fontSize='48px' mt='24px'>
            We convey and connect through{" "}
            <motion.span
              key={heroTexts[heroTextIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{ display: "inline-block", color: "var(--primary)" }}
            >
              {heroTexts[heroTextIndex]}.
            </motion.span>
          </Heading>

          <HStack mt='40px' gap='24px'>
            <Button>CTA</Button>
            <Button borderWidth='2px' variant='outline'>
              CTA-2
            </Button>
          </HStack>
        </Box>

        <Box>
          <Image
            alt='girl jump shot'
            src='https://www.blinkcreativestudio.com/assets/header%20img.png'
          />
        </Box>
      </Grid>
    </SectionLayout>
  );
}

export default Hero;
