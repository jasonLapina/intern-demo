import { Box } from "@chakra-ui/react";
function SectionLayout(props) {
  const { children } = props;
  return (
    <Box py='80px' maxW='1020px' mx='auto' {...props}>
      {children}
    </Box>
  );
}

export default SectionLayout;
