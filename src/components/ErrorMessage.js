import React from 'react'
import { Box, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react'

export default function ErrorMessage({ message }) {
    return (
        <Box>
            <Alert status="error">
                <AlertIcon />
                <AlertDescription>{message}</AlertDescription>
            </Alert>
        </Box>
    )
}
