import axios,{AxiosResponse} from 'axios';
import {ILossModel} from '../interfaces';

const endPoint = 'https://lossesdataprocessor.azurewebsites.net/api/GetData?code=JmpmzExq9HsNu5Sv4Wzseb6jJeFX5NSOPztjTPbvxsusAzFuy5iZsA==';

const responseCallback = <T,>({ data }: AxiosResponse<T>): T => data;

export const getDataList = (): Promise<Array<ILossModel>> => {
    return axios.get<Array<ILossModel>>(endPoint)
      .then(responseCallback);
};