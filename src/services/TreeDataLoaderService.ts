import TreeNodeDto from "../model/TreeNodeDto";

class TreeDataLoaderService {

    static async loadData(): Promise<TreeNodeDto[]> {
        return [
            {id: '12', label: 'Entry 1'},
            {id: '34', label: 'Entry 2'}, 
        ]
    }    

}