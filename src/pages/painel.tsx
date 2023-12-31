import type { NextPage } from "next";
import { Button, ButtonGroup, Card, CardBody, Divider } from "@nextui-org/react";
import { SheepIcon } from "../components/icons/sheep-icon";
import { Table } from "../components/crud/Browserlize";

const Painel: NextPage = () => {
  return (
    <div className="flex justify-center flex-col mt-5 px-6">
      <Card>
        <CardBody>
          <div className="text-center content-center">
            <div className="text-xl flex items-center justify-center">
              <SheepIcon size="72" />
              <span className="font-extrabold ml-4 max-md:hidden">Listando Ovelhas</span>

              <div className="ml-auto">
                <ButtonGroup variant="faded">
                  <Button>Voltar</Button>
                  <Button variant="bordered" color="success">Adicionar</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      <Divider className="my-4" />

    </div>
  );
};

export default Painel;