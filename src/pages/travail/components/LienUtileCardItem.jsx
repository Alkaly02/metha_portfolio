import React from 'react'
import { IconGitBranch } from '@tabler/icons-react';
import { Text, Timeline } from '@mantine/core';
// import styled from 'styled-components'

// const LabelPane = styled.

const LienUtileCardItem = ({ active }) => {
    return (
        <Timeline.Item
            bullet={<IconGitBranch size={12} />}
            title="New branch">
            <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
            <Text size="xs" mt={4}>2 hours ago</Text>
        </Timeline.Item>
    )
}

export default LienUtileCardItem