import React from 'react'

import { Card, Image } from '@mantine/core';
import { rootstyles } from '../../styles/rootstyles';
import { styled } from 'styled-components';

const CartTitle = styled.p`
color: rgba(26, 16, 3, 0.50);
font-family: Poppins;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 160% */
margin:0
`

const CardDesc = styled.p`
color: #1A1003;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 100% */
margin:0
`

const PorfolioCard = ({ img, title, description }) => {
    return (
        <Card bg={rootstyles.color.tercary} shadow="sm" padding="lg" radius="md" >
            <Card.Section p='sm'>
                <Image
                    src={img ? `${img}` : "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"}
                    height={350}
                    alt="Norway" radius='md'
                />
            </Card.Section>

            {/* <Group position="" mt={0} mb="xs"> */}
            <CartTitle weight={100} sx={{ margin: 0 }}>{title}</CartTitle>
            <CardDesc>{description}</CardDesc>
            {/* <Badge color="pink" variant="light">
                    On Sale
                </Badge> */}
            {/* </Group> */}
        </Card>
    )
}

export default PorfolioCard