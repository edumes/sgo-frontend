import React from 'react';
import { Button as NextUIButton, ButtonGroup as NextUIButtonGroup } from '@nextui-org/react';

interface ButtonProps {
    children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {

    return (
        <NextUIButton>
            {children}
        </NextUIButton>
    );
};

export default Button;