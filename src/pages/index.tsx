import type { NextPage } from 'next'

import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

const SignIn: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        gap={6}
      >
        <Stack spacing={4}>
          <Input name="email" label="E-Mail" type="email" />
          <Input name="password" label="Password" type="password" />
        </Stack>

        <Button type="submit" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default SignIn
