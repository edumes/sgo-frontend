import type { NextPage } from "next";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Panel, FlexboxGrid, Col, Form, Nav } from "rsuite";
// import { useForm } from 'react-hook-form';
import Input from "../formfields/Input";
import Select from "../formfields/Select";
import { motion } from "framer-motion";
import { container, item } from "../motion/motionSettings";
import { useEffect, useState } from "react";
import { MinusIcon } from "../icons/minus-icon";
import { PlusIcon } from "../icons/plus-icon";
import { BackIcon } from "../icons/back-icon";
import { RightIcon } from "../icons/right-icon";
import useComponentSize from "../../utils/useComponentSize";

interface FormalizeProps {
    withNavs?: boolean;
}

const Formalize: NextPage<FormalizeProps> = ({ withNavs }) => {
    const {
        size,
        sizeClass,
        increaseSize,
        decreaseSize,
        isDecreaseDisabled,
        isIncreaseDisabled,
    } = useComponentSize();

    return (
        <motion.div className="item" variants={item}>
            {withNavs && (
                <Nav appearance="tabs">
                    <Nav.Item active={true}>Dados Principais</Nav.Item>
                    <Nav.Item>tab 2</Nav.Item>
                    <Nav.Item>tab 3</Nav.Item>
                </Nav>
            )}
            <Panel bordered>
                <Form>
                    <FlexboxGrid justify="start" align="middle">
                        <div className="ml-auto mb-4">
                            <ButtonGroup size="sm" variant="faded">
                                <Button variant="ghost" onClick={decreaseSize} disabled={isDecreaseDisabled}>
                                    <MinusIcon />
                                </Button>
                                <Button variant="ghost" disabled>{size}%</Button>
                                <Button variant="ghost" onClick={increaseSize} disabled={isIncreaseDisabled}>
                                    <PlusIcon />
                                </Button>
                            </ButtonGroup>
                        </div>
                        <motion.ul
                            className="container"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.li className="item" variants={item}>
                                <FlexboxGrid.Item as={Col} order={1} colspan={24} md={6} style={{ marginBottom: 20 }}>
                                    <Input
                                        size={sizeClass}
                                        label="nome"
                                    />
                                </FlexboxGrid.Item>
                            </motion.li>

                            <motion.li className="item" variants={item}>
                                <FlexboxGrid.Item as={Col} order={2} colspan={24} md={6} style={{ marginBottom: 20 }}>
                                    <Input
                                        size={sizeClass}
                                        label="descrição"
                                    />
                                </FlexboxGrid.Item>
                            </motion.li>

                            <motion.li className="item" variants={item}>
                                <FlexboxGrid.Item as={Col} order={3} colspan={24} md={6} style={{ marginBottom: 20 }}>
                                    <Input
                                        size={sizeClass}
                                        label="item2"
                                    />
                                </FlexboxGrid.Item>
                            </motion.li>

                            <motion.li className="item" variants={item}>
                                <FlexboxGrid.Item as={Col} order={4} colspan={24} md={6} style={{ marginBottom: 20 }}>
                                    <Select
                                        size={sizeClass}
                                        label="teste"
                                        data={[]}
                                    />
                                </FlexboxGrid.Item>
                            </motion.li>

                            <motion.li className="item" variants={item}>
                                <FlexboxGrid.Item as={Col} order={5} colspan={24} md={6} style={{ marginBottom: 20 }}>
                                    <Input
                                        size={sizeClass}
                                        label="item2"
                                    />
                                </FlexboxGrid.Item>
                            </motion.li>

                            <motion.li className="item" variants={item}>
                                <FlexboxGrid.Item as={Col} order={6} colspan={24} md={6} style={{ marginBottom: 20 }}>
                                    <Input
                                        size={sizeClass}
                                        label="item2"
                                    />
                                </FlexboxGrid.Item>
                            </motion.li>
                        </motion.ul>
                    </FlexboxGrid>
                    <motion.ul
                        className="container"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="mr-auto">
                            <Button size="md" variant="ghost">
                                <BackIcon size="20" /> Voltar
                            </Button>
                            <div className="ml-auto float-right">
                                <Button size="md" color="success" style={{ color: "#FFF" }} variant="solid">
                                    Avançar <RightIcon color="#FFF" size="20" />
                                </Button>
                            </div>
                        </div>
                    </motion.ul>
                </Form>
            </Panel>
        </motion.div >
    );
};

export default Formalize;