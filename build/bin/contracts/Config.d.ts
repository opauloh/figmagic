export declare type Config = {
    debugMode: boolean;
    camelizeTokenNames: boolean;
    borderWidthUnit: BorderWidthUnit;
    fontUnit: FontUnits;
    letterSpacingUnit: LetterSpacingUnit;
    lineHeightUnit: LineHeightUnit;
    opacitiesUnit: OpacitiesUnit;
    radiusUnit: RadiusUnit;
    shadowUnit: ShadowUnit;
    spacingUnit: SpacingUnit;
    figmaData: string;
    figmagicFolder: string;
    outputFolderElements: string;
    outputFolderGraphics: string;
    outputFolderTokens: string;
    outputFormatColors: OutputFormatColors;
    outputFormatCss: OutputFormatCss;
    outputFormatDescription: OutputFormatDescription;
    outputFormatElements: OutputFormatElements;
    outputFormatGraphics: OutputFormatGraphics;
    outputFormatStorybook: OutputFormatStorybook;
    outputFormatTokens: OutputFormatTokens;
    outputGraphicElements: boolean;
    outputGraphicElementsMap: boolean;
    outputScaleGraphics: number;
    outputDataTypeToken: OutputDataTypeToken;
    overwrite: Overwrite;
    recompileLocal: boolean;
    remSize: number;
    skipFileGeneration: {
        forceUpdate: boolean;
        skipCss: boolean;
        skipDescription: boolean;
        skipReact: boolean;
        skipStorybook: boolean;
        skipStyled: boolean;
    };
    syncElements: boolean;
    syncGraphics: boolean;
    syncTokens: boolean;
    templates: {
        templatePathGraphic: string;
        templatePathReact: string;
        templatePathStorybook: string;
        templatePathStyled: string;
    };
    token: string | null;
    tokensRelativeImportPrefix: string;
    unitlessPrecision: number;
    url: string | null;
    usePostscriptFontNames: boolean;
    versionName: string | null;
};
export declare type ConfigDTO = {
    debugMode?: boolean;
    camelizeTokenNames?: boolean;
    borderWidthUnit?: BorderWidthUnit;
    fontUnit?: FontUnits;
    letterSpacingUnit?: LetterSpacingUnit;
    lineHeightUnit?: LineHeightUnit;
    opacitiesUnit?: OpacitiesUnit;
    radiusUnit?: RadiusUnit;
    shadowUnit?: ShadowUnit;
    spacingUnit?: SpacingUnit;
    figmaData?: string;
    figmagicFolder?: string;
    outputFolderElements?: string;
    outputFolderGraphics?: string;
    outputFolderTokens?: string;
    outputFormatColors?: OutputFormatColors;
    outputFormatCss?: OutputFormatCss;
    outputFormatDescription?: OutputFormatDescription;
    outputFormatElements?: OutputFormatElements;
    outputFormatGraphics?: OutputFormatGraphics;
    outputFormatStorybook?: OutputFormatStorybook;
    outputFormatTokens?: OutputFormatTokens;
    outputGraphicElements?: boolean;
    outputGraphicElementsMap?: boolean;
    outputScaleGraphics?: number;
    outputDataTypeToken?: OutputDataTypeToken;
    overwrite?: {
        css: boolean;
        description: boolean;
        graphic: boolean;
        react: boolean;
        storybook: boolean;
        styled: boolean;
    };
    recompileLocal?: boolean;
    remSize?: number;
    skipFileGeneration?: {
        forceUpdate?: boolean;
        skipCss?: boolean;
        skipDescription?: boolean;
        skipReact?: boolean;
        skipStorybook?: boolean;
        skipStyled?: boolean;
    };
    syncElements?: boolean;
    syncGraphics?: boolean;
    syncTokens?: boolean;
    templates?: {
        templatePathGraphic?: string;
        templatePathReact?: string;
        templatePathStorybook?: string;
        templatePathStyled?: string;
    };
    token?: string | null;
    tokensRelativeImportPrefix?: string | null;
    unitlessPrecision?: number;
    url?: string | null;
    usePostscriptFontNames?: boolean;
    versionName?: string | null;
};
export declare type Overwrite = {
    css: boolean;
    description: boolean;
    graphic: boolean;
    react: boolean;
    storybook: boolean;
    styled: boolean;
};
export declare type BorderWidthUnit = 'rem' | 'em' | 'px';
export declare type ShadowUnit = 'rem' | 'em' | 'px';
export declare type RadiusUnit = 'rem' | 'em' | 'px';
export declare type FontUnits = 'rem' | 'em' | 'px';
export declare type LetterSpacingUnit = 'em' | 'px';
export declare type LineHeightUnit = 'unitless' | 'px' | 'rem' | 'em';
export declare type OpacitiesUnit = 'float' | 'percent';
export declare type SpacingUnit = 'rem' | 'em' | 'px';
export declare type OutputFormatColors = 'hex' | 'rgba';
export declare type OutputFormatCss = 'ts' | 'mjs' | 'js';
export declare type OutputFormatDescription = 'md' | 'txt';
export declare type OutputFormatElements = 'tsx' | 'jsx';
export declare type OutputFormatGraphics = 'svg' | 'png';
export declare type OutputFormatStorybook = 'ts' | 'js' | 'mdx';
export declare type OutputFormatTokens = 'ts' | 'mjs' | 'js' | 'json';
export declare type OutputDataTypeToken = null | 'enum';
