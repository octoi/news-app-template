import { pageTitle, pageDescription, companyName } from './data.json';
import { Content, MediaContent } from './types';
import { mainNews, otherNews } from './data.json';
import { articles } from './data.json';
import { editorial } from './data.json';
import { media } from './data.json';

// trademarks
export const title = pageTitle;
export const description = pageDescription;
export const company = companyName;

// editorial
export const editorialContent: Content = editorial;

// articles
export const articlesContent: Content[] = articles.content;
export const articlesTitle: string = articles.title;

// main news
export const mainNewsContent: Content[] = mainNews.news;
export const mainNewsTitle: string = mainNews.title;

// others news
export const otherNewsContent: Content[] = otherNews.news;
export const otherNewsTitle: string = otherNews.title;

// all news
export const allNews = [...mainNewsContent, ...otherNewsContent];

// all
export const allContent = [editorialContent, ...allNews, ...articlesContent];

export const findOneContent = (id: string) => {
  return new Promise((resolve, reject) => {
    const content = allContent.find((content) => content.id === id);

    if (!content) {
      reject('No such id');
      return;
    }

    resolve(content);
  });
};

// media contents
export const mediaContentTitle: string = media.title;
export const mediaContent: MediaContent[] = media.items;
