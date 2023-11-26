import type { NextPage } from "next";
import { Button, ButtonGroup, Card, CardBody, Divider } from "@nextui-org/react";
import { SheepIcon } from "../components/icons/sheep-icon";
import { Table } from "../components/crud/Browserlize";
import Header from "../components/crud/Header";

const Sheeps: NextPage = () => {
  return (
    <div className="flex justify-center flex-col mt-5 px-6">
      <Header
        crudName="Ovelhas"
        crudMethod="Listando"
        crudIcon={<SheepIcon size="72" />}
        divider
      />

      <Table />
    </div>
  );
};

export default Sheeps;