"use client";

import React from 'react';
import {Badge, Box, Button, HStack, IconButton, List, ListItem, Spacer, Text} from "@chakra-ui/react";
import NextLink from "next/link";
import {GoHomeFill} from "react-icons/go";
import {LuWorkflow} from "react-icons/lu";
import {MdOutlineHistory} from "react-icons/md";
import {MAGENTA_COLOR} from "@/utils/colors";
import {LiaAtomSolid} from "react-icons/lia";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

type SideBarMenuItemProps = {
    label: string;
    href: string;
    icon: React.ReactNode;
}

function LogoAndName() {

    return (
        <>
            <Box height="50px" flexDirection="row" display="flex" justifyContent="space-between">
                <HStack>
                    <LiaAtomSolid size="30px" color="blue"/>
                    <Badge size='lg' variant='solid' background="blue">
                        <Text textStyle="lg">Mgaenta.ai</Text>
                    </Badge>
                    <Spacer/>
                    <SideBarCollapseControl/>
                </HStack>
            </Box>
        </>
    );

}

function SideBarMenuItem(props: SideBarMenuItemProps) {
    const {label, href, icon} = props;

    return <ListItem key={href} color="black">
        <NextLink href={href}>
            <Button w="180px" justifyContent="flex-start" variant="ghost"
                    _hover={{bg: "lightgrey", color: "magenta"}}><HStack>
                {icon}
                <Text textStyle="sm">{label}</Text>
            </HStack>
            </Button>
        </NextLink>
    </ListItem>
}

function SideBarCollapseControl() {
    const [open, setOpen] = React.useState(false);

    return <HStack justify="end">
        <IconButton size="md" variant="ghost" onClick={() => setOpen(!open)}>
            {icon()}
        </IconButton>
    </HStack>;

    function icon(): React.ReactNode {
        if (open) {
            return <IoIosArrowBack size="25px" color="blue"/>
        }

        return <IoIosArrowForward size="25px" color="blue"/>;
    }
}

function SideBar() {
    return (
        <>
            <Box width="220px"
                 height="100vh"
                 bg="gray.100"
                 color="white"
                 p={4}
                 position="fixed"
                 display="flex"
            >
                <List.Root color="white" fontSize="14" variant="plain" gap={3}>
                    <LogoAndName />
                    <SideBarMenuItem icon={<GoHomeFill color={MAGENTA_COLOR} size="25px"/>} label="Home" href="/"/>

                    <SideBarMenuItem icon={<MdOutlineHistory color={MAGENTA_COLOR} size="25px"/>}
                                     label="Call history"
                                     href="/history"/>

                    <SideBarMenuItem icon={<LuWorkflow color={MAGENTA_COLOR} size="25px"/>} label="Workflow"
                                     href="/workflows"/>

                </List.Root>
            </Box>
        </>
    );


}

export default SideBar;