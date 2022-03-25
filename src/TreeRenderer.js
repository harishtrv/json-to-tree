import React from 'react';
import TreeNode from './TreeNode';

const TreeRenderer = ({data}) => {
  return (
    <div>
      <hr />
      <div>
        <TreeNode root={data} />
      </div>
    </div>
  );
};

export default TreeRenderer;
