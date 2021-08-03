import React from 'react';
import { ScrollView } from 'react-native';
import PersonalDataProcessingPolicy from '../components/PersonalDataProcessingPolicy';
import TermsOfUse from '../components/TermsOfUse';

const Policy = ({route}) => {

    return (
        <ScrollView>
            {route.params?.policy === 'TermOfUse' && <TermsOfUse/> }
            {route.params?.policy === 'PersonalData' && <PersonalDataProcessingPolicy/>}
        </ScrollView>
    )
}

export default Policy;