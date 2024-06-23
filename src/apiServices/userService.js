import * as request from '~/utils/request';


const fetchApi = async (page) => {

    try {
        const response =  await request.get('users',{
            params:{
                page: page
            },
        })

        return response.data
    }
    catch (error) {
        console.log(error)
    }
}
export default fetchApi

