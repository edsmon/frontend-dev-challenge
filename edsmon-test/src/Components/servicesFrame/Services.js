import React from 'react';
import { ServicesContainer } from './servicesElements';
import ServiceOne from '../../Assets/imgs/Service1.svg';
import ServiceTwo from '../../Assets/imgs/Service2.svg';
import ServiceThree from '../../Assets/imgs/Service3.svg';

const SvgService1 = () => {
    return (
        <div>
            <h2 style={{ margin: "0 2em 0 2em" }}>Asesoría Psicoafectiva</h2>
            <img src={ServiceOne} gridArea={"Service1"} alt={"Servicio de Asesoría Psicoafectiva"} style={{
                margin: "auto",
                display: "block"
            }} />
        </div>
    )
};
const SvgService2 = () => {
    return (
        <div>
            <h2 style={{ margin: "0 2em 0 2em" }}>Planificación Conjunta</h2>
            <img src={ServiceTwo} gridArea={"Service2"} alt={"Servicio de Planificación Conjunta"} style={{
                margin: "auto",
                display: "block"
            }} />
        </div>
    )
};
const SvgService3 = () => {
    return (
        <div>
            <h2 style={{ margin: "0 2em 0 2em" }}>Recursos Pedagógicos</h2>
            <img src={ServiceThree} gridArea={"Service3"} alt={"Servicio de Recursos Pedagógicos"} style={{
                margin: "auto",
                display: "block"
            }} />
        </div>
    )
};

const Services = () => {
    return (
        <ServicesContainer>
            <SvgService1 />
            <SvgService2 />
            <SvgService3 />
        </ServicesContainer>
    )
}

export default Services;