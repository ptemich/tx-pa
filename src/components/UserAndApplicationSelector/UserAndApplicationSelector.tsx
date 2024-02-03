import React, {useEffect, useState, useContext} from 'react';
import CustomSelector from './../CustomSelector/CustomSelector';
import { LabelAndValue } from './../CustomSelector/CustomSelectorProps';
import { UserAndApplicationSelectorProperties } from './UserAndApplicationSelectorProperties';
import { UserAndApplicationContext } from '../../App';

function UserAndApplicationSelector() {

    const [applications, setApplications] = useState<LabelAndValue[]>([]);
    const [users, setUsers] = useState<LabelAndValue[]>([]);

    const userAndApplication = useContext(UserAndApplicationContext);


    useEffect(() => {
        // TODO this must be replaced with API call
        setApplications([
            {label: "Jupiter", value: "jupiter"},
            {label: "Lesson Learned Portal", value: "llp"},
            {label: "Vessel inspection", value: "ncr"}
        ]);

        // TODO this must be replaced with API call
        setUsers([
                {label: "Przemyslaw Temich", value: "ptemich"},
                {label: "Daniel Dróźdzel", value: "ddrozdzel"},
                {label: "Kinga Nowak", value: "knowak"}
        ]);
    }, []);

    const applicationSelected = (selectedApplication: string) => {
        console.log("application: " + selectedApplication);
    }
      
    const userSelected = (selectedUser: string) => {
        console.log("user: " + selectedUser);
    }

    return  (
        <div className="columns">
            <div className="column">
                <CustomSelector options={applications} selectorName='Application' valueSelectedCallback={applicationSelected}/>
            </div>
            <div className="column">
                <CustomSelector options={users} selectorName='User' valueSelectedCallback={userSelected}/>
            </div>
        </div>
    );

}

export { UserAndApplicationSelector };