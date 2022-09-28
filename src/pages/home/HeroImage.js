import React, { useState, useEffect } from "react"
import { HashLink } from "react-router-hash-link"
import DisplayHomeImages from "./styles/DisplayHomeImages.js"
import HeroImageWrapper from "./styles/HeroImageWrapper.js"
import homeImage_communityPeople from "../../assets/images/homeImage_communityPeople.png"
import { Link } from "react-router-dom"
import { H1 } from "../../components/ui/heading_body_text/HeaderFonts.js"
import { BtnLarge } from "../../components/ui/buttons/general/ButtonStyled.js"


const HeroImage = () => {
  const [moveImage, setMoveImage] = useState(false)
  const [moveTextAndButton, setMoveTextAndButton] = useState(false)

  useEffect(() => {
    const timeImage = setTimeout(() => {
      setMoveImage(true)
    }, 500)
    return () => {
      return clearTimeout(timeImage)
    }
  }, [])

  useEffect(() => {
    const timeTextAndButton = setTimeout(() => {
      setMoveTextAndButton(true)
    }, 2000)

    return () => {
      return clearTimeout(timeTextAndButton)
    }
  }, [])

  return (
    <HeroImageWrapper>
      <DisplayHomeImages>
        <div className={moveTextAndButton ? "MoveTextAndButton" : undefined}>
          <H1 bold>Inclusion for all.</H1>
          <HashLink to="#MainContent" smooth>
            <BtnLarge> FIND OUT MORE</BtnLarge>
          </HashLink>{" "}
        </div>
        <img
          src={homeImage_communityPeople}
          alt="A group of people greetings with their hands"
          className={moveImage ? "MoveImage" : undefined}
        />
      </DisplayHomeImages>

      <span>
        <Link to="/work-in-progress">Not from NYC?</Link>
      </span>
    </HeroImageWrapper>
  )
}

export default HeroImage
