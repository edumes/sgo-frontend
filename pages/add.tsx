import type { NextPage } from "next";
import { Button, ButtonGroup, Card, CardBody, Divider } from "@nextui-org/react";
import { SheepIcon } from "../components/icons/sheep-icon";
import { Table } from "../components/table/table";
import { FlexboxGrid, Col, Form } from "rsuite";
import { useForm } from 'react-hook-form';
import Input from "../components/formfields/Input";

const Add: NextPage = () => {
    const { register } = useForm();

    return (
        <div className="flex justify-center flex-col mt-5 px-6">
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

            <Divider className="my-4" />

            <Card>
                <CardBody>
                    <Form>
                        <FlexboxGrid justify="start" align="middle">
                            <FlexboxGrid.Item as={Col} order={1} colspan={24} md={6} style={{ marginBottom: 5 }}>
                                <Input label="nome" />
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item as={Col} order={2} colspan={24} md={6} style={{ marginBottom: 5 }}>
                                <Input label="descrição" />
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item as={Col} order={3} colspan={24} md={6} smHidden style={{ marginBottom: 5 }}>
                                <Input label="item1" />
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item as={Col} order={3} colspan={24} md={6} style={{ marginBottom: 5 }}>
                                <Input label="item2" />
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item as={Col} order={3} colspan={24} md={6} style={{ marginBottom: 5 }}>
                                <Input label="item3" />
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
};

export default Add;