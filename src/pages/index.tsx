import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../components/Form/Input'

import type { NextPage } from 'next'

interface IFormInputs {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-Mail obrigatório').email('E-Mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm<IFormInputs>({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<IFormInputs> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            label="E-Mail"
            type="email"
            error={formState.errors.email}
            {...register('email')}
          />
          <Input
            label="Password"
            type="password"
            error={formState.errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default SignIn
