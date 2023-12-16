import type { NextPage } from "next";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Panel, FlexboxGrid, Col, Form, Nav } from "rsuite";
import { motion } from "framer-motion";
import useComponentSize from "../../utils/useComponentSize";
import Input from "../formfields/Input";
import Select from "../formfields/Select";
import { MinusIcon } from "../icons/minus-icon";
import { PlusIcon } from "../icons/plus-icon";
import { BackIcon } from "../icons/back-icon";
import { RightIcon } from "../icons/right-icon";
import { container, item } from "../motion/motionSettings";

interface FormalizeProps {
    withNavs?: boolean;
}

const Formalize: NextPage<FormalizeProps> = ({ withNavs }) => {
    const $PAGE = {
        "$PAGE": {
            "prefix": "sheep",
            "table": "sheeps",
            "singular_name": "Ovelha",
            "plural_name": "Ovelhas",
            "browse": true,
            "create": true,
            "read": true,
            "update": true,
            "delete": true,
            "icon": "toolbox",
            "tabs": [
                {
                    "key": "principal",
                    "label": "Principal"
                }
            ]
        },
        "sheep_id": {
            "name": "sheep_id",
            "order": 1,
            "width": 1,
            "browserOrder": 1,
            "browserWidth": 1,
            "type": "numeric",
            "canBrowse": true,
            "canRead": false,
            "canEdit": false,
            "canAdd": false,
            "label": "Código",
            "tabs": [
                "principal"
            ],
            "showOnTop": false
        },
        "sheep_number": {
            "name": "sheep_number",
            "order": 1,
            "width": 2,
            "browserWidth": 2,
            "type": "text",
            "canBrowse": true,
            "canRead": true,
            "canEdit": true,
            "canAdd": true,
            "label": "Número",
            "showOnTop": false,
            "tabs": [
                "principal"
            ]
        },
        "sheep_fk_race_id": {
            "name": "sheep_fk_race_id",
            "order": 2,
            "width": 6,
            "browserOrder": 2,
            "browserWidth": 5,
            "type": "select",
            "canBrowse": true,
            "canRead": true,
            "canEdit": true,
            "canAdd": true,
            "label": "Raça",
            "required": true,
            "showOnTop": true,
            "tabs": [
                "principal"
            ],
            "api": {
                "method": "GET",
                "uses": [
                    {
                        "type": "field",
                        "field": "project_fk_client_id",
                        "as": "clients"
                    }
                ],
                "url": "/api/v1/clients/select"
            },
            "displayLabel": "client_fantasy_name",
            "alias": "clients",
            "browseLabel": "clients.client_fantasy_name"
        },
        "sheep_birth": {
            "name": "sheep_birth",
            "order": 3,
            "width": 4,
            "browserWidth": 4,
            "type": "text",
            "canBrowse": false,
            "canRead": true,
            "canEdit": true,
            "canAdd": true,
            "label": "Data de Nascimento",
            "showOnTop": false,
            "tabs": [
                "principal"
            ]
        },
        "sheep_created_at": {
            "name": "sheep_created_at",
            "order": 4,
            "width": 3,
            "browserWidth": 3,
            "type": "text",
            "canBrowse": true,
            "canRead": true,
            "canEdit": false,
            "canAdd": false,
            "label": "Registrado em",
            "showOnTop": false,
            "tabs": [
                "principal"
            ]
        },
        "divider": {
            "name": "divider",
            "order": 4,
            "width": 12,
            "browserWidth": 6,
            "type": "divider",
            "canBrowse": false,
            "canRead": true,
            "canEdit": true,
            "canAdd": true,
            "label": "Acessos",
            "showOnTop": false,
            "tabs": [
                "principal"
            ]
        },
    };

    const {
        size,
        sizeClass,
        increaseSize,
        decreaseSize,
        isDecreaseDisabled,
        isIncreaseDisabled,
    } = useComponentSize();

    const renderFormField = (field: any) => {
        const { name, type, label, data } = field;

        switch (type) {
            case "text":
                return (
                    <Input
                        key={name}
                        size={sizeClass}
                        label={label}
                    />
                );
            case "select":
                return (
                    <Select
                        key={name}
                        size={sizeClass}
                        label={label}
                        data={data}
                    />
                );

            default:
                return null;
        }
    };

    const groupedFields: Record<string, any[]> = {};
    Object.keys($PAGE).forEach((key) => {
        if (key !== "$PAGE") { // Exclude the $PAGE index
            const field = $PAGE[key];
            const tabs = field.tabs || [];

            tabs.forEach((tab: string) => {
                if (!groupedFields[tab]) {
                    groupedFields[tab] = [];
                }
                groupedFields[tab].push(field);
            });
        }
    });

    // Determine the currently selected tab (for demonstration purposes, using "principal" as the default)
    const currentTab = "principal"; // You may need to change this based on your application's logic

    return (
        <motion.div className="form-field">
            {withNavs && (
                <Nav appearance="tabs">
                    {Object.keys(groupedFields).map((tab) => (
                        <Nav.Item key={tab}>{tab}</Nav.Item>
                    ))}
                </Nav>
            )}
            <Panel bordered>
                <Form>
                    <FlexboxGrid justify="start">
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
                            key={currentTab}
                            className="container"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            {groupedFields[currentTab].map((field) => (
                                <motion.li
                                    className="form-field"
                                    variants={item}
                                    key={field.name}
                                >
                                    <FlexboxGrid.Item
                                        as={Col}
                                        order={field.order}
                                        md={field.width}
                                        colspan={24}
                                        style={{ marginBottom: 20 }}
                                    >
                                        {renderFormField(field)}
                                    </FlexboxGrid.Item>
                                </motion.li>
                            ))}
                        </motion.ul>
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
                    </FlexboxGrid>
                </Form>
            </Panel>
        </motion.div>
    );
};

export default Formalize;