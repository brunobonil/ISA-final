import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'e977f8d5-c8fe-48a9-91c5-c53160156e38',
};

export const sampleWithPartialData: IAuthority = {
  name: 'ec39e72b-38ba-443a-9fa1-2acf95115d77',
};

export const sampleWithFullData: IAuthority = {
  name: '8002eb6a-9ef4-4b16-91aa-ac39e02ce74b',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
