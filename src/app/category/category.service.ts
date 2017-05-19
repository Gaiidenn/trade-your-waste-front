import { Injectable } from '@angular/core';
import {Category} from './category';

const CATEGORIES: [Category] = [
  {
    id: 0,
    name: 'cat1',
    desc: 'desc1',
  },
  {
    id: 1,
    name: 'cat2',
    desc: 'desc2',
  },
  {
    id: 2,
    name: 'cat3',
    desc: 'desc3',
  },
];

@Injectable()
export class CategoryService {

  constructor() {}

  getCategories(): Promise<[Category]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(CATEGORIES), 500);
    });
  }

  getCategory(categoryId: number): Promise<Category> {
    return this.getCategories().then(categories => categories.find(category => category.id === categoryId));
  }
}
