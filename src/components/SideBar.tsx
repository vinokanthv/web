"use client";

import React from 'react';
import {Box, HStack, Link, VStack} from "@chakra-ui/react";
import NextLink from "next/link";
import {GoHomeFill} from "react-icons/go";
import {LuWorkflow} from "react-icons/lu";
import {MdOutlineHistory} from "react-icons/md";
import {MAGENTA_COLOR} from "@/utils/colors";

type SideBarMenuItemProps = {
    label: string;
    href: string;
    icon: React.ReactNode;
}

function SideBarMenuItem(props: SideBarMenuItemProps) {
    const {label, href, icon} = props;

    return <HStack align="start" p="5px">
        <Box width="3px"></Box>
        {icon}
        <Link variant="plain" as={NextLink} href={href} color="black">{label}</Link>
    </HStack>;
}

function SideBar() {
    return (
        <>
            <Box width="200px"
                 height="100vh"
                 bg="gray.100"
                 color="white"
                 p={4}
                 position="fixed"
            >
                <VStack align="stretch">
                    <Box height="50px"/>
                    <SideBarMenuItem icon={<GoHomeFill color={MAGENTA_COLOR} size="25px"/>} label="Home" href="/"/>

                    <SideBarMenuItem icon={<MdOutlineHistory color={MAGENTA_COLOR} size="25px"/>}
                                     label="Call history"
                                     href="/history"/>

                    <SideBarMenuItem icon={<LuWorkflow color={MAGENTA_COLOR} size="25px"/>} label="Workflow"
                                     href="/workflow"/>
                </VStack>
            </Box>
        </>
    );
}

export default SideBar;