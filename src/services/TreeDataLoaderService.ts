import TreeNodeDto from "../model/TreeNodeDto";

class TreeDataLoaderService {

    static async loadData(nodeId?: string): Promise<TreeNodeDto[]> {
        console.log("load data for node " + nodeId);
        if (nodeId === undefined) {
            return [
                {id: '1', label: 'Entry 1'},
                {id: '2', label: 'Entry 2'}, 
                {id: '3', label: 'Entry 3'}, 
                {id: '4', label: 'Entry 4'}, 
                {id: '5', label: 'Entry 5'}, 
            ]
        }        
        
        return [
            {id: '6', label: 'Entry 6'},
            {id: '7', label: 'Entry 7'}, 
            {id: '8', label: 'Entry 8'}, 
            {id: '9', label: 'Entry 9'}, 
            {id: '10', label: 'Entry 10'}, 
        ]
    }    

}

export { TreeDataLoaderService };