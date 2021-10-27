export interface Content {
  id: string;
  author: string;
  title: string;
  image: string | null;
  content: string;
}

export interface MediaContent {
  author: string;
  content: string;
  description: string;
  isVideo: boolean;
}
