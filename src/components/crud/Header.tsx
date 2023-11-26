import { ReactNode } from "react";
import { useRouter } from "next/router";
import { Button, ButtonGroup, Card, CardBody, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { container, item } from "../motion/motionSettings";

interface HeaderProps {
    crudName: string;
    crudMethod: "Cadastrando" | "Visualizando" | "Editando" | "Listando";
    crudIcon: ReactNode;
    divider?: boolean;
}

const Header: React.FC<HeaderProps> = ({ crudName, crudMethod, crudIcon, divider }) => {
    const Router = useRouter();
    return (
        <motion.div
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <Card className="mb-6">
                <CardBody>
                    <div className="text-center content-center">
                        <div className="text-xl flex items-center justify-center">
                            {crudIcon}
                            <span className="font-extrabold ml-4 max-md:hidden">{crudMethod} {crudName}</span>

                            <div className="ml-auto">
                                <ButtonGroup variant="faded">
                                    <Button onClick={() => Router.back()}>Voltar</Button>
                                    <Button onClick={() => Router.push('/add')} variant="bordered" color="success">Adicionar</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>

            {divider && (
                <motion.div className="item" variants={item}>
                    <Divider className="my-4" />
                </motion.div>
            )}
        </motion.div>
    );
};

export default Header;