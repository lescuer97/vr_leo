import { useQuery, queryCache, useMutation } from 'react-query';

export const useQueryHook = (name, request, variable) => {
  const { data, status, error } = useQuery([`${name}`, variable], request, {
    onSettled: (data, err) => {
      if (err) {
        // if (err.response.data.error.statusCode) {
        //   authContext.desAuthenticator(err.response.data.error.statusCode);
        // } else {
        //   console.log('There was an error');
        // }
      }
    },
    onError: (err) => {
      // if (err.response.data.error.statusCode) {
      //   authContext.desAuthenticator(err.response.data.error.statusCode);
      // } else {
      //   console.log('There was an error');
      // }
    },
    retry: 3,
  });

  return { data, status, error };
};

export const useMutationHook = (name, request) => {
  const [mutation, { status, error }] = useMutation(request, {
    onSuccess: (data) => {
      queryCache.invalidateQueries(`${name}`);
    },
    onError: (err) => {
      // if (err.response.data.error.statusCode) {
      //   authContext.desAuthenticator(err.response.data.error.statusCode);
      // } else {
      //   console.log('There was an error');
      // }
      return err;
    },
  });
  return [mutation, { status, error }];
};
