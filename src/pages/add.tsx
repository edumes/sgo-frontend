import type { NextPage } from "next";
import { Button, ButtonGroup, Card, CardBody, Divider } from "@nextui-org/react";
import { SheepIcon } from "../components/icons/sheep-icon";
import { Panel, FlexboxGrid, Col, Form, Nav } from "rsuite";
import { useForm } from 'react-hook-form';
import Input from "../components/formfields/Input";
import Select from "../components/formfields/Select";
import { motion } from "framer-motion";
import { container, item } from "../components/motion/motionSettings";
import { InfoIcon } from "../components/icons/info-icon";

const Add: NextPage = () => {
    const { register } = useForm();

    return (
        <div className="flex justify-center flex-col mt-5 px-6">
            <motion.div
                className="container"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <Card>
                    <CardBody>
                        <div className="text-center content-center">
                            <div className="text-xl flex items-center justify-center">
                                <SheepIcon size="72" />
                                <span className="font-extrabold ml-4 max-md:hidden">Cadastrar Ovelha</span>

                                <div className="ml-auto">
                                    <ButtonGroup variant="faded">
                                        <Button>Voltar</Button>
                                        {/* <Button variant="bordered" color="success">Adicionar</Button> */}
                                    </ButtonGroup>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                <motion.div className="item" variants={item}>
                    <Divider className="my-4" />
                </motion.div>

                <motion.div className="item" variants={item}>
                    <Nav appearance="tabs">
                        <Nav.Item active>Dados Principais</Nav.Item>
                        <Nav.Item>tab 2</Nav.Item>
                        <Nav.Item>tab 3</Nav.Item>
                    </Nav>
                    <Panel bordered>
                        <Form>
                            <FlexboxGrid justify="start" align="middle">
                                <motion.ul
                                    className="container"
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.li className="item" variants={item}>
                                        <FlexboxGrid.Item as={Col} order={1} colspan={24} md={6} style={{ marginBottom: 20 }}>
                                            <Input label="nome" />
                                        </FlexboxGrid.Item>
                                    </motion.li>

                                    <motion.li className="item" variants={item}>
                                        <FlexboxGrid.Item as={Col} order={2} colspan={24} md={6} style={{ marginBottom: 20 }}>
                                            <Input label="descrição" />
                                        </FlexboxGrid.Item>
                                    </motion.li>

                                    <motion.li className="item" variants={item}>
                                        <FlexboxGrid.Item as={Col} order={3} colspan={24} md={6} smHidden style={{ marginBottom: 20 }}>
                                            {/* <Input label="item1" startContent="aaa" endContent={<SheepIcon color="#121212" size="10" />} /> */}
                                        </FlexboxGrid.Item>
                                    </motion.li>

                                    <motion.li className="item" variants={item}>
                                        <FlexboxGrid.Item as={Col} order={3} colspan={24} md={6} style={{ marginBottom: 20 }}>
                                            <Input label="item2" />
                                        </FlexboxGrid.Item>
                                    </motion.li>

                                    <motion.li className="item" variants={item}>
                                        <FlexboxGrid.Item as={Col} order={3} colspan={24} md={6} style={{ marginBottom: 20 }}>
                                            <Select label="teste" data={[]} />
                                        </FlexboxGrid.Item>
                                    </motion.li>
                                </motion.ul>
                            </FlexboxGrid>
                        </Form>
                    </Panel>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Add;