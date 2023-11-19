import type { NextPage } from "next";
import { Button, ButtonGroup, Card, CardBody, Divider } from "@nextui-org/react";
import { Table } from "rsuite";
const { Column, HeaderCell, Cell } = Table;
import { SheepIcon } from "../components/icons/sidebar/sheep-icon";

const Sheeps: NextPage = () => {
  return (
    <div className="flex justify-center flex-col mt-5 px-6">
      <Card>
        <CardBody className="my-4">
          <div className="text-center content-center">
            <div className="text-xl flex items-center justify-center">
              <SheepIcon size="72" />
              <span className="font-extrabold ml-2 max-md:hidden">Listando Ovelhas</span>

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

      <Card>
        <CardBody>
          <Table
            height={420}
            data={[]}
            // fillHeight={true}
            virtualized
            translate3d={true}
          // onRowClick={(rowData: any) => {
          //   console.log(rowData);
          // }}

          // sortColumn={sortColumn}
          // sortType={sortType}
          // onSortColumn={handleSortColumn}
          // loading={loading}
          >

            <Column width={400} sortable minWidth={200} resizable>
              <HeaderCell>Descrição</HeaderCell>
              <Cell dataKey="description" />
            </Column>

            <Column width={150} sortable minWidth={200} resizable>
              <HeaderCell>Fabricante</HeaderCell>
              {/* <Cell>{rowData => <SelectTable name="fabricante" onLoad={true} value={rowData['manufacturerID']} />}</Cell> */}
              <Cell dataKey="manufacturer.name" />
            </Column>

            <Column width={70} fixed="right">
              <HeaderCell>Ações</HeaderCell>
              <Cell style={{ padding: '6px', marginLeft: 15 }}>
                {rowData => (
                  <Button>aaa</Button>
                )}
              </Cell>
            </Column>

            <Column width={65} fixed="right">
              <HeaderCell>&nbsp;</HeaderCell>
              <Cell style={{ padding: '6px' }}>
                {rowData => (
                  <Button>aaaa</Button>
                )}
              </Cell>
            </Column>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Sheeps;