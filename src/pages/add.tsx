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
import Header from "../components/crud/Header";
import Formalize from "../components/crud/Formalize";

const Add: NextPage = () => {
    const { register } = useForm();

    return (
        <div className="flex justify-center flex-col mt-5 px-6">
            <Header
                crudName="Ovelhas"
                crudMethod="Listando"
                crudIcon={<SheepIcon size="72" />}
            // divider
            />

            <Formalize withNavs />
        </div>
    );
};

export default Add;