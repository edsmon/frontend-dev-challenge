import React from 'react';
import { AdFrameContainer, BgAdFrame } from './adFrameElements';
import AdLogoIcon from '../../Assets/imgs/logo_icon.png';
import AdSvg from '../../Assets/imgs/ad.svg';


const Svg = () => {
    return (
        <div>
            <img src={AdSvg} style={{ width: "100%" }} alt={"Logo en background"} />
        </div>
    )
};


const AdFrame = () => {
    return (
        <AdFrameContainer>
            <BgAdFrame image={AdLogoIcon} />
            <Svg />
        </AdFrameContainer>
    )
}

export default AdFrame;