import * as request from '~/utils/request';

const getAllProductApi = async () => {
    try {
        const res = await request.get('product');

        return res;
    } catch (error) {
        console.log(error);
    }
};

const getOneProductApi = async (productId) => {
    try {
      const res = await request.get(`product/${productId}`);
      return res
    } catch (error) {
      console.log(error);
    }
  };
export { getAllProductApi, getOneProductApi};
