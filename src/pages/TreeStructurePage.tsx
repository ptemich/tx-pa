import React from 'react'
import { TreeData } from '../components/TreeData/TreeData';

function TreeStructurePage() {
    return (
        <div>
            <p>TREE STRUCTURE PAGE</p>
            <TreeData nodes={
                [
                    {id: '1', label: 'Pierwszy'},
                    {id: '2', label: 'Drugi'},
                    {id: '3', label: 'Trzeci'}
                ]
            }/>
        </div>
    );
}

export default TreeStructurePage;