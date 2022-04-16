import React, {Component} from "react";
import Main from '../template/Main'

const headerProps = {
    icon: 'photo',
    title: 'Serviços',
    subtitle: 'Gerenciamento dos serviços!'
}

export default class ServiceCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Gerenciamento de Serviços
            </Main>
        )
    }
}