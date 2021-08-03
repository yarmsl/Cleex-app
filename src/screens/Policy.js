import React, {useState, useEffect} from 'react';
import { ScrollView } from 'react-native';
import TermOfUse from '../json/TermsOfUse.json';
import PersonalData from '../json/PersonalData.json';
import { ListItem, Icon } from 'react-native-elements';
import PolicyListItem from '../UI/PolicyListItem';
import { Fragment } from 'react';

const Policy = ({route}) => {
    const [policy, setPolicy] = useState('');

    useEffect(() => {
        switch (route.params.policy) {
            case 'TermOfUse':
                return setPolicy(TermOfUse.terms_of_service);
            case 'PersonalData':
                return setPolicy(PersonalData.terms_of_service);
            default:
                return setPolicy('');   
        };
    },[route])

    

    return (
        <ScrollView>
        
            {!!policy && policy?.map((item, i) => {
                return (
                    <Fragment key={i}>
                        <PolicyListItem id={i} icon={item.icon} title={item.name} child={item.children} />
                    </Fragment>
                    
                )
            })}

        </ScrollView>
    )
}

export default Policy;