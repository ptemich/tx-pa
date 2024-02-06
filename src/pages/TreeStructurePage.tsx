import React from 'react'
import { TreeData } from '../components/TreeData/TreeData';
import { TreeDataLoaderService } from '../services/TreeDataLoaderService';

function TreeStructurePage() {
    return (
        <div>
            <p>TREE STRUCTURE PAGE</p>
            <ul>
                <TreeData level={0} nodeLabel="Root" loadDataOnNode={TreeDataLoaderService.loadData} />
            </ul>
        </div>
    );
}

export default TreeStructurePage;