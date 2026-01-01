'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedNodes(newExpanded);
  };

  const isActiveRoute = (route?: string) => pathname === route;

  const renderTree = (nodes: TreeNode[], depth: number = 0, isLast: boolean[] = []) => {
    return (
      <ul className="select-none">
        {nodes.map((node, index) => {
          const isLastNode = index === nodes.length - 1;
          const hasChildren = node.children && node.children.length > 0;
          const isExpanded = expandedNodes.has(node.id);

          return (
            <li key={node.id} className="leading-relaxed">
              <div className="flex items-center group">
                {/* Show vertical lines and connectors if nested */}
                {depth > 0 && (
                  <span className="text-muted-foreground/50 select-none mr-2">
                    {isLast.map((last, i) => (
                      <span key={i}>{last ? '  ' : '│  '}</span>
                    ))}
                    {isLastNode ? '└─' : '├─'}
                  </span>
                )}
                {/* Render folder icon or bullet */}
                {hasChildren ? (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleNode(node.id)}
                    className="h-5 w-5 p-0 text-muted-foreground hover:text-foreground"
                  >
                    {isExpanded ? '▾' : '▸'}
                  </Button>
                ) : (
                  <span className="text-muted-foreground/50 w-5 h-5 flex items-center justify-center">
                    •
                  </span>
                )}
                {/* Render node name */}
                <Link
                  href={node.route || '#'}
                  className={cn(
                    "ml-1 hover:text-primary transition-colors",
                    isActiveRoute(node.route) ? 'text-primary font-medium' : 'text-foreground'
                  )}
                  target={node.target}
                >
                  {node.icon && <span className="mr-2">{node.icon}</span>}
                  <span>{node.name}</span>
                </Link>
              </div>
              {hasChildren && isExpanded && (
                <div>{renderTree(node.children!, depth + 1, [...isLast, isLastNode])}</div>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="flex justify-center text-base font-[family-name:var(--font-jetbrains-mono)]">
      <div className="w-auto max-w-full px-4 py-2">
        {renderTree(data)}
      </div>
    </div>
  );
};

export default FileTree;
