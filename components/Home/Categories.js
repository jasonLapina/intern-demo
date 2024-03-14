import { Box, Grid, Icon, Text, VStack } from "@chakra-ui/react";
import SectionLayout from "../Shared/SectionLayout";
import {
  IoIosMegaphone,
  IoIosPeople,
  IoMdVideocam,
  IoIosCreate,
} from "react-icons/io";
function Categories() {
  const services = [
    {
      title: "Digital Marketing",
      icon: IoIosMegaphone,
    },
    {
      title: "Events Management & Production",
      icon: IoIosPeople,
    },
    {
      title: "Visual Production",
      icon: IoIosCreate,
    },
    {
      title: "Audio-Visual Production",
      icon: IoMdVideocam,
    },
  ];
  return (
    <Box
      bgImage='url(https://www.blinkcreativestudio.com/assets/capabilities-bg.jpg)'
      bgPos='center'
      bgSize='cover'
      bgRepeat='no-repeat'
      color='white'
    >
      <SectionLayout>
        <Grid gap='24px' gridTemplateColumns='repeat(4,1fr)'>
          {services.map((item) => (
            <VStack
              border='solid 1px white'
              py='56px'
              key={item.title}
              textAlign='center'
              gap='24px'
              px='8px'
            >
              <Icon as={item.icon} boxSize='80px' color='var(--primary)' />
              <Text fontWeight='semibold' fontSize='20px'>
                {item.title}
              </Text>
            </VStack>
          ))}
        </Grid>
      </SectionLayout>
    </Box>
  );
}

export default Categories;
