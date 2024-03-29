import React from 'react';
import styles from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label:'Salad', type:'salad'},
    { label:'Bacon', type:'bacon'},
    { label:'Cheese', type:'cheese'},
    { label:'Meat', type:'meat'},
];

const BuildControls =(props) => (
  <div className={styles.BuildControls}>
  <p>Current Price: {props.price}</p>
      {controls.map(ctrl =>(
        <BuildControl
         key={ctrl.label}
         label={ctrl.label}
         added={()=>props.ingredientAdded(ctrl.type)}
         removed={()=>props.ingredientRemoved(ctrl.type)}
         disbaled={props.disbaledInfo}
          />
      ))}
  </div>
);

export default BuildControls;