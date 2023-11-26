import { Spinner } from '@nextui-org/react';
import React, { ReactNode, useState } from 'react';
import { SelectPicker as RsuiteSelectPicker, SelectPickerProps as RsuiteSelectPickerProps } from 'rsuite';

interface ItemType {
  label: string;
  value: string;
}

interface SelectPickerProps extends RsuiteSelectPickerProps<ItemType> {
  label?: string;
}

const data: ItemType[] = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
  item => ({ label: item, value: item })
);

const Select: React.FC<SelectPickerProps> = ({ label, ...rest }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const renderLabel = label && <label style={{ fontSize: 16, fontWeight: "bold" }}>{label.toLocaleUpperCase()}</label>;

  const renderMenu = (menu: any) => {
    if (loading) {
      return (
        <p style={{ padding: 4, color: '#999', textAlign: 'center', marginBottom: 10 }}>
          <Spinner color="success" />
        </p>
      );
    }
    return menu;
  };

  return (
    <>
      {renderLabel}

      <RsuiteSelectPicker
        data={data}
        block
        placeholder='Selecione'
        preventOverflow
        placement='bottomStart'
        // onOpen={getData}
        // onSearch={getData}
        renderMenu={renderMenu}
        {...rest}
      />

    {/* <motion.div
        layout
        data-isOpen={isOpen}
        initial={{ borderRadius: 50 }}
        className="parent"
        onClick={() => setIsOpen(!isOpen)}
        >
        <motion.div layout className="child" />
    </motion.div> */}
    </>
  );
};

export default Select;