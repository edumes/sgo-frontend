import React from "react";
import { Button, Card, CardBody } from "@nextui-org/react";
import { Panel, Table as RsuiteTable } from "rsuite";
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
      </RsuiteTable>
    </Panel>
  );
};