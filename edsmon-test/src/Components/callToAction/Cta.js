import React from 'react';
import { CtaContainer, Separator, CtaButton, CtaLogo, CtaText } from './ctaElements';
import CtaLogoIcon from '../../Assets/imgs/logo_icon.png';

const Cta = () => {
    return (
        <CtaContainer>
            <Separator>
                <svg width="320" height="6" viewBox="0 0 320 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="-0.000732422" y1="3" x2="320.001" y2="3" stroke="#B378FF" stroke-width="5" />
                </svg>
            </Separator>
            <CtaLogo image={CtaLogoIcon} />
            <CtaButton>
                Quiero una Consulta Personalizada
            </CtaButton>
            <CtaText>
                Somos la plataforma líder en crianza inteligente y significativa.
            </CtaText>
        </CtaContainer>
    )
}

export default Cta;