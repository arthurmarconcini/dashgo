import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center" textAlign="right">
      <Box mr="4">
        <Text>Arthur Marconcini</Text>
        <Text color="gray.300" fontSize="sm">
          arthur.m.ramos@hotmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Artur Marconcini"
        src="https://github.com/arthurmarconcini.png"
      />
    </Flex>
  )
}
