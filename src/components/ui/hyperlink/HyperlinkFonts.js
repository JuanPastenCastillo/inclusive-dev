import styled from "styled-components"
import {
  HyperLinkColor,
  SharedValues,
} from "../../../assets/Fonts/FontsValues"
import { Link } from "react-router-dom"
import { FontsWeights } from "../../../assets/Fonts/Weights"

const SharedVariables = {
  Underline: "underline",
  CursorPointer: "pointer"
}

const theLink = styled(Link)`
  font-weight: ${(x) =>
    x.bold
      ? FontsWeights.BOLD_700
      : x.bolder
      ? FontsWeights.BOLDER_800
      : FontsWeights.SEMIBOLD_600};
  color: ${HyperLinkColor.TEXT_COLOR};
  text-decoration: ${SharedVariables.Underline};
  border-radius: 8px;
  padding: 12px;

  cursor: ${SharedVariables.CursorPointer};
  &:hover {
    font-weight: ${FontsWeights.BOLD_700};
  }

  &:focus-visible {
    outline: 4px solid ${HyperLinkColor.OUTLINE};
  }
  &:visited {
    color: ${HyperLinkColor.VISITED};
  }
`

export const HyperlinkXS = styled(theLink)`
  font-size: ${SharedValues.FONT_SIZE.XSMALL};
  line-height: ${SharedValues.LINE_HEIGHT.XSMALL};
`
export const HyperlinkS = styled(theLink)`
  font-size: ${SharedValues.FONT_SIZE.SMALL};
  line-height: ${SharedValues.LINE_HEIGHT.SMALL};
`

export const HyperlinkM = styled(theLink)`
  font-size: ${SharedValues.FONT_SIZE.MEDIUM};
  line-height: ${SharedValues.LINE_HEIGHT.MEDIUM};
`

export const HyperlinkL = styled(theLink)`
  font-size: ${SharedValues.FONT_SIZE.LARGE};
  line-height: ${SharedValues.LINE_HEIGHT.LARGE};
`
