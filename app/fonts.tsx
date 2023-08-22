import { Poppins, Roboto_Flex } from "next/font/google";

export const poppins = Poppins({
    weight: ['100','200','300','400', '600', '700','800','900'],
    subsets: ['latin'],
    variable: '--font-poppins',
})

export const roboto_flex = Roboto_Flex({
    subsets: ['latin'],
    variable: '--font-roboto_flex',
})