import { useEffect, useState } from 'react';
import api from '../api';

export function useGet(URL) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
      if (URL === undefined){
        return;
      }
      setLoading(true);
      api.get(URL)
        .then(({ data }) => {
          setData(data);
        })
        .catch((error) => {
          if (error.response) {
            setError(error.response);
          } else if (error.request) {
            setError(error.request);
          } else {
            setError(error.message);
          }
        })
        .finally(() => {
          setLoading(false);
        })
    }, [URL])

    return {
      loading, error, data
    }
}
