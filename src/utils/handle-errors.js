const handleErrors = (error) => {
    return error.response.data;
};
  
const handleAxiosError = (error) => {
    return error.message;
};

module.exports = {
    handleErrors,
    handleAxiosError
};