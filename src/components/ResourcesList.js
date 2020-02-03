import React from 'react';
import useResources from './useResources';

const ResourcesList = ({resource}) => {
  const resources = useResources(resource)
    return <ul>{resources.map((record) => <li id={record.id}>{record.title}</li>)}</ul>;
}
export default ResourcesList;



