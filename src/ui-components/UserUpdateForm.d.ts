/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { User } from "../API.ts";
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
export declare type UserUpdateFormInputValues = {
    name?: string;
    email?: string;
    role?: string;
    age?: number;
    gender?: string;
    injuryHistory?: string;
    conditions?: string[];
    goals?: string[];
    mobilityLevel?: string;
    painScale?: number;
    targetBodyParts?: string[];
    availableEquipment?: string[];
    preferredTime?: string;
    reminderEnabled?: boolean;
};
export declare type UserUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    gender?: ValidationFunction<string>;
    injuryHistory?: ValidationFunction<string>;
    conditions?: ValidationFunction<string>;
    goals?: ValidationFunction<string>;
    mobilityLevel?: ValidationFunction<string>;
    painScale?: ValidationFunction<number>;
    targetBodyParts?: ValidationFunction<string>;
    availableEquipment?: ValidationFunction<string>;
    preferredTime?: ValidationFunction<string>;
    reminderEnabled?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserUpdateFormOverridesProps = {
    UserUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    injuryHistory?: PrimitiveOverrideProps<TextFieldProps>;
    conditions?: PrimitiveOverrideProps<TextFieldProps>;
    goals?: PrimitiveOverrideProps<TextFieldProps>;
    mobilityLevel?: PrimitiveOverrideProps<TextFieldProps>;
    painScale?: PrimitiveOverrideProps<TextFieldProps>;
    targetBodyParts?: PrimitiveOverrideProps<TextFieldProps>;
    availableEquipment?: PrimitiveOverrideProps<TextFieldProps>;
    preferredTime?: PrimitiveOverrideProps<TextFieldProps>;
    reminderEnabled?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type UserUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    user?: User;
    onSubmit?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onSuccess?: (fields: UserUpdateFormInputValues) => void;
    onError?: (fields: UserUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onValidate?: UserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserUpdateForm(props: UserUpdateFormProps): React.ReactElement;
