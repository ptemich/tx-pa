import React, { MouseEvent, MouseEventHandler } from "react";
import TreeNodeDto from "../../model/TreeNodeDto";

interface TreeDataProperties {
    nodes: TreeNodeDto[]
}

// interface TreeNodeData {
//     id: string,
//     label: string
// }

const handleOnNodeClick = (event: React.MouseEvent<HTMLElement>) => {
    //const value = event.target.value;
    //valueSelectedCallback(value);
    console.log("clicked " + event);
};

function TreeData({nodes} : TreeDataProperties) {
    return(
        <ul>
            {nodes.map(node => <li key={node.id} onClick={handleOnNodeClick}>{node.label}</li>)}
        </ul>
    );
}

export { TreeData };