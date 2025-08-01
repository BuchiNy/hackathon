/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ExerciseLogCreateFormInputValues = {
    patientID?: string;
    planID?: string;
    planItemID?: string;
    completedAt?: string;
    formScore?: number;
};
export declare type ExerciseLogCreateFormValidationValues = {
    patientID?: ValidationFunction<string>;
    planID?: ValidationFunction<string>;
    planItemID?: ValidationFunction<string>;
    completedAt?: ValidationFunction<string>;
    formScore?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExerciseLogCreateFormOverridesProps = {
    ExerciseLogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    patientID?: PrimitiveOverrideProps<TextFieldProps>;
    planID?: PrimitiveOverrideProps<TextFieldProps>;
    planItemID?: PrimitiveOverrideProps<TextFieldProps>;
    completedAt?: PrimitiveOverrideProps<TextFieldProps>;
    formScore?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExerciseLogCreateFormProps = React.PropsWithChildren<{
    overrides?: ExerciseLogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ExerciseLogCreateFormInputValues) => ExerciseLogCreateFormInputValues;
    onSuccess?: (fields: ExerciseLogCreateFormInputValues) => void;
    onError?: (fields: ExerciseLogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExerciseLogCreateFormInputValues) => ExerciseLogCreateFormInputValues;
    onValidate?: ExerciseLogCreateFormValidationValues;
} & React.CSSProperties>;
export default function ExerciseLogCreateForm(props: ExerciseLogCreateFormProps): React.ReactElement;
