import React, { useState } from 'react'
import { Flex,Box,Button,Heading,FormControl,FormLabel,Input,CircularProgress,Text,InputGroup,InputRightElement } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

// komponen
import { userLogin } from '../utils/mockApi'
import ErrorMessage from '../components/ErrorMessage';

function LoginForm() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ showPassword, setShowPassword ] = useState(false);
    const handleNyontekPassword = () => setShowPassword(!showPassword);

    const handleSubmit =  async e => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await userLogin({ email, password })
            setIsLoggedIn(true);
            setIsLoading(false);
            setShowPassword(false);
        } catch (error) {
            setError('Invalid username or password')
            setIsLoading(false);
            setEmail('');
            setPassword('');
            setShowPassword(false);
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
                            <FormControl isRequired mt={6}>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input type={showPassword?'text':'password'} placeholder="***************" size="lg" onChange={e => setPassword(e.currentTarget.value)} />
                                    <InputRightElement width="3rem" mt="3px">
                                        <Button h="1.5rem" size="sm" onClick={handleNyontekPassword}>{showPassword? <ViewOffIcon />:<ViewIcon />}</Button>
                                    </InputRightElement>
                                </InputGroup>
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
