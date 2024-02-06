import React, { useEffect, useState } from "react";
import TreeNodeDto from "../../model/TreeNodeDto";

interface TreeDataProperties {
    level: number,
    nodeId?: string,
    nodeLabel?: string,
    loadDataOnNode: (nodeId?: string) => Promise<TreeNodeDto[]>
}

function TreeData({level, nodeId, nodeLabel, loadDataOnNode} : TreeDataProperties) {

    const [treeNodes, setTreeNodes] = useState<TreeNodeDto[]>();
    const [isOpen, setIsOpen] = useState(false);

    const handleOnNodeClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log("Clicked");
        setIsOpen(!isOpen); // toggle state
    };

    useEffect(() => {
        if (isOpen) {
            loadDataOnNode(nodeId)
            .then(loadedNodes => setTreeNodes(loadedNodes));
        }
    }, [isOpen]);

    return(
        <>
            {nodeLabel && <li onClick={handleOnNodeClick}>{isOpen ? "-" : "+"}{level}.{nodeLabel}</li>}
            {isOpen && <li>
                    <ul className="ml-4">
                        {treeNodes?.map(node => <li><TreeData level={level + 1} nodeId={node.id} nodeLabel={node.label} loadDataOnNode={loadDataOnNode}/></li>)}
                    </ul>
                </li>}
        </>
    );
}

export { TreeData };