import axios,{AxiosResponse} from 'axios';
import {ILossShortModel} from '../interfaces';

const endPoint = 'https://lossesdataprocessor.azurewebsites.net/api/GetData?code=JmpmzExq9HsNu5Sv4Wzseb6jJeFX5NSOPztjTPbvxsusAzFuy5iZsA==';

// const devEndPoint = 'http://localhost:7191/api/GetData';

const responseCallback = <T,>({ data }: AxiosResponse<T>): T => data;

export const getDataList = (): Promise<Array<ILossShortModel>> => {
    return axios.get<Array<ILossShortModel>>(endPoint)
      .then(responseCallback);
};