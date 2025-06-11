'use client';

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface TreeNode {
  id: string;
  name: string;
  icon?: string;
  route?: string;
  children?: TreeNode[];
  target?: string;
}

interface FileTreeProps {
  data: TreeNode[];
  defaultExpanded?: string[];
}

const FileTree = ({ data, defaultExpanded = [] }: FileTreeProps) => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(
    new Set(defaultExpanded)
  );
  const pathname = usePathname();

  const toggleNode = (id: string) => {
    const newExpanded = new Set(expandedNodes);
    // eslint-disable-next-line  @typescript-eslint/no-unused-expressions
    newExpanded.has(id) ? newExpanded.delete(id) : newExpanded.add(id);
    setExpandedNodes(newExpanded);
  };

  const isActiveRoute = (route?: string) => pathname === route;

  const renderTree = (nodes: TreeNode[]) => {
    return (
      <ul className="space-y-1 font-mono font-bold text-lg">
        {nodes.map((node) => (
          <li key={node.id} className="">
            <div className="flex items-center justify-start">
              {node.children && (
                <button
                  onClick={() => toggleNode(node.id)}
                  className="mr-2 text-gray-400 hover:text-white w-4 h-4 flex items-center justify-center"
                >
                  {expandedNodes.has(node.id) ? '−' : '+'}
                </button>
              )}
              <Link
                href={node.route || '#'}
                className={`flex items-center  hover:text-blue-400 transition-colors ${isActiveRoute(node.route) ? 'text-blue-400' : ''
                  }`}
                target={node.target}
              >
                {node.icon && <span className="mr-2">{node.icon}</span>}
                <span>{node.name}</span>
              </Link>
            </div>
            {node.children && expandedNodes.has(node.id) && (
              <div className="ml-6 mt-1">{renderTree(node.children)}</div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="font-mono text-sm  flex justify-center">
      <div className="w-auto max-w-full px-4 py-2">
        {renderTree(data)}
      </div>
    </div>
  );
};

export default FileTree;
