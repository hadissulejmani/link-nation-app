/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame1OverridesProps = {
    Frame1?: PrimitiveOverrideProps<FlexProps>;
    ProfileCard?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Melinda Marcus"?: PrimitiveOverrideProps<TextProps>;
    Bio?: PrimitiveOverrideProps<FlexProps>;
    "Design Engineer at Cloth Studios"?: PrimitiveOverrideProps<TextProps>;
    Price?: PrimitiveOverrideProps<FlexProps>;
    "99.9"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Frame1Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Frame1OverridesProps | undefined | null;
}>;
export default function Frame1(props: Frame1Props): React.ReactElement;
