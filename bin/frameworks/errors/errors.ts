import { colors } from '../system/colors';

export const ErrorAddDescriptionToElements = `${colors.FgRed}Missing elements and/or components in addDescriptionToElements()!${colors.Reset}`;
export const ErrorCamelize = `${colors.FgRed}No string provided to camelize()!${colors.Reset}`;
export const ErrorCleanArrays = `${colors.FgRed}Missing one or more of "classNames" and/or "classContent" when calling cleanArrays()!${colors.Reset}`;
export const ErrorConvertHexToRgba = `${colors.FgRed}Missing one or more of red, green, blue and alpha in convertHexToRgba()!${colors.Reset}`;
export const ErrorCreateConfiguration = `${colors.FgRed}No path provided to createConfiguration()!${colors.Reset}`;
export const ErrorCreateConfigurationNoDefault = `${colors.FgRed}No default configuration provided to createConfiguration()!${colors.Reset}`;
export const ErrorCreateCssString = `${colors.FgRed}Missing one or more of required arguments: "intersections", "uniqueValues"!${colors.Reset}`;
export const ErrorCreateElements = `${colors.FgRed}Missing arguments provided to createElements()!${colors.Reset}`;
export const ErrorCreateEnumStringOutOfObject = `${colors.FgRed}No object provided to createEnumStringOutOfObject()!${colors.Reset}`;
export const ErrorCreateFolder = `${colors.FgRed}No directory specified for createFolder()!${colors.Reset}`;
export const ErrorCreateGraphics = `${colors.FgRed}Missing arguments provided to createGraphics()!${colors.Reset}`;
export const ErrorCreateImportStringFromList = `${colors.FgRed}No "importArray" provided to createImportStringFromList()!${colors.Reset}`;
export const ErrorCreateImportStringFromListZeroLength = `${colors.FgRed}Provided "importArray" is zero-length when calling createImportStringFromList()!${colors.Reset}`;
export const ErrorCreatePage = `${colors.FgRed}No pages provided to createPage()!${colors.Reset}`;
export const ErrorCreateTokens = `${colors.FgRed}Missing required arguments when calling createTokens()!${colors.Reset}`;
export const ErrorDownloadFile = `${colors.FgRed}Missing one or more of "url", "folder", or "file" arguments in downloadFile()!${colors.Reset}`;
export const ErrorExtractDescription = `${colors.FgRed}Missing description in extractDescription()!${colors.Reset}`;
export const ErrorExtractTokens = `${colors.FgRed}No sheet or name for processTokens()!${colors.Reset}`;
export const ErrorExtractTokensNoConfig = `${colors.FgRed}No config provided to processTokens()!${colors.Reset}`;
export const ErrorFigmagicController = `${colors.FgRed}Error in FigmagicController()!${colors.Reset}`;
export const ErrorFindShortenedNameMatchWrongType = `${colors.FgRed}Arguments are not of string type!${colors.Reset}`;
export const ErrorGetData = `${colors.FgRed}Could not retrieve any data. Are you missing a valid API key?${colors.Reset}`;
export const ErrorGetDataNoData = `${colors.FgRed}No data retrieved...${colors.Reset}`;
export const ErrorGetDataFailedLocalAndRemote = `${colors.FgRed}Failed to get local and/or remote data in getData()!${colors.Reset}`;
export const ErrorGetDataLocal = `${colors.FgRed}Missing arguments when calling getDataLocal()!${colors.Reset}`;
export const ErrorGetDataNoTokenOrUrl = `${colors.FgRed}Missing token and/or URL when attempting to get remote data!${colors.Reset}`;
export const ErrorGetDescription = `${colors.FgRed}Missing element in getDescription()!${colors.Reset}`;
export const ErrorGetFontColor = `${colors.FgRed}Error in getFontColor()!${colors.Reset}`;
export const ErrorGetFiles = `${colors.FgRed}Error in getFiles()!${colors.Reset}`;
export const ErrorGetFileContents = `${colors.FgRed}Missing path, name and/or format!${colors.Reset}`;
export const ErrorGetFileContentAndPath = `${colors.FgRed}Missing argument in getFileContentAndPath()!${colors.Reset}`;
export const ErrorGetFileContentAndPathMissingFields = `${colors.FgRed}Missing fields in getFileContentAndPath()!${colors.Reset}`;
export const ErrorGetFileContentAndPathNoReturn = `${colors.FgRed}Missing return in getFileContentAndPath()!${colors.Reset}`;
export const ErrorGetFileList = `${colors.FgRed}Missing one or more of required arguments: "imageResponse", "ids" and/or "outputFormatGraphics" when calling getFileList()!${colors.Reset}`;
export const ErrorGetFromApi = `${colors.FgRed}Missing one or more of required arguments: "figmaToken", "figmaUrl" when attempting to get data from Figma API!${colors.Reset}`;
export const ErrorGetIds = `${colors.FgRed}No (or zero-length) array passed to getIds()!${colors.Reset}`;
export const ErrorGetIdstring = `${colors.FgRed}Missing required argument "ids" when calling getIdString()!${colors.Reset}`;
export const ErrorGetIntersectingValues = `${colors.FgRed}Missing "arrays" argument when calling getIntersectingValues()!${colors.Reset}`;
export const ErrorGetPaddingX = `${colors.FgRed}Error when calling getPaddingX()!${colors.Reset}`;
export const ErrorGetPaddingY = `${colors.FgRed}Error when calling getPaddingY()!${colors.Reset}`;
export const ErrorGetTokenMatch = `${colors.FgRed}Missing one or more of required arguments: "tokens", "tokenFileName", "property", and/or "expectedValue"!${colors.Reset}`;
export const ErrorGetTokenMatchNoRemSize = `${colors.FgRed}Missing required "remSize" argument for getTokenMatch() when converting to rem/em!${colors.Reset}`;
export const ErrorGetUniqueValues = `${colors.FgRed}Missing one or more of required arguments: "arrays", and/or "intersections" when calling getUniqueValues()!${colors.Reset}`;
export const ErrorHandleNestedElements = `${colors.FgRed}Missing element in handleNestedElements()!${colors.Reset}`;
export const ErrorLoadFile = (path: string): string => {
  if (!path) throw new Error('No string passed to ErrorLoadFile!');
  return `${colors.FgRed}Could not find file: ${path}!${colors.Reset}`;
};
export const ErrorNormalizeUnits = `${colors.FgRed}Missing arguments for normalizeUnits()!${colors.Reset}`;
export const ErrorNormalizeUnitsNoRemSize = `${colors.FgRed}Missing required "remSize" argument for normalizeUnits() when converting to rem/em!${colors.Reset}`;
export const ErrorNormalizeUnitsUndefined = `${colors.FgRed}arguments "rootSize" or "unitSize" are undefined!${colors.Reset}`;
export const ErrorParseCliArgs = `${colors.FgRed}No arguments array passed to parseCliArgs()!${colors.Reset}`;
export const ErrorParseCssFromElement = `${colors.FgRed}Missing one or more of required arguments: "layoutElement", "textElement", "remSize", and/or "outputTokenFormat" when calling parseCssFromElement()!${colors.Reset}`;
export const ErrorParseElement = `${colors.FgRed}Missing one or more of required arguments: "element", and/or "remSize" when calling parseElement()!${colors.Reset}`;
export const ErrorParseHeight = `${colors.FgRed}Error in parseHeight()!${colors.Reset}`;
export const ErrorParsePadding = `${colors.FgRed}Error in parsePadding()!${colors.Reset}`;
export const ErrorGetBackgroundColor = `${colors.FgRed}Error in getBackgroundColor()!${colors.Reset}`;
export const ErrorParseBackgroundColor = `${colors.FgRed}Error in parseBackgroundColor()!${colors.Reset}`;
export const ErrorParseBorderWidth = `${colors.FgRed}Error in parseBorderWidth()!${colors.Reset}`;
export const ErrorGetBorderColor = `${colors.FgRed}Error in getBorderColor()!${colors.Reset}`;
export const ErrorParseBorderColor = `${colors.FgRed}Error in parseBorderColor()!${colors.Reset}`;
export const ErrorParseBorderRadius = `${colors.FgRed}Error in parseBorderRadius()!${colors.Reset}`;
export const ErrorGetShadow = `${colors.FgRed}Error in getShadow()!${colors.Reset}`;
export const ErrorParseShadow = `${colors.FgRed}Error in parseShadow()!${colors.Reset}`;
export const ErrorUpdateParsing = `${colors.FgRed}Error in updateParsing()!${colors.Reset}`;
export const ErrorParseTypographyStylingFromElement = `${colors.FgRed}Missing one or more of required arguments: "element", or "remSize" when calling parseTypographyStylingFromElement()!${colors.Reset}`;
export const ErrorPrepFileComponent = `${colors.FgRed}Missing required arguments in type, when calling prepComponent()!${colors.Reset}`;
export const ErrorPrepFileCss = `${colors.FgRed}Missing required arguments in type, when calling prepComponent()!${colors.Reset}`;
export const ErrorPrepFileDescription = `${colors.FgRed}Missing required arguments in type, when calling prepComponent()!${colors.Reset}`;
export const ErrorPrepFileStorybook = `${colors.FgRed}Missing required arguments in type, when calling prepComponent()!${colors.Reset}`;
export const ErrorPrepFileStyledComponents = `${colors.FgRed}Missing required arguments in type, when calling prepComponent()!${colors.Reset}`;
export const ErrorPrepareWrite = `${colors.FgRed}No templates provided to prepareWrite()! Seems like fallback template path also failed...${colors.Reset}`;
export const ErrorProcessElements = `${colors.FgRed}Missing one or more of required arguments: "elementsPage", "config", and/or "components"! Make sure you have a page called "Elements" in your Figma document.${colors.Reset}`;
export const ErrorProcessElementsNoMainElement = `${colors.FgRed}No MAIN_ELEMENT in processElements()!${colors.Reset}`;
export const ErrorProcessGraphics = `${colors.FgRed}Graphics page is undefined or empty! Make sure you have a page called "Graphics" in your Figma document.${colors.Reset}`;
export const ErrorProcessGraphicsImageError = `${colors.FgRed}Error when fetching graphics from Figma API!${colors.Reset}`;
export const ErrorProcessGraphicsNoImages = `${colors.FgRed}No images received from Figma API!${colors.Reset}`;
export const ErrorProcessNestedCss = `${colors.FgRed}No 'css' string provided to processNestedCss()!${colors.Reset}`;
export const ErrorRefresh = `${colors.FgRed}No path provided to refresh()!${colors.Reset}`;
export const ErrorReplaceMediaQuery = `Missing one or more of required arguments: "str", and/or "match" when calling replaceMediaQuery()!${colors.Reset}`;
export const ErrorRoundColor = `${colors.FgRed}Error while rounding color value: Required argument "quantity" was not passed in!${colors.Reset}`;
export const ErrorRoundColorValue = `${colors.FgRed}Error while rounding color value: Scale value must be equal to or less than 255!${colors.Reset}`;
export const ErrorSliceOutObjectFromFile = `${colors.FgRed}Error in sliceOutObjectFromFile()!${colors.Reset}`;
export const ErrorMakeBorderWidthTokensMissingProps = `${colors.FgRed}Missing "name" or "strokeWeight" properties in border width frame!${colors.Reset}`;
export const ErrorMakeBorderWidthTokensNoChildren = `${colors.FgRed}Border Width has no children!${colors.Reset}`;
export const ErrorMakeBorderWidthTokensNoFrame = `${colors.FgRed}No frame for makeBorderWidthTokens()!${colors.Reset}`;
export const ErrorMakeColorTokensNoChildren = `${colors.FgRed}Color tokens frame has no children!${colors.Reset}`;
export const ErrorMakeColorTokensNoFills = `${colors.FgRed}Color has no "fills" property!${colors.Reset}`;
export const ErrorMakeColorTokensNoFrame = `${colors.FgRed}No frame for makeColorTokens()!${colors.Reset}`;
export const ErrorMakeDelayTokensMissingProps = `${colors.FgRed}Missing "name" or "characters" properties in Delay frame!${colors.Reset}`;
export const ErrorMakeDelayTokensNoChildren = `${colors.FgRed}Delay frame has no children!${colors.Reset}`;
export const ErrorMakeDelayTokensNoFrame = `${colors.FgRed}No frame for makeDelayTokens()!${colors.Reset}`;
export const ErrorMakeDurationTokensMissingProps = `${colors.FgRed}Missing "name" or "characters" properties in Duration frame!${colors.Reset}`;
export const ErrorMakeDurationTokensNoChildren = `${colors.FgRed}Duration frame has no children!${colors.Reset}`;
export const ErrorMakeDurationTokensNoFrame = `${colors.FgRed}No frame for makeDurationTokens()!${colors.Reset}`;
export const ErrorMakeEasingTokensMissingProps = `${colors.FgRed}Missing "name" or "characters" properties in Easing frame!${colors.Reset}`;
export const ErrorMakeEasingTokensNoChildren = `${colors.FgRed}Easing frame has no children!${colors.Reset}`;
export const ErrorMakeEasingTokensNoFrame = `${colors.FgRed}No frame for makeEasingTokens()!${colors.Reset}`;
export const ErrorMakeFontSizeTokensMissingProps = `${colors.FgRed}Missing "name" or "style" properties in font sizes frame!${colors.Reset}`;
export const ErrorMakeFontSizeTokensMissingSize = `${colors.FgRed}Missing required "style.fontSize" property!${colors.Reset}`;
export const ErrorMakeFontSizeTokensNoChildren = `${colors.FgRed}Font size frame is missing "children" array!${colors.Reset}`;
export const ErrorMakeFontSizeTokensNoFrame = `${colors.FgRed}No frame for makeFontSizeTokens()!${colors.Reset}`;
export const ErrorMakeFontSizeTokensNoSizing = `${colors.FgRed}Missing "fontUnit" or "remSize" properties when calling makeFontSizeTokens()!${colors.Reset}`;
export const ErrorMakeFontTokensMissingProps = `${colors.FgRed}Missing "name" or "style" properties in font tokens frame!${colors.Reset}`;
export const ErrorMakeFontTokensNoChildren = `${colors.FgRed}Font tokens frame is missing "children" array!${colors.Reset}`;
export const ErrorMakeFontTokensNoFrame = `${colors.FgRed}No frame for makeFontTokens()!${colors.Reset}`;
export const ErrorMakeFontWeightTokensMissingProps = `${colors.FgRed}Missing "name" or "style" properties in font weights frame!${colors.Reset}`;
export const ErrorMakeFontWeightTokensMissingWeight = `${colors.FgRed}Missing required "style.fontWeight" property!${colors.Reset}`;
export const ErrorMakeFontWeightTokensNoChildren = `${colors.FgRed}Font weights frame is missing "children" array!${colors.Reset}`;
export const ErrorMakeFontWeightTokensNoFrame = `${colors.FgRed}No frame for makeFontWeightTokens()!${colors.Reset}`;
export const ErrorMakeLetterSpacingTokensMissingProps = `${colors.FgRed}Missing "name" or "style" properties in letter spacing frame!${colors.Reset}`;
export const ErrorMakeLetterSpacingTokensNoChildren = `${colors.FgRed}Letter Spacing frame has no children!${colors.Reset}`;
export const ErrorMakeLetterSpacingTokensNoFrame = `${colors.FgRed}No frame for makeLetterSpacingTokens()!${colors.Reset}`;
export const ErrorMakeLineHeightTokensMissingPercent = `${colors.FgRed}Missing "style.lineHeightPercentFontSize" property in line heights frame!${colors.Reset}`;
export const ErrorMakeLineHeightTokensMissingProps = `${colors.FgRed}Missing "name" or "style" properties in line heights frame!${colors.Reset}`;
export const ErrorMakeLineHeightTokensNoChildren = `${colors.FgRed}Line heights frame has no children!${colors.Reset}`;
export const ErrorMakeLineHeightTokensNoFrame = `${colors.FgRed}No frame for makeLineHeightTokens()!${colors.Reset}`;
export const ErrorSetupMediaQueryTokensMissingProps = `${colors.FgRed}Missing "absoluteBoundingBox" property in media query frame!${colors.Reset}`;
export const ErrorSetupMediaQueryTokensNoChildren = `${colors.FgRed}Media Query frame has no children!${colors.Reset}`;
export const ErrorSetupMediaQueryTokensNoFrame = `${colors.FgRed}No frame for makeMediaQueryTokens()!${colors.Reset}`;
export const ErrorMakeOpacityTokensMissingProps = `${colors.FgRed}Missing "name" or "characters" properties in opacities frame!${colors.Reset}`;
export const ErrorMakeOpacityTokensNoChildren = `${colors.FgRed}Opacities frame has no children!${colors.Reset}`;
export const ErrorMakeOpacityTokensNoFrame = `${colors.FgRed}No frame for makeOpacityTokens()!${colors.Reset}`;
export const ErrorMakeRadiusTokensMissingProps = `${colors.FgRed}Missing "name"  property in radius frame!${colors.Reset}`;
export const ErrorMakeRadiusTokensNoChildren = `${colors.FgRed}Radius frame has no children!${colors.Reset}`;
export const ErrorMakeRadiusTokensNoFrame = `${colors.FgRed}No frame for makeRadiusTokens()!${colors.Reset}`;
export const ErrorMakeShadowTokensMissingProps = `${colors.FgRed}Missing "effects" property in shadow frame!${colors.Reset}`;
export const ErrorMakeShadowTokensNoChildren = `${colors.FgRed}Shadow frame has no children!${colors.Reset}`;
export const ErrorMakeShadowTokensNoFrame = `${colors.FgRed}No frame for makeShadowTokens()!${colors.Reset}`;
export const ErrorMakeSpacingTokensMissingProps = `${colors.FgRed}Missing "name" or "absoluteBoundingBox" properties in spacing frame!${colors.Reset}`;
export const ErrorMakeSpacingTokensNoChildren = `${colors.FgRed}Spacing frame has no children!${colors.Reset}`;
export const ErrorMakeSpacingTokensNoFrame = `${colors.FgRed}No frame for makeSpacingTokens()!${colors.Reset}`;
export const ErrorMakeSpacingTokensNoUnits = `${colors.FgRed}Missing "spacingUnit" or "remSize" properties when calling makeSpacingTokens()!${colors.Reset}`;
export const ErrorMakeZindexTokensMissingProps = `${colors.FgRed}Missing "name" or "characters" properties in Z index frame!${colors.Reset}`;
export const ErrorMakeZindexTokensNoChildren = `${colors.FgRed}Z Index frame has no children!${colors.Reset}`;
export const ErrorMakeZindexTokensNoFrame = `${colors.FgRed}No frame for makeZindexTokens()!${colors.Reset}`;
export const ErrorToPascalCase = `${colors.FgRed}Missing "str" argument when calling toPascalCase()!${colors.Reset}`;
export const ErrorWrite = `${colors.FgRed}Error while attempting to write file!${colors.Reset}`;
export const ErrorWriteBaseJson = `${colors.FgRed}Error while attempting to write Figma JSON!${colors.Reset}`;
export const ErrorWriteElements = `${colors.FgRed}Missing "elements" and/or "config" properties when calling writeElements()!${colors.Reset}`;
export const ErrorWriteFile = `${colors.FgRed}Missing required arguments to correctly run writeFile()!${colors.Reset}`;
export const ErrorWriteFileWrongType = `${colors.FgRed}Provided invalid file type to writeFile()!${colors.Reset}`;
export const ErrorWriteGraphics = `${colors.FgRed}Missing "fileList" and/or "config" argument when calling writeGraphics()!${colors.Reset}`;
export const ErrorWriteTokens = `${colors.FgRed}Less than one token provided to writeTokens()! Make sure you have a page called "Design Tokens" in your Figma document.${colors.Reset}`;
export const ErrorWriteTokensNoSettings = `${colors.FgRed}Missing "settings" argument/object when attempting to write tokens!${colors.Reset}`;
