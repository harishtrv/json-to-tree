import React from 'react';
import styles from './treeNode.module.css';

const TreeNode = ({root}) => {
  if(root.length === 1){
    if(!root[0].companyname) return null;
  }
  return (
    <ul className={styles.ul}>
      {root.map((item) => {
        if(!item.companyname) return null;
        return (
        <React.Fragment key={item.name}>
          <li className={styles.li}>
            <span style={{ backgroundColor: item.badge, padding: '5px', border: '1px solid blue' }}>{item.companyname}</span>
            {item.childCompany ? <TreeNode root={item.childCompany} />:null}
          </li>
        </React.Fragment>
      ); })}
    </ul>
  );
};

export default TreeNode;
