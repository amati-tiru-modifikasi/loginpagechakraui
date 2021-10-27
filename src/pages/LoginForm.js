import React, { useState } from 'react'
import { Flex,Box,Button,Heading,FormControl,FormLabel,Input,CircularProgress,Text } from '@chakra-ui/react'

// komponen
import { userLogin } from '../utils/mockApi'
import ErrorMessage from '../components/ErrorMessage';

function LoginForm() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    const handleSubmit =  async e => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await userLogin({ email, password })
            setIsLoggedIn(true);
            setIsLoading(false);
        } catch (error) {
            setError('Invalid username or password')
            setIsLoading(false);
            setEmail('');
            setPassword('');
        }
    }

    return (
        <Flex w="full" align="center" justifyContent="center">
            <Box p={8} maxW="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                {isLoggedIn ? (
                    <Box textAlign="center">
                        <Text>{email} logged in!</Text>
                        <Button 
                            variant="outline"
                            w="full"
                            mt={4}
                            onClick={() => setIsLoggedIn(false)}>Sign Out</Button>
                    </Box>
                ):(
                    <>
                    <Box textAlign="center">
                        <Heading>Login</Heading>
                    </Box>
                    <Box my={4} textAlign="left">
                        <form onSubmit={handleSubmit}>
                            {error && <ErrorMessage message={error} />}
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" placeholder="desta@rsuppersahabatan.co.id" size="lg" onChange={e => setEmail(e.currentTarget.value)} />
                            </FormControl>
                            <FormControl mt={6}>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder="***************" size="lg" onChange={e => setPassword(e.currentTarget.value)} />
                            </FormControl>
                            <Button mt={4} type="submit" variant="outline" w="full">
                                {isLoading? (<CircularProgress  isIndeterminate size="24px" color="teal" />) : ('Sign In')}
                            </Button>
                        </form>
                    </Box>
                    </>
                )}
                
            </Box>
        </Flex>
    )
}

export default LoginForm
