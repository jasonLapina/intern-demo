"use client";

import Head from "next/head";

import { Inter } from "next/font/google";
import {
  Box,
  Grid,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Home() {
  const cards = [
    {
      image: "https://omnifood.dev/img/meals/meal-1.jpg",
      tags: [
        {
          text: "Vegetarian",
          color: "lime",
        },
      ],
      title: "Japanese Gyozas",
      calories: 650,
      score: 74,
      rating: 4.9,
      voters: 537,
    },
    {
      image: "https://omnifood.dev/img/meals/meal-2.jpg",
      tags: [
        {
          text: "Vegan",
          color: "yellowgreen",
        },
        {
          text: "Paleo",
          color: "orange",
        },
      ],
      title: "Avocado Salad",
      calories: 400,
      score: 92,
      rating: 4.8,
      voters: 441,
    },
  ];
  return (
    <HStack maxW='768px' mx='auto'>
      {cards.map((item) => {
        const { title, image, tags, calories, score, rating, voters } = item;
        return (
          <Grid
            gridTemplateRows='1fr 1.1fr'
            overflow='hidden'
            borderRadius='15px'
            key={title}
            maxW='320px'
            mx='auto'
            my='80px'
            boxShadow='2px 4px 8px rgba(0,0,0,.3)'
          >
            <Image alt={title} src={image} />
            <Box px='40px' pt='24px' pb='40px'>
              <HStack gap='4px'>
                {tags.map((t) => (
                  <Text
                    as='span'
                    w='fit-content'
                    borderRadius='20px'
                    fontWeight='bold'
                    py='2px'
                    px='16px'
                    key={t.text}
                    bgColor={t.color}
                    fontSize='14px'
                  >
                    {t.text.toUpperCase()}
                  </Text>
                ))}
              </HStack>
              <Text fontSize='24px' mb='24px'>
                {title}
              </Text>

              <VStack gap='8px' align='normal'>
                <HStack>
                  <Box>🔥</Box>
                  <Text>
                    <strong>{calories}</strong> calories
                  </Text>
                </HStack>
                <HStack>
                  <Box>🍴</Box>
                  <Text>
                    NutriScore <strong>{score}</strong>
                  </Text>
                </HStack>
                <HStack>
                  <Box>⭐</Box>
                  <Text>
                    <strong>{rating}</strong> ({voters})
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </Grid>
        );
      })}
    </HStack>
  );
}
