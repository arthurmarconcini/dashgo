import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center" textAlign="right">
      {showProfileData && (
        <Box mr="4">
          <Text>Arthur Marconcini</Text>
          <Text color="gray.300" fontSize="sm">
            arthur.m.ramos@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Artur Marconcini"
        src="https://github.com/arthurmarconcini.png"
      />
    </Flex>
  )
}
