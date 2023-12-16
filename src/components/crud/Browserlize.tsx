import React from "react";
import { Button, Card, CardBody, Tooltip } from "@nextui-org/react";
import { Panel, Table as RsuiteTable } from "rsuite";
import { EditIcon } from "../icons/edit-icon";
import { DeleteIcon } from "../icons/delete-icon";
import { EyeIcon } from "../icons/eye-icon";
const { Column, HeaderCell, Cell } = RsuiteTable;

interface Props {
  data?: React.ReactNode;
}

export const Table = ({ data = [] }: Props) => {

  return (
    <Panel bordered>
      <RsuiteTable
        height={420}
        data={[{ description: "aaa", manufacturer: "fafas" }]}
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
        <Column width={400} sortable minWidth={200} resizable>
          <HeaderCell>Descrição</HeaderCell>
          <Cell dataKey="description" />
        </Column>
        <Column width={400} sortable minWidth={200} resizable>
          <HeaderCell>Descrição</HeaderCell>
          <Cell dataKey="description" />
        </Column>

        <Column width={150} sortable minWidth={200} resizable>
          <HeaderCell>Fabricante</HeaderCell>
          {/* <Cell>{rowData => <SelectTable name="fabricante" onLoad={true} value={rowData['manufacturerID']} />}</Cell> */}
          <Cell dataKey="manufacturer" />
        </Column>

        <Column width={70} fixed="right">
          <HeaderCell>Ações</HeaderCell>
          <Cell style={{ padding: '6px' }}>
            {rowData => (
              <Tooltip showArrow color="warning" content="Editar">
                <Button size="sm" isIconOnly variant="light" aria-label="Editar">
                  <EditIcon size="18" color="#f5a524" />
                </Button>
              </Tooltip>
            )}
          </Cell>
        </Column>

        <Column width={65} fixed="right">
          <HeaderCell>&nbsp;</HeaderCell>
          <Cell style={{ padding: '6px' }}>
            {rowData => (
              <Tooltip showArrow color="primary" content="Visualizar">
                <Button size="sm" isIconOnly variant="light" aria-label="Editar">
                  <EyeIcon size="18" color="#0170f1" />
                </Button>
              </Tooltip>
            )}
          </Cell>
        </Column>

        <Column width={65} fixed="right">
          <HeaderCell>&nbsp;</HeaderCell>
          <Cell style={{ padding: '6px' }}>
            {rowData => (
              <Tooltip showArrow color="danger" content="Editar">
                <Button size="sm" isIconOnly variant="light" aria-label="Editar">
                  <DeleteIcon size="18" color="#c70000" />
                </Button>
              </Tooltip>
            )}
          </Cell>
        </Column>
      </RsuiteTable>
    </Panel>
  );
};