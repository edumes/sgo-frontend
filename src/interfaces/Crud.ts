import { ReactNode } from "react";

interface Page {
    prefix: string;
    table: string;
    singular_name: string;
    plural_name: string;
    browse: boolean;
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
    icon: ReactNode | string;
    tabs?: Tab[];
}

interface Tab {
    key: string;
    label: string;
}

interface Field {
    name: string;
    order: number;
    width: number;
    gridWidth: number;
    type: FieldType;
    canCreate: boolean;
    canRead: boolean;
    canUpdate: boolean;
    canDelete: boolean;
    tabs?: Tab[];
    showOnHead: boolean;
    api?: ApiConfig[];
    displayLabel?: string;
    alias?: string;
    browseLabel?: string;
}

interface FieldType {
    type: 'text' | 'select';
    options?: string[];
}

interface ApiConfig {
    url: string;
    uses?: ApiUse[];
}

interface ApiUse {
    type: string;
    field: string;
    as: string;
}