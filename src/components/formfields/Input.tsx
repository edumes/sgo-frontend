import React, { ReactNode } from 'react';
import { Input as RsuiteInput, InputProps as RsuiteInputProps, InputGroup } from 'rsuite';

interface InputProps extends RsuiteInputProps {
    label?: string;
    startContent?: ReactNode | string;
    endContent?: ReactNode | string;
}

const Input: React.FC<InputProps> = ({ label, startContent, endContent, as = 'input', ...rest }) => {
    const renderLabel = label && <label style={{ fontSize: 16, fontWeight: "bold" }}>{label.toLocaleUpperCase()}</label>;
    const hasAddon = startContent || endContent;

    return (
        <>
            {renderLabel}

            {hasAddon ? (
                <InputGroup>
                    {startContent && <InputGroup.Addon>{startContent}</InputGroup.Addon>}
                    <RsuiteInput as={as} block="true" {...rest} />
                    {endContent && <InputGroup.Addon>{endContent}</InputGroup.Addon>}
                </InputGroup>
            ) : (
                <RsuiteInput as={as} block="true" {...rest} />
            )}
        </>
    );
};

export default Input;