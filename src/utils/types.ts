export type MainStackParamList = {
  Login: undefined;
  Feed: undefined;
  Search: { query: string }
}

export interface SliderProp {
  content: string[]

}
export interface CardMainContentProp {
  content: string[] | string
}

export interface CardFooterProp {
  likes: number
  comments: number
}

export interface CardHeaderProp {
  username: string
  date: string
}

export interface PostPreviewProp extends CardFooterProp, CardMainContentProp, CardHeaderProp {

}