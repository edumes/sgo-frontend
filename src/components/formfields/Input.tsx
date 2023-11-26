import React, { ReactNode } from 'react';
import { Input as RsuiteInput, InputProps as RsuiteInputProps, InputGroup } from 'rsuite';
import Label from './Label';

interface InputProps extends RsuiteInputProps {
    label?: string;
    size?: Sizes;
    startContent?: ReactNode | string;
    endContent?: ReactNode | string;
}

const Input: React.FC<InputProps> = ({ label, size = 'md', startContent, endContent, as = 'input', ...rest }) => {
    const renderLabel = label && <Label size={size}>{label}</Label>;
    const hasAddon = startContent || endContent;

    return (
        <>
            {renderLabel}

            {hasAddon ? (
                <InputGroup>
                    {startContent && <InputGroup.Addon>{startContent}</InputGroup.Addon>}
                    <RsuiteInput as={as} size={size} block={true} {...rest} />
                    {endContent && <InputGroup.Addon>{endContent}</InputGroup.Addon>}
                </InputGroup>
            ) : (
                <RsuiteInput as={as} size={size} block={true} {...rest} />
            )}
        </>
    );
};

export default Input;