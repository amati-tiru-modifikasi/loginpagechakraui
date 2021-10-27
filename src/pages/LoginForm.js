import React, { useState } from 'react'
import { Flex,Box,Button,Heading,FormControl,FormLabel,Input } from '@chakra-ui/react'

function LoginForm() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`Email: ${email} dan Password: ${password}`)
    }

    return (
        <Flex w="full" align="center" justifyContent="center">
            <Box p={8} maxW="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form onSubmit={handleSubmit}>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="desta@rsuppersahabatan.co.id" size="lg" onChange={e => setEmail(e.currentTarget.value)} />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="***************" size="lg" onChange={e => setPassword(e.currentTarget.value)} />
                        </FormControl>
                        <Button mt={4} type="submit" variant="outline" w="full">
                            Sign In
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    )
}

export default LoginForm
