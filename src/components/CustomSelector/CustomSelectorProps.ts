export interface CustomSelectorProps {
    selectorName: string;
    options: LabelAndValue[];
    valueSelectedCallback: (s:string) => void;
}

export type LabelAndValue = {
    label: string;
    value: string;
}