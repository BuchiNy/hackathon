/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Exercise } from "../API.ts";
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
export declare type ExerciseUpdateFormInputValues = {
    title?: string;
    category?: string;
    equipment?: string[];
    targetBodyParts?: string[];
    duration?: number;
    prompt?: string;
    reps?: number;
    sets?: number;
    weight?: number;
    description?: string;
    s3Key?: string;
    demoUrl?: string;
    createdAt?: string;
};
export declare type ExerciseUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    equipment?: ValidationFunction<string>;
    targetBodyParts?: ValidationFunction<string>;
    duration?: ValidationFunction<number>;
    prompt?: ValidationFunction<string>;
    reps?: ValidationFunction<number>;
    sets?: ValidationFunction<number>;
    weight?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
    s3Key?: ValidationFunction<string>;
    demoUrl?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExerciseUpdateFormOverridesProps = {
    ExerciseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    equipment?: PrimitiveOverrideProps<TextFieldProps>;
    targetBodyParts?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
    prompt?: PrimitiveOverrideProps<TextFieldProps>;
    reps?: PrimitiveOverrideProps<TextFieldProps>;
    sets?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    s3Key?: PrimitiveOverrideProps<TextFieldProps>;
    demoUrl?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExerciseUpdateFormProps = React.PropsWithChildren<{
    overrides?: ExerciseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    exercise?: Exercise;
    onSubmit?: (fields: ExerciseUpdateFormInputValues) => ExerciseUpdateFormInputValues;
    onSuccess?: (fields: ExerciseUpdateFormInputValues) => void;
    onError?: (fields: ExerciseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExerciseUpdateFormInputValues) => ExerciseUpdateFormInputValues;
    onValidate?: ExerciseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ExerciseUpdateForm(props: ExerciseUpdateFormProps): React.ReactElement;
