export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content?: string; // Full content for detail view (mocked)
}

export type ViewState = 'feed' | 'about' | 'archive' | 'post';