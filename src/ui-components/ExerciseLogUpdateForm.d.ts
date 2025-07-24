/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ExerciseLog } from "../API.ts";
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
export declare type ExerciseLogUpdateFormInputValues = {
    patientID?: string;
    planID?: string;
    planItemID?: string;
    completedAt?: string;
    formScore?: number;
};
export declare type ExerciseLogUpdateFormValidationValues = {
    patientID?: ValidationFunction<string>;
    planID?: ValidationFunction<string>;
    planItemID?: ValidationFunction<string>;
    completedAt?: ValidationFunction<string>;
    formScore?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExerciseLogUpdateFormOverridesProps = {
    ExerciseLogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    patientID?: PrimitiveOverrideProps<TextFieldProps>;
    planID?: PrimitiveOverrideProps<TextFieldProps>;
    planItemID?: PrimitiveOverrideProps<TextFieldProps>;
    completedAt?: PrimitiveOverrideProps<TextFieldProps>;
    formScore?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExerciseLogUpdateFormProps = React.PropsWithChildren<{
    overrides?: ExerciseLogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    exerciseLog?: ExerciseLog;
    onSubmit?: (fields: ExerciseLogUpdateFormInputValues) => ExerciseLogUpdateFormInputValues;
    onSuccess?: (fields: ExerciseLogUpdateFormInputValues) => void;
    onError?: (fields: ExerciseLogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExerciseLogUpdateFormInputValues) => ExerciseLogUpdateFormInputValues;
    onValidate?: ExerciseLogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ExerciseLogUpdateForm(props: ExerciseLogUpdateFormProps): React.ReactElement;
