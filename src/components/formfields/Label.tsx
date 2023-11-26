import React from 'react';

const SizeMapping: Record<string, number> = {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
};

interface LabelProps {
    children: string;
    size?: keyof typeof SizeMapping;
}

const Label: React.FC<LabelProps> = ({ children, size = 'md' }) => {
    const fontSize = SizeMapping[size] || SizeMapping['md'];

    return (
        <label style={{ fontSize, fontWeight: "bold" }}>
            {children.toLocaleUpperCase()}
        </label>
    );
};

export default Label;