import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 19417,
  login: 'q*8{IJ@2z67sE\\*obf2\\:lJ6\\#RZYc\\~XbF',
};

export const sampleWithPartialData: IUser = {
  id: 7470,
  login: 'Q',
};

export const sampleWithFullData: IUser = {
  id: 16525,
  login: 'O',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
