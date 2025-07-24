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
export declare type VideoJobCreateFormInputValues = {
    userId?: string;
    status?: string;
    prompt?: string;
    videoUrl?: string;
    s3Key?: string;
    created_at?: number;
    updated_at?: number;
};
export declare type VideoJobCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    prompt?: ValidationFunction<string>;
    videoUrl?: ValidationFunction<string>;
    s3Key?: ValidationFunction<string>;
    created_at?: ValidationFunction<number>;
    updated_at?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideoJobCreateFormOverridesProps = {
    VideoJobCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    prompt?: PrimitiveOverrideProps<TextFieldProps>;
    videoUrl?: PrimitiveOverrideProps<TextFieldProps>;
    s3Key?: PrimitiveOverrideProps<TextFieldProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    updated_at?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VideoJobCreateFormProps = React.PropsWithChildren<{
    overrides?: VideoJobCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VideoJobCreateFormInputValues) => VideoJobCreateFormInputValues;
    onSuccess?: (fields: VideoJobCreateFormInputValues) => void;
    onError?: (fields: VideoJobCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VideoJobCreateFormInputValues) => VideoJobCreateFormInputValues;
    onValidate?: VideoJobCreateFormValidationValues;
} & React.CSSProperties>;
export default function VideoJobCreateForm(props: VideoJobCreateFormProps): React.ReactElement;
