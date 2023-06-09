"use client";
import {
    ChakraProvider,
    Container,
    DarkMode,
    ColorModeScript,
} from "@chakra-ui/react";
import { api } from "~/utils/api";
import type { ReactNode } from "react";
import { AuthContextProvider } from "~/providers/AuthContextProvider/AuthContextProvider";

// export const metadata = {
//     title: "Next.js",
//     description: "Generated by Next.js",
// };

function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <AuthContextProvider>
                    <ChakraProvider>
                        <Container>
                            <DarkMode>{children}</DarkMode>
                            <ColorModeScript initialColorMode={"dark"} />
                        </Container>
                    </ChakraProvider>
                </AuthContextProvider>
            </body>
        </html>
    );
}

export default api.withTRPC(RootLayout);
