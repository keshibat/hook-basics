import React, { useState, useEffect } from "react";

const ResourcesList = ({resource}) => {
  const [  resources, setResources ] = useState([]);


  const fetchResource = async (resource) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${resource}`
    )
      .then(res => res.json())
      .catch(err => {
        console.log(err);
      });

    setResources(response);
  };

  useEffect(() => {
    fetchResource(resource);

  }, [resource])

    return <div>{resources.length}</div>;

}
export default ResourcesList;



