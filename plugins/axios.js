/* eslint-disable no-console */
export default function ({ $axios }) {
    $axios.onError((error) => {
        if (error.response) {
            console.log(
                'The request was made and the server responded with a status code that falls out of the range of 2xx'
            );
            console.log('Error. Response data:', error.response.data);
            console.log('Error. Response status:', error.response.status);
            console.log('Error. Response headers:', error.response.headers);
        } else if (error.request) {
            console.log('The request was made but no response was received');
            console.log('Error. Request:', error.request);
        } else {
            console.log(
                'Something happened in setting up the request that triggered an Error'
            );
            console.log('Error', error.message);
        }

        console.log('Axios config', error.config);
    });
}
