import React from 'react';
import cloud from '../../../media/img/cloud.svg';
import Icon from '../atoms/icon';


export default function Cluster(props) {
  let name = 'ClusterName';
  if (props && props.name) {
    name = props.name;
  }
  return (
    <Icon alt="cluster" img={cloud} name={name} />
  );
}


Cluster.propTypes = {
  name: React.PropTypes.string,
};
