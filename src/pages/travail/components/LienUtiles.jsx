import { Text, Timeline } from '@mantine/core'
import { IconGitCommit } from '@tabler/icons-react';

import React from 'react'
import styled from 'styled-components';

const LinkPane = styled.a`
    color: gray
`

const LienUtiles = () => {
    return (
        <Timeline bulletSize={24} lineWidth={2}>
            <Timeline.Item bullet={<IconGitCommit size={12} />}
                title="Conception de l'interface du super admin d'UNISTAF">
                <Text c="dimmed" size="sm">Figma</Text>
                <Text size="xs" mt={4}>
                    <LinkPane href='https://www.figma.com/file/Yl8yVl2lv2PdnZdyJ3RKtC/UNISTAF?type=design&nodeid=0%3A1&mode=design&t=h3IlwqmBekM5nine-1' target='_blank' rel="noreferrer">Visitez</LinkPane>
                </Text>
            </Timeline.Item>

            <Timeline.Item bullet={<IconGitCommit size={12} />} title="Conception de l'interface d'admin d' UNISTAF">
                <Text c="dimmed" size="sm">Figma</Text>
                <Text size="xs" mt={4}><LinkPane href='https://www.figma.com/file/Yl8yVl2lv2PdnZdyJ3RKtC/UNISTAF?type=design&nodeid=829%3A3049&mode=design&t=h3IlwqmBekM5nine-1' target='_blank' rel="noreferrer">Visitez</LinkPane></Text>
            </Timeline.Item>

            <Timeline.Item
                title="Conception de l'interface utilisateur d' UNISTAF en cours"
                bullet={<IconGitCommit size={12} />} lineVariant="dashed"
            >
                <Text c="dimmed" size="sm">Figma</Text>
                <Text size="xs" mt={4}><LinkPane href='https://www.figma.com/file/Yl8yVl2lv2PdnZdyJ3RKtC/UNISTAF?type=design&nodeid=829%3A3050&mode=design&t=h3IlwqmBekM5nine-1' target='_blank' rel="noreferrer">Visitez</LinkPane></Text>
            </Timeline.Item>

            <Timeline.Item title="Conception de l'interface Etudiant de Bakeli Carrière" bullet={<IconGitCommit size={12} />}>
                <Text c="dimmed" size="sm">Figma</Text>
                <Text size="xs" mt={4}><LinkPane href='https://www.figma.com/file/zLYpqagy6b0fyhLPc52Xsx/BAKELI-CARRI%C3%88RE?type=design&node-id=0%3A1&mode=design&t=3VLBuRUJmymWJ1iP-1' target='_blank' rel="noreferrer">Visitez</LinkPane></Text>
            </Timeline.Item>
            <Timeline.Item title="Conception de l'interface Établissement de Bakeli Carrière en cours" bullet={<IconGitCommit size={12} />}>
                <Text c="dimmed" size="sm">Figma</Text>
                <Text size="xs" mt={4}><LinkPane href='https://www.figma.com/file/zLYpqagy6b0fyhLPc52Xsx/BAKELI-CARRI%C3%88RE?type=design&node-id=0%3A1&mode=design&t=3VLBuRUJmymWJ1iP-1' target='_blank' rel="noreferrer">Visitez</LinkPane></Text>
            </Timeline.Item>
            <Timeline.Item title="Conception de l'application Fewnu trésorerie" bullet={<IconGitCommit size={12} />}>
                <Text c="dimmed" size="sm">Figma</Text>
                <Text size="xs" mt={4}><LinkPane href='https://www.figma.com/file/jzapN6I57ru7HZc93FYYWB/Fewnu-Tr%C3%A9sorerie?type=design&node-id=529%3A1438&mode=design&t=4lz3DfJnRkg6fGNT-1' target='_blank' rel="noreferrer">Visitez</LinkPane></Text>
            </Timeline.Item>
            <Timeline.Item title="Conception de l'interface Admin Fewnu Trésorerie" bullet={<IconGitCommit size={12} />}>
                <Text c="dimmed" size="sm">Figma</Text>
                <Text size="xs" mt={4}><LinkPane href='https://www.figma.com/file/jzapN6I57ru7HZc93FYYWB/Fewnu-Tr%C3%A9sorerie?type=design&node-id=529%3A1438&mode=design&t=4lz3DfJnRkg6fGNT-1' target='_blank' rel="noreferrer">Visitez</LinkPane></Text>
            </Timeline.Item>
            <Timeline.Item title="Conception de l'application mobile acheteur de vente en ligne d'Easy Market" bullet={<IconGitCommit size={12} />}>
                <Text c="dimmed" size="sm">Figma</Text>
                <Text size="xs" mt={4}><LinkPane href='https://www.figma.com/file/QRdejn9dcyAWMyMAADqfvR/Easy-Market-(Mobile)?type=design&node-id=1%3A2&mode=design&t=YO842kxKfxlyMaFs-1' target='_blank' rel="noreferrer">Visitez</LinkPane></Text>
            </Timeline.Item>
            <Timeline.Item title="Conception de la landing page de Bakeli Carrière" bullet={<IconGitCommit size={12} />}>
                <Text c="dimmed" size="sm">Figma</Text>
                <Text size="xs" mt={4}><LinkPane href='https://www.figma.com/file/RVhE1zfmeh28TDIwvnIcPE/Landing-page-Bakeli-Carri%C3%A8re?type=design&node-id=0%3A1&mode=design&t=4wNthudu3W1qstJn-1' target='_blank' rel="noreferrer">Visitez</LinkPane></Text>
            </Timeline.Item>
            <Timeline.Item title="Conception du site vitrine de Fewnu App" bullet={<IconGitCommit size={12} />}>
                <Text c="dimmed" size="sm">Figma</Text>
                <Text size="xs" mt={4}><LinkPane href='https://www.figma.com/file/yEYiBT6EjhNP4E9krmTcX0/Design-Fewnu-App-web-site?type=design&node-id=0%3A1&mode=design&t=IA3EKhZSYZI5GPOx-1' target='_blank' rel="noreferrer">Visitez</LinkPane></Text>
            </Timeline.Item>
            <Timeline.Item title="Conception de l'interface utilisateur de la plateforme de Cryptocurrency Kronance" bullet={<IconGitCommit size={12} />}>
                <Text c="dimmed" size="sm">Figma</Text>
                <Text size="xs" mt={4}><LinkPane href='https://www.figma.com/file/7aH3pkna4mVr2TuQFQYJjj/GB-PROJET?type=design&nodeid=0%3A1&mode=design&t=WEsc4hgx9akCq5MA-1' target='_blank' rel="noreferrer">Visitez</LinkPane></Text>
            </Timeline.Item>
        </Timeline>
    )
}

export default LienUtiles