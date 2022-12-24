import { Box, Center, Heading, Spinner, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"

function DataLoading() {

  // isLoading from appReducer
  const isLoading = useSelector((store) => store.AppReducer.isLoading)

    return (<>

    {/* if isLoading is true display spinner & text */}
{isLoading?
        <Center h="full" w="full">

            {/* box contain spinner & text */}
            <Box>

                {/* prograss bar */}
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='#ff6347'
                    size='xl'
                />

                {/* loading message */}
                <Heading as='h4' size='md' > Please Wait  </Heading>
            </Box>
        </Center>:

    <Text> </Text>
    }
    </>)

}

export default DataLoading