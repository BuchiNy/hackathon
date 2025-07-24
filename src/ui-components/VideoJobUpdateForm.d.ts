/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { VideoJob } from "../API.ts";
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
export declare type VideoJobUpdateFormInputValues = {
    userId?: string;
    status?: string;
    prompt?: string;
    videoUrl?: string;
    s3Key?: string;
    created_at?: number;
    updated_at?: number;
};
export declare type VideoJobUpdateFormValidationValues = {
    userId?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    prompt?: ValidationFunction<string>;
    videoUrl?: ValidationFunction<string>;
    s3Key?: ValidationFunction<string>;
    created_at?: ValidationFunction<number>;
    updated_at?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VideoJobUpdateFormOverridesProps = {
    VideoJobUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    prompt?: PrimitiveOverrideProps<TextFieldProps>;
    videoUrl?: PrimitiveOverrideProps<TextFieldProps>;
    s3Key?: PrimitiveOverrideProps<TextFieldProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    updated_at?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VideoJobUpdateFormProps = React.PropsWithChildren<{
    overrides?: VideoJobUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    videoJob?: VideoJob;
    onSubmit?: (fields: VideoJobUpdateFormInputValues) => VideoJobUpdateFormInputValues;
    onSuccess?: (fields: VideoJobUpdateFormInputValues) => void;
    onError?: (fields: VideoJobUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VideoJobUpdateFormInputValues) => VideoJobUpdateFormInputValues;
    onValidate?: VideoJobUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VideoJobUpdateForm(props: VideoJobUpdateFormProps): React.ReactElement;
