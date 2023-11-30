import { ReactNode } from "react";
import { useRouter } from "next/router";
import { Button, ButtonGroup, Card, CardBody, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { item, text } from "../motion/motionSettings";

interface HeaderProps {
    crudName: string;
    crudMethod: "Cadastrando" | "Visualizando" | "Editando" | "Listando";
    crudIcon: ReactNode;
    divider?: boolean;
}

const Header: React.FC<HeaderProps> = ({ crudName, crudMethod, crudIcon, divider }) => {
    const Router = useRouter();

    return (
        <>
            <Card className="mb-6">
                <CardBody>
                    <div className="text-center content-center">
                        <div className="text-xl flex items-center justify-center">
                            <motion.div variants={text} initial="hidden" animate="visible">
                                {crudIcon}
                            </motion.div>
                            <motion.div className="container" variants={text} initial="hidden" animate="visible">
                                <span className="font-extrabold ml-4 max-md:hidden">{crudMethod} {crudName}</span>
                            </motion.div>
                            <div className="ml-auto">
                                <motion.div variants={text} initial="hidden" animate="visible">
                                    <ButtonGroup variant="faded">
                                        <Button onClick={() => Router.back()}>Voltar</Button>
                                        <Button onClick={() => Router.push('/add')} variant="bordered" color="success">Adicionar</Button>
                                    </ButtonGroup>
                                </motion.div>
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
        </>
    );
};

export default Header;