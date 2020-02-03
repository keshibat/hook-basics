import { useState, useEffect } from 'react';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);
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
  return resources;
}

export default useResources;
