/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, HStack, Image as ChakraImage, Link, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <HStack sx={{"position": "sticky", "bg": "blue", "paddingX": "16px", "paddingY": "16px", "zIndex": "999"}}>
  <Text sx={{"height": "40px"}}>
  {`</kevin>`}
</Text>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600PX", "width": "100%", "marginY": "2em"}}>
  <VStack>
  <Avatar name={`e`} size={`xl`}/>
  <Text>
  {`@kacsn7`}
</Text>
  <Text>
  {`HOLA 👋 MI NOMBRE ES KEVIN SUASNABAR`}
</Text>
  <Text>
  {`Indie (Trainee) Fullstack Developer & 
                Cybersecurity Student`}
</Text>
</VStack>
  <VStack sx={{"width": "100%"}}>
  <Link as={NextLink} href={`https://moure.dev`} isExternal={true} sx={{"width": "100%"}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
  <VStack>
  <Text>
  {`Portfolio`}
</Text>
  <Text>
  {`Portfolio`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/OpieSoA`} isExternal={true} sx={{"width": "100%"}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
  <VStack>
  <Text>
  {`Github`}
</Text>
  <Text>
  {`Github`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://discord.gg/S2e8Repwb4`} isExternal={true} sx={{"width": "100%"}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
  <VStack>
  <Text>
  {`Discord`}
</Text>
  <Text>
  {`Discord`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/kevin-suasnabar`} isExternal={true} sx={{"width": "100%"}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
  <VStack>
  <Text>
  {`Linkedln`}
</Text>
  <Text>
  {`Linkedln`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack>
  <ChakraImage src={`/favicon.ico`} sx={{"width": "26px", "height": "auto"}}/>
  <Link as={NextLink} href={`https://mouredev.com`} isExternal={true}>
  {`© 2024 by -Kevin_ v2.`}
</Link>
  <Text>
  {`BUILDING SOFTWARE WITH ♥ FROM ARGENTINA TO THE WORLD.`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
