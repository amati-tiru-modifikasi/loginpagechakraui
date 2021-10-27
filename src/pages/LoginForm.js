import React from 'react'
import { Flex,Box,Button,Heading,FormControl,FormLabel,Input } from '@chakra-ui/react'

function LoginForm() {
    return (
        <Flex w="full" align="center" justifyContent="center">
            <Box p={8} maxW="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="desta@rsuppersahabatan.co.id" />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="***************" />
                        </FormControl>
                        <Button w="full" mt={4} type="submit">
                            Sign In
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    )
}

export default LoginForm
