const System8PT = {
  PT8_8: "8",
  PT8_16: "16",
  PT8_24: "24",
  PT8_32: "32",
  PT8_40: "40",
  PT8_48: "48",
  PT8_56: "56",
  PT8_64: "64",
  PT8_72: "72",
  PT8_80: "80",
  PT8_88: "88",
  PT8_96: "96",
  PT8_104: "104",
  PT8_112: "112"
}

export const GridSystem8PT = (
  howMuchYouWant,
  customValueInRem,
  plusMinusValue = 0
) => {
  if (howMuchYouWant !== undefined) {
    if (System8PT.PT8_8 === howMuchYouWant) return System8PT.PT8_8 + "px"
    if (System8PT.PT8_16 === howMuchYouWant) return System8PT.PT8_16 + "px"
    if (System8PT.PT8_24 === howMuchYouWant) return System8PT.PT8_24 + "px"
    if (System8PT.PT8_32 === howMuchYouWant) return System8PT.PT8_32 + "px"
    if (System8PT.PT8_40 === howMuchYouWant) return System8PT.PT8_40 + "px"
    if (System8PT.PT8_48 === howMuchYouWant) return System8PT.PT8_48 + "px"
    if (System8PT.PT8_56 === howMuchYouWant) return System8PT.PT8_56 + "px"
    if (System8PT.PT8_64 === howMuchYouWant) return System8PT.PT8_64 + "px"
    if (System8PT.PT8_72 === howMuchYouWant) return System8PT.PT8_72 + "px"
    if (System8PT.PT8_80 === howMuchYouWant) return System8PT.PT8_80 + "px"
    if (System8PT.PT8_88 === howMuchYouWant) return System8PT.PT8_88 + "px"
    if (System8PT.PT8_96 === howMuchYouWant) return System8PT.PT8_96 + "px"
    if (System8PT.PT8_104 === howMuchYouWant) return System8PT.PT8_104 + "px"
    if (System8PT.PT8_112 === howMuchYouWant) return System8PT.PT8_112 + "px"
  }

  return Number(customValueInRem) * 8 + plusMinusValue + "px"
}
