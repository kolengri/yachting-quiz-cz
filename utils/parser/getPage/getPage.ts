export type GetPageArg = {}

export type GetPageArgs = [GetPageArg];

export type GetPageResult = void;

export interface GetPage {
  (...args: GetPageArgs): GetPageResult
}

export const getPage: GetPage = (...args) => {
  return;
};
